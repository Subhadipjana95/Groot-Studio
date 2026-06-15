import { NextResponse } from "next/server"
import ImageKit, { toFile } from "@imagekit/nodejs"
import { Resend } from "resend"
import { getSponsorEmailHtml, getSponsorThankYouEmailHtml } from "./email-template"

// Initialize ImageKit
const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
})

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const tier = formData.get("tier") as string | null
    const companyName = formData.get("companyName") as string | null
    const website = formData.get("website") as string | null
    const logo = formData.get("logo") as File | null
    const contactEmail = formData.get("contactEmail") as string | null
    const checkoutEmail = formData.get("checkoutEmail") as string | null
    const description = formData.get("description") as string | null
    const twitter = formData.get("twitter") as string | null
    const linkedin = formData.get("linkedin") as string | null
    const github = formData.get("github") as string | null

    // Validation
    if (!companyName || !website || !contactEmail || !checkoutEmail || !logo) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      )
    }

    // Convert file to Buffer
    const arrayBuffer = await logo.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Environment Based Logs 
    if (process.env.NODE_ENV !== "production") {
      console.log("📩 Sponsor submission received:", {
        tier,
        companyName,
        website,
        logoName: logo.name,
        logoSize: logo.size,
        contactEmail,
        checkoutEmail,
        description: description || "(none)",
        twitter: twitter || "(none)",
        linkedin: linkedin || "(none)",
      })
    } else {
      console.log(`📩 Sponsor submission received for: ${companyName} (${tier} Sponsor)`)
    }

    // Logo Upload - ImageKit
    let imagekitLogoUrl: string | null = null
    try {
      const companySlug = companyName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      const originalExtension = logo.name.split(".").pop() || "png"
      const uniqueFilename = `${tier || "tier"}-${companySlug}-${Date.now()}.${originalExtension}`

      const uploadResult = await imagekit.files.upload({
        file: await toFile(buffer, logo.name || "logo.png"),
        fileName: uniqueFilename,
        folder: "/sponsors",
      })
      imagekitLogoUrl = uploadResult.url || null

      if (process.env.NODE_ENV !== "production") {
        console.log("✅ ImageKit upload succeeded:", imagekitLogoUrl)
      }
    } catch (uploadError) {
      console.error("❌ ImageKit upload failed:", uploadError)
      // We don't block the onboarding submission on ImageKit failure
    }

    // Send email - Resend
    try {
      const bccEmail = process.env.SPONSOR_BCC_EMAIL || null

      const emailHtml = getSponsorEmailHtml({
        tier: tier || "Bronze",
        companyName,
        website,
        imagekitLogoUrl,
        contactEmail,
        checkoutEmail,
        description,
        twitter,
        linkedin,
        github,
        bccEmail,
      })

      const { error } = await resend.emails.send({
        from: process.env.SPONSOR_FROM_EMAIL || "onboarding@resend.dev",
        to: process.env.SPONSOR_NOTIFY_EMAIL || "",
        bcc: bccEmail || undefined,
        subject: `New ${tier || "unknown"} Sponsor: ${companyName}`,
        html: emailHtml,
        attachments: [
          {
            filename: logo.name || "logo.png",
            content: buffer,
          },
        ],
      })

      if (error) {
        console.error("❌ Resend admin notification error response:", error)
        return NextResponse.json(
          { error: "Failed to send email notification." },
          { status: 500 }
        )
      }

      // Send thank you response email to sponsor's contactEmail
      try {
        const thankYouHtml = getSponsorThankYouEmailHtml({
          tier: tier || "Bronze",
          companyName,
          website,
          imagekitLogoUrl,
          contactEmail,
          checkoutEmail,
          description,
          twitter,
          linkedin,
          github,
        })

        const { error: thankYouError } = await resend.emails.send({
          from: process.env.SPONSOR_FROM_EMAIL || "onboarding@resend.dev",
          to: contactEmail,
          subject: `Thank you for sponsoring Groot Studio`,
          html: thankYouHtml,
        })

        if (thankYouError) {
          console.error("❌ Resend sponsor thank you error response:", thankYouError)
        } else if (process.env.NODE_ENV !== "production") {
          console.log(`✅ Thank you email sent to sponsor at: ${contactEmail}`)
        }
      } catch (thankYouSendError) {
        console.error("❌ Resend thank you send error:", thankYouSendError)
      }
    } catch (emailError) {
      console.error("❌ Resend execution error:", emailError)
      return NextResponse.json(
        { error: "Failed to send email notification." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Sponsor submission error:", error)
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    )
  }
}

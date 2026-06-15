interface EmailTemplateData {
  tier: string
  companyName: string
  website: string
  imagekitLogoUrl: string | null
  contactEmail: string
  checkoutEmail: string
  description?: string | null
  twitter?: string | null
  linkedin?: string | null
  github?: string | null
  bccEmail?: string | null
}

export function getSponsorEmailHtml(data: EmailTemplateData): string {
  const tierColors: Record<string, { bg: string; text: string; border: string }> = {
    diamond: { bg: "#f0fdf4", text: "#166534", border: "#bbf7d0" },
    gold: { bg: "#fefce8", text: "#854d0e", border: "#fef08a" },
    silver: { bg: "#f8fafc", text: "#475569", border: "#cbd5e1" },
    bronze: { bg: "#fff7ed", text: "#9a3412", border: "#ffedd5" },
  }

  const tier = (data.tier || "bronze").toLowerCase()
  const colors = tierColors[tier] || { bg: "#fff7ed", text: "#9a3412", border: "#ffedd5" }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Sponsor Submission: ${data.companyName}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background-color: #f8fafc;
      color: #0f172a;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: linear-gradient(135deg, #1e293b, #0f172a);
      padding: 32px 24px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.025em;
    }
    .header p {
      color: #94a3b8;
      margin: 8px 0 0 0;
      font-size: 14px;
    }
    .content {
      padding: 32px 24px;
    }
    .badge {
      display: inline-block;
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 9999px;
      background-color: ${colors.bg};
      color: ${colors.text};
      border: 1px solid ${colors.border};
      letter-spacing: 0.05em;
    }
    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
      margin: 24px 0 16px 0;
      padding-bottom: 8px;
      border-bottom: 1px solid #f1f5f9;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .grid {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .grid td {
      padding: 12px 0;
      vertical-align: top;
      border-bottom: 1px solid #f8fafc;
    }
    .grid td.label {
      width: 30%;
      font-weight: 500;
      color: #64748b;
      font-size: 14px;
    }
    .grid td.value {
      width: 70%;
      color: #0f172a;
      font-size: 14px;
    }
    .grid a {
      color: #2563eb;
      text-decoration: none;
    }
    .grid a:hover {
      text-decoration: underline;
    }
    .description-box {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      font-size: 14px;
      color: #334155;
      line-height: 1.6;
      margin-top: 8px;
      white-space: pre-wrap;
    }
    .footer {
      background-color: #f8fafc;
      padding: 24px;
      text-align: center;
      border-top: 1px solid #e2e8f0;
    }
    .footer p {
      margin: 0;
      font-size: 12px;
      color: #94a3b8;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Sponsor Registered</h1>
      <p>Groot Studio Onboarding System</p>
    </div>
    <div class="content">
      <div style="text-align: center; margin-bottom: 24px;">
        <span class="badge">${data.tier} Sponsor</span>
      </div>

      <div class="section-title">Company Profile</div>
      <table class="grid">
        <tr>
          <td class="label">Company Name</td>
          <td class="value"><strong>${data.companyName}</strong></td>
        </tr>
        <tr>
          <td class="label">Website</td>
          <td class="value"><a href="${data.website}" target="_blank" rel="noopener noreferrer">${data.website}</a></td>
        </tr>
        <tr>
          <td class="label">Logo URL</td>
          <td class="value">
            ${
              data.imagekitLogoUrl
                ? `<a href="${data.imagekitLogoUrl}" target="_blank" rel="noopener noreferrer">View on ImageKit</a>`
                : `<span style="color: #ef4444; font-weight: 500;">Upload failed (using email backup attachment)</span>`
            }
          </td>
        </tr>
      </table>

      <div class="section-title">Contact Information</div>
      <table class="grid">
        <tr>
          <td class="label">Contact Email</td>
          <td class="value"><a href="mailto:${data.contactEmail}">${data.contactEmail}</a></td>
        </tr>
        <tr>
          <td class="label">Checkout Email</td>
          <td class="value"><a href="mailto:${data.checkoutEmail}">${data.checkoutEmail}</a></td>
        </tr>
        ${
          data.bccEmail
            ? `
        <tr>
          <td class="label">Bcc Email</td>
          <td class="value"><a href="mailto:${data.bccEmail}">${data.bccEmail}</a></td>
        </tr>
        `
            : ""
        }
      </table>

      <div class="section-title">Social Media</div>
      <table class="grid">
        <tr>
          <td class="label">X / Twitter</td>
          <td class="value">
            ${
              data.twitter
                ? `<a href="https://x.com/${data.twitter.replace("@", "")}" target="_blank" rel="noopener noreferrer">${data.twitter}</a>`
                : `<span style="color: #94a3b8;">—</span>`
            }
          </td>
        </tr>
        <tr>
          <td class="label">LinkedIn</td>
          <td class="value">
            ${
              data.linkedin
                ? `<a href="${data.linkedin}" target="_blank" rel="noopener noreferrer">Company Page</a>`
                : `<span style="color: #94a3b8;">—</span>`
            }
          </td>
        </tr>
        <tr>
          <td class="label">GitHub</td>
          <td class="value">
            ${
              data.github
                ? `<a href="${data.github.startsWith("http") ? data.github : `https://github.com/${data.github.replace("@", "")}`}" target="_blank" rel="noopener noreferrer">${data.github}</a>`
                : `<span style="color: #94a3b8;">—</span>`
            }
          </td>
        </tr>
      </table>

      ${
        data.description
          ? `
      <div class="section-title">Company Description</div>
      <div class="description-box">${data.description}</div>
      `
          : ""
      }
    </div>
    <div class="footer">
      <p>This is an automated notification from the Groot Studio onboarding system.</p>
      <p style="margin-top: 4px;">If you received this email in error, please contact the administrator through <a href="mailto:support@grootstudio.dev">support@grootstudio.dev</a>.</p>
    </div>
  </div>
</body>
</html>
  `
}

export function getSponsorThankYouEmailHtml(data: EmailTemplateData): string {
  const tierColors: Record<string, { bg: string; text: string; border: string }> = {
    diamond: { bg: "#f0fdf4", text: "#166534", border: "#bbf7d0" },
    gold: { bg: "#fefce8", text: "#854d0e", border: "#fef08a" },
    silver: { bg: "#f8fafc", text: "#475569", border: "#cbd5e1" },
    bronze: { bg: "#fff7ed", text: "#9a3412", border: "#ffedd5" },
  }

  const tier = (data.tier || "bronze").toLowerCase()
  const colors = tierColors[tier] || { bg: "#fff7ed", text: "#9a3412", border: "#ffedd5" }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Sponsoring Groot Studio</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background-color: #f8fafc;
      color: #0f172a;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: linear-gradient(135deg, #1e293b, #0f172a);
      padding: 36px 24px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.025em;
    }
    .header p {
      color: #38bdf8;
      margin: 8px 0 0 0;
      font-size: 15px;
      font-weight: 500;
    }
    .content {
      padding: 36px 32px;
      line-height: 1.6;
      font-size: 15px;
    }
    .greeting {
      font-size: 18px;
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 16px;
    }
    .badge {
      display: inline-block;
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 9999px;
      background-color: ${colors.bg};
      color: ${colors.text};
      border: 1px solid ${colors.border};
      letter-spacing: 0.05em;
      margin-bottom: 20px;
    }
    .section-title {
      font-size: 14px;
      font-weight: 600;
      color: #475569;
      margin: 28px 0 12px 0;
      padding-bottom: 6px;
      border-bottom: 1px solid #f1f5f9;
      letter-spacing: 0.05em;
    }
    .grid {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .grid td {
      padding: 10px 0;
      vertical-align: top;
      border-bottom: 1px solid #f8fafc;
    }
    .grid td.label {
      width: 35%;
      font-weight: 500;
      color: #64748b;
      font-size: 14px;
    }
    .grid td.value {
      width: 65%;
      color: #0f172a;
      font-size: 14px;
    }
    .grid a {
      color: #2563eb;
      text-decoration: none;
    }
    .footer {
      background-color: #f8fafc;
      padding: 24px;
      text-align: center;
      border-top: 1px solid #e2e8f0;
    }
    .footer p {
      margin: 0;
      font-size: 12px;
      color: #94a3b8;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Your Sponsorship!</h1>
      <p>Groot Studio Partner Program</p>
    </div>
    <div class="content">
      <div class="greeting">Hi ${data.companyName},</div>
      
      <p>Thank you so much for your support! We are thrilled to welcome you as a <strong>${data.tier}</strong> sponsor of Groot Studio. Your contribution helps us build better tooling and support the developer community.</p>
      
      <div style="margin-top: 16px;">
        <span class="badge">${data.tier} Sponsor</span>
      </div>

      <p>We have received your onboarding details and logo submission. Our team will review them and display your company's profile on our platform shortly.</p>

      <div class="section-title">Submitted Onboarding Details</div>
      <table class="grid">
        <tr>
          <td class="label">Company Name</td>
          <td class="value"><strong>${data.companyName}</strong></td>
        </tr>
        <tr>
          <td class="label">Website</td>
          <td class="value"><a href="${data.website}" target="_blank" rel="noopener noreferrer">${data.website}</a></td>
        </tr>
        <tr>
          <td class="label">Contact Email</td>
          <td class="value">${data.contactEmail}</td>
        </tr>
        <tr>
          <td class="label">Sponsorship Tier</td>
          <td class="value" style="text-transform: capitalize;">${data.tier}</td>
        </tr>
        ${
          data.github
            ? `
        <tr>
          <td class="label">GitHub</td>
          <td class="value"><a href="${data.github.startsWith("http") ? data.github : `https://github.com/${data.github.replace("@", "")}`}" target="_blank" rel="noopener noreferrer">${data.github}</a></td>
        </tr>
        `
            : ""
        }
      </table>

      <div class="section-title">What Happens Next?</div>
      <ol style="padding-left: 20px; margin-top: 8px; font-size: 14px; color: #334155;">
        <li style="margin-bottom: 8px;">Our team will verify the details and upload/optimize your logo.</li>
        <li style="margin-bottom: 8px;">Your brand logo and link will go live on the Groot Studio homepage and sponsors section.</li>
        <li style="margin-bottom: 8px;">If we need any additional assets or adjustments, we'll reach out directly to you at this email address.</li>
      </ol>

      <p style="margin-top: 28px;">If you have any questions or need to update your submitted details, please reply directly to this email or contact us at <a href="mailto:support@grootstudio.dev" style="color: #2563eb; text-decoration: none;">support@grootstudio.dev</a>.</p>

      <p style="margin-top: 24px; margin-bottom: 0;">Warm regards,<br><strong>Subhadip, Groot Studio</strong></p>
    </div>
    <div class="footer">
      <p>This email was sent to ${data.contactEmail} regarding your recent sponsor onboarding submission.</p>
      <p style="margin-top: 4px;">&copy; ${new Date().getFullYear()} Groot Studio. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `
}


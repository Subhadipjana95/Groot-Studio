"use client"

import { useState, useRef, type FormEvent, type ChangeEvent, type DragEvent } from "react"
import { SPONSOR_TIERS } from "@/data/Sponsors.data"
import { Upload, X, AlertCircle, Loader2, Info } from "lucide-react"

const VALID_TIERS = ["diamond", "gold", "silver", "bronze"] as const
type TierId = (typeof VALID_TIERS)[number]

interface SponsorOnboardingFormProps {
  tier: string
  onSuccess?: () => void
}

export default function SponsorOnboardingForm({ tier, onSuccess }: SponsorOnboardingFormProps) {
  const resolvedTier = VALID_TIERS.includes(tier as TierId) ? (tier as TierId) : "bronze"
  const tierData = SPONSOR_TIERS.find((t) => t.id === resolvedTier)!
  const TierIcon = tierData.icon

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // File upload state
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileSelect(file: File) {
    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please upload an image file (PNG, JPG, SVG, etc.)")
      return
    }
    setLogoFile(file)
    const reader = new FileReader()
    reader.onload = (e) => setLogoPreview(e.target?.result as string)
    reader.readAsDataURL(file)
  }

  function handleFileInputChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleFileSelect(file)
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFileSelect(file)
  }

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragging(true)
  }

  function handleDragLeave(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragging(false)
  }

  function clearLogo() {
    setLogoFile(null)
    setLogoPreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!logoFile) {
      setErrorMessage("Please upload a company logo.")
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    formData.set("tier", resolvedTier)
    formData.set("logo", logoFile)

    try {
      const response = await fetch("/api/sponsor-submit", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || `Submission failed (${response.status})`)
      }

      setSubmitStatus("success")
      onSuccess?.()
    } catch (err) {
      setSubmitStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2.5">
      {/* Error banner */}
      {submitStatus === "error" && errorMessage && (
        <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/5 p-4 animate-in fade-in-0 slide-in-from-top-2 duration-300">
          <AlertCircle className="size-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-500">Submission failed</p>
            <p className="text-sm text-red-400/80 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* ── Tier display ── */}
      <fieldset className="space-y-3 mb-8">
        <div className="flex items-center justify-center gap-1.5">
          <div className="flex items-center justify-center size-10 rounded-full bg-brand1/10 border border-brand1/40">
            <TierIcon className="size-6" />
          </div>
          <div
            id="sponsor-tier"
            className="w-auto h-10 rounded-full bg-brand1/10 border border-brand1/40 px-3 text-sm font-medium capitalize text-foreground flex items-center justify-center"
          >
            {tierData.name} Sponsor
          </div>
        </div>
      </fieldset>

      {/* ── Sponsor Details ── */}
      <div className="flex items-center justify-start gap-2">
        {/* ── Logo Upload ── */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={`relative flex flex-col items-center justify-center rounded-lg border border-dashed transition-all duration-200 cursor-pointer ${isDragging
            ? "border-brand1 bg-brand1/5"
            : logoPreview
              ? "border-border/50 bg-muted/20"
              : "border-border/50 bg-muted/20 hover:border-muted-foreground/40 hover:bg-muted/30"
            } ${logoPreview ? "p-0.5 sm:p-1" : "px-2 py-1 sm:p-4 w-24 sm:w-41 h-34 sm:h-34"}`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="sr-only"
            aria-label="Upload logo"
          />

          {logoPreview ? (
            <div className="relative w-22 sm:w-38 h-32 sm:h-32 rounded-lg border border-border/50 bg-background overflow-hidden shrink-0">
              <img
                src={logoPreview}
                alt="Logo preview"
                className="size-full object-contain p-1"
              />
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); clearLogo() }}
                className="absolute top-1 right-1 flex items-center justify-center size-6 rounded-md bg-background/80 hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                aria-label="Remove logo"
              >
                <X className="size-3.5" />
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center size-12 rounded-full bg-muted/50 border border-border/50 mb-3">
                <Upload className="size-5 text-muted-foreground" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-foreground/80 text-center">
                Drop your logo
              </p>
              <p className="hidden sm:block text-[10px] text-muted-foreground/60 mt-0.5">
                PNG, JPG, SVG or WebP
              </p>
            </>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 justify-center items-center">
          {/* ── Company Name ── */}
          <fieldset className="space-y-1 w-full">
            <Label htmlFor="company-name" required>Company/Personal Name</Label>
            <input
              id="company-name"
              name="companyName"
              type="text"
              required
              placeholder="Acme Inc."
              className="w-full h-10 rounded-md border border-input bg-transparent px-3 text-sm transition-colors outline-none placeholder:text-muted-foreground/40 focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </fieldset>

          {/* ── Website ── */}
          <fieldset className="space-y-1 w-full">
            <Label htmlFor="website" required>Website</Label>
            <input
              id="website"
              name="website"
              type="url"
              required
              placeholder="https://example.com"
              className="w-full h-10 rounded-md border border-input bg-transparent px-3 text-sm transition-colors outline-none placeholder:text-muted-foreground/40 focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </fieldset>
        </div>
      </div>

      {/* ── Contact Email ── */}
      <fieldset className="space-y-1">
        <Label htmlFor="contact-email" required>Contact Email</Label>
        <input
          id="contact-email"
          name="contactEmail"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full h-10 rounded-md border border-input bg-transparent px-3 text-sm transition-colors outline-none placeholder:text-muted-foreground/40 focus:border-ring focus:ring-2 focus:ring-ring/30"
        />
      </fieldset>

      {/* ── Checkout Email (highlighted) ── */}
      <fieldset className="space-y-1">
        <Label htmlFor="checkout-email" required>
          Email used during checkout
        </Label>
        <div className="relative">
          <input
            id="checkout-email"
            name="checkoutEmail"
            type="email"
            required
            placeholder="checkout@company.com"
            className="w-full h-10 rounded-md border-2 border-brand1/40 bg-brand1/3 px-3 text-sm transition-all outline-none placeholder:text-muted-foreground/40 focus:border-brand1 focus:ring-2 focus:ring-brand1/30"
          />
        </div>
        <div className="flex items-start gap-1.5 mt-1">
          <Info className="size-3.5 text-brand1/70 shrink-0 mt-px" />
          <p className="text-xs text-brand1/70">
            This must match the email you used at checkout — it&apos;s how we verify your payment.
          </p>
        </div>
      </fieldset>

      <div className="h-px bg-border/50" />

      {/* ── Company Description ── */}
      <fieldset className="space-y-1">
        <Label htmlFor="description">Company Description</Label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Tell us a bit about your company... (optional)"
          className="w-full rounded-lg border border-input bg-transparent px-3 py-2.5 text-sm transition-colors outline-none resize-none placeholder:text-muted-foreground/40 focus:border-ring focus:ring-2 focus:ring-ring/30"
        />
      </fieldset>

      {/* ── Socials ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <fieldset className="space-y-1">
          <Label htmlFor="twitter">X / Twitter</Label>
          <input
            id="twitter"
            name="twitter"
            type="text"
            placeholder="@handle"
            className="w-full h-10 rounded-md border border-input bg-transparent px-3 text-sm transition-colors outline-none placeholder:text-muted-foreground/40 focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </fieldset>

        <fieldset className="space-y-1">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <input
            id="linkedin"
            name="linkedin"
            type="text"
            placeholder="https://linkedin.com/company/..."
            className="w-full h-10 rounded-md border border-input bg-transparent px-3 text-sm transition-colors outline-none placeholder:text-muted-foreground/40 focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </fieldset>

        <fieldset className="space-y-1">
          <Label htmlFor="github">GitHub</Label>
          <input
            id="github"
            name="github"
            type="text"
            placeholder="https://github.com/..."
            className="w-full h-10 rounded-md border border-input bg-transparent px-3 text-sm transition-colors outline-none placeholder:text-muted-foreground/40 focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </fieldset>
      </div>

      <div className="h-px bg-border/50" />

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 rounded-lg bg-foreground text-background font-medium text-sm transition-all hover:opacity-90 active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Submitting…
          </>
        ) : (
          "Submit Details"
        )}
      </button>
    </form>
  )
}

// ── Reusable Label ──
function Label({
  children,
  htmlFor,
  required,
}: {
  children: React.ReactNode
  htmlFor?: string
  required?: boolean
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground/90 ml-1">
      {children}
      {required && <span className="text-brand1 ml-0.5">*</span>}
    </label>
  )
}

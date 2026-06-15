export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`nav, footer { display: none !important; }`}</style>
      {children}
    </>
  )
}

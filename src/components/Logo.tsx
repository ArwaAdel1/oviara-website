export function Logo({
  label,
  brandName,
}: {
  label: string
  brandName: string
}) {
  return (
    <a className="logo" href="#home" aria-label={label}>
      <img
        src="/images/oviara-logo.png"
        alt={brandName}
        width={501}
        height={498}
        decoding="async"
      />
    </a>
  )
}

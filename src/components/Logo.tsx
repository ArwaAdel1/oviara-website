export function Logo({
  light = false,
  label,
  brandName,
}: {
  light?: boolean
  label: string
  brandName: string
}) {
  return (
    <a
      className={`logo ${light ? "logo--light" : ""}`}
      href="#home"
      aria-label={label}
    >
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <path d="M5 6h10l7 24L29 6h10L27 38H17L5 6Z" />
        <path className="logo-cut" d="M16 6h6l4 13-4 11-6-24Z" />
      </svg>
      <span>{brandName}</span>
    </a>
  )
}

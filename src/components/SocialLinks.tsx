import { siteConfig } from "@/config/site"

export function SocialLinks({ label }: { label: string }) {
  const links = siteConfig.socials.filter((social) => social.href)

  if (links.length === 0) return null

  return (
    <div className="social-links">
      <span className="social-links-label">{label}</span>
      <div className="socials">
        {links.map((social) => (
          <a
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            key={social.label}
          >
            {social.short}
          </a>
        ))}
      </div>
    </div>
  )
}

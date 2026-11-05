import {
  getLocationText,
  getWhatsAppUrl,
  siteConfig,
  whatsappDisplay,
} from "@/config/site"
import { useLanguage } from "@/context/LanguageContext"
import { Icon } from "./Icon"
import { Logo } from "./Logo"
import { SocialLinks } from "./SocialLinks"

export function Footer() {
  const { content } = useLanguage()
  const location = getLocationText()
  const navItems = [
    { label: content.nav.home, href: "#home" },
    { label: content.nav.about, href: "#about" },
    { label: content.nav.activities, href: "#activities" },
    { label: content.nav.why, href: "#why" },
    { label: content.nav.contact, href: "#contact" },
  ]

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo
            light
            label={content.header.logoHome}
            brandName={content.brandName}
          />
          <p>{content.footer.tagline}</p>
          <SocialLinks label={content.contact.socialLabel} />
        </div>
        <div className="footer-column">
          <h3>{content.footer.companyLabel}</h3>
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer-column">
          <h3>{content.footer.activitiesLabel}</h3>
          {content.activities.items.map((activity) => (
            <a href="#activities" key={activity.title}>
              {activity.title}
            </a>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <h3>{content.footer.contactLabel}</h3>
          {location && (
            <p>
              <Icon name="map" />
              <span>{location}</span>
            </p>
          )}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.contact.whatsappCta}
          >
            <Icon name="whatsapp" />
            <span dir="ltr">{whatsappDisplay}</span>
          </a>
          <a href={`mailto:${siteConfig.emails.general}`}>
            <Icon name="mail" />
            <span dir="ltr">{siteConfig.emails.general}</span>
          </a>
          <a href={`mailto:${siteConfig.emails.leadership}`}>
            <Icon name="mail" />
            <span dir="ltr">{siteConfig.emails.leadership}</span>
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {content.brandName}.{" "}
          {content.footer.rights}
        </p>
      </div>
    </footer>
  )
}

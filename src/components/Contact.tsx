import {
  getWhatsAppUrl,
  siteConfig,
  whatsappDisplay,
} from "@/config/site"
import { useLanguage } from "@/context/LanguageContext"
import { Icon } from "./Icon"
import { SocialLinks } from "./SocialLinks"
import { WhatsAppButton } from "./WhatsAppButton"

export function Contact() {
  const { content } = useLanguage()
  const contact = content.contact

  return (
    <section className="cta-section contact-section" id="contact">
      <div className="cta-bg" />
      <div className="container cta-content">
        <p className="eyebrow eyebrow--light">
          <span />
          {contact.eyebrow}
        </p>
        <h2>
          {contact.title}
          <br />
          <em>{contact.titleEmphasis}</em>
        </h2>
        <p>{contact.body}</p>
        <div className="contact-actions">
          <WhatsAppButton label={contact.whatsappCta} />
          <a
            className="button button--outline button--large"
            href={`mailto:${siteConfig.emails.general}`}
          >
            {contact.emailCta} <Icon name="mail" />
          </a>
        </div>
        <div className="contact-methods">
          <a
            className="contact-method"
            href={`mailto:${siteConfig.emails.general}`}
          >
            <Icon name="mail" />
            <span>
              <small>{contact.generalLabel}</small>
              <strong dir="ltr">{siteConfig.emails.general}</strong>
            </span>
          </a>
          <a
            className="contact-method"
            href={`mailto:${siteConfig.emails.leadership}`}
          >
            <Icon name="users" />
            <span>
              <small>{contact.leadershipLabel}</small>
              <strong dir="ltr">{siteConfig.emails.leadership}</strong>
            </span>
          </a>
          <a
            className="contact-method"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" />
            <span>
              <small>{contact.whatsappLabel}</small>
              <strong dir="ltr">{whatsappDisplay}</strong>
            </span>
          </a>
        </div>
        <SocialLinks label={contact.socialLabel} />
      </div>
    </section>
  )
}

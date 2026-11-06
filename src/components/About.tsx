import { useLanguage } from "@/context/LanguageContext"
import { Icon } from "./Icon"

export function About() {
  const { content } = useLanguage()
  const about = content.about

  return (
    <section className="intro section" id="about">
      <div className="container intro-grid">
        <div className="intro-image-wrap">
          <img
            src="/images/about-riyadh.webp"
            alt={about.imageAlt}
            loading="lazy"
            decoding="async"
          />
          <div className="image-frame" />
          <div className="intro-note">
            <strong>{about.noteTitle}</strong>
            <span>{about.noteSubtitle}</span>
          </div>
        </div>
        <div className="intro-copy">
          <p className="eyebrow">
            <span />
            {about.eyebrow}
          </p>
          <h2>
            {about.title}
            <br />
            <em>{about.titleEmphasis}</em>
          </h2>
          <p className="large-copy">{about.lead}</p>
          <p>{about.body}</p>
          <div className="intro-pillars">
            {about.pillars.map((pillar) => (
              <span key={pillar.label}>
                <Icon name={pillar.icon} />
                {pillar.label}
              </span>
            ))}
          </div>
          <a className="text-link" href="#why">
            {about.discover} <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}

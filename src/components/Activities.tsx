import { useLanguage } from "@/context/LanguageContext"
import { Icon } from "./Icon"

export function Activities() {
  const { content } = useLanguage()
  const activities = content.activities

  return (
    <section className="services section" id="activities">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">
              <span />
              {activities.eyebrow}
            </p>
            <h2>
              {activities.title}
              <br />
              <em>{activities.titleEmphasis}</em>
            </h2>
          </div>
          <p>{activities.intro}</p>
        </div>
        <div className="services-grid">
          {activities.items.map((activity, index) => (
            <article className="service-card" key={activity.title}>
              <div className="service-image">
                <img
                  src={activity.image}
                  alt={activity.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-number">0{index + 1}</span>
              </div>
              <div className="service-body">
                <div className="service-icon">
                  <Icon name={activity.icon} />
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <a
                  href="#contact"
                  aria-label={`${activities.learnMoreAbout} ${activity.title}`}
                >
                  <Icon name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

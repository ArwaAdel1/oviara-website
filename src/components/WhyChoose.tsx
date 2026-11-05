import { useLanguage } from "@/context/LanguageContext"
import { Icon } from "./Icon"

export function WhyChoose() {
  const { content } = useLanguage()
  const why = content.why

  return (
    <section className="why section" id="why">
      <div className="container why-grid">
        <div className="why-copy">
          <p className="eyebrow eyebrow--light">
            <span />
            {why.eyebrow}
          </p>
          <h2>
            {why.title}
            <br />
            <em>{why.titleEmphasis}</em>
          </h2>
          <p>{why.body}</p>
          <a className="button button--outline button--large" href="#contact">
            {why.cta} <Icon name="arrow" />
          </a>
        </div>
        <div className="values-grid values-grid--four">
          {why.items.map((value, index) => (
            <article className="value-card" key={value.title}>
              <span className="value-index">0{index + 1}</span>
              <div className="value-icon">
                <Icon name={value.icon} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

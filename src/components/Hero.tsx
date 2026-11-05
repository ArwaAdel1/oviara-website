import { useLanguage } from "@/context/LanguageContext"
import { Icon } from "./Icon"

export function Hero() {
  const { content } = useLanguage()
  const hero = content.hero

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow eyebrow--light">
          <span />
          {hero.eyebrow}
        </p>
        <h1>
          {hero.title}
          <br />
          <em>{hero.titleEmphasis}</em>
        </h1>
        <p className="hero-lead">{hero.lead}</p>
        <div className="hero-buttons">
          <a
            className="button button--gold button--large"
            href="#activities"
          >
            {hero.primaryCta} <Icon name="arrow" />
          </a>
          <a className="button button--outline button--large" href="#contact">
            {hero.secondaryCta}
          </a>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-scroll">
          <span>{hero.scroll}</span>
          <i />
        </div>
        <div className="hero-facts">
          {hero.facts.map((fact) => (
            <div key={fact.title}>
              <strong>{fact.title}</strong>
              <span>{fact.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

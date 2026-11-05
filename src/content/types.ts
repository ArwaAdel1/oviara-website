export type Locale = "ar" | "en"

export type Direction = "rtl" | "ltr"

export type IconName =
  | "arrow"
  | "building"
  | "check"
  | "clock"
  | "compass"
  | "crane"
  | "hardhat"
  | "layers"
  | "mail"
  | "map"
  | "menu"
  | "phone"
  | "shield"
  | "target"
  | "tools"
  | "users"
  | "whatsapp"
  | "x"

export type NavKey = "home" | "about" | "activities" | "why" | "contact"

export type NavLabels = Record<NavKey, string>

export type NavItem = {
  key: NavKey
  label: string
  href: string
}

export type HeroFact = {
  title: string
  text: string
}

export type Pillar = {
  label: string
  icon: IconName
}

export type Activity = {
  title: string
  description: string
  image: string
  alt: string
  icon: IconName
}

export type Value = {
  title: string
  description: string
  icon: IconName
}

export type SiteContent = {
  brandName: string
  meta: {
    title: string
    description: string
  }
  nav: NavLabels & {
    ariaLabel: string
  }
  header: {
    logoHome: string
    quoteCta: string
    languageLabel: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    eyebrow: string
    title: string
    titleEmphasis: string
    lead: string
    primaryCta: string
    secondaryCta: string
    scroll: string
    facts: HeroFact[]
  }
  about: {
    eyebrow: string
    title: string
    titleEmphasis: string
    lead: string
    body: string
    pillars: Pillar[]
    discover: string
    imageAlt: string
    noteTitle: string
    noteSubtitle: string
  }
  activities: {
    eyebrow: string
    title: string
    titleEmphasis: string
    intro: string
    learnMoreAbout: string
    items: Activity[]
  }
  why: {
    eyebrow: string
    title: string
    titleEmphasis: string
    body: string
    cta: string
    items: Value[]
  }
  contact: {
    eyebrow: string
    title: string
    titleEmphasis: string
    body: string
    whatsappCta: string
    emailCta: string
    generalLabel: string
    leadershipLabel: string
    whatsappLabel: string
    socialLabel: string
  }
  footer: {
    tagline: string
    companyLabel: string
    activitiesLabel: string
    contactLabel: string
    rights: string
  }
}

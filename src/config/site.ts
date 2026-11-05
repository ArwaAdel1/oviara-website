export type SocialLink = {
  label: string
  short: string
  href: string
}

export const siteConfig = {
  brandName: "OVIARA",
  emails: {
    general: "info@oviara.sa",
    leadership: "ceo@oviara.sa",
  },
  whatsappNumber: "966567436247",
  whatsappMessage: "",
  location: {
    addressLine: "",
    city: "",
    country: "",
    mapUrl: "",
  },
  socials: [] as SocialLink[],
}

export const whatsappDisplay = `+${siteConfig.whatsappNumber.replace(
  /(\d{3})(\d{2})(\d{3})(\d{4})/,
  "$1 $2 $3 $4",
)}`

export function getWhatsAppUrl() {
  const message = siteConfig.whatsappMessage.trim()
  const query = message ? `?text=${encodeURIComponent(message)}` : ""
  return `https://wa.me/${siteConfig.whatsappNumber}${query}`
}

export function getLocationText() {
  return [
    siteConfig.location.addressLine,
    siteConfig.location.city,
    siteConfig.location.country,
  ]
    .filter(Boolean)
    .join(", ")
}

import { getWhatsAppUrl } from "@/config/site"
import { Icon } from "./Icon"

export function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      className="button button--gold button--large"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="whatsapp" />
      {label}
    </a>
  )
}

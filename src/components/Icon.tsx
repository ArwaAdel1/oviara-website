import type { ReactNode } from "react"
import type { IconName } from "@/content/types"

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-4h6v4M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 4-4 2 2-4 4-2Z" />
    </>
  ),
  crane: (
    <>
      <path d="M4 21h9M7 21V4h10M7 8h13M14 4v17M18 8v4l-2 2" />
      <path d="M3 4h8" />
    </>
  ),
  hardhat: (
    <>
      <path d="M4 14a8 8 0 0 1 16 0M3 14h18v3H3z" />
      <path d="M9 6v5M15 6v5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  map: (
    <>
      <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
      <path d="M9 3v15M15 6v15" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  phone: (
    <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z" />
  ),
  shield: (
    <>
      <path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3V1M12 23v-2M3 12H1M23 12h-2" />
    </>
  ),
  tools: (
    <>
      <path d="m14 7 3-3 3 3-3 3M14 7 4 17l3 3 10-10" />
      <path d="m6 6 12 12M4 4l3 1-2 2-1-3Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-4 2-7 6-7s6 3 6 7M16 5a3 3 0 0 1 0 6M17 13c2.7.5 4 2.8 4 6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.5L3.5 20l1.1-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.3 8.1c.2-.4.3-.4.5-.4h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.6l-.4.5c-.1.2-.2.3-.1.5.4.8 1.1 1.5 1.9 1.9.2.1.3.1.5-.1l.5-.6c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.4.3.1.4 0 .9-.2 1.2-.2.3-.5.6-1 .7-.4.1-1 .1-1.6-.1-2.4-.9-4.1-2.6-5-5-.2-.6-.2-1.2-.1-1.6Z" />
    </>
  ),
  x: (
    <>
      <path d="m5 5 14 14M19 5 5 19" />
    </>
  ),
}

export function Icon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" data-icon={name}>
      {paths[name]}
    </svg>
  )
}

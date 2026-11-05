import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { content } from "@/content"
import type { Direction, Locale, SiteContent } from "@/content/types"

const LOCALE_STORAGE_KEY = "oviara-locale"

type LanguageContextValue = {
  locale: Locale
  direction: Direction
  content: SiteContent
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "ar"

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return stored === "en" || stored === "ar" ? stored : "ar"
  } catch {
    return "ar"
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)
  const direction: Direction = locale === "ar" ? "rtl" : "ltr"

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = direction
    document.title = content[locale].meta.title

    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (!description) {
      description = document.createElement("meta")
      description.name = "description"
      document.head.appendChild(description)
    }
    description.content = content[locale].meta.description

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      return
    }
  }, [direction, locale])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      direction,
      content: content[locale],
      setLocale: (nextLocale) => setLocaleState(nextLocale),
    }),
    [direction, locale],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}

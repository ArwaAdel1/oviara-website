import { useLanguage } from "@/context/LanguageContext"

export function LanguageSwitcher({ onSelect }: { onSelect?: () => void }) {
  const { locale, setLocale, content } = useLanguage()

  const selectLocale = (nextLocale: "ar" | "en") => {
    setLocale(nextLocale)
    onSelect?.()
  }

  return (
    <div
      className="language-switch"
      role="group"
      aria-label={content.header.languageLabel}
      dir="ltr"
    >
      <button
        type="button"
        className={locale === "ar" ? "is-active" : ""}
        onClick={() => selectLocale("ar")}
        aria-pressed={locale === "ar"}
      >
        AR
      </button>
      <i />
      <button
        type="button"
        className={locale === "en" ? "is-active" : ""}
        onClick={() => selectLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  )
}

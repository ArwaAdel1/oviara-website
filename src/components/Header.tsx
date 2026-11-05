import { useEffect, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { Icon } from "./Icon"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { Logo } from "./Logo"

export function Header() {
  const { content } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const navItems = [
    { label: content.nav.home, href: "#home" },
    { label: content.nav.about, href: "#about" },
    { label: content.nav.activities, href: "#activities" },
    { label: content.nav.why, href: "#why" },
    { label: content.nav.contact, href: "#contact" },
  ]

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="header-inner">
        <Logo
          light={!scrolled}
          label={content.header.logoHome}
          brandName={content.brandName}
        />
        <nav
          className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
          id="main-navigation"
          aria-label={content.nav.ariaLabel}
        >
          {navItems.map((item) => (
            <a
              className={item.href === "#home" ? "active" : undefined}
              href={item.href}
              onClick={closeMenu}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <div className="mobile-nav-actions">
            <LanguageSwitcher onSelect={closeMenu} />
            <a
              className="button button--gold"
              href="#contact"
              onClick={closeMenu}
            >
              {content.header.quoteCta}
            </a>
          </div>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <a className="button button--gold quote-button" href="#contact">
            {content.header.quoteCta} <Icon name="arrow" />
          </a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={
              menuOpen ? content.header.closeMenu : content.header.openMenu
            }
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  )
}

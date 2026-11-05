import { About } from "./components/About"
import { Activities } from "./components/Activities"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { WhyChoose } from "./components/WhyChoose"
import { LanguageProvider } from "./context/LanguageContext"

export default function App() {
  return (
    <LanguageProvider>
      <div className="site-shell">
        <Header />
        <main>
          <Hero />
          <About />
          <Activities />
          <WhyChoose />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

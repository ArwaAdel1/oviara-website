import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { content } from "./content"
import { getInitialLocale } from "./context/LanguageContext"
import "./index.css"

const initialLocale = getInitialLocale()
const initialContent = content[initialLocale]

document.documentElement.lang = initialLocale
document.documentElement.dir = initialLocale === "ar" ? "rtl" : "ltr"
document.title = initialContent.meta.title

let description = document.querySelector<HTMLMetaElement>(
  'meta[name="description"]',
)
if (!description) {
  description = document.createElement("meta")
  description.name = "description"
  document.head.appendChild(description)
}
description.content = initialContent.meta.description

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

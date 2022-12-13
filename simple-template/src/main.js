import React from "react"
import { createRoot } from "react-dom/client"

import "./assets/reset.css"
import "./assets/main.css"

import App from "./components/app"

const container = document.getElementById("app")
const root = createRoot(container)
root.render(<App />)
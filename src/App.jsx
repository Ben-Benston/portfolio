import { Route, Routes } from "react-router-dom"
import Home from "./sections/Home"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Routes>
      <Analytics />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
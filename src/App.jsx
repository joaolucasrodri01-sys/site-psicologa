import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Especialidades from "./pages/Especialidades"
import Contato from "./pages/Contato"

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />

      <div className="page-container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}
<a
  href="https://wa.me/553598705413?text=Olá!%20Me%20chamo%20[NOME].%20Gostaria%20de%20agendar%20uma%20consulta.%20Poderia%20me%20informar%20os%20horários%20disponíveis?"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-agendar"
>
  Agendar Consulta
</a>

export default App






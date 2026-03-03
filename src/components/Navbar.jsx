import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <h2 className="logo">Psicóloga Maria Luísa</h2>

        <div className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Início</Link>
          <Link to="/sobre" onClick={() => setOpen(false)}>Sobre</Link>
          <Link to="/especialidades" onClick={() => setOpen(false)}>Especialidades</Link>
          <Link to="/contato" onClick={() => setOpen(false)}>Contato</Link>
        </div>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  )
}

export default Navbar




export default function Footer() {
  return (
    <footer style={{
      background: "#3a5a40",
      color: "white",
      padding: "40px 20px",
      textAlign: "center"
    }}>
      <p>Dra. Maria Luisa - Psicóloga Clínica</p>
      <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.8 }}>
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </footer>
  )
}

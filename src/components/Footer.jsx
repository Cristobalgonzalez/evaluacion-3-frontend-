import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#avisos-legales" className="footer-link">Avisos Legales</a>
        <span className="footer-separator">|</span>
        <a href="#privacidad" className="footer-link">Política de Privacidad</a>
        <span className="footer-separator">|</span>
        <a href="#cookies" className="footer-link">Política de Cookies</a>
      </div>
      <p className="footer-copyright">&copy; 2025 Criss Dev. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer

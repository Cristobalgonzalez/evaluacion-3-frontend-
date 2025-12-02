import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css'

function Navbar_Component({ onInicio }) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Navbar bg="dark" expand="lg" sticky="top" className="navbar">
      <Container fluid className="navbar-container">
        <Navbar.Brand href="#" onClick={(e) => {
          e.preventDefault()
          onInicio()
        }} className="navbar-logo">
          Criss Dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setMenuAbierto(!menuAbierto)} />
        <Navbar.Collapse id="basic-navbar-nav" className={menuAbierto ? 'activo' : ''}>
          <Nav className="ms-auto">
            <Nav.Link href="#" onClick={(e) => {
              e.preventDefault()
              onInicio()
              scrollToTop()
              setMenuAbierto(false)
            }} className="nav-link">
              Inicio
            </Nav.Link>
            <Nav.Link href="#quienes-somos" onClick={() => setMenuAbierto(false)} className="nav-link">
              Quién Soy
            </Nav.Link>
            <Nav.Link href="#servicios" onClick={() => setMenuAbierto(false)} className="nav-link">
              Servicios/Productos
            </Nav.Link>
            <Nav.Link href="#contacto" onClick={() => setMenuAbierto(false)} className="nav-link">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar_Component

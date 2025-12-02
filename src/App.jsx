import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MiApi from './components/MiApi'

function App() {
  const [mostrarApi, setMostrarApi] = useState(false)

  return (
    <>
      <Navbar onInicio={() => setMostrarApi(false)} />
      {!mostrarApi ? (
        <>
          <div className="landing-page">
            <header>
              <img src="/img/Rick_and_Morty.png" alt="Rick and Morty Logo" className="header-logo" />
              <span className="api-text">API</span>
            </header>
            <div className="landing-content">
              <div className="tecnologias">
                <h2>Desarrollado con:</h2>
                <div className="tech-list">
                  <span className="tech-item">React</span>
                  <span className="tech-item">Bootstrap</span>
                  <span className="tech-item">JS</span>
                  <span className="tech-item">CSS</span>
                  <span className="tech-item">Rick and Morty API</span>
                </div>
              </div>
              <button className="btn-continuar" onClick={() => setMostrarApi(true)}>
                Ver API
              </button>
            </div>
          </div>

          <section id="quienes-somos" className="quienes-somos">
            <div className="quienes-somos-content">
              <img src="src/img/criss.jpg" alt="Criss Dev" className="profile-image" />
              <h2>Quién Soy</h2>
              <p>
                 Hola Soy Criss Dev programador y estudiante de segundo año de Informática, apasionado por el desarrollo web y la producción musical.
              </p>
              <p>
                Mi objetivo es crear aplicaciones web funcionales, atractivas y fáciles de usar que brinden una experiencia excepcional a los usuarios.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/cristobal-gonzalez-13345a335/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" title="LinkedIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          </section>

          <section id="servicios" className="servicios">
            <div className="servicios-content">
              <h2>Servicios y Productos</h2>
              <p>
                Ofrezco servicios de desarrollo web y producción musical, con enfoque en crear aplicaciones modernas y piezas musicales ad hoc a requerimientos.
              </p>
              <p>
                Mis productos incluyen soluciones personalizadas para consumo de APIs, diseño de interfaces y desarrollo de aplicaciones escalables.
                Complementado con un enfoque artístico mezclando creatividad y tecnología.

              </p>
              <div className="servicios-images">
                <div className="servicio-item">
                  <img src="src/img/vs.png" alt="Visual Studio Code" className="servicio-img" />
                  <p className="servicio-label">Visual Studio Code</p>
                </div>
                <div className="servicio-item">
                  <img src="src/img/ableton.png" alt="Ableton Live" className="servicio-img" />
                  <p className="servicio-label">Ableton Live</p>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/Cristobalgonzalez" target="_blank" rel="noopener noreferrer" className="social-icon github" title="GitHub">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://www.youtube.com/@pufinwave8934" target="_blank" rel="noopener noreferrer" className="social-icon youtube" title="YouTube">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </div>
            </div>
          </section>

          <section id="contacto" className="contacto">
            <div className="contacto-content">
              <h2>Contacto</h2>
              <form className="contacto-form">
                <div className="form-group">
                  <input type="text" placeholder="Tu Nombre" className="form-input" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Tu Correo" className="form-input" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Tu Teléfono" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Tu Mensaje" className="form-input form-textarea" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-enviar">Enviar Mensaje</button>
              </form>
            </div>
          </section>
        </>
      ) : (
        <MiApi />
      )}
      <Footer />
    </>
  )
}

export default App

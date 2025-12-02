import { useState, useEffect } from 'react'
import Buscador from './Buscador'

function MiApi() {
  const [personajes, setPersonajes] = useState([])
  const [personajesFiltrados, setPersonajesFiltrados] = useState([])

  useEffect(() => {
    const fetchPersonajes = async () => {
      try {
        const requests = [1, 2, 3].map(page => 
          fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(r => r.json())
        )
        const responses = await Promise.all(requests)
        const allData = responses.flatMap(r => r.results)
        setPersonajes(allData)
        setPersonajesFiltrados(allData)
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    }
    fetchPersonajes()
  }, [])

  const traducirEstado = (status) => {
    const traducciones = { 'Alive': 'Vivo', 'Dead': 'Muerto', 'unknown': 'Desconocido' }
    return traducciones[status] || status
  }

  return (
    <div>
      <header>
        <img src="/img/Rick_and_Morty.png" alt="Rick and Morty Logo" className="header-logo" />
        <span className="api-text">API</span>
      </header>
      <Buscador personajes={personajes} setPersonajesFiltrados={setPersonajesFiltrados} />
      <main className="personajes-grid">
        {personajesFiltrados.map(personaje => (
          <article key={personaje.id} className="personaje-card">
            <div className="image-container">
              <img src={personaje.image} alt={personaje.name} />
            </div>
            <h2>{personaje.name}</h2>
            <span>{traducirEstado(personaje.status)}</span>
          </article>
        ))}
      </main>
    </div>
  )
}

export default MiApi

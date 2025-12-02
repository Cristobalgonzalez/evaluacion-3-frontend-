import { useState } from 'react'

function Buscador({ personajes, setPersonajesFiltrados }) {
  const [filtroActivo, setFiltroActivo] = useState('all')

  const handleFiltrar = (status) => {
    setFiltroActivo(status)
    let resultado = status === 'all' 
      ? personajes 
      : personajes.filter(p => p.status.toLowerCase() === status)
    
    resultado = resultado.sort((a, b) => a.name.localeCompare(b.name))
    setPersonajesFiltrados(resultado)
  }

  return (
    <div className="filter-wrapper">
      <div className="btn-group">
        <button type="button" className={filtroActivo === 'all' ? 'btn-filtro active' : 'btn-filtro'} onClick={() => handleFiltrar('all')}>Todos</button>
        <button type="button" className={filtroActivo === 'dead' ? 'btn-filtro active' : 'btn-filtro'} onClick={() => handleFiltrar('dead')}>Muertos</button>
        <button type="button" className={filtroActivo === 'alive' ? 'btn-filtro active' : 'btn-filtro'} onClick={() => handleFiltrar('alive')}>Vivos</button>
        <button type="button" className={filtroActivo === 'unknown' ? 'btn-filtro active' : 'btn-filtro'} onClick={() => handleFiltrar('unknown')}>Desconocidos</button>
      </div>
    </div>
  )
}

export default Buscador

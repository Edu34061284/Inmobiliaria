import { useState, useEffect } from 'react'

function Carrusel({ imagenes }) {
  const [indiceActual, setIndiceActual] = useState(0)

  useEffect(() => {
    if (imagenes.length <= 1) return

    const intervalo = setInterval(() => {
      setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length)
    }, 5000)

    return () => clearInterval(intervalo)
  }, [imagenes.length])

  const irAnterior = () => {
    setIndiceActual((prevIndice) => 
      prevIndice === 0 ? imagenes.length - 1 : prevIndice - 1
    )
  }

  const irSiguiente = () => {
    setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length)
  }

  if (!imagenes || imagenes.length === 0) {
    return <div className="carrusel-placeholder">Sin imágenes</div>
  }

  return (
    <div className="carrusel">
      <img 
        src={imagenes[indiceActual]} 
        alt={`Imagen ${indiceActual + 1}`}
        className="carrusel-imagen"
      />
      
      {imagenes.length > 1 && (
        <>
          <button className="carrusel-btn carrusel-btn-prev" onClick={irAnterior}>
            ‹
          </button>
          <button className="carrusel-btn carrusel-btn-next" onClick={irSiguiente}>
            ›
          </button>
          
          <div className="carrusel-indicadores">
            {imagenes.map((_, index) => (
              <span
                key={index}
                className={`indicador ${index === indiceActual ? 'activo' : ''}`}
                onClick={() => setIndiceActual(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carrusel

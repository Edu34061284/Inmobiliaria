import './App.css'
import logo from './assets/Icon_secondV.png'
import { useState, useEffect } from 'react'
import Carrusel from './components/Carrusel'

// Datos de ejemplo de propiedades
const PROPIEDADES_DATA = [
  {
    id: 1,
    tipo: 'casa',
    operacion: 'venta',
    titulo: 'Casa en el Centro',
    descripcion: 'Hermosa casa de 3 dormitorios en el centro de Río Cuarto, con amplio jardín y garage para 2 autos. Cocina moderna, living comedor espacioso.',
    precio: 250000,
    ubicacion: 'Río Cuarto',
    dormitorios: 3,
    banos: 2,
    imagenes: ['https://via.placeholder.com/600x400/4a5568/ffffff?text=Casa+Centro+1', 'https://via.placeholder.com/600x400/34495e/ffffff?text=Casa+Centro+2', 'https://via.placeholder.com/600x400/2c3e50/ffffff?text=Casa+Centro+3']
  },
  {
    id: 2,
    tipo: 'departamento',
    operacion: 'venta',
    titulo: 'Apartamento Moderno',
    descripcion: 'Departamento de 2 dormitorios en Carlos Paz, con vista panorámica. Incluye cochera cubierta y amenities completos.',
    precio: 180000,
    ubicacion: 'Carlos Paz',
    dormitorios: 2,
    banos: 1,
    imagenes: ['https://via.placeholder.com/600x400/667eea/ffffff?text=Depto+Moderno+1', 'https://via.placeholder.com/600x400/764ba2/ffffff?text=Depto+Moderno+2']
  },
  {
    id: 3,
    tipo: 'casa',
    operacion: 'venta',
    titulo: 'Casa con Jardín',
    descripcion: 'Amplia casa de 4 dormitorios en Calamuchita, rodeada de naturaleza. Ideal para familias que buscan tranquilidad.',
    precio: 350000,
    ubicacion: 'Calamuchita',
    dormitorios: 4,
    banos: 3,
    imagenes: ['https://via.placeholder.com/600x400/48bb78/ffffff?text=Casa+Jardin+1', 'https://via.placeholder.com/600x400/38a169/ffffff?text=Casa+Jardin+2', 'https://via.placeholder.com/600x400/2d995b/ffffff?text=Casa+Jardin+3']
  },
  {
    id: 4,
    tipo: 'departamento',
    operacion: 'alquiler',
    titulo: 'Departamento Céntrico',
    descripcion: 'Departamento de 1 dormitorio en el centro de Río Cuarto. Perfecto para estudiantes o jóvenes profesionales.',
    precio: 45000,
    ubicacion: 'Río Cuarto',
    dormitorios: 1,
    banos: 1,
    imagenes: ['https://via.placeholder.com/600x400/f6993f/ffffff?text=Depto+Centrico+1', 'https://via.placeholder.com/600x400/e67e22/ffffff?text=Depto+Centrico+2']
  },
  {
    id: 5,
    tipo: 'campo',
    operacion: 'venta',
    titulo: 'Campo Productivo',
    descripcion: 'Campo de 50 hectáreas en zona rural, apto para agricultura y ganadería. Cuenta con instalaciones y pozo de agua.',
    precio: 2500000,
    ubicacion: 'Río Cuarto - Zona Rural',
    dormitorios: 0,
    banos: 0,
    imagenes: ['https://via.placeholder.com/600x400/6ab04c/ffffff?text=Campo+1', 'https://via.placeholder.com/600x400/badc58/ffffff?text=Campo+2']
  },
  {
    id: 6,
    tipo: 'terreno',
    operacion: 'venta',
    titulo: 'Terreno Urbanizado',
    descripcion: 'Terreno de 300m² en Carlos Paz, con todos los servicios. Ideal para construir la casa de tus sueños.',
    precio: 95000,
    ubicacion: 'Carlos Paz',
    dormitorios: 0,
    banos: 0,
    imagenes: ['https://via.placeholder.com/600x400/22a6b3/ffffff?text=Terreno+1']
  },
  {
    id: 7,
    tipo: 'casa',
    operacion: 'alquiler',
    titulo: 'Casa Familiar',
    descripcion: 'Casa de 3 dormitorios para alquiler en Calamuchita. Patio amplio, quincho y pileta.',
    precio: 80000,
    ubicacion: 'Calamuchita',
    dormitorios: 3,
    banos: 2,
    imagenes: ['https://via.placeholder.com/600x400/eb4d4b/ffffff?text=Casa+Familiar+1', 'https://via.placeholder.com/600x400/ee5a6f/ffffff?text=Casa+Familiar+2']
  }
]

function App() {
  const [vistaActual, setVistaActual] = useState('inicio')
  const [filtroTipo, setFiltroTipo] = useState(null)
  const [filtroOperacion, setFiltroOperacion] = useState(null)

  const handleNavegar = (vista, tipo = null, operacion = null) => {
    setVistaActual(vista)
    setFiltroTipo(tipo)
    setFiltroOperacion(operacion)
    window.scrollTo(0, 0)
  }

  const propiedadesFiltradas = PROPIEDADES_DATA.filter(prop => {
    if (filtroTipo && prop.tipo !== filtroTipo) return false
    if (filtroOperacion && prop.operacion !== filtroOperacion) return false
    return true
  })

  const getTituloFiltros = () => {
    if (vistaActual === 'inicio') return null
    
    let titulo = ''
    if (filtroTipo) {
      titulo = filtroTipo.charAt(0).toUpperCase() + filtroTipo.slice(1) + 's'
    } else {
      titulo = 'Propiedades'
    }
    
    if (filtroOperacion) {
      if (filtroOperacion === 'venta') titulo += ' en Venta'
      else if (filtroOperacion === 'alquiler') titulo += ' para Alquilar'
      else if (filtroOperacion === 'comprar') titulo += ' en Venta'
    }
    
    return titulo
  }

  return (
    <div className="App" id="inicio">
      <header className="header">
        <div className="header-brand">
          <img src={logo} alt="Logo Inmobiliaria" className="logo" />
          <h1>Marianela Breit Inmobiliaria</h1>
        </div>
        <nav>
          <a onClick={() => handleNavegar('inicio')} style={{cursor: 'pointer'}}>Inicio</a>
          <div className="dropdown">
            <a onClick={() => handleNavegar('propiedades')} style={{cursor: 'pointer'}} className="dropdown-toggle">
              Propiedades <span className="arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <a onClick={() => handleNavegar('propiedades', 'casa')} style={{cursor: 'pointer'}}>Casas <span className="arrow-right">▶</span></a>
                <div className="submenu">
                  <a onClick={() => handleNavegar('propiedades', 'casa', 'venta')} style={{cursor: 'pointer'}}>Comprar</a>
                  <a onClick={() => handleNavegar('propiedades', 'casa', 'venta')} style={{cursor: 'pointer'}}>Vender</a>
                  <a onClick={() => handleNavegar('propiedades', 'casa', 'alquiler')} style={{cursor: 'pointer'}}>Alquilar</a>
                </div>
              </div>
              <div className="dropdown-item">
                <a onClick={() => handleNavegar('propiedades', 'departamento')} style={{cursor: 'pointer'}}>Departamentos <span className="arrow-right">▶</span></a>
                <div className="submenu">
                  <a onClick={() => handleNavegar('propiedades', 'departamento', 'venta')} style={{cursor: 'pointer'}}>Comprar</a>
                  <a onClick={() => handleNavegar('propiedades', 'departamento', 'venta')} style={{cursor: 'pointer'}}>Vender</a>
                  <a onClick={() => handleNavegar('propiedades', 'departamento', 'alquiler')} style={{cursor: 'pointer'}}>Alquilar</a>
                </div>
              </div>
              <div className="dropdown-item">
                <a onClick={() => handleNavegar('propiedades', 'campo')} style={{cursor: 'pointer'}}>Campos <span className="arrow-right">▶</span></a>
                <div className="submenu">
                  <a onClick={() => handleNavegar('propiedades', 'campo', 'venta')} style={{cursor: 'pointer'}}>Comprar</a>
                  <a onClick={() => handleNavegar('propiedades', 'campo', 'venta')} style={{cursor: 'pointer'}}>Vender</a>
                  <a onClick={() => handleNavegar('propiedades', 'campo', 'alquiler')} style={{cursor: 'pointer'}}>Alquilar</a>
                </div>
              </div>
              <div className="dropdown-item">
                <a onClick={() => handleNavegar('propiedades', 'terreno')} style={{cursor: 'pointer'}}>Terrenos <span className="arrow-right">▶</span></a>
                <div className="submenu">
                  <a onClick={() => handleNavegar('propiedades', 'terreno', 'venta')} style={{cursor: 'pointer'}}>Comprar</a>
                  <a onClick={() => handleNavegar('propiedades', 'terreno', 'venta')} style={{cursor: 'pointer'}}>Vender</a>
                  <a onClick={() => handleNavegar('propiedades', 'terreno', 'alquiler')} style={{cursor: 'pointer'}}>Alquilar</a>
                </div>
              </div>
            </div>
          </div>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <div className="info-contacto">
        <div className="info-item">
          <span className="icon">📍</span>
          <span>Dirección: Av. Principal 123, Río Cuarto</span>
        </div>
        <div className="info-item">
          <span className="icon">📞</span>
          <span>Teléfono: +54 358 123-4567</span>
        </div>
        <div className="info-item">
          <span className="icon">✉️</span>
          <span>Email: contacto@marianelabreit.com</span>
        </div>
      </div>

      {vistaActual === 'inicio' ? (
        <>
          <main className="main-content">
            <section className="hero">
              <div className="hero-content">
                <h2>Más que propiedades, construimos historias</h2>
                <p>Las mejores propiedades en Río Cuarto - Calamuchita - Carlos Paz</p>
                <button className="cta-button" onClick={() => handleNavegar('propiedades')}>Ver Propiedades</button>
              </div>
            </section>

            <section className="propiedades-destacadas" id="propiedades">
              <h3>Propiedades Destacadas</h3>
              <div className="propiedades-grid">
                {PROPIEDADES_DATA.slice(0, 3).map((prop) => (
                  <div key={prop.id} className="propiedad-card">
                    <div className="card-badge">{prop.operacion === 'venta' ? 'En Venta' : 'En Alquiler'}</div>
                    <div className="card-content">
                      <h4>{prop.titulo}</h4>
                      <p className="ubicacion">📍 {prop.ubicacion}</p>
                      {prop.dormitorios > 0 && (
                        <div className="detalles">
                          <span>🛏️ {prop.dormitorios} dormitorios</span>
                          <span>🚿 {prop.banos} baños</span>
                        </div>
                      )}
                      <p className="precio">${prop.precio.toLocaleString()}</p>
                      <button className="ver-mas" onClick={() => handleNavegar('propiedades')}>Ver detalles</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <section className="nosotros" id="nosotros">
        <div className="nosotros-container">
          <h2>Sobre Nosotros</h2>
          
          <div className="historia">
            <h3>Nuestra Historia</h3>
            <p>
              Marianela Breit Inmobiliaria nació en 2010 con el sueño de transformar la manera en que las personas 
              encuentran su hogar ideal. Lo que comenzó como un pequeño emprendimiento familiar, hoy se ha convertido 
              en una de las inmobiliarias más confiables de Río Cuarto, Calamuchita y Carlos Paz.
            </p>
            <p>
              Durante más de 15 años, hemos ayudado a cientos de familias a encontrar el lugar perfecto para construir 
              sus sueños. Cada propiedad que gestionamos tiene una historia, y cada cliente se convierte en parte de 
              nuestra familia.
            </p>
          </div>

          <div className="motivacion">
            <h3>Nuestra Motivación</h3>
            <div className="motivacion-grid">
              <div className="motivacion-card">
                <div className="motivacion-icon">🏡</div>
                <h4>Pasión por el Hogar</h4>
                <p>Creemos que cada persona merece un lugar donde sentirse seguro y feliz.</p>
              </div>
              <div className="motivacion-card">
                <div className="motivacion-icon">🤝</div>
                <h4>Confianza</h4>
                <p>Construimos relaciones duraderas basadas en la transparencia y honestidad.</p>
              </div>
              <div className="motivacion-card">
                <div className="motivacion-icon">⭐</div>
                <h4>Excelencia</h4>
                <p>Nos esforzamos por ofrecer el mejor servicio en cada etapa del proceso.</p>
              </div>
            </div>
          </div>

          <div className="equipo">
            <h3>Nuestro Equipo</h3>
            <div className="equipo-grid">
              <div className="equipo-card">
                <div className="equipo-foto">
                  <div className="foto-placeholder">MB</div>
                </div>
                <h4>Marianela Breit</h4>
                <p className="cargo">Fundadora & Directora</p>
                <p className="descripcion">
                  Con más de 15 años de experiencia en el mercado inmobiliario, Marianela lidera 
                  nuestra empresa con pasión y dedicación.
                </p>
              </div>
              <div className="equipo-card">
                <div className="equipo-foto">
                  <div className="foto-placeholder">AS</div>
                </div>
                <h4>Ana Silva</h4>
                <p className="cargo">Asesora Comercial</p>
                <p className="descripcion">
                  Especialista en propiedades residenciales, Ana se encarga de encontrar el hogar 
                  perfecto para cada familia.
                </p>
              </div>
              <div className="equipo-card">
                <div className="equipo-foto">
                  <div className="foto-placeholder">LR</div>
                </div>
                <h4>Luis Rodríguez</h4>
                <p className="cargo">Asesor de Inversiones</p>
                <p className="descripcion">
                  Experto en campos y propiedades comerciales, Luis ayuda a nuestros clientes a 
                  tomar las mejores decisiones de inversión.
                </p>
              </div>
              <div className="equipo-card">
                <div className="equipo-foto">
                  <div className="foto-placeholder">CM</div>
                </div>
                <h4>Carolina Méndez</h4>
                <p className="cargo">Coordinadora Administrativa</p>
                <p className="descripcion">
                  Carolina gestiona todos los aspectos legales y administrativos, asegurando 
                  procesos fluidos y seguros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
      ) : (
        <div className="vista-propiedades">
          <div className="propiedades-header">
            <h2>{getTituloFiltros()}</h2>
            <p className="propiedades-count">{propiedadesFiltradas.length} {propiedadesFiltradas.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}</p>
          </div>
          
          <div className="propiedades-lista">
            {propiedadesFiltradas.length === 0 ? (
              <div className="sin-resultados">
                <h3>No se encontraron propiedades</h3>
                <p>No hay propiedades disponibles con los filtros seleccionados.</p>
                <button className="cta-button" onClick={() => handleNavegar('inicio')}>Volver al inicio</button>
              </div>
            ) : (
              propiedadesFiltradas.map((propiedad) => (
                <div key={propiedad.id} className="propiedad-completa">
                  <div className="propiedad-imagenes">
                    <Carrusel imagenes={propiedad.imagenes} />
                  </div>
                  <div className="propiedad-info">
                    <div className="propiedad-header-card">
                      <h3>{propiedad.titulo}</h3>
                      <span className={`badge-operacion ${propiedad.operacion}`}>
                        {propiedad.operacion === 'venta' ? 'En Venta' : 'En Alquiler'}
                      </span>
                    </div>
                    <p className="ubicacion-grande">📍 {propiedad.ubicacion}</p>
                    <p className="descripcion-completa">{propiedad.descripcion}</p>
                    {propiedad.dormitorios > 0 && (
                      <div className="detalles-completos">
                        <div className="detalle-item">
                          <span className="detalle-icon">🛏️</span>
                          <span>{propiedad.dormitorios} {propiedad.dormitorios === 1 ? 'Dormitorio' : 'Dormitorios'}</span>
                        </div>
                        <div className="detalle-item">
                          <span className="detalle-icon">🚿</span>
                          <span>{propiedad.banos} {propiedad.banos === 1 ? 'Baño' : 'Baños'}</span>
                        </div>
                      </div>
                    )}
                    <div className="propiedad-footer">
                      <p className="precio-grande">${propiedad.precio.toLocaleString()}</p>
                      <button className="btn-contactar">Contactar</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <footer className="footer" id="contacto">
        <h3>Contacto</h3>
        <div className="contacto-info">
          <div className="contacto-item">
            <h4>📍 Dirección</h4>
            <p>Av. Principal 123<br/>Río Cuarto, Córdoba</p>
          </div>
          <div className="contacto-item">
            <h4>📞 Teléfono</h4>
            <p>+54 358 123-4567</p>
          </div>
          <div className="contacto-item">
            <h4>✉️ Email</h4>
            <p>contacto@marianelabreit.com</p>
          </div>
          <div className="contacto-item">
            <h4>🕒 Horarios</h4>
            <p>Lunes a Viernes: 9:00 - 18:00<br/>Sábados: 9:00 - 13:00</p>
          </div>
        </div>
        <p className="copyright">&copy; 2025 Marianela Breit Inmobiliaria. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App

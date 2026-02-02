import './App.css'
import logo from './assets/Icon_secondV.png'
import { useState, useEffect } from 'react'
import Carrusel from './components/Carrusel'
import PROPIEDADES_DATA from './data/propiedades.json'

function App() {
  const [vistaActual, setVistaActual] = useState('inicio')
  const [filtroTipo, setFiltroTipo] = useState(null)
  const [filtroOperacion, setFiltroOperacion] = useState(null)
    const [selectedPropId, setSelectedPropId] = useState(null);

  const handleNavegar = (vista, tipo = null, operacion = null) => {
    // Si el destino es 'nosotros', primero ir a inicio y luego navegar al hash
    if (vista === 'nosotros') {
      setVistaActual('inicio');
      setFiltroTipo(null);
      setFiltroOperacion(null);
      setTimeout(() => {
        window.location.hash = '#nosotros';
        window.scrollTo(0, 0);
      }, 10);
      return;
    }
      setVistaActual(vista);
      setFiltroTipo(tipo);
      setFiltroOperacion(operacion);
      if (vista === 'inicio') {
        window.location.hash = '#inicio';
        setSelectedPropId(null);
      } else if (vista === 'propiedades') {
        window.location.hash = '#propiedades';
        if (!tipo && !operacion) setSelectedPropId(null);
      }
      setTimeout(() => window.scrollTo(0, 0), 10);
  }

    const propiedadesFiltradas = selectedPropId
      ? PROPIEDADES_DATA.filter(prop => prop.id === selectedPropId)
      : PROPIEDADES_DATA.filter(prop => {
          if (filtroTipo && prop.tipo !== filtroTipo) return false;
          if (filtroOperacion && prop.operacion !== filtroOperacion) return false;
          return true;
        });

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
        <div className="header-row">
          <div className="header-brand">
            <img src={logo} alt="Logo Inmobiliaria" className="logo" />
            <h1>Marianela Breit Inmobiliaria</h1>
          </div>
        </div>
        <div className="header-links">
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
                      <a onClick={() => handleNavegar('propiedades', 'casa', 'alquiler')} style={{cursor: 'pointer'}}>Alquilar</a>
                  </div>
                </div>
                <div className="dropdown-item">
                  <a onClick={() => handleNavegar('propiedades', 'departamento')} style={{cursor: 'pointer'}}>Departamentos <span className="arrow-right">▶</span></a>
                  <div className="submenu">
                      <a onClick={() => handleNavegar('propiedades', 'departamento', 'venta')} style={{cursor: 'pointer'}}>Comprar</a>
                      <a onClick={() => handleNavegar('propiedades', 'departamento', 'alquiler')} style={{cursor: 'pointer'}}>Alquilar</a>
                  </div>
                </div>
                <div className="dropdown-item">
                  <a onClick={() => handleNavegar('propiedades', 'campo')} style={{cursor: 'pointer'}}>Campos <span className="arrow-right">▶</span></a>
                  <div className="submenu">
                      <a onClick={() => handleNavegar('propiedades', 'campo', 'venta')} style={{cursor: 'pointer'}}>Comprar</a>
                      <a onClick={() => handleNavegar('propiedades', 'campo', 'alquiler')} style={{cursor: 'pointer'}}>Alquilar</a>
                  </div>
                </div>
                <div className="dropdown-item">
                  <a onClick={() => handleNavegar('propiedades', 'terreno')} style={{cursor: 'pointer'}}>Terrenos <span className="arrow-right">▶</span></a>
                  <div className="submenu">
                      <a onClick={() => handleNavegar('propiedades', 'terreno', 'venta')} style={{cursor: 'pointer'}}>Comprar</a>
                      <a onClick={() => handleNavegar('propiedades', 'terreno', 'alquiler')} style={{cursor: 'pointer'}}>Alquilar</a>
                  </div>
                </div>
              </div>
            </div>
            <a onClick={() => handleNavegar('nosotros')} style={{cursor: 'pointer'}}>Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
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
              {/* Cambia los IDs aquí para elegir qué propiedades mostrar como destacadas */}
              {/** Para cambiar las destacadas, edita el array IDS_DESTACADAS abajo **/}
              <div className="propiedades-grid">
                {(() => {
                  const IDS_DESTACADAS = [1, 3, 6]; // <--- Cambia estos IDs según tus preferencias
                  return PROPIEDADES_DATA.filter(prop => IDS_DESTACADAS.includes(prop.id)).map((prop) => (
                    <div key={prop.id} className="propiedad-card">
                      <div className="card-badge">{prop.operacion === 'venta' ? 'En Venta' : 'En Alquiler'}</div>
                      <div className="card-carrusel-mini">
                        <Carrusel imagenes={prop.imagenes} mini />
                      </div>
                      <div className="card-content">
                        <h4>{prop.titulo}</h4>
                        <p className="ubicacion">📍 {prop.ubicacion}</p>
                        {prop.dormitorios > 0 && (
                          <div className="detalles">
                            <span>🛏️ {prop.dormitorios} dormitorios</span>
                            <span>🚿 {prop.banos} baños</span>
                          </div>
                        )}
                        <div className="precio-vermas-row">
                          <p className="precio">${prop.precio.toLocaleString()}</p>
                          <button className="ver-mas" onClick={() => {
                            setSelectedPropId(prop.id);
                            setVistaActual('propiedades');
                            setFiltroTipo(null);
                            setFiltroOperacion(null);
                            window.location.hash = '#propiedades';
                            setTimeout(() => window.scrollTo(0, 0), 10);
                          }}>Ver detalles</button>
                        </div>
                      </div>
                    </div>
                  ))
                })()}
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
                      <button className="btn-contactar" onClick={() => {
                        const contacto = document.getElementById('contacto');
                        if (contacto) {
                          contacto.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}>Contactar</button>
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

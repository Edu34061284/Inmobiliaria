import './App.css'
import logo from './assets/Icon_secondV.png'

function App() {
  return (
    <div className="App" id="inicio">
      <header className="header">
        <div className="header-brand">
          <img src={logo} alt="Logo Inmobiliaria" className="logo" />
          <h1>Marianela Breit Inmobiliaria</h1>
        </div>
        <nav>
          <a href="#inicio">Inicio</a>
          <div className="dropdown">
            <a href="#propiedades" className="dropdown-toggle">
              Propiedades <span className="arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <a href="#casas">Casas <span className="arrow-right">▶</span></a>
                <div className="submenu">
                  <a href="#casas-comprar">Comprar</a>
                  <a href="#casas-vender">Vender</a>
                  <a href="#casas-alquilar">Alquilar</a>
                </div>
              </div>
              <div className="dropdown-item">
                <a href="#departamentos">Departamentos <span className="arrow-right">▶</span></a>
                <div className="submenu">
                  <a href="#departamentos-comprar">Comprar</a>
                  <a href="#departamentos-vender">Vender</a>
                  <a href="#departamentos-alquilar">Alquilar</a>
                </div>
              </div>
              <div className="dropdown-item">
                <a href="#campos">Campos <span className="arrow-right">▶</span></a>
                <div className="submenu">
                  <a href="#campos-comprar">Comprar</a>
                  <a href="#campos-vender">Vender</a>
                  <a href="#campos-alquilar">Alquilar</a>
                </div>
              </div>
              <div className="dropdown-item">
                <a href="#terrenos">Terrenos <span className="arrow-right">▶</span></a>
                <div className="submenu">
                  <a href="#terrenos-comprar">Comprar</a>
                  <a href="#terrenos-vender">Vender</a>
                  <a href="#terrenos-alquilar">Alquilar</a>
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

      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h2>Más que propiedades, construimos historias</h2>
            <p>Las mejores propiedades en Río Cuarto - Calamuchita - Carlos Paz</p>
            <button className="cta-button">Ver Propiedades</button>
          </div>
        </section>

        <section className="propiedades-destacadas" id="propiedades">
          <h3>Propiedades Destacadas</h3>
          <div className="propiedades-grid">
            <div className="propiedad-card">
              <div className="card-badge">En Venta</div>
              <div className="card-content">
                <h4>Casa en el centro</h4>
                <p className="ubicacion">📍 Río Cuarto</p>
                <div className="detalles">
                  <span>🛏️ 3 dormitorios</span>
                  <span>🚿 2 baños</span>
                </div>
                <p className="precio">$250,000</p>
                <button className="ver-mas">Ver detalles</button>
              </div>
            </div>
            <div className="propiedad-card">
              <div className="card-badge destacado">Destacado</div>
              <div className="card-content">
                <h4>Apartamento moderno</h4>
                <p className="ubicacion">📍 Carlos Paz</p>
                <div className="detalles">
                  <span>🛏️ 2 dormitorios</span>
                  <span>🚿 1 baño</span>
                </div>
                <p className="precio">$180,000</p>
                <button className="ver-mas">Ver detalles</button>
              </div>
            </div>
            <div className="propiedad-card">
              <div className="card-badge">En Venta</div>
              <div className="card-content">
                <h4>Casa con jardín</h4>
                <p className="ubicacion">📍 Calamuchita</p>
                <div className="detalles">
                  <span>🛏️ 4 dormitorios</span>
                  <span>🚿 3 baños</span>
                </div>
                <p className="precio">$350,000</p>
                <button className="ver-mas">Ver detalles</button>
              </div>
            </div>
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

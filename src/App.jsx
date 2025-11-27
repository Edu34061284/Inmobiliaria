import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Inmobiliaria</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#propiedades">Propiedades</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Encuentra tu hogar ideal</h2>
          <p>Las mejores propiedades en venta y alquiler</p>
        </section>

        <section className="propiedades-destacadas">
          <h3>Propiedades Destacadas</h3>
          <div className="propiedades-grid">
            <div className="propiedad-card">
              <h4>Casa en el centro</h4>
              <p>3 dormitorios - 2 baños</p>
              <p className="precio">$250,000</p>
            </div>
            <div className="propiedad-card">
              <h4>Apartamento moderno</h4>
              <p>2 dormitorios - 1 baño</p>
              <p className="precio">$180,000</p>
            </div>
            <div className="propiedad-card">
              <h4>Casa con jardín</h4>
              <p>4 dormitorios - 3 baños</p>
              <p className="precio">$350,000</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Inmobiliaria. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App

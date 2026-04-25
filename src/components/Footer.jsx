function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "white",
        padding: "60px 40px 30px",
      }}
    >
      {/* CONTENEDOR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around", 
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* COLUMNA 1 */}
        <div style={{ maxWidth: "250px" }}>
          <h3>URBAN THREADS</h3>
          <p style={{ color: "#9ca3af", fontSize: "14px" }}>
            Redefiniendo el estilo urbano con diseños minimalistas y calidad
            premium.
          </p>
        </div>

        {/* COLUMNA 2 */}
        <div>
          <h4>ENLACES</h4>
          <p style={{ color: "#9ca3af" }}>Inicio</p>
          <p style={{ color: "#9ca3af" }}>Productos</p>
          <p style={{ color: "#9ca3af" }}>Contacto</p>
        </div>

        {/* COLUMNA 3 */}
        <div>
          <h4>AYUDA</h4>
          <p style={{ color: "#9ca3af" }}>Guía de tallas</p>
          <p style={{ color: "#9ca3af" }}>Envíos</p>
          <p style={{ color: "#9ca3af" }}>Devoluciones</p>
          <p style={{ color: "#9ca3af" }}>FAQ</p>
        </div>

        {/* COLUMNA 4 */}
        <div>
          <h4>SÍGUENOS</h4>
          <p style={{ color: "#9ca3af", fontSize: "18px" }}>
            🌐 📸 🛍️
          </p>
        </div>
      </div>

      {/* LINEA */}
      <hr
        style={{
          margin: "30px 0",
          borderColor: "#374151",
        }}
      />

      {/* COPYRIGHT */}
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "#9ca3af",
        }}
      >
        © 2024 Urban Threads. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
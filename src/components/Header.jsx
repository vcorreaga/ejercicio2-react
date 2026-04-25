function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#111",
        color: "white",
      }}
    >
      <h2>URBAN THREADS</h2>

      <nav>
        <a href="/" style={{ margin: "10px", color: "white" }}>
          Inicio
        </a>

        <a href="/productos" style={{ margin: "10px", color: "white" }}>
          Productos
        </a>

        <a href="/contacto" style={{ margin: "10px", color: "white" }}>
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Header;
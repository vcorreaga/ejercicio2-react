import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "80px",
        background: "linear-gradient(to right, #111, #2a2a2a)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center", 
      }}
    >
      {/* CONTENEDOR INTERNO */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px", 
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          color: "white",
        }}
      >
        <h2>URBAN THREADS</h2>

        <nav style={{ display: "flex", gap: "40px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Inicio
          </Link>

          <Link to="/productos" style={{ color: "white", textDecoration: "none" }}>
            Productos
          </Link>

          <Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
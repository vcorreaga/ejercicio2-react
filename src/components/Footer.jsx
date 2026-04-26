import { Link } from "react-router-dom";
import { Globe, Camera, ShoppingCart } from "lucide-react";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(to right, #111, #222)",
        color: "white",
        padding: "60px 40px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* COLUMNA 1 */}
        <div style={{ maxWidth: "250px" }}>
          <h3>URBAN THREADS</h3>
          <p style={{ color: "#9ca3af", fontSize: "14px" }}>
            Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.
          </p>
        </div>

        {/* COLUMNA 2 */}
        <div>
          <h4>ENLACES</h4>

          <Link to="/" style={linkStyle}>Inicio</Link>
          <Link to="/productos" style={linkStyle}>Productos</Link>
          <Link to="/contacto" style={linkStyle}>Contacto</Link>
        </div>

        {/* COLUMNA 3 */}
        <div>
          <h4>AYUDA</h4>

          <Link to="/" style={linkStyle}>Guía de tallas</Link>
          <Link to="/" style={linkStyle}>Envíos</Link>
          <Link to="/" style={linkStyle}>Devoluciones</Link>
          <Link to="/" style={linkStyle}>FAQ</Link>
        </div>

        {/* COLUMNA 4 */}
        <div>
          <h4>SÍGUENOS</h4>

          <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <Globe style={iconStyle} />
            <ShoppingCart style={iconStyle} />
            <Camera style={iconStyle} />
          </div>
        </div>
      </div>

      <hr
        style={{
          margin: "30px auto",
          maxWidth: "1200px",
          borderColor: "#374151",
        }}
      />

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


/* estilos */
const linkStyle = {
  display: "block",
  color: "#9ca3af",
  textDecoration: "none",
  marginTop: "8px",
  transition: "0.3s",
};

const iconStyle = {
  color: "#9ca3af",
  cursor: "pointer",
  transition: "0.3s",
};
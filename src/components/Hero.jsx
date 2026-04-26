import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        color: "white",
        textAlign: "center",
        padding: "160px 20px 100px",
        margin: 0, // 👈 elimina cualquier espacio
      }}
    >
      <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
        ESTILO URBANO <br />
        <span style={{ color: "#f4a300" }}>REDEFINIDO</span>
      </h1>

      <p style={{ marginBottom: "30px", fontSize: "18px" }}>
        Descubre nuestra colección exclusiva de ropa urbana minimalista
      </p>

      <Link
        to="/productos"
        style={{
          background: "#f4a300",
          padding: "14px 28px",
          textDecoration: "none",
          color: "black",
          fontWeight: "bold",
        }}
      >
        EXPLORAR COLECCIÓN
      </Link>
    </section>
  );
}

export default Hero;
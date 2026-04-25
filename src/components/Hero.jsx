function Hero() {
  return (
    <section
      style={{
        background: "#111",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
        marginBottom: "60px",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>
        ESTILO URBANO <br />
        <span style={{ color: "#f4a300" }}>REDEFINIDO</span>
      </h1>

      <p style={{ margin: "20px 0" }}>
        Descubre nuestra colección exclusiva de ropa urbana minimalista
      </p>

      <button
        style={{
          background: "#f4a300",
          border: "none",
          padding: "12px 20px",
          cursor: "pointer",
        }}
      >
        EXPLORAR COLECCIÓN
      </button>
    </section>
  );
}

export default Hero;
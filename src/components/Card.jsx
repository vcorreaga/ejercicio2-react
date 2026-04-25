function Card({ title, text, icon }) {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "250px",
        marginTop: "10px", // 👈 alineación
      }}
    >
      {/* ICONO */}
      <div
        style={{
          background: "#111827",
          width: "60px",
          height: "60px",
          margin: "0 auto 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "4px",
          fontSize: "22px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#6b7280",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default Card;
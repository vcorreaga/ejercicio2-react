function Card({ title, text, icon }) {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "260px",
      }}
    >
      {/* ICONO */}
      <div
        style={{
          background: "#0f172a",
          width: "60px",
          height: "60px",
          margin: "0 auto 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontSize: "18px",
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
          lineHeight: "1.6",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default Card;
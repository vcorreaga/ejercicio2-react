function ProductCard({ name, description, price }) {
  return (
    <div
      style={{
        background: "white",
        width: "220px",
        borderRadius: "6px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* IMAGEN */}
      <div
        style={{
          height: "200px",
          background: "#e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "40px",
          color: "#9ca3af",
        }}
      >
        🧍
      </div>

      {/* CONTENIDO */}
      <div style={{ padding: "15px" }}>
        <h3
          style={{
            fontSize: "15px",
            marginBottom: "5px",
          }}
        >
          {name}
        </h3>

        <p
          style={{
            fontSize: "13px",
            color: "#6b7280",
            marginBottom: "10px",
          }}
        >
          {description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{price}</span>

          <button
            style={{
              background: "#111827",
              color: "white",
              border: "none",
              padding: "6px 10px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            AÑADIR
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
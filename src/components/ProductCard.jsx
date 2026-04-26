import { User, ShoppingBag, Sliders, Trash2, Globe, Clock } from "lucide-react";

function ProductCard({ name, description, price, icon }) {
  return (
    <div
      style={{
        background: "white",
        width: "260px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
      }}
    >
      {/* ICONO GRANDE */}
      <div
        style={{
          height: "240px",
          background: "#e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>

      {/* CONTENIDO */}
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            fontSize: "16px",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          {name}
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            marginBottom: "15px",
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
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>
            {price}
          </span>

          <button
            style={{
              background: "#111827",
              color: "white",
              border: "none",
              padding: "8px 14px",
              cursor: "pointer",
              fontSize: "13px",
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
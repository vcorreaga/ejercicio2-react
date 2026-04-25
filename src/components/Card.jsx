function Card({ title, text }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        style={{
          background: "#111",
          color: "white",
          width: "50px",
          height: "50px",
          margin: "0 auto",
        }}
      ></div>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;
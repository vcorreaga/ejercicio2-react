import Header from "../components/Header";
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <Header />

      {/* TÍTULO */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "#f3f4f6",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          NUESTRA COLECCIÓN
        </h1>

        <p style={{ color: "#6b7280" }}>
          Estilo urbano para cada ocasión
        </p>
      </section>

      {/* ZONA DE PRODUCTOS (vacía por ahora) */}
      <section
        style={{
          background: "#f3f4f6",
          padding: "40px",
        }}
      >
        <p style={{ textAlign: "center" }}>
          Aquí van los productos...
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Products;
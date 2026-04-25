import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

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

      {/* PRODUCTOS */}
      <section
        style={{
          background: "#f3f4f6",
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <ProductCard
          name="Camiseta Básica Urban"
          description="Algodón 100% orgánico"
          price="€29"
        />

        <ProductCard
          name="Jeans Slim Fit"
          description="Denim premium stretch"
          price="€89"
        />

        <ProductCard
          name="Sudadera Oversize"
          description="Algodón French Terry"
          price="€65"
        />

        <ProductCard
          name="Chaqueta Bomber"
          description="Nylon resistente al agua"
          price="€120"
        />

        <ProductCard
          name="Gorra Snapback"
          description="Bordado premium"
          price="€35"
        />

        <ProductCard
          name="Zapatillas Urban"
          description="Suela de goma antideslizante"
          price="€95"
        />
      </section>

      <Footer />
    </>
  );
}

export default Products;
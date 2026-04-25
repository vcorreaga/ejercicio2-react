import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <>
      <Header />

      <section
        style={{
          background: "#f3f4f6",
          padding: "60px 40px",
        }}
      >
        {/* TÍTULO */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
            NUESTRA COLECCIÓN
          </h1>

          <p style={{ color: "#6b7280" }}>
            Estilo urbano para cada ocasión
          </p>
        </div>

        {/* PRODUCTOS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            justifyItems: "center",
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

          {/* FILA CENTRADA */}
          <div style={{ gridColumn: "2 / 3" }}>
            <ProductCard
              name="Gorra Snapback"
              description="Bordado premium"
              price="€35"
            />
          </div>

          <div style={{ gridColumn: "3 / 4" }}>
            <ProductCard
              name="Zapatillas Urban"
              description="Suela de goma antideslizante"
              price="€95"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Products;
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <Hero />

      {/* SECCIÓN DE TARJETAS */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          padding: "60px 40px",
          background: "#f3f4f6",
        }}
      >
        <Card
          icon="✦"
          title="DISEÑO ÚNICO"
          text="Piezas exclusivas con estética urbana y minimalista"
        />

        <Card
          icon="✔"
          title="CALIDAD PREMIUM"
          text="Materiales de alta calidad para máxima durabilidad"
        />

        <Card
          icon="⚡"
          title="ENVÍO RÁPIDO"
          text="Entrega express en 24-48 horas"
        />
      </section>

      <Footer />
    </>
  );
}

export default Home;
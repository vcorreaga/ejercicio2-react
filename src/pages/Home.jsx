import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Header />
      <Hero />

      <section style={{ display: "flex", justifyContent: "space-around" }}>
        <Card
          title="DISEÑO ÚNICO"
          text="Piezas exclusivas con estética urbana y minimalista"
        />

        <Card
          title="CALIDAD PREMIUM"
          text="Materiales de alta calidad para máxima durabilidad"
        />

        <Card
          title="ENVÍO RÁPIDO"
          text="Entrega express en 24-48 horas"
        />
      </section>
    </>
  );
}

export default Home;
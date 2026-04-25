import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Header />
      <Hero />

<section
  style={{
    display: "flex",
    justifyContent: "center", 
    padding: "60px 40px",
    background: "#f3f4f6", 
    gap: "80px",
  }}
>
  <Card icon="✦" title="DISEÑO ÚNICO" text="Piezas exclusivas con estética urbana y minimalista" />
  <Card icon="✔" title="CALIDAD PREMIUM" text="Materiales de alta calidad para máxima durabilidad" />
  <Card icon="⚡" title="ENVÍO RÁPIDO" text="Entrega express en 24-48 horas" />
</section>
    </>
  );
}

export default Home;
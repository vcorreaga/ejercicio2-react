import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Sparkles, CheckCircle, Zap } from "lucide-react";

function Home() {
  return (
    <>
      <Header />
      <Hero />

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
          icon={<Sparkles size={20} strokeWidth={1.5} color="white" />}
          title="DISEÑO ÚNICO"
          text="Piezas exclusivas con estética urbana y minimalista"
        />
        <Card
          icon={<CheckCircle size={20} strokeWidth={1.5} color="white" />}
          title="CALIDAD PREMIUM"
          text="Materiales de alta calidad para máxima durabilidad"
        />
        <Card
          icon={<Zap size={20} strokeWidth={1.5} color="#f4a300" />}
          title="ENVÍO RÁPIDO"
          text="Entrega express en 24-48 horas"
        />
      </section>

      <Footer />
    </>
  );
}

export default Home;
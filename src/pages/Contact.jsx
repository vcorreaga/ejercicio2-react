import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
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
            CONTACTO
          </h1>

          <p style={{ color: "#6b7280" }}>
            ¿Tienes alguna pregunta? Nos encantaría escucharte
          </p>
        </div>

        {/* CONTENIDO */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* IZQUIERDA */}
          <div>
            <h2 style={{ marginBottom: "20px" }}>
              INFORMACIÓN DE CONTACTO
            </h2>

            <p><strong>DIRECCIÓN</strong></p>
            <p style={{ marginBottom: "15px" }}>
              Calle Urban Style 123 <br />
              Medellín, Colombia
            </p>

            <p><strong>TELÉFONO</strong></p>
            <p style={{ marginBottom: "15px" }}>
              +57 300 123 4567
            </p>

            <p><strong>EMAIL</strong></p>
            <p style={{ marginBottom: "15px" }}>
              info@urbanthreads.com
            </p>

            <p><strong>HORARIO</strong></p>
            <p>
              Lun - Vie: 9:00 - 18:00 <br />
              Sáb: 10:00 - 14:00
            </p>
          </div>

          {/* DERECHA (FORMULARIO) */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>
              ENVÍANOS UN MENSAJE
            </h2>

            <p
              style={{
                background: "#fef3c7",
                padding: "10px",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              Demo: Este es un formulario de demostración.
            </p>

            <form>
              <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <input placeholder="Nombre" style={{ flex: 1, padding: "10px" }} />
                <input placeholder="Apellidos" style={{ flex: 1, padding: "10px" }} />
              </div>

              <input
                placeholder="Email"
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
              />

              <select
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
              >
                <option>Selecciona un asunto</option>
              </select>

              <textarea
                placeholder="Mensaje"
                style={{ width: "100%", padding: "10px", height: "100px", marginBottom: "15px" }}
              />

              <button
                style={{
                  width: "100%",
                  background: "#111827",
                  color: "white",
                  padding: "12px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
            <h2 style={{ marginBottom: "30px" }}>
              INFORMACIÓN DE CONTACTO
            </h2>

            {/* DIRECCIÓN */}
            <div style={{ display: "flex", gap: "15px", marginBottom: "25px" }}>
              <div style={iconBox}>
                <MapPin size={20} />
              </div>

              <div>
                <strong>DIRECCIÓN</strong>
                <p>
                  Calle Urban Style 123 <br />
                  Medellín, Colombia
                </p>
              </div>
            </div>

            {/* TELÉFONO */}
            <div style={{ display: "flex", gap: "15px", marginBottom: "25px" }}>
              <div style={iconBox}>
                <Phone size={20} />
              </div>

              <div>
                <strong>TELÉFONO</strong>
                <p>+57 300 123 4567</p>
              </div>
            </div>

            {/* EMAIL */}
            <div style={{ display: "flex", gap: "15px", marginBottom: "25px" }}>
              <div style={iconBox}>
                <Mail size={20} />
              </div>

              <div>
                <strong>EMAIL</strong>
                <p>info@urbanthreads.com</p>
              </div>
            </div>

            {/* HORARIO */}
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={iconBox}>
                <Clock size={20} />
              </div>

              <div>
                <strong>HORARIO</strong>
                <p>
                  Lun - Vie: 9:00 - 18:00 <br />
                  Sáb: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          {/* DERECHA */}
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
                padding: "12px",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              Demo: Este es un formulario de demostración. Los mensajes no se enviarán realmente.
            </p>

            <form>
              {/* NOMBRE + APELLIDOS */}
              <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <input placeholder="Nombre" style={inputStyleHalf} />
                <input placeholder="Apellidos" style={inputStyleHalf} />
              </div>

              {/* EMAIL */}
              <input placeholder="Email" style={inputStyle} />

              {/* SELECT */}
              <select style={inputStyle}>
                <option>Selecciona un asunto</option>
                <option>Consulta general</option>
                <option>Información de producto</option>
                <option>Estado de pedido</option>
                <option>Devoluciones</option>
                <option>Otro</option>
              </select>

              {/* MENSAJE */}
              <textarea placeholder="Mensaje" style={textareaStyle} />

              {/* BOTÓN */}
              <button style={buttonStyle}>
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






/* 🔥 ESTILOS (ABAJO DEL ARCHIVO) */

const iconBox = {
  background: "#111827",
  padding: "12px",
  borderRadius: "4px",
  color: "white",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #d1d5db",
  outline: "none",
};

const inputStyleHalf = {
  flex: 1,
  padding: "12px",
  border: "1px solid #d1d5db",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  padding: "12px",
  height: "120px",
  marginBottom: "15px",
  border: "1px solid #d1d5db",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  background: "#111827",
  color: "white",
  padding: "12px",
  border: "none",
  cursor: "pointer",
};
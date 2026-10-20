export default function CommunityCTA() {
  return (
    <section style={{ marginBottom: "80px" }}>
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 48px)",
        }}
      >
        <div
          style={{
            border: "1px solid #1A1A1A",
            borderRadius: "6px",
            padding: "clamp(40px, 8vw, 72px) clamp(16px, 5vw, 48px)",
            textAlign: "center",
            background: "#0F0F0F",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "400px",
              height: "200px",
              background: "radial-gradient(ellipse, rgba(204,255,0,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <h2
            style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(38px, 8vw, 72px)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.95,
              marginBottom: "20px",
              position: "relative",
            }}
          >
            Tu próxima<br />
            <em style={{ fontStyle: "italic", color: "#CCFF00" }}>carrera</em>
            <br />
            empieza aquí.
          </h2>

          <p
            style={{
              maxWidth: "440px",
              margin: "0 auto 32px",
              fontSize: "15px",
              color: "#ABABAB",
              lineHeight: 1.7,
              position: "relative",
            }}
          >
            Crea tu perfil, elige tu deporte y conecta con atletas que ya están en el camino.
          </p>

          <button
            style={{
              height: "48px",
              padding: "0 32px",
              background: "#CCFF00",
              color: "#080808",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              position: "relative",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Crear mi perfil
          </button>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: "📖",
    title: "Aprende",
    desc: "Guías técnicas, planes de entrenamiento y todo lo que necesitas saber para competir.",
    cta: "Ver guías →",
  },
  {
    icon: "🗓️",
    title: "Compite",
    desc: "Calendario de carreras y competencias. Filtra por disciplina, distancia y región.",
    cta: "Ver eventos →",
  },
  {
    icon: "🏋️",
    title: "Entrena",
    desc: "Encuentra boxes, gimnasios y espacios de entrenamiento cerca tuyo.",
    cta: "Ver espacios →",
  },
  {
    icon: "🤝",
    title: "Conéctate",
    desc: "Únete a la comunidad. Comparte resultados, busca compañeros de entrenamiento.",
    cta: "Unirse →",
  },
];

export default function Pillars() {
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
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1,
            marginBottom: "28px",
          }}
        >
          Qué encuentras en TCC
        </div>

        <div className="pillars-grid">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="pillar-item"
              style={{
                background: "#0F0F0F",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#141414")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0F0F0F")}
            >
              <div style={{ fontSize: "28px", lineHeight: 1 }}>{p.icon}</div>
              <div
                style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "22px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: "#F2F2EF",
                }}
              >
                {p.title}
              </div>
              <div style={{ fontSize: "13px", color: "#ABABAB", lineHeight: 1.55 }}>{p.desc}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#CCFF00", marginTop: "auto", paddingTop: "8px" }}>
                {p.cta}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #1A1A1A;
          border: 1px solid #1A1A1A;
          border-radius: 6px;
          overflow: hidden;
        }
        @media (max-width: 720px) {
          .pillars-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 420px) {
          .pillars-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

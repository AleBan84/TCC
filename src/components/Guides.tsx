const guides = [
  { discipline: "Triatlón",  title: "Cómo empezar en triatlón desde cero" },
  { discipline: "CrossFit",  title: "Los movimientos básicos del CrossFit explicados" },
  { discipline: "Hyrox",     title: "Qué es Hyrox y cómo prepararte para tu primera carrera" },
  { discipline: "Triatlón",  title: "Guía de equipamiento para Ironman 70.3" },
  { discipline: "Nutrición", title: "Nutrición para atletas de resistencia: lo esencial" },
  { discipline: "CrossFit",  title: "Cómo prepararse para el CrossFit Open" },
];

export default function Guides() {
  return (
    <section style={{ marginBottom: "80px" }}>
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 48px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "16px",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Guías Destacadas
          </div>
          <a href="#" style={{ fontSize: "13px", fontWeight: 500, color: "#CCFF00", opacity: 0.8, textDecoration: "none" }}>
            Ver todas →
          </a>
        </div>

        <div className="guides-grid">
          {guides.map((g) => (
            <div
              key={g.title}
              style={{
                background: "#0F0F0F",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#141414")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0F0F0F")}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#666",
                }}
              >
                {g.discipline}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#F2F2EF",
                  lineHeight: 1.4,
                  textWrap: "balance",
                } as React.CSSProperties}
              >
                {g.title}
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "#CCFF00",
                  marginTop: "auto",
                  paddingTop: "12px",
                }}
              >
                →
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .guides-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #1A1A1A;
          border: 1px solid #1A1A1A;
          border-radius: 6px;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .guides-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 380px) {
          .guides-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

const profiles = [
  { num: "01", title: "Primer deporte competitivo",  desc: "Nunca has competido. Quieres empezar con el pie derecho." },
  { num: "02", title: "Cambio de disciplina",         desc: "Vienes del running y quieres hacer tu primer triatlón." },
  { num: "03", title: "Múltiples deportes",           desc: "Haces CrossFit y quieres sumar Hyrox a tu calendario." },
  { num: "04", title: "Atleta en busca de comunidad", desc: "Compites regularmente y quieres conectar con otros atletas." },
  { num: "05", title: "Sin actividad física previa",  desc: "Quieres hacer deporte por primera vez con un objetivo claro." },
  { num: "06", title: "El que las quiere todas",      desc: "Triatlón, CrossFit, Hyrox — quieres competir en todo." },
];

export default function Profiles() {
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
          ¿Para quién es TCC?
        </div>

        <div className="profiles-grid">
          {profiles.map((p) => (
            <div
              key={p.num}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "20px 24px",
                border: "1px solid #1A1A1A",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#3A3A3A")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1A1A1A")}
            >
              <div
                style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "32px",
                  fontWeight: 900,
                  color: "#CCFF00",
                  lineHeight: 1,
                  flexShrink: 0,
                  fontVariantNumeric: "tabular-nums",
                  opacity: 0.5,
                }}
              >
                {p.num}
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#F2F2EF", marginBottom: "4px" }}>
                  {p.title}
                </div>
                <div style={{ fontSize: "13px", color: "#ABABAB" }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (max-width: 540px) {
          .profiles-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

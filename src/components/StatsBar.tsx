const stats = [
  { num: "12", suffix: "K+", label: "Atletas activos" },
  { num: "340", suffix: "+", label: "Eventos al año" },
  { num: "80", suffix: "+", label: "Guías técnicas" },
  { num: "7", suffix: "", label: "Disciplinas" },
];

export default function StatsBar() {
  return (
    <div
      style={{
        borderTop: "1px solid #1A1A1A",
        borderBottom: "1px solid #1A1A1A",
        padding: "28px clamp(16px, 5vw, 48px)",
        marginBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          textAlign: "center",
        }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(36px, 6vw, 52px)",
                fontWeight: 900,
                lineHeight: 1,
                color: "#F2F2EF",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {s.num}
              <span style={{ color: "#CCFF00" }}>{s.suffix}</span>
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#666",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginTop: "6px",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 560px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}

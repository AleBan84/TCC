const events = [
  {
    badge: "TRI",
    badgeClass: "tri",
    name: "Ironman 70.3 Viña del Mar",
    date: "15 Feb 2025",
    distance: "1.9 / 90 / 21 km",
  },
  {
    badge: "HYROX",
    badgeClass: "hyrox",
    name: "Hyrox Santiago 2025",
    date: "22 Mar 2025",
    distance: "8 km + 8 estaciones",
  },
  {
    badge: "CF",
    badgeClass: "cf",
    name: "CrossFit Open 2025",
    date: "27 Feb – 17 Mar",
    distance: "3 workouts",
  },
  {
    badge: "TRI",
    badgeClass: "tri",
    name: "Triatlón Olímpico Concepción",
    date: "12 Abr 2025",
    distance: "1.5 / 40 / 10 km",
  },
  {
    badge: "RUN",
    badgeClass: "run",
    name: "Maratón de Santiago 2025",
    date: "6 Abr 2025",
    distance: "42.2 km",
  },
];

const badgeStyles: Record<string, { bg: string; color: string }> = {
  tri:   { bg: "rgba(0,180,255,0.15)",  color: "#00B4FF" },
  cf:    { bg: "rgba(255,100,0,0.15)",  color: "#FF6400" },
  hyrox: { bg: "rgba(204,255,0,0.12)",  color: "#CCFF00" },
  run:   { bg: "rgba(160,255,160,0.1)", color: "#80FF80" },
};

export default function Events() {
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
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Próximas Carreras
          </div>
          <a
            href="#"
            style={{ fontSize: "13px", fontWeight: 500, color: "#CCFF00", opacity: 0.8, textDecoration: "none" }}
          >
            Ver calendario completo →
          </a>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "480px",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #1A1A1A" }}>
                {["Evento", "Fecha", "Distancia", ""].map((h, i) => (
                  <th
                    key={i}
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#666",
                      padding: "0 12px 12px 0",
                      textAlign: i === 3 ? "right" : "left",
                    }}
                    className={i === 1 ? "col-date" : i === 2 ? "col-dist" : ""}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => {
                const bs = badgeStyles[ev.badgeClass];
                return (
                  <tr
                    key={ev.name}
                    style={{
                      borderBottom: "1px solid #1A1A1A",
                      cursor: "pointer",
                      transition: "background 0.12s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#0F0F0F")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <td style={{ padding: "16px 12px 16px 0", verticalAlign: "middle" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 600, color: "#F2F2EF", fontSize: "14px" }}>
                        <span
                          style={{
                            padding: "2px 8px",
                            borderRadius: "4px",
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            background: bs.bg,
                            color: bs.color,
                            flexShrink: 0,
                          }}
                        >
                          {ev.badge}
                        </span>
                        {ev.name}
                      </div>
                    </td>
                    <td className="col-date" style={{ padding: "16px 12px 16px 0", fontSize: "14px", color: "#ABABAB", verticalAlign: "middle" }}>
                      {ev.date}
                    </td>
                    <td className="col-dist" style={{ padding: "16px 12px 16px 0", fontSize: "14px", color: "#ABABAB", verticalAlign: "middle", fontVariantNumeric: "tabular-nums" }}>
                      {ev.distance}
                    </td>
                    <td style={{ padding: "16px 0", textAlign: "right", verticalAlign: "middle" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 12px",
                          border: "1px solid #1A1A1A",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "#ABABAB",
                          transition: "border-color 0.15s, color 0.15s",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Inscribirse
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .col-dist, .col-date { display: none; }
        }
      `}</style>
    </section>
  );
}

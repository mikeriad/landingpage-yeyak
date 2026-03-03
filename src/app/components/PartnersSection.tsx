import { useIsMobile } from "../hooks/useIsMobile";

const partners = [
  "Accelify",
  "NovaSoft",
  "PulseHQ",
  "Vertex Co",
  "Luminary",
  "Stackr",
  "Coreline",
  "Bridgeworks",
];

export function PartnersSection() {
  const isMobile = useIsMobile();

  return (
    <section style={{ padding: isMobile ? "60px 20px" : "100px 32px", background: "#F3F4F6", textAlign: "center" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#FF774C",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 16,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Trusted By
        </div>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            color: "#1A1A2E",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: "0 0 20px",
          }}
        >
          Partners & investors
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "#6B7280",
            maxWidth: 600,
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
            margin: "0 auto 64px",
          }}
        >
          We're backed by world-class investors and trusted by industry-leading companies around the globe.
        </p>

        {/* Partner grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? 16 : 24,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {partners.map((name) => (
            <div
              key={name}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: isMobile ? "24px 16px" : "32px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #E5E7EB",
                minHeight: isMobile ? 80 : 100,
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#005BF3";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,91,243,0.08)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                (e.currentTarget as HTMLDivElement).style.transform = "";
              }}
            >
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? 14 : 16,
                  color: "#6B7280",
                  letterSpacing: "-0.01em",
                  opacity: 0.6,
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 48,
            fontSize: 14,
            color: "#6B7280",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          And 200+ more businesses who trust Yeyak every day.
        </p>
      </div>
    </section>
  );
}

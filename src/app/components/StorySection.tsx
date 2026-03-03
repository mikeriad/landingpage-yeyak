import { useIsMobile } from "../hooks/useIsMobile";

export function StorySection() {
  const isMobile = useIsMobile();

  const colorMeanings = [
    {
      color: "#FF774C",
      name: "Yeyak Orange",
      desc: "Energy, warmth, and action. Our orange represents the momentum we give to every business that trusts us with their time.",
    },
    {
      color: "#005BF3",
      name: "Yeyak Blue",
      desc: "Trust, reliability, and intelligence. Our blue reflects the confidence customers feel when they choose Yeyak as their scheduling backbone.",
    },
  ];

  return (
    <section style={{ padding: isMobile ? "60px 20px" : "100px 32px", background: "#F3F4F6" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
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
          Brand Story
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
          Born from frustration,<br />built with care
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "#6B7280",
            maxWidth: 600,
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          The name "Yeyak" comes from an old word for gathering — a moment when people come together
          with intention.
        </p>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 40 : 80,
            marginTop: 64,
            alignItems: "start",
          }}
        >
          {/* Story text */}
          <div>
            {[
              "It started in 2019 when our founder, frustrated by back-and-forth emails just to confirm a meeting, sketched out the first version of Yeyak on a napkin. The core idea was simple: give people a link, let them pick a time, and get on with their day.",
              "What began as a side project quickly grew into something bigger. Small businesses loved it. Clinics used it. Coaches recommended it. By 2021, Yeyak had quietly become the scheduling backbone for over 10,000 businesses — without a single cent spent on advertising.",
              "Today, Yeyak serves customers in 48 cities across 12 countries. We've grown to a team of 60, raised a Series A, and we're just getting started. Every line of code we write, every feature we ship, still connects back to that original napkin idea: make booking time effortless.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: "#2D2D3F",
                  marginBottom: i < 2 ? 24 : 0,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Color meaning cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {colorMeanings.map((c) => (
              <div
                key={c.name}
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  padding: 28,
                  background: "#fff",
                  borderRadius: 12,
                  transition: "transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: c.color,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 16,
                      fontWeight: 600,
                      marginBottom: 6,
                      letterSpacing: "-0.01em",
                      color: "#1A1A2E",
                    }}
                  >
                    {c.name}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6B7280",
                      lineHeight: 1.6,
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Typography callout */}
            <div
              style={{
                padding: 28,
                background: "#1A1A2E",
                borderRadius: 12,
                color: "#fff",
              }}
            >
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 6,
                  color: "#FF774C",
                }}
              >
                Typography
              </div>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  marginBottom: 4,
                }}
              >
                Outfit
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Display typeface — bold, modern, confident
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.7)",
                  marginTop: 12,
                }}
              >
                DM Sans — clean, readable, human
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

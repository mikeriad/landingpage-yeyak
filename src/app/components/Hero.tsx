import { useIsMobile } from "../hooks/useIsMobile";

export function Hero() {
  const isMobile = useIsMobile();

  const stats = [
    { number: "120K+", label: "Active Users" },
    { number: "48", label: "Cities Served" },
    { number: "3.2M", label: "Bookings Made" },
    { number: "99.9%", label: "Uptime SLA" },
  ];

  const videoUrl = "https://github.com/mikeriad/landingpage-yeyak/raw/01326f87faa6bff136145ff77624212abd49d786/mike_create_a_image_of_business_man_caucasian_traveling_in_ai_a962513d-6702-4a1e-8d60-62ee46b52c6e_3.mp4";

  return (
    <section
      style={{
        padding: isMobile ? "120px 20px 80px" : "180px 32px 100px",
        background: "#1A1A2E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Dark overlay so text stays readable */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(26,26,46,0.72) 0%, rgba(26,26,46,0.85) 100%)",
          zIndex: 1,
        }}
      />

      {/* Background glows */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(255,119,76,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(0,91,243,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 100,
            padding: "6px 16px 6px 8px",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#FF774C",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.7)",
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Our Story & Mission
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            maxWidth: 800,
            letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}
        >
          We're building the future of{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF774C, #FFB099)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            travel reservation
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: isMobile ? 16 : 18,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: 48,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Yeyak was founded with a single belief — that booking time shouldn't be complicated.
          We've spent years crafting a platform that puts people first.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, auto)",
            gap: isMobile ? "24px 32px" : 48,
            paddingTop: 48,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: isMobile ? 28 : 36,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.number}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 4,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}

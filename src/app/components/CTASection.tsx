export function CTASection() {
  return (
    <section
      style={{
        background: "#1A1A2E",
        textAlign: "center",
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(255,119,76,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(0,91,243,0.1) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: 16,
            margin: "0 0 16px",
          }}
        >
          Ready to simplify your scheduling?
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.5)",
            margin: "0 auto 40px",
            maxWidth: 500,
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Join 120,000+ users who've already made the switch. Free to start, no credit card required.
        </p>

        <a
          href="#"
          style={{
            background: "#FF774C",
            color: "#fff",
            padding: "14px 36px",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            transition: "all 0.3s",
            fontFamily: "'DM Sans', sans-serif",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#CC5F3D";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(255,119,76,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#FF774C";
            (e.currentTarget as HTMLAnchorElement).style.transform = "";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
          }}
        >
          Start for free
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

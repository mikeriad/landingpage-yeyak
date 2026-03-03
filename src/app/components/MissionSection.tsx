import { useIsMobile } from "../hooks/useIsMobile";

type CardProps = {
  dark?: boolean;
  fullWidth?: boolean;
  iconBg: string;
  iconColor: string;
  emoji: string;
  label: string;
  title: string;
  desc: string;
  isMobile: boolean;
};

function MissionCard({ dark, fullWidth, iconBg, iconColor, emoji, label, title, desc, isMobile }: CardProps) {
  return (
    <div
      style={{
        background: dark ? "#1A1A2E" : "#F3F4F6",
        borderRadius: 16,
        padding: isMobile ? 28 : 40,
        position: "relative",
        overflow: "hidden",
        gridColumn: fullWidth && !isMobile ? "1 / -1" : undefined,
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
          fontSize: 22,
        }}
      >
        <span style={{ color: iconColor }}>{emoji}</span>
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#FF774C",
          marginBottom: 12,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {label}
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: 16,
          lineHeight: 1.3,
          color: dark ? "#fff" : "#1A1A2E",
        }}
      >
        {title}
      </div>

      {/* Desc */}
      <p
        style={{
          fontSize: 15,
          color: dark ? "rgba(255,255,255,0.6)" : "#6B7280",
          lineHeight: 1.8,
          fontFamily: "'DM Sans', sans-serif",
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export function MissionSection() {
  const isMobile = useIsMobile();

  return (
    <section style={{ padding: isMobile ? "60px 20px" : "100px 32px", background: "#fff" }}>
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
          Who We Are
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
          Guided by purpose,<br />driven by people
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
          Every product decision we make comes back to one question: does this make life easier for the
          people using it?
        </p>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 16 : 32,
            marginTop: 64,
          }}
        >
          <MissionCard
            isMobile={isMobile}
            iconBg="#FFF0EB"
            iconColor="#FF774C"
            emoji="🎯"
            label="Our Mission"
            title="Simplify every booking, everywhere"
            desc="We believe the act of scheduling shouldn't require expertise. Yeyak removes friction from bookings for businesses of all sizes — from solo freelancers to enterprise teams managing thousands of appointments daily."
          />
          <MissionCard
            isMobile={isMobile}
            dark
            iconBg="rgba(255,255,255,0.1)"
            iconColor="#fff"
            emoji="🔭"
            label="Our Vision"
            title="A world where time is never wasted"
            desc="Our north star is a future where every interaction between people and businesses is seamless, intelligent, and respectful of everyone's time. We're laying the infrastructure to make that vision real."
          />
          <MissionCard
            isMobile={isMobile}
            fullWidth
            iconBg="#E8F0FE"
            iconColor="#005BF3"
            emoji="💙"
            label="Our Values"
            title="Trust, transparency, and relentless improvement"
            desc="We operate openly — our roadmap is public, our pricing is clear, and our support team is human. We obsess over feedback and ship improvements weekly. Great products are never finished, just better every day."
          />
        </div>
      </div>
    </section>
  );
}

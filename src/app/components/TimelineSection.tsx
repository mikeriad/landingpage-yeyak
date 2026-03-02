import { useEffect, useRef, useState } from "react";

const timelineItems = [
  {
    year: "2019",
    title: "The Napkin Idea",
    desc: "Our founder sketches the first concept for a frictionless booking tool. The goal: one link, zero back-and-forth.",
  },
  {
    year: "2020",
    title: "First 1,000 Users",
    desc: "Launched in private beta during lockdown. Word spread fast — freelancers, therapists, and coaches adopted Yeyak overnight.",
  },
  {
    year: "2021",
    title: "10K Businesses",
    desc: "Crossed 10,000 active businesses with zero ad spend. Pure product-led growth fuelled by referrals and glowing reviews.",
  },
  {
    year: "2022",
    title: "Series A — $8M",
    desc: "Raised our Series A to accelerate product development and expand into new markets across Europe and Asia-Pacific.",
  },
  {
    year: "2023",
    title: "Enterprise Launch",
    desc: "Launched Yeyak Enterprise with team scheduling, SSO, and advanced analytics. Signed first Fortune 500 customer.",
  },
  {
    year: "2024",
    title: "48 Cities, 12 Countries",
    desc: "Expanded globally with localisation in 9 languages. Named one of the top 50 fastest-growing SaaS platforms.",
  },
];

function TimelineItem({ item, index }: { item: typeof timelineItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isOdd = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: 48,
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
    >
      {/* Odd: content left, dot center, empty right */}
      {/* Even: empty left, dot center, content right */}

      {/* Left side */}
      <div style={{ width: "calc(50% - 40px)" }}>
        {isOdd && <TimelineCard item={item} isOdd={true} />}
      </div>

      {/* Dot */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 36,
          width: 16,
          height: 16,
          background: isOdd ? "#FF774C" : "#005BF3",
          borderRadius: "50%",
          border: "3px solid #fff",
          transform: "translateX(-50%)",
          zIndex: 2,
          boxShadow: `0 0 0 4px ${isOdd ? "rgba(255,119,76,0.15)" : "rgba(0,91,243,0.15)"}`,
        }}
      />

      {/* Right side */}
      <div style={{ width: "calc(50% - 40px)", marginLeft: "auto" }}>
        {!isOdd && <TimelineCard item={item} isOdd={false} />}
      </div>
    </div>
  );
}

function TimelineCard({ item, isOdd }: { item: typeof timelineItems[0]; isOdd: boolean }) {
  return (
    <div
      style={{
        padding: "28px 32px",
        background: "#F3F4F6",
        borderRadius: 12,
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "";
      }}
    >
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 13,
          fontWeight: 700,
          color: isOdd ? "#FF774C" : "#005BF3",
          marginBottom: 8,
        }}
      >
        {item.year}
      </div>
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          marginBottom: 8,
          color: "#1A1A2E",
        }}
      >
        {item.title}
      </div>
      <p
        style={{
          fontSize: 14,
          color: "#6B7280",
          lineHeight: 1.7,
          margin: 0,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {item.desc}
      </p>
    </div>
  );
}

export function TimelineSection() {
  return (
    <section style={{ padding: "100px 32px", background: "#fff" }}>
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
          Our Journey
        </div>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            color: "#1A1A2E",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: 20,
            margin: "0 0 20px",
          }}
        >
          Five years of milestones
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
          From a napkin sketch to serving over 120,000 users worldwide — here's how we got here.
        </p>

        {/* Timeline */}
        <div
          style={{
            marginTop: 64,
            position: "relative",
          }}
        >
          {/* Center line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "#E5E7EB",
              transform: "translateX(-50%)",
            }}
          />

          {timelineItems.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

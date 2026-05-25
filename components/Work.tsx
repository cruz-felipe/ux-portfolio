"use client";
import { useRef, useEffect, useState } from "react";

const PROJECTS = [
  {
    id: "dane-telecom",
    index: "01",
    title: "Dane Telecom",
    blurb: "A fragmented design ecosystem was slowing down engineering delivery across product and engineering teams.",
    metrics: ["50% faster handoff", "32% velocity boost"],
  },
  {
    id: "predictive-support-hub",
    index: "02",
    title: "Predictive Support Hub",
    blurb: "3,000 support agents navigating 32 legacy tools on every call. I replaced the ecosystem with a single workspace.",
    metrics: ["70% AHT reduction", "32\u21921 consolidation"],
  },
  {
    id: "b2b-sales-rescue",
    index: "03",
    title: "B2B Sales Rescue",
    blurb: "Sales agents needed 7 tools and 3 days of training to close one deal. I reduced that to a single flow and half a day.",
    metrics: ["75% quote acceleration", "83% faster onboarding"],
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 120}ms`,
        height: "100%",
      }}
    >
      <div
        data-cursor
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          border: `1px solid ${hovered ? "rgba(10,10,10,0.3)" : "rgba(10,10,10,0.18)"}`,
          borderRadius: "2px",
          overflow: "hidden",
          background: hovered ? "var(--ink)" : "transparent",
          transition: "background 0.35s ease, border-color 0.25s ease",
          cursor: "default",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Coming soon badge */}
        <div style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "transparent",
          color: hovered ? "rgba(255,255,255,0.45)" : "var(--muted)",
          border: `1px solid ${hovered ? "rgba(255,255,255,0.2)" : "rgba(10,10,10,0.18)"}`,
          fontFamily: "var(--font-body)",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "4px 8px",
          borderRadius: "2px",
          transition: "color 0.35s ease, border-color 0.35s ease",
        }}>
          Coming soon
        </div>

        <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Index */}
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: hovered ? "rgba(255,255,255,0.3)" : "var(--muted)",
            transition: "color 0.35s ease",
            display: "block",
            marginBottom: "1.25rem",
          }}>
            {project.index}
          </span>

          {/* Title */}
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: hovered ? "white" : "var(--ink)",
            marginBottom: "1rem",
            transition: "color 0.35s ease",
          }}>
            {project.title}
          </h2>

          {/* Blurb */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: hovered ? "rgba(255,255,255,0.7)" : "var(--ink)",
            opacity: hovered ? 1 : 0.72,
            marginBottom: "1.5rem",
            flex: 1,
            transition: "color 0.35s ease, opacity 0.35s ease",
          }}>
            {project.blurb}
          </p>

          {/* Metrics */}
          <div style={{
            display: "flex",
            gap: "1.5rem",
            paddingTop: "1.25rem",
            borderTop: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(10,10,10,0.12)"}`,
            transition: "border-color 0.35s ease",
          }}>
            {project.metrics.map((m) => (
              <span key={m} style={{
                fontFamily: "var(--font-display)",
                fontSize: "13px",
                fontWeight: 700,
                color: hovered ? "var(--red)" : "var(--ink)",
                transition: "color 0.35s ease",
              }}>
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Red bottom bar */}
        <div style={{
          height: "3px",
          background: "var(--red)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          flexShrink: 0,
        }} />
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" style={{ padding: "6rem 2.5rem" }}>
      <div style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginBottom: "2.5rem",
      }}>
        <h2 style={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--muted)",
          margin: 0,
        }}>
          Selected Work
        </h2>
        <span style={{
          fontFamily: "var(--font-body)",
          fontSize: "12px",
          color: "var(--muted)",
        }}>
          Case studies in progress
        </span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
      }}
        className="work-grid"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

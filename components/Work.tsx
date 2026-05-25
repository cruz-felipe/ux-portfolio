"use client";
import { useRef, useEffect, useState } from "react";

const PROJECTS = [
  {
    id: "dane-telecom",
    index: "01",
    title: "Dane Telecom",
    tags: ["Design System", "BSS", "Enterprise"],
    blurb:
      "Engineering delivery was stalling \u2014 not because of code, but because no one could agree on what \u2018done\u2019 looked like. I rebuilt the design system and the process around it.",
    metrics: ["50% faster handoff", "32% velocity boost"],
    status: "coming-soon",
  },
  {
    id: "predictive-support-hub",
    index: "02",
    title: "Predictive Support Hub",
    tags: ["AI Workspace", "B2C", "Telecom"],
    blurb:
      "3,000 support agents. 32 legacy tools. Every call a navigation problem. I led the redesign that collapsed the stack — and got engineering, product, and ops to agree on how.",
    metrics: ["70% AHT reduction", "32→1 consolidation"],
    status: "coming-soon",
  },
  {
    id: "b2b-sales-rescue",
    index: "03",
    title: "B2B Sales Rescue",
    tags: ["Sales UX", "B2B", "Flow Design"],
    blurb:
      "7 tools. 3 days of training. One deal. I designed the flow that cut that to a single session — then worked with business analysts and stakeholders to make sure it actually shipped.",
    metrics: ["75% quote acceleration", "83% faster onboarding"],
    status: "coming-soon",
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
      }}
    >
      <div
        data-cursor
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          border: "0.5px solid var(--border)",
          borderRadius: "2px",
          overflow: "hidden",
          background: hovered ? "var(--ink)" : "transparent",
          transition: "background 0.35s ease",
          cursor: "default",
        }}
      >
        {/* Coming soon overlay */}
        {project.status === "coming-soon" && (
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              zIndex: 10,
              background: "var(--red)",
              color: "white",
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "4px 8px",
              borderRadius: "2px",
            }}
          >
            Coming soon
          </div>
        )}

        {/* Card body */}
        <div style={{ padding: "2rem" }}>
          {/* Index + tags row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: hovered ? "rgba(255,255,255,0.3)" : "var(--muted)",
                transition: "color 0.35s ease",
              }}
            >
              {project.index}
            </span>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: hovered ? "rgba(255,255,255,0.5)" : "var(--muted)",
                    border: `0.5px solid ${hovered ? "rgba(255,255,255,0.2)" : "var(--border)"}`,
                    borderRadius: "2px",
                    padding: "3px 7px",
                    transition: "color 0.35s ease, border-color 0.35s ease",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: hovered ? "white" : "var(--ink)",
              marginBottom: "1rem",
              transition: "color 0.35s ease",
            }}
          >
            {project.title}
          </h2>

          {/* Blurb */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: 1.7,
              color: hovered ? "rgba(255,255,255,0.7)" : "var(--ink)",
              opacity: hovered ? 1 : 0.75,
              marginBottom: "1.5rem",
              transition: "color 0.35s ease, opacity 0.35s ease",
            }}
          >
            {project.blurb}
          </p>

          {/* Metrics */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              paddingTop: "1.25rem",
              borderTop: `0.5px solid ${hovered ? "rgba(255,255,255,0.12)" : "var(--border)"}`,
              transition: "border-color 0.35s ease",
            }}
          >
            {project.metrics.map((m) => (
              <span
                key={m}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: hovered ? "var(--red)" : "var(--ink)",
                  transition: "color 0.35s ease",
                }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Red bottom bar on hover */}
        <div
          style={{
            height: "3px",
            background: "var(--red)",
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      style={{ padding: "6rem 2.5rem" }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: "3rem",
          paddingBottom: "1.5rem",
          borderBottom: "0.5px solid var(--border)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            margin: 0,
          }}
        >
          Selected Work
        </h2>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "var(--muted)",
          }}
        >
          Case studies in progress
        </span>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "1px",
          background: "var(--border)",
        }}
      >
        {PROJECTS.map((project, i) => (
          <div key={project.id} style={{ background: "var(--paper)" }}>
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

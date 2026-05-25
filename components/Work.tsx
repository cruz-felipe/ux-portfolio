"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const PROJECTS: { id: string; href: string; index: string; title: string; blurb: string; metrics: string[]; personal?: boolean }[] = [
  {
    id: "dane-telecom",
    href: "/work/dane-telecom",
    index: "01",
    title: "Dane Telecom",
    blurb: "A fragmented design ecosystem was slowing down engineering delivery across product and engineering teams.",
    metrics: ["50% faster handoff", "32% velocity boost"],
  },
  {
    id: "predictive-support-hub",
    href: "/work/predictive-support-hub",
    index: "02",
    title: "Predictive Support Hub",
    blurb: "3,000 support agents navigating 32 legacy tools on every call. I replaced the ecosystem with a single workspace.",
    metrics: ["70% AHT reduction", "32\u21921 consolidation"],
  },
  {
    id: "b2b-sales-rescue",
    href: "/work/b2b-sales-rescue",
    index: "03",
    title: "B2B Sales Rescue",
    blurb: "Sales agents needed 7 tools and 3 days of training to close one deal. I reduced that to a single flow and half a day.",
    metrics: ["75% quote acceleration", "83% faster onboarding"],
  },
  {
    id: "field-work-order",
    href: "/work/field-work-order",
    index: "04",
    title: "Field Work Order",
    blurb: "A 160-page OSS installation document that engineers understood and field technicians could not. Redesigned for the people who actually used it.",
    metrics: ["72% page reduction", "160 to 45 pages"],
  },
  {
    id: "vocabulary",
    href: "/work/vocabulary",
    index: "05",
    title: "Vocabulary",
    blurb: "Every flashcard app I tried was built around someone else's curriculum. I wanted one thing: a fast, honest way to learn words. So I built it.",
    metrics: ["4 languages", "2 learning modes"],
    personal: true,
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
      <Link
        href={project.href}
        data-cursor
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          border: `1px solid ${hovered ? "rgba(0,0,0,0.4)" : "var(--border)"}`,
          borderRadius: "2px",
          overflow: "hidden",
          background: hovered ? "#0A0A0A" : "transparent",
          transition: "background 0.35s ease, border-color 0.25s ease",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
        }}
      >


        <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Index */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: hovered ? "rgba(255,255,255,0.3)" : "var(--muted)",
              transition: "color 0.35s ease",
            }}>
              {project.index}
            </span>
            {project.personal && (
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: hovered ? "rgba(255,255,255,0.4)" : "var(--muted)",
                border: `1px solid ${hovered ? "rgba(255,255,255,0.15)" : "var(--border)"}`,
                borderRadius: "2px",
                padding: "2px 7px",
                transition: "color 0.35s ease, border-color 0.35s ease",
              }}>Personal</span>
            )}
          </div>

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
            color: hovered ? "rgba(255,255,255,0.75)" : "var(--ink)",
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
            borderTop: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "var(--border)"}`,
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

          {/* View project */}
          <div style={{
            paddingTop: "1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              color: hovered ? "var(--red)" : "var(--muted)",
              textDecoration: "underline",
              textDecorationColor: hovered ? "var(--red)" : "transparent",
              textUnderlineOffset: "3px",
              transition: "color 0.35s ease, text-decoration-color 0.35s ease",
            }}>
              View project
            </span>
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              style={{
                color: hovered ? "var(--red)" : "var(--muted)",
                transition: "color 0.35s ease, transform 0.35s ease",
                transform: hovered ? "translateX(3px)" : "translateX(0)",
              }}
            >
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
      </Link>
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
          
        </span>
      </div>

      <div
        className="work-grid"
        style={{ display: "grid", gap: "1rem" }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const PROJECTS: { id: string; href: string; index: string; title: string; blurb: string; metrics: string[]; personal?: boolean }[] = [
  {
    id: "predictive-support-hub",
    href: "/work/predictive-support-hub",
    index: "01",
    title: "Predictive Support Hub",
    blurb: "3,000 support agents navigating 32 legacy tools on every call. I replaced the ecosystem with a single AI-integrated workspace.",
    metrics: ["70% AHT reduction", "32→1 consolidation"],
  },
  {
    id: "b2b-sales-rescue",
    href: "/work/b2b-sales-rescue",
    index: "02",
    title: "B2B Sales Rescue",
    blurb: "Sales agents needed 7 tools and 3 days of training to close one deal. I reduced that to a single flow and half a day.",
    metrics: ["75% quote acceleration", "83% faster onboarding"],
  },
  {
    id: "quota-management",
    href: "/work/quota-management",
    index: "03",
    title: "Quota Management",
    blurb: "A greenfield B2B asset management platform for a BSS telecom. No prior product. Designed from workshop sessions to production-ready flows as the solo designer.",
    metrics: ["Greenfield from scratch", "3 core modules"],
  },
  {
    id: "dane-telecom",
    href: "/work/dane-telecom",
    index: "04",
    title: "Dane Telecom",
    blurb: "Three months on-site in Copenhagen. The client did not need better components. They needed a designer who understood what was coming next.",
    metrics: ["50% faster handoff", "32% velocity boost"],
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
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 120}ms` }}>
    <Link
      href={project.href}
      style={{
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${hovered ? "rgba(0,0,0,0.4)" : "rgba(10,10,10,0.18)"}`,
        borderRadius: "2px",
        overflow: "hidden",
        textDecoration: "none",
        color: "var(--ink)",
        background: hovered ? "#0A0A0A" : "color-mix(in srgb, var(--ink) 1.5%, var(--paper))",
        transition: "background 0.35s ease, border-color 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
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

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "1rem",
          color: hovered ? "white" : "var(--ink)",
          transition: "color 0.35s ease",
        }}>
          {project.title}
        </h2>

        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          fontWeight: 300,
          lineHeight: 1.7,
          flex: 1,
          marginBottom: "1.5rem",
          color: hovered ? "rgba(255,255,255,0.75)" : "var(--ink)",
          opacity: hovered ? 1 : 0.72,
          transition: "color 0.35s ease, opacity 0.35s ease",
        }}>
          {project.blurb}
        </p>

        <div style={{
          display: "flex",
          gap: "1.5rem",
          paddingTop: "1.25rem",
          borderTop: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(10,10,10,0.12)"}`,
          marginBottom: 0,
          transition: "border-color 0.35s ease",
        }}>
          {project.metrics.map((metric) => (
            <span key={metric} style={{
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontWeight: 700,
              color: hovered ? "var(--red)" : "var(--ink)",
              transition: "color 0.35s ease",
            }}>
              {metric}
            </span>
          ))}
        </div>

        <div style={{ paddingTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
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
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{
              color: hovered ? "var(--red)" : "var(--muted)",
              transform: hovered ? "translateX(5px)" : "translateX(0)",
              transition: "color 0.25s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div style={{
        height: "3px",
        background: "var(--red)",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }} />
    </Link>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" aria-label="Selected work" style={{ padding: "6rem 2.5rem" }}>
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
      </div>

      <div className="work-grid" style={{ display: "grid", gap: "1rem" }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

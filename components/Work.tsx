"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const PROJECTS = [
  {
    id: "predictive-support-hub",
    href: "/work/predictive-support-hub",
    index: "01",
    title: "Predictive Support Hub",
    blurb: "3,000 support agents navigating 32 legacy tools on every call. I replaced the ecosystem with a single AI-integrated workspace.",
    metrics: ["70% AHT reduction", "32→1 consolidation"],
    featured: true,
    tag: "AI System Design · Telecom · 2022",
    image: "/hub/workspace.png",
  },
  {
    id: "b2b-sales-rescue",
    href: "/work/b2b-sales-rescue",
    index: "02",
    title: "B2B Sales Rescue",
    blurb: "Sales agents needed 7 tools and 3 days of training to close one deal. I reduced that to a single flow and half a day.",
    metrics: ["75% quote acceleration", "83% faster onboarding"],
    tag: "Enterprise UX · Research · 2023",
    weight: "primary",
  },
  {
    id: "quota-management",
    href: "/work/quota-management",
    index: "03",
    title: "Quota Management",
    blurb: "A greenfield B2B asset management platform. No prior product. Designed from workshop sessions to production-ready flows as the solo designer.",
    metrics: ["13 flows", "3 modules"],
    tag: "Greenfield Product · BSS · 2024",
    weight: "primary",
  },
  {
    id: "dane-telecom",
    href: "/work/dane-telecom",
    index: "04",
    title: "Dane Telecom",
    blurb: "Three months on-site in Copenhagen. The client did not need better components. They needed a designer who understood what was coming next.",
    metrics: ["50% faster handoff", "32% velocity boost"],
    tag: "Design System · Copenhagen · 2023",
    weight: "secondary",
  },
  {
    id: "vocabulary",
    href: "/work/vocabulary",
    index: "05",
    title: "Vocabulary",
    blurb: "Every flashcard app I tried was built around someone else's curriculum. I wanted one thing: a fast, honest way to learn words. So I built it.",
    metrics: ["4 languages", "2 learning modes"],
    personal: true,
    tag: "Personal · Next.js · Claude API",
    weight: "secondary",
  },
];

function FeaturedCard({ project }: { project: typeof PROJECTS[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.06 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}>
      <Link href={project.href} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", textDecoration: "none", color: "var(--ink)", background: hovered ? "#0A0A0A" : "var(--ink)", borderRadius: "2px", overflow: "hidden", minHeight: "340px", transition: "background 0.35s ease" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left — content */}
        <div style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
          <div style={{ position: "absolute", top: "1.5rem", right: "2rem", fontFamily: "var(--font-display)", fontSize: "120px", fontWeight: 800, lineHeight: 1, color: "white", opacity: 0.04, letterSpacing: "-0.05em", pointerEvents: "none", userSelect: "none" }}>01</div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Featured</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "white", margin: "0 0 1.25rem" }}>
              {project.title}
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: 0, maxWidth: "380px" }}>
              {project.blurb}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingTop: "2rem" }}>
            <div style={{ display: "flex", gap: "2rem" }}>
              {project.metrics.map(m => (
                <span key={m} style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--red)" }}>{m}</span>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: hovered ? "white" : "rgba(255,255,255,0.5)", transition: "color 0.25s", textDecoration: "underline", textDecorationColor: hovered ? "rgba(255,255,255,0.5)" : "transparent", textUnderlineOffset: "3px" }}>View project</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "rgba(255,255,255,0.5)", transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}>
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right — product image, full bleed */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "340px" }}>
          <img
            src={project.image}
            alt={`${project.title} interface`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top left",
              opacity: hovered ? 0.9 : 0.75,
              transform: hovered ? "scale(1.02)" : "scale(1)",
              transition: "opacity 0.35s ease, transform 0.5s ease",
            }}
          />
        </div>
      </Link>
    </div>
  );
}

function PrimaryCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.7s ease ${index * 60}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms` }}>
      <Link href={project.href} style={{ display: "flex", flexDirection: "column", minHeight: "260px", border: `1px solid ${hovered ? "rgba(10,10,10,0.35)" : "rgba(10,10,10,0.1)"}`, borderRadius: "2px", overflow: "hidden", textDecoration: "none", color: "var(--ink)", background: hovered ? "#0A0A0A" : "color-mix(in srgb, var(--ink) 3%, var(--paper))", transition: "background 0.3s ease, border-color 0.2s ease" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: hovered ? "rgba(255,255,255,0.3)" : "var(--muted)", transition: "color 0.3s" }}>{project.index}</span>
          </div>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 2vw, 1.55rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.75rem", color: hovered ? "white" : "var(--ink)", transition: "color 0.3s" }}>
            {project.title}
          </h2>

          <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 300, lineHeight: 1.65, flex: 1, marginBottom: "1.25rem", color: hovered ? "rgba(255,255,255,0.65)" : "var(--ink)", opacity: hovered ? 1 : 0.68, transition: "color 0.3s, opacity 0.3s" }}>
            {project.blurb}
          </p>

          <div style={{ position: "absolute", bottom: "1rem", right: "1.5rem", fontFamily: "var(--font-display)", fontSize: "72px", fontWeight: 800, lineHeight: 1, color: hovered ? "white" : "var(--ink)", opacity: hovered ? 0.07 : 0.055, letterSpacing: "-0.04em", pointerEvents: "none", userSelect: "none", transition: "color 0.3s, opacity 0.3s" }}>{project.index}</div>

          <div style={{ display: "flex", gap: "1.25rem", paddingTop: "1rem" }}>
            {project.metrics.map(m => (
              <span key={m} style={{ fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 700, color: hovered ? "var(--red)" : "var(--muted)", transition: "color 0.3s" }}>{m}</span>
            ))}
          </div>
        </div>
        <div style={{ height: "2px", background: "var(--red)", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)" }} />
      </Link>
    </div>
  );
}

function SecondaryCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.7s ease ${index * 60}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms` }}>
      <Link href={project.href} style={{ display: "flex", flexDirection: "column", minHeight: "160px", border: `1px solid ${hovered ? "rgba(10,10,10,0.2)" : "var(--border)"}`, borderRadius: "2px", overflow: "hidden", textDecoration: "none", color: "var(--ink)", background: hovered ? "#0A0A0A" : "var(--paper)", transition: "background 0.3s ease, border-color 0.2s ease" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ padding: "1.5rem 1.75rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "0.6rem" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: hovered ? "rgba(255,255,255,0.3)" : "var(--muted)", transition: "color 0.3s" }}>{project.index}</span>
              {project.personal && (
                <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: hovered ? "rgba(255,255,255,0.3)" : "var(--muted)", border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "var(--border)"}`, borderRadius: "2px", padding: "2px 6px", transition: "all 0.3s" }}>Personal</span>
              )}
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.5rem", color: hovered ? "white" : "var(--ink)", transition: "color 0.3s" }}>
              {project.title}
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: hovered ? "rgba(255,255,255,0.45)" : "var(--muted)", margin: "0 0 0.9rem", transition: "color 0.3s", lineHeight: 1.5 }}>
              {project.tag}
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            {project.metrics.map(m => (
              <span key={m} style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, color: hovered ? "var(--red)" : "var(--muted)", transition: "color 0.3s" }}>{m}</span>
            ))}
          </div>
        </div>
        <div style={{ height: "1.5px", background: "var(--red)", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)" }} />
      </Link>
    </div>
  );
}

export default function Work() {
  const primary = PROJECTS.filter(p => p.weight === "primary");
  const secondary = PROJECTS.filter(p => p.weight === "secondary");

  return (
    <section id="work" aria-label="Selected work" style={{ padding: "4rem 2.5rem" }}>
      <h2 style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 2rem" }}>
        Selected Work
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <FeaturedCard project={PROJECTS[0]} />
        <div className="work-grid-primary" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
          {primary.map((project, i) => (
            <PrimaryCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
        <div className="work-grid-secondary" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
          {secondary.map((project, i) => (
            <SecondaryCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

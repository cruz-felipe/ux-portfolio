"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

interface Project {
  id: string;
  href: string;
  index: string;
  title: string;
  blurb: string;
  metrics: string[];
  featured?: boolean;
  tag: string;
  weight?: string;
  personal?: boolean;
  image?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildProjects(cards: any[]) {
  return cards.map((c: any) => ({
    id: c.id,
    href: `/work/${c.id}`,
    index: c.index,
    title: c.title,
    blurb: c.blurb,
    metrics: [c.metric1, c.metric2].filter(Boolean),
    featured: c.weight === "featured",
    tag: c.tag,
    weight: c.weight === "featured" ? undefined : c.weight,
    personal: c.personal || false,
    image: c.image || "",
  }));
}

function FeaturedCard({ project }: { project: Project }) {
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
      <Link href={project.href} className="featured-card-link" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", textDecoration: "none", color: "var(--ink)", background: "var(--ink)", borderRadius: "2px", overflow: "hidden", minHeight: "340px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left — content */}
        <div className="featured-card-content" style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
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
              {project.metrics.map((m: string) => (
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
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top left",
              opacity: hovered ? 0.85 : 0.65,
              transition: "opacity 0.35s ease, transform 0.5s ease",
              transform: hovered ? "scale(1.03)" : "scale(1)",
            }}
          />
          {/* Edge fade so image feels part of the dark card */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 40%)", pointerEvents: "none" }} />
        </div>
      </Link>
    </div>
  );
}

function PrimaryCard({ project, index }: { project: Project; index: number }) {
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
            {project.metrics.map((m: string) => (
              <span key={m} style={{ fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 700, color: hovered ? "var(--red)" : "var(--muted)", transition: "color 0.3s" }}>{m}</span>
            ))}
          </div>
        </div>
        <div style={{ height: "2px", background: "var(--red)", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)" }} />
      </Link>
    </div>
  );
}

function SecondaryCard({ project, index }: { project: Project; index: number }) {
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
            {project.metrics.map((m: string) => (
              <span key={m} style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, color: hovered ? "var(--red)" : "var(--muted)", transition: "color 0.3s" }}>{m}</span>
            ))}
          </div>
        </div>
        <div style={{ height: "1.5px", background: "var(--red)", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)" }} />
      </Link>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Work({ data }: { data: any }) {
  const PROJECTS = buildProjects(data.workCards || []);
  const featured = PROJECTS.find(p => p.featured) || PROJECTS[0];
  const primary = PROJECTS.filter(p => p.weight === "primary");
  const secondary = PROJECTS.filter(p => p.weight === "secondary");

  return (
    <section id="work" aria-label="Selected work" style={{ padding: "4rem 2.5rem" }}>
      <h2 style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 2rem" }}>
        Selected Work
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <FeaturedCard project={featured} />

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

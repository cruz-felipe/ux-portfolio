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

// ── Featured card right panel — real data from product mockups ──
function AgentWorkspacePanel({ hovered }: { hovered: boolean }) {
  // Real data from the workspace mockup: customer Eli Manning, modem issue
  const afterRows = [
    { label: "Customer", value: "Eli Manning", sub: "Account #73514-4" },
    { label: "IVR path", value: "Modem issue", sub: "3rd contact in 30 days" },
    { label: "Last agent", value: "Kate Austen", sub: "01.21.20 — technical complaint" },
    { label: "Debt", value: "$69.98 overdue", sub: "35 days — Pay Now flagged" },
  ];
  // Real legacy tool tabs from before2.png
  const beforeTools = ["Account Info", "ID Management", "Manage Modem", "Transaction History", "Security", "StaticIP", "Web DVR Mgmt", "Wifi", "Managed Device", "Add On Svcs", "Billing", "Tickets"];

  return (
    <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>

      {/* BEFORE — legacy tool tabs, visible at rest, fades on hover */}
      <div style={{
        position: "absolute",
        inset: 0,
        padding: "2rem",
        opacity: hovered ? 0 : 1,
        transition: "opacity 0.45s ease",
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "0.5px solid rgba(255,255,255,0.1)" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Before — 32 tools per call</span>
        </div>
        {/* Simulate the tab bar from the actual legacy UI */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "1.25rem" }}>
          {beforeTools.map((t, i) => (
            <div key={i} style={{
              fontFamily: "var(--font-body)",
              fontSize: "9px",
              color: i === 0 ? "white" : "rgba(255,255,255,0.35)",
              background: i === 0 ? "rgba(255,140,0,0.25)" : "rgba(255,255,255,0.05)",
              border: `0.5px solid ${i === 0 ? "rgba(255,140,0,0.4)" : "rgba(255,255,255,0.1)"}`,
              borderRadius: "2px",
              padding: "3px 8px",
              letterSpacing: "0.02em",
            }}>{t}</div>
          ))}
        </div>
        {/* Legacy account info block */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 1.5rem" }}>
          {[
            ["Account No", "0780107351404"],
            ["Account status", "ACTIVE"],
            ["Name", "JERICHO TSG"],
            ["Collection Status", "NotOnHold"],
            ["Address", "200 Jericho Quad, NY 11753"],
            ["Service", "OL,iOPREMIER,ULTRA101"],
          ].map(([k, v], i) => (
            <div key={i}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "9px", color: "rgba(255,255,255,0.3)", marginBottom: "1px" }}>{k}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", fontFamily: "var(--font-body)", fontSize: "9px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.04em" }}>Switch tools to find billing → open another tab → check tickets...</div>
      </div>

      {/* AFTER — unified workspace, visible on hover */}
      <div style={{
        position: "absolute",
        inset: 0,
        padding: "2rem",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.45s ease",
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem", paddingBottom: "0.75rem", borderBottom: "0.5px solid rgba(255,255,255,0.12)" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>After — 1 workspace</span>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", color: "rgba(255,255,255,0.4)" }}>Call active · 02:46</span>
          </div>
        </div>
        {afterRows.map((row, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "88px 1fr",
            gap: "0.75rem",
            padding: "0.45rem 0",
            borderBottom: i < afterRows.length - 1 ? "0.5px solid rgba(255,255,255,0.07)" : "none",
            alignItems: "start",
          }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "rgba(255,255,255,0.28)", paddingTop: "1px" }}>{row.label}</span>
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: "white", lineHeight: 1.3 }}>{row.value}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "1px" }}>{row.sub}</div>
            </div>
          </div>
        ))}
        <div style={{
          marginTop: "auto",
          paddingTop: "1rem",
          padding: "0.75rem",
          background: "rgba(196,43,43,0.15)",
          border: "0.5px solid rgba(196,43,43,0.3)",
          borderRadius: "2px",
          display: "flex",
          alignItems: "baseline",
          gap: "0.5rem",
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--red)", letterSpacing: "-0.04em", lineHeight: 1 }}>3 min</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>avg handle time  ↓ from 10 min</span>
        </div>
      </div>
    </div>
  );
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
      <Link href={project.href} className="featured-card-link" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", textDecoration: "none", color: "var(--ink)", background: "var(--ink)", borderRadius: "2px", overflow: "hidden", minHeight: "360px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left — editorial content */}
        <div className="featured-card-content" style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", borderRight: "0.5px solid rgba(255,255,255,0.07)" }}>
          <div style={{ position: "absolute", top: "1.5rem", right: "2rem", fontFamily: "var(--font-display)", fontSize: "120px", fontWeight: 800, lineHeight: 1, color: "white", opacity: 0.04, letterSpacing: "-0.05em", pointerEvents: "none", userSelect: "none" }}>01</div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Featured</span>
              <span style={{ width: "1px", height: "10px", background: "rgba(255,255,255,0.12)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.25)" }}>{project.tag}</span>
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "white", margin: "0 0 1.25rem" }}>
              {project.title}
            </h2>

            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 300, lineHeight: 1.72, color: "rgba(255,255,255,0.55)", margin: 0, maxWidth: "360px" }}>
              {project.blurb}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", paddingTop: "2rem", borderTop: "0.5px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", gap: "2rem" }}>
              {project.metrics.map((m: string) => (
                <span key={m} style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--red)", letterSpacing: "-0.01em" }}>{m}</span>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: hovered ? "white" : "rgba(255,255,255,0.4)", transition: "color 0.25s", letterSpacing: "0.04em" }}>View project</span>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ color: hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)", transform: hovered ? "translateX(3px)" : "translateX(0)", transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), color 0.25s" }}>
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right — bespoke data panel */}
        <div style={{ background: "color-mix(in srgb, var(--red) 8%, #111)", position: "relative", overflow: "hidden" }}>
          <AgentWorkspacePanel hovered={hovered} />
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
    observer.observe(el)
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.7s ease ${index * 60}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms` }}>
      <Link href={project.href} style={{ display: "flex", flexDirection: "column", minHeight: "280px", border: `0.5px solid ${hovered ? "rgba(10,10,10,0.4)" : "rgba(10,10,10,0.12)"}`, borderRadius: "2px", overflow: "hidden", textDecoration: "none", color: "var(--ink)", background: hovered ? "#0A0A0A" : "color-mix(in srgb, var(--ink) 2%, var(--paper))", transition: "background 0.3s ease, border-color 0.2s ease" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
          {/* Index top-left, ghost number bottom-right */}
          <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: hovered ? "rgba(255,255,255,0.25)" : "var(--muted)", transition: "color 0.3s", marginBottom: "1.5rem", display: "block" }}>{project.index}</span>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.08, marginBottom: "0.75rem", color: hovered ? "white" : "var(--ink)", transition: "color 0.3s" }}>
            {project.title}
          </h2>

          <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 300, lineHeight: 1.7, flex: 1, marginBottom: "1.5rem", color: hovered ? "rgba(255,255,255,0.6)" : "var(--ink)", opacity: hovered ? 1 : 0.62, transition: "color 0.3s, opacity 0.3s" }}>
            {project.blurb}
          </p>

          {/* Ghost index */}
          <div style={{ position: "absolute", bottom: "0.75rem", right: "1.25rem", fontFamily: "var(--font-display)", fontSize: "80px", fontWeight: 800, lineHeight: 1, color: hovered ? "white" : "var(--ink)", opacity: hovered ? 0.06 : 0.04, letterSpacing: "-0.04em", pointerEvents: "none", userSelect: "none", transition: "color 0.3s, opacity 0.3s" }}>{project.index}</div>

          <div style={{ display: "flex", gap: "1.5rem", paddingTop: "1rem", borderTop: `0.5px solid ${hovered ? "rgba(255,255,255,0.1)" : "var(--border)"}`, transition: "border-color 0.3s" }}>
            {project.metrics.map((m: string) => (
              <span key={m} style={{ fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 700, color: hovered ? "var(--red)" : "var(--muted)", transition: "color 0.3s", letterSpacing: "-0.01em" }}>{m}</span>
            ))}
          </div>
        </div>
        <div style={{ height: "2px", background: "var(--red)", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)" }} />
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
      <Link href={project.href} style={{ display: "flex", flexDirection: "column", minHeight: "160px", border: `0.5px solid ${hovered ? "rgba(10,10,10,0.25)" : "var(--border)"}`, borderRadius: "2px", overflow: "hidden", textDecoration: "none", color: "var(--ink)", background: hovered ? "#0A0A0A" : "var(--paper)", transition: "background 0.3s ease, border-color 0.2s ease", position: "relative" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left accent — differentiates secondary visually */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", background: hovered ? "var(--red)" : "var(--border)", transition: "background 0.3s ease" }} />

        <div style={{ padding: "1.25rem 1.5rem 1.25rem 1.75rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: hovered ? "rgba(255,255,255,0.25)" : "color-mix(in srgb, var(--muted) 70%, transparent)", transition: "color 0.3s" }}>{project.index}</span>
              {project.personal && (
                <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: hovered ? "rgba(255,255,255,0.3)" : "var(--muted)", border: `0.5px solid ${hovered ? "rgba(255,255,255,0.12)" : "var(--border)"}`, borderRadius: "2px", padding: "2px 6px", transition: "all 0.3s" }}>Personal</span>
              )}
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 1.3vw, 1.1rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.35rem", color: hovered ? "white" : "var(--ink)", transition: "color 0.3s" }}>
              {project.title}
            </h2>

            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: hovered ? "rgba(255,255,255,0.35)" : "color-mix(in srgb, var(--muted) 80%, transparent)", margin: "0 0 0.75rem", transition: "color 0.3s", lineHeight: 1.5, letterSpacing: "0.01em" }}>
              {project.tag}
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            {project.metrics.map((m: string) => (
              <span key={m} style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, color: hovered ? "var(--red)" : "color-mix(in srgb, var(--muted) 85%, transparent)", transition: "color 0.3s", letterSpacing: "-0.01em" }}>{m}</span>
            ))}
          </div>
        </div>
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
    <section id="work" aria-label="Selected work" style={{ padding: "var(--space-xl) var(--col-pad)" }}>
      <h2 style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 2.5rem" }}>
        Selected Work
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <FeaturedCard project={featured} />

        <div className="work-grid-primary" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
          {primary.map((project, i) => (
            <PrimaryCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>

        <div className="work-grid-secondary" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
          {secondary.map((project, i) => (
            <SecondaryCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

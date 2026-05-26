"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ScreenGallery } from "./ScreenGallery";

function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(e * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);
  return { ref, count };
}

function AnimatedMetric({ value }: { value: string }) {
  const numMatch = value.match(/^(\d+)/);
  const { ref, count } = useCountUp(numMatch ? parseInt(numMatch[1]) : 0);
  if (!numMatch) return <span>{value}</span>;
  const suffix = value.slice(numMatch[1].length);
  return <span><span ref={ref}>{count}</span>{suffix}</span>;
}

interface Screen { src: string; caption: string; }
interface Metric { value: string; label: string; }
interface Section { title: string; body?: string | string[]; screens?: Screen[]; narrowScreens?: boolean; pullquote?: string; }
interface Artifact { id: string; title: string; caption: string; component: React.ReactNode; }

export interface CaseStudyData {
  index: string;
  title: string;
  tagline: string;
  role: string;
  roleDetail: string;
  impactSummary?: string;
  context: string;
  year: string;
  location?: string;
  metrics: Metric[];
  sections: Section[];
  artifacts: Artifact[];
  hideNda?: boolean;
  showNdaNote?: boolean;
  wideHero?: boolean;
}

const ALL_WORK = [
  { slug: "predictive-support-hub", index: "01", title: "Predictive Support Hub" },
  { slug: "b2b-sales-rescue", index: "02", title: "B2B Sales Rescue" },
  { slug: "quota-management", index: "03", title: "Quota Management" },
  { slug: "dane-telecom", index: "04", title: "Dane Telecom" },
  { slug: "vocabulary", index: "05", title: "Vocabulary", personal: true },
];

export default function CaseLayout({ data }: { data: CaseStudyData }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const sectionsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = sectionsRef.current;
    if (!el) return;
    const items = el.querySelectorAll("section, .artifact-section");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.06 }
    );
    items.forEach(item => { item.classList.add("reveal"); observer.observe(item); });
    return () => observer.disconnect();
  }, []);

  const maxW = data.wideHero ? "820px" : "700px";

  return (
    <>
    {/* Back nav — outside main so fixed positioning isn't clipped by transform stacking context */}
    <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.25rem 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "color-mix(in srgb, var(--paper) 82%, transparent)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "0.5px solid var(--border)",
      }}>
        <a href="/" aria-label="Back to home" style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          fontFamily: "var(--font-body)", fontSize: "13px",
          color: "var(--muted)", textDecoration: "none",
          transition: "color 0.2s",
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--ink)";
            const svg = e.currentTarget.querySelector("svg") as SVGElement | null;
            if (svg) svg.style.transform = "translateX(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--muted)";
            const svg = e.currentTarget.querySelector("svg") as SVGElement | null;
            if (svg) svg.style.transform = "translateX(0)";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
            <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All work
        </a>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
          {data.index} / 05
        </span>
    </div>

    <main id="main-content" role="main" className="page-enter" style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>

      {/* Hero */}
      <section className="case-hero-inner" style={{
        padding: "9rem 2.5rem 5rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative oversized index — bleeds off right edge */}
        <div style={{
          position: "absolute",
          top: "3rem", right: "-0.5rem",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(160px, 22vw, 280px)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          color: "var(--ink)",
          opacity: 0.035,
          pointerEvents: "none",
          userSelect: "none",
        }}>{data.index}</div>

        <div style={{ maxWidth: "860px", position: "relative" }}>
          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>{data.role}</span>
            {data.location && (<>
              <span style={{ color: "var(--border)" }}>·</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--red)" }}>{data.location}</span>
            </>)}
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
            fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.03em", color: "var(--ink)", marginBottom: "1.5rem",
          }}>{data.title}</h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            fontWeight: 400, lineHeight: 1.7, color: "var(--ink)", opacity: 0.8,
            maxWidth: maxW, marginBottom: "3rem",
          }}>{data.tagline}</p>

          {/* Role + impact callout */}
          <div className="case-callout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", maxWidth: maxW, paddingTop: "2rem", borderTop: "0.5px solid var(--border)" }}>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 0.25rem" }}>My role</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, lineHeight: 1.65, color: "var(--ink)", opacity: 0.75, margin: 0 }}>{data.roleDetail}</p>
            </div>
            {data.impactSummary && (
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 0.5rem" }}>Business impact</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, lineHeight: 1.7, color: "var(--ink)", opacity: 0.75, margin: 0 }}>{data.impactSummary}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      {data.metrics.length > 0 && (
        <section style={{ borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)", padding: "3rem 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }} className="case-metrics">
            {data.metrics.map((m, i) => (
              <div key={i} style={{ padding: "0 2rem", paddingLeft: i === 0 ? 0 : undefined }}>
                <div className="metric-value" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.5rem" }}>
                  <span style={{ color: "var(--red)" }}><AnimatedMetric value={m.value} /></span>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: "var(--muted)", lineHeight: 1.55, margin: 0, maxWidth: "160px" }}>{m.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Context */}
      <section style={{ padding: "4rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}>
        <div className="case-context" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 300, lineHeight: 1.75, color: "var(--ink)", opacity: 0.8, margin: 0 }}>{data.context}</p>
          {data.showNdaNote && (
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
              Client identity omitted per NDA. System documentation artifacts shown are illustrative representations of the restructure approach, not reproductions of client deliverables.
            </p>
          )}
        </div>
      </section>

      {/* Body sections */}
      <div ref={sectionsRef}>
        {data.sections.map((section, si) => (
          <div key={si}>
            <section style={{
              padding: "4rem 2.5rem", borderBottom: "0.5px solid var(--border)",
              display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start",
            }} className="case-section">
              <h2 style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: 0, paddingTop: "4px" }}>
                {section.title}
              </h2>
              <div style={{ maxWidth: "700px" }}>
                {section.pullquote && (
                  <blockquote className="case-pullquote">{section.pullquote}</blockquote>
                )}
                {Array.isArray(section.body) ? section.body.map((para, pi) => (
                  <p key={pi} className={pi === 0 && !section.pullquote ? "case-body-lead" : undefined} style={{ fontFamily: "var(--font-body)", fontSize: pi === 0 && !section.pullquote ? undefined : "15px", fontWeight: 400, lineHeight: pi === 0 && !section.pullquote ? undefined : 1.8, color: "var(--ink)", opacity: pi === 0 && !section.pullquote ? undefined : 0.78, marginBottom: pi < (section.body as string[]).length - 1 ? "1.25rem" : 0 }}>{para}</p>
                )) : (
                  <p className={!section.pullquote ? "case-body-lead" : undefined} style={{ fontFamily: "var(--font-body)", fontSize: section.pullquote ? "15px" : undefined, color: "var(--ink)", opacity: section.pullquote ? 0.78 : undefined, margin: 0 }}>{section.body}</p>
                )}
              </div>
            </section>

            {section.screens && section.screens.length > 0 && (
              <div style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}>
                <ScreenGallery screens={section.screens} narrow={section.narrowScreens} />
              </div>
            )}

            {data.artifacts[si] && (
              <section className="artifact-section" style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", background: "var(--paper)" }}>
                <div style={{ marginBottom: "1.25rem", overflowX: "auto" }}>
                  {data.artifacts[si].component}
                </div>
                <div className="artifact-caption">
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: "var(--ink)", margin: 0, opacity: 0.7 }}>{data.artifacts[si].title}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--muted)", margin: 0, maxWidth: "480px" }}>{data.artifacts[si].caption}</p>
                </div>
              </section>
            )}
          </div>
        ))}
      </div>

      {/* More work */}
      <section aria-label="More work" style={{ padding: "4rem 2.5rem", borderTop: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }} className="case-section">
        <h2 style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: 0 }}>More work</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {ALL_WORK.map((work, i) => {
            const isCurrent = work.title === data.title;
            const isNext = ALL_WORK.findIndex(w => w.title === data.title) === i - 1;
            const style: React.CSSProperties = {
              display: "flex", alignItems: "center", padding: "0.875rem 0",
              borderBottom: i < ALL_WORK.length - 1 ? "0.5px solid var(--border)" : "none",
              textDecoration: "none", color: "var(--ink)",
              opacity: isCurrent ? 0.25 : 1, cursor: isCurrent ? "default" : "pointer",
              transition: "color 0.2s",
            };
            const inner = (
              <>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 400, color: "var(--muted)", minWidth: "2rem", flexShrink: 0 }}>{work.index}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: 1, marginLeft: "1rem" }}>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: isCurrent ? 400 : isNext ? 600 : 400,
                    letterSpacing: "0",
                    color: isCurrent ? "var(--muted)" : "var(--ink)",
                    display: "flex", alignItems: "center", gap: "6px",
                  }}>
                    {work.title}
                    {!isCurrent && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ color: "var(--muted)", flexShrink: 0, opacity: 0, transition: "opacity 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)" }} className="work-arrow">
                        <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                  {isNext && <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--red)", border: "1px solid var(--red)", borderRadius: "2px", padding: "1px 6px", flexShrink: 0, opacity: 0.7 }}>Next</span>}
                  {work.personal && !isCurrent && (
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", border: "1px solid var(--border)", borderRadius: "2px", padding: "2px 7px", flexShrink: 0 }}>Personal</span>
                  )}
                </div>

              </>
            );
            return isCurrent ? (
              <div key={work.slug} aria-current="page" style={style}>{inner}</div>
            ) : (
              <Link key={work.slug} href={`/work/${work.slug}`} style={style}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--red)";
                  const arrow = e.currentTarget.querySelector(".work-arrow") as SVGElement | null;
                  if (arrow) { arrow.style.opacity = "1"; arrow.style.color = "var(--red)"; }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--ink)";
                  const arrow = e.currentTarget.querySelector(".work-arrow") as SVGElement | null;
                  if (arrow) { arrow.style.opacity = "0"; }
                }}
              >{inner}</Link>
            );
          })}
        </div>
      </section>

    </main>
    </>
  );
}

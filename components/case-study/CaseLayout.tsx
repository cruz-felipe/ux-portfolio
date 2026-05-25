"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Metric {
  value: string;
  label: string;
}

interface Section {
  title: string;
  body: string | string[]; // string[] = multiple paragraphs
}

interface Artifact {
  id: string;
  title: string;
  caption: string;
  component: React.ReactNode;
}

export interface CaseStudyData {
  index: string;
  title: string;
  tagline: string;
  role: string;
  context: string;
  year: string;
  metrics: Metric[];
  sections: Section[];
  artifacts: Artifact[];
  next?: { slug: string; title: string };
}

export default function CaseLayout({ data }: { data: CaseStudyData }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>
      {/* Back nav */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.25rem 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "color-mix(in srgb, var(--paper) 92%, transparent)",
        backdropFilter: "blur(12px)",
        borderBottom: "0.5px solid var(--border)",
      }}>
        <Link href="/#work" style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          fontFamily: "var(--font-body)", fontSize: "13px",
          color: "var(--muted)", textDecoration: "none",
          transition: "color 0.2s",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All work
        </Link>
        <span style={{
          fontFamily: "var(--font-body)", fontSize: "12px",
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: "var(--muted)",
        }}>
          {data.index} / 03
        </span>
      </div>

      {/* Hero */}
      <section style={{
        padding: "9rem 2.5rem 5rem",
        borderBottom: "0.5px solid var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <div style={{ maxWidth: "1100px" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--muted)", marginBottom: "1.25rem",
          }}>
            {data.role} · {data.year}
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
            fontWeight: 800, lineHeight: 1.06,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            marginBottom: "1.5rem",
          }}>
            {data.title}
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            fontWeight: 300, lineHeight: 1.7,
            color: "var(--ink)", opacity: 0.75,
            maxWidth: "680px",
          }}>
            {data.tagline}
          </p>
        </div>
      </section>

      {/* Metrics strip */}
      <section style={{
        borderBottom: "0.5px solid var(--border)",
        padding: "2.5rem 2.5rem",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${data.metrics.length}, 1fr)`,
          gap: 0,
        }} className="case-metrics">
          {data.metrics.map((m, i) => (
            <div key={i} style={{
              padding: "0 2rem",
              borderRight: i < data.metrics.length - 1 ? "0.5px solid var(--border)" : "none",
              paddingLeft: i === 0 ? 0 : undefined,
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 800, letterSpacing: "-0.03em",
                lineHeight: 1, marginBottom: "0.4rem",
                color: "var(--ink)",
              }}>
                <span style={{ color: "var(--red)" }}>{m.value}</span>
              </div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "12px",
                color: "var(--muted)", lineHeight: 1.55,
                margin: 0, maxWidth: "160px",
              }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Context + NDA notice */}
      <section style={{
        padding: "4rem 2.5rem",
        borderBottom: "0.5px solid var(--border)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "start",
      }} className="case-context">
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px", fontWeight: 300,
          lineHeight: 1.75, color: "var(--ink)",
          opacity: 0.8, margin: 0,
        }}>
          {data.context}
        </p>
        <div style={{
          borderLeft: "2px solid var(--border)",
          paddingLeft: "1.5rem",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "12px",
            color: "var(--muted)", lineHeight: 1.7, margin: 0,
          }}>
            To respect non-disclosure agreements, the identity of this client has been omitted. Strategic challenges, decisions and outcomes are accurate. Visual artifacts are abstract representations of the system architecture and design thinking — not reproductions of proprietary screens.
          </p>
        </div>
      </section>

      {/* Body sections + artifacts interspersed */}
      <div style={{ padding: "0 2.5rem" }}>
        {data.sections.map((section, si) => (
          <div key={si}>
            {/* Section */}
            <section style={{
              padding: "4rem 0",
              borderBottom: "0.5px solid var(--border)",
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              gap: "4rem",
              alignItems: "start",
            }} className="case-section">
              <h2 style={{
                fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--muted)", margin: 0, paddingTop: "4px",
              }}>
                {section.title}
              </h2>
              <div style={{ maxWidth: "680px" }}>
                {Array.isArray(section.body) ? section.body.map((para, pi) => (
                  <p key={pi} style={{
                    fontFamily: "var(--font-body)", fontSize: "15px",
                    fontWeight: 300, lineHeight: 1.8,
                    color: "var(--ink)", opacity: 0.82,
                    marginBottom: pi < section.body.length - 1 ? "1.25rem" : 0,
                  }}>
                    {para}
                  </p>
                )) : (
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "15px",
                    fontWeight: 300, lineHeight: 1.8,
                    color: "var(--ink)", opacity: 0.82, margin: 0,
                  }}>
                    {section.body}
                  </p>
                )}
              </div>
            </section>

            {/* Artifact after every other section */}
            {data.artifacts[si] && (
              <section style={{
                padding: "4rem 0",
                borderBottom: "0.5px solid var(--border)",
              }}>
                <div style={{
                  background: "color-mix(in srgb, var(--ink) 4%, var(--paper))",
                  borderRadius: "4px",
                  padding: "2rem",
                  marginBottom: "1rem",
                  border: "0.5px solid var(--border)",
                }}>
                  {data.artifacts[si].component}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "12px",
                    color: "var(--muted)", margin: 0,
                  }}>
                    {data.artifacts[si].title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "12px",
                    color: "var(--muted)", opacity: 0.6, margin: 0,
                    maxWidth: "480px", textAlign: "right",
                  }}>
                    {data.artifacts[si].caption}
                  </p>
                </div>
              </section>
            )}
          </div>
        ))}
      </div>

      {/* Next case */}
      {data.next && (
        <section style={{
          padding: "5rem 2.5rem",
          borderTop: "0.5px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--muted)",
          }}>
            Next case
          </span>
          <Link href={`/work/${data.next.slug}`} style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
            fontWeight: 800, letterSpacing: "-0.02em",
            color: "var(--ink)", textDecoration: "none",
            display: "flex", alignItems: "center", gap: "1rem",
            transition: "color 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
          >
            {data.next.title}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </section>
      )}
    </main>
  );
}

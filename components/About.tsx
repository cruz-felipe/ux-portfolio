"use client";
import { useRef, useEffect, useState } from "react";

const SKILLS = [
  "Enterprise Product Design",
  "Design Systems",
  "BSS / OSS",
  "Team Leadership",
  "Cross-functional Influence",
  "UX Research",
  "Interaction Design",
  "Design Ops",
  "Telecom B2B & B2C",
  "Stakeholder Management",
  "Figma",
  "Illustration",
];

const EXPERIENCE = [
  {
    role: "Senior UI Designer · Team Lead",
    company: "Current company",
    period: "2020 — Present",
    note: "Leading local design team in Brazil; Senior IC on global BSS/OSS products across 9 countries.",
  },
  {
    role: "Senior Product Designer",
    company: "Telecom / Enterprise",
    period: "2017 — 2020",
    note: "B2C and B2B product design for telecom infrastructure across Latin America and Europe.",
  },
  {
    role: "UX Designer",
    company: "Digital agency",
    period: "2014 — 2017",
    note: "First UX role. End-to-end product work across web and mobile for multiple clients.",
  },
  {
    role: "Web Designer",
    company: "Freelance",
    period: "2011 — 2014",
    note: "Where it started. Visual design, HTML/CSS, brand identity.",
  },
];

const EDUCATION = [
  { degree: "Design & Visual Communication", school: "Undergraduate" },
  { degree: "UX & Product Design", school: "Professional certifications" },
];

function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function About() {
  const { ref, visible } = useVisible(0.08);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "6rem 2.5rem",
        borderTop: "0.5px solid var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Section label */}
      <h2 style={{
        fontFamily: "var(--font-body)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--muted)",
        marginBottom: "3rem",
      }}>
        About
      </h2>

      {/* Top row: photo + bio */}
      <div className="about-top">
        {/* Photo placeholder */}
        <div className="about-photo-col">
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              maxWidth: "320px",
              background: "var(--ink)",
              borderRadius: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Placeholder illustration — abstract face lines */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.3">
              <circle cx="40" cy="30" r="18" stroke="white" strokeWidth="1"/>
              <path d="M16 72c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="white" strokeWidth="1"/>
            </svg>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}>
              Photo coming soon
            </span>
            {/* Red accent strip */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "var(--red)",
            }}/>
          </div>
        </div>

        {/* Bio */}
        <div className="about-bio-col">
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            marginBottom: "1.5rem",
            opacity: 0.9,
          }}>
            I started in web design in 2011. By 2014 I moved fully into
            product design, and since then I&apos;ve spent my career at the
            intersection of <em>technical complexity</em> and <em>human clarity</em>.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.7,
            marginBottom: "1.5rem",
          }}>
            Today I lead a design team in Brazil while working as a senior IC on
            global products — BSS and OSS platforms running across 9 countries.
            Most of my time goes to translating between business analysts,
            engineers, and end users who rarely speak the same language.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.7,
            marginBottom: "2.5rem",
          }}>
            Outside work I&apos;m an illustrator — which is how I keep my eye
            sharp for the things that matter before function does.
          </p>

          {/* Skills */}
          <div style={{ marginBottom: "2rem" }}>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              display: "block",
              marginBottom: "0.75rem",
            }}>
              Expertise
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {SKILLS.map((skill) => (
                <span key={skill} style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "var(--ink)",
                  border: "0.5px solid var(--border)",
                  borderRadius: "2px",
                  padding: "5px 10px",
                  opacity: 0.85,
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Quote */}
          <blockquote style={{
            borderLeft: "2px solid var(--red)",
            paddingLeft: "1.25rem",
            margin: 0,
          }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: 1.65,
              color: "var(--ink)",
              margin: 0,
              opacity: 0.8,
            }}>
              &ldquo;The best design work I do happens when everyone else has
              already decided the problem is unsolvable.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>

      {/* Bottom row: experience + education */}
      <div
        className="about-bottom"
        style={{
          marginTop: "4rem",
          paddingTop: "3rem",
          borderTop: "0.5px solid var(--border)",
        }}
      >
        {/* Experience */}
        <div>
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            display: "block",
            marginBottom: "1.5rem",
          }}>
            Experience
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {EXPERIENCE.map((job, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "1rem",
                  alignItems: "baseline",
                  padding: "1rem 0",
                  borderBottom: "0.5px solid var(--border)",
                }}
              >
                <div>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "0.2rem",
                  }}>
                    {job.role}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--muted)",
                    marginBottom: "0.35rem",
                  }}>
                    {job.company}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--ink)",
                    opacity: 0.6,
                    lineHeight: 1.5,
                  }}>
                    {job.note}
                  </div>
                </div>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}>
                  {job.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            display: "block",
            marginBottom: "1.5rem",
          }}>
            Education
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {EDUCATION.map((ed, i) => (
              <div
                key={i}
                style={{
                  padding: "1rem 0",
                  borderBottom: "0.5px solid var(--border)",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "0.2rem",
                }}>
                  {ed.degree}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--muted)",
                }}>
                  {ed.school}
                </div>
              </div>
            ))}
          </div>

          {/* NDA note */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "var(--muted)",
            lineHeight: 1.6,
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "0.5px solid var(--border)",
            maxWidth: "320px",
          }}>
            Company names and client details are omitted across this portfolio
            in compliance with active NDAs.
          </p>
        </div>
      </div>
    </section>
  );
}

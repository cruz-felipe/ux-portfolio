"use client";
import { useRef, useEffect, useState } from "react";

const SKILLS = [
  "Product Design",
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
  "Illustration & Concept Art",
];

const EXPERIENCE = [
  {
    role: "Senior UI Designer → Group Leader",
    company: "Netcracker Technology",
    period: "Aug 2023 — Present",
    note: "Joined as Senior UI Designer. Took on Group Leader responsibilities for the Brazil design team. Cross-functional alignment, design system governance, and IC work on global OSS/BSS products.",
  },
  {
    role: "Senior Experience Designer",
    company: "EPAM Systems",
    period: "Aug 2022 — Aug 2023",
    note: "UX strategy and interaction design for enterprise clients across industries. Design systems, usability evaluations, and alignment between design, product and engineering teams.",
  },
  {
    role: "UX/UI Designer → Group Leader",
    company: "Netcracker Technology",
    period: "Dec 2018 — Aug 2022",
    note: "Started as UX/UI Designer, promoted to Group Leader. Full-cycle product design on OSS/BSS telecom platforms across multiple countries.",
  },
  {
    role: "UX Mentor",
    company: "CareerFoundry",
    period: "Feb 2021 — Feb 2026",
    note: "Mentored designers through career transitions with portfolio reviews, interview preparation and feedback on what the industry actually rewards.",
  },
];

const SIDE = [
  {
    role: "Penciler",
    company: "MSP Estúdios",
    period: "Apr 2026 — Present",
    note: "Working within the visual language and narrative universe of established IP.",
  },
];

const EDUCATION = [
  { degree: "Interaction Design", school: "UC San Diego", last: false },
  { degree: "Bachelor, Industrial Design", school: "Estácio", last: true },
];

function useVisible(threshold = 0.08) {
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
  const { ref, visible } = useVisible();

  return (
    <section
      id="about"
      aria-label="About Felipe Cruz"
      ref={ref}
      style={{
        padding: "5rem 2.5rem",
        borderTop: "1px solid var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)", margin: 0 }}>
          About
        </h2>
      </div>

      {/* Top: photo + bio — photo aligns to first paragraph top, not column top */}
      <div className="about-top" style={{ alignItems: "flex-start" }}>
        <div className="about-photo-col">
          {/* Offset the photo down by the same amount as the first paragraph's top margin
              so photo top = first line of bio text, not column top */}
          <div style={{
            width: "100%",
            maxWidth: "260px",
            position: "relative",
            borderRadius: "2px",
            overflow: "hidden",
            marginTop: "4px",
          }}>
            <img
              src="/photo.jpg"
              alt="Felipe Cruz sketching in Tiradentes, Brazil"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "2px",
                objectFit: "cover",
                objectPosition: "center top",
                aspectRatio: "3/4",
              }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--red)" }} />
          </div>
        </div>

        <div className="about-bio-col" style={{ maxWidth: "720px" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            marginBottom: "1.25rem",
            opacity: 0.88,
          }}>
            I&apos;m Felipe. I&apos;ve been at this long enough to know that most
            design problems are really communication failures. Between design and
            engineering, between what was decided and what actually shipped.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.72,
            marginBottom: "1.25rem",
          }}>
            I lead a team in Brazil and contribute as an IC to global products. My job
            is to build systems that stay consistent at scale and make sure every design
            decision survives contact with the engineers, analysts and stakeholders who
            have to deliver it.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.72,
            marginBottom: "2.5rem",
          }}>
            Working across cultures taught me that good process may not be universal,
            but clear communication is.
          </p>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "1rem",
          }}>
            Beyond the work
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.72,
            marginBottom: "1rem",
          }}>
            I&apos;m Brazilian. I grew up building things with whatever was available,
            which probably explains why I&apos;m more interested in constraints than
            in ideal conditions.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.72,
            marginBottom: "1rem",
          }}>
            Outside of screens I&apos;m a 2nd degree black belt in ITF Taekwondo.
            Not because I wanted to fight, but because I needed to know I could
            keep going when things stopped being comfortable (but fighting is
            pretty cool). I&apos;ve also been drawing since before I can remember,
            illustration and concept art are where I think without KPIs. I got
            published at MSP Est&uacute;dios, the studio behind Turma da
            M&ocirc;nica, Brazil&apos;s most enduring comics universe.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.72,
            marginBottom: "2.5rem",
          }}>
            I also have a genuine obsession with dinosaurs. Can you imagine how
            something so complex, so dominant, left behind just enough evidence for
            us to piece together the whole picture. That&apos;s not so different from
            what we do with products, is it?
          </p>

          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
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
                fontSize: "11px",
                fontWeight: 500,
                color: "var(--ink)",
                background: "color-mix(in srgb, var(--ink) 6%, var(--paper))",
                borderRadius: "2px",
                padding: "5px 12px",
                letterSpacing: "0.01em",
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Experience + Education */}
      <div
        className="about-bottom"
        style={{
          marginTop: "4rem",
          paddingTop: "3rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        {/* Experience */}
        <div>
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            display: "block",
            marginBottom: "1.5rem",
          }}>
            Experience
          </span>
          {[...EXPERIENCE, ...SIDE].map((job, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "1rem",
              padding: "1.4rem 0",
              borderBottom: i === ([...EXPERIENCE, ...SIDE].length - 1) ? "none" : "1px solid var(--border)",
            }}>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "0.15rem",
                }}>
                  {job.role}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--muted)",
                  marginBottom: "0.3rem",
                }}>
                  {job.company}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--ink)",
                  opacity: 0.65,
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
                paddingTop: "2px",
              }}>
                {job.period}
              </span>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            display: "block",
            marginBottom: "1.5rem",
          }}>
            Education
          </span>
          {EDUCATION.map((ed, i) => (
            <div key={i} style={{
              padding: "1.4rem 0",
              borderBottom: ed.last ? "none" : "1px solid var(--border)",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--ink)",
                marginBottom: "0.15rem",
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

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--muted)",
            lineHeight: 1.6,
            marginTop: "1.5rem",
          }}>
            Company names and client details are omitted across this portfolio
            in compliance with active NDAs.
          </p>
        </div>
      </div>
    </section>
  );
}

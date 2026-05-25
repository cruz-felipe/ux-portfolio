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
  "Illustration & Concept Art",
];

const EXPERIENCE = [
  {
    role: "Senior User Interface Designer",
    company: "Netcracker Technology",
    period: "Aug 2023 — Present",
    note: "Leading the Brazil design team on global enterprise products. Design system governance, complex workflow design and cross-functional alignment with product and engineering across time zones.",
  },
  {
    role: "UX Mentor",
    company: "CareerFoundry",
    period: "Feb 2021 — Feb 2026",
    note: "Mentored designers through career transitions with portfolio reviews, interview preparation and feedback on what the industry actually rewards.",
  },
  {
    role: "Senior Experience Designer",
    company: "EPAM Systems",
    period: "Aug 2022 — Aug 2023",
    note: "UX strategy and interaction design for enterprise clients across industries. Design systems, usability evaluations, and alignment between design, product and engineering teams.",
  },
  {
    role: "Group Leader → UX/UI Designer",
    company: "Netcracker Technology",
    period: "Dec 2018 — Jul 2022",
    note: "Started as UX/UI Designer, promoted to Group Leader. Full-cycle product design on OSS/BSS telecom platforms.",
  },
  {
    role: "Freelance Penciler",
    company: "MSP Estúdios",
    period: "Apr 2026 — Present",
    note: "Working within the visual language and narrative universe of established IP.",
  },
];

const EDUCATION = [
  {
    degree: "Design and Visual Communications",
    school: "UC San Diego",
    
  },
  {
    degree: "Illustration",
    school: "EBAC — Escola Britânica de Artes Criativas e Tecnologia",
    
  },
  {
    degree: "Bachelor, Industrial Design",
    school: "Estácio",
    
  },
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
      ref={ref}
      style={{
        padding: "6rem 2.5rem",
        borderTop: "1px solid rgba(10,10,10,0.12)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
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

      {/* Top: photo + bio */}
      <div className="about-top">
        {/* Photo */}
        <div className="about-photo-col">
          <div style={{
            width: "100%",
            maxWidth: "300px",
            aspectRatio: "3/4",
            background: "var(--ink)",
            borderRadius: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
            position: "relative",
            overflow: "hidden",
          }}>
            <svg width="72" height="72" viewBox="0 0 80 80" fill="none" opacity="0.25">
              <circle cx="40" cy="30" r="18" stroke="white" strokeWidth="1"/>
              <path d="M16 72c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="white" strokeWidth="1"/>
            </svg>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}>
              Photo coming
            </span>
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

        {/* Bio — from current about page copy */}
        <div className="about-bio-col">
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            marginBottom: "1.25rem",
            opacity: 0.88,
          }}>
            Fifteen years in. Long enough to know that most design issues are
            communication failures — between design and engineering, between product
            and business, between what was decided in the room and what actually shipped.
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
            I lead a design team in Brazil, contribute as an IC to global products and
            build the systems that remain consistent at scale, making sure every decision
            survives contact with the people who have to deliver it.
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

          {/* Beyond the work */}
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "0.75rem",
          }}>
            Beyond the work
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
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
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.72,
            marginBottom: "1rem",
          }}>
            Outside of screens I&apos;m a 2nd degree black belt in ITF Taekwondo — a
            practice that has less to do with fighting and more to do with enduring even
            when things are hard. I&apos;ve also been drawing since before I can
            remember. Illustration and concept art are where I think without KPIs.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.72,
            marginBottom: "2.5rem",
          }}>
            I also have a genuine obsession with dinosaurs. Have you ever considered how
            something so complex could evolve, dominate and leave behind just enough
            evidence for us to piece together the whole picture? That&apos;s not so
            different from what we do with products, is it?
          </p>

          {/* Skills */}
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
                color: "rgba(10,10,10,0.75)",
                border: "1px solid rgba(10,10,10,0.2)",
                borderRadius: "2px",
                padding: "5px 10px",
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
          borderTop: "1px solid rgba(10,10,10,0.12)",
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
          {EXPERIENCE.map((job, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "1rem",
              padding: "1.1rem 0",
              borderBottom: "1px solid rgba(10,10,10,0.1)",
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
                  opacity: 0.55,
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
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            display: "block",
            marginBottom: "1.5rem",
          }}>
            Education
          </span>
          {EDUCATION.map((ed, i) => (
            <div key={i} style={{
              padding: "1.1rem 0",
              borderBottom: "1px solid rgba(10,10,10,0.1)",
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
                marginBottom: "0.1rem",
              }}>
                {ed.school}
              </div>
            </div>
          ))}

          {/* NDA note — no divider above */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "var(--muted)",
            lineHeight: 1.6,
            marginTop: "1.5rem",
            opacity: 0.7,
          }}>
            Company names and client details are omitted across this portfolio
            in compliance with active NDAs.
          </p>
        </div>
      </div>
    </section>
  );
}

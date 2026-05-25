"use client";
import { useRef, useEffect, useState } from "react";

const SKILLS = [
  "Enterprise Product Design",
  "Design Systems",
  "BSS / OSS",
  "Cross-functional Leadership",
  "UX Research",
  "Interaction Design",
  "Design Ops",
  "Telecom B2B & B2C",
  "Figma",
  "Design Critique",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "6rem 2.5rem",
        borderTop: "0.5px solid var(--border)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Left — Bio */}
      <div>
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "2rem",
          }}
        >
          About
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "var(--ink)",
            marginBottom: "1.5rem",
          }}
        >
          I started in web design in 2011. By 2014 I had moved fully into
          product design, and since then I&apos;ve spent my career on the problems
          that sit at the intersection of{" "}
          <em style={{ fontStyle: "italic" }}>technical complexity</em> and{" "}
          <em style={{ fontStyle: "italic" }}>human clarity</em>.
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.75,
            marginBottom: "1.5rem",
          }}
        >
          Today I lead a design team in Brazil while working as a senior IC on
          global products — BSS and OSS platforms used across 9 countries. I
          spend most of my time translating between business analysts, engineers,
          and end users who rarely speak the same language.
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.75,
          }}
        >
          Outside the day job I work as an illustrator — which is how I keep my
          eye sharp for the things that matter before function does.
        </p>
      </div>

      {/* Right — Skills + illustration credit */}
      <div>
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "2rem",
          }}
        >
          Expertise
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "3rem" }}>
          {SKILLS.map((skill) => (
            <span
              key={skill}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 400,
                color: "var(--ink)",
                border: "0.5px solid var(--border)",
                borderRadius: "2px",
                padding: "6px 12px",
                letterSpacing: "0.01em",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Red accent quote */}
        <blockquote
          style={{
            borderLeft: "2px solid var(--red)",
            paddingLeft: "1.25rem",
            margin: 0,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: 1.6,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            "The best design work I do happens when everyone else has already
            decided the problem is unsolvable."
          </p>
        </blockquote>
      </div>
    </section>
  );
}

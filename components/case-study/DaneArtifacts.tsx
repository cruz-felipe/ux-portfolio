// Artifact 1: Token Architecture — before/after
export function TokenArchitectureArtifact() {
  return (
    <svg viewBox="0 0 900 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* BEFORE */}
      <text x="0" y="20" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">BEFORE</text>
      {/* Scattered components — no hierarchy */}
      {[
        [0,40,120,44,"Button v1"],
        [140,40,120,44,"Button v2"],
        [280,40,120,44,"Button v3"],
        [0,100,160,44,"Modal (local)"],
        [180,100,140,44,"Card (custom)"],
        [340,95,100,54,"Form\n(fragmented)"],
        [60,160,140,44,"Icon set A"],
        [220,160,140,44,"Icon set B"],
        [100,220,180,44,"Colors (file A)"],
        [300,220,150,44,"Colors (file B)"],
      ].map(([x, y, w, h, label], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="2" fill="none" stroke="var(--border)" strokeWidth="1"/>
          <text x={Number(x)+Number(w)/2} y={Number(y)+Number(h)/2+5} textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">{String(label)}</text>
        </g>
      ))}
      {/* Chaos lines */}
      {[
        [60,62,200,62],[200,62,280,122],[60,122,180,62],[280,62,380,122],
        [130,182,220,182],[220,182,340,122],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3,3"/>
      ))}

      {/* Divider */}
      <line x1="470" y1="0" x2="470" y2="320" stroke="var(--border)" strokeWidth="0.5"/>

      {/* AFTER */}
      <text x="490" y="20" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">AFTER</text>
      {/* Token hierarchy */}
      {/* Level 1 — Primitives */}
      <rect x="490" y="35" width="380" height="36" rx="2" fill="var(--red)" fillOpacity="0.08" stroke="var(--red)" strokeWidth="0.5"/>
      <text x="680" y="58" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--red)">Primitive tokens — color · spacing · radius · type</text>
      {/* Level 2 — Semantic */}
      <rect x="520" y="90" width="320" height="36" rx="2" fill="none" stroke="var(--border)" strokeWidth="1"/>
      <text x="680" y="113" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" opacity={0.7}>Semantic tokens — surface · text · border · action</text>
      {/* Level 3 — Components */}
      {[
        [490,145,88,36,"Button"],
        [588,145,88,36,"Input"],
        [686,145,88,36,"Card"],
        [784,145,88,36,"Modal"],
      ].map(([x,y,w,h,label], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="2" fill="none" stroke="var(--border)" strokeWidth="1"/>
          <text x={Number(x)+Number(w)/2} y={Number(y)+Number(h)/2+5} textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" opacity={0.7}>{String(label)}</text>
        </g>
      ))}
      {/* Level 4 — Patterns */}
      <rect x="520" y="200" width="320" height="36" rx="2" fill="none" stroke="var(--border)" strokeWidth="1"/>
      <text x="680" y="223" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" opacity={0.7}>Composed patterns — Sandbox evaluated · Master promoted</text>
      {/* Connect arrows */}
      <line x1="680" y1="71" x2="680" y2="90" stroke="var(--border)" strokeWidth="1"/>
      <line x1="680" y1="126" x2="680" y2="145" stroke="var(--border)" strokeWidth="1"/>
      <line x1="680" y1="181" x2="680" y2="200" stroke="var(--border)" strokeWidth="1"/>
      {/* Code connect label */}
      <rect x="580" y="260" width="200" height="28" rx="2" fill="var(--red)" fillOpacity="0.06" stroke="var(--red)" strokeWidth="0.5"/>
      <text x="680" y="279" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">Code Connect — Figma ↔ MUI</text>
    </svg>
  );
}

// Artifact 2: Sandbox to Master workflow
export function SandboxWorkflowArtifact() {
  return (
    <svg viewBox="0 0 900 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* Steps */}
      {[
        { x: 0, label: "New feature\nrequirement", sub: "Product roadmap\nvisibility" },
        { x: 180, label: "Local build\nin Sandbox", sub: "Designer solves\nfor this feature" },
        { x: 360, label: "Reuse\nassessment", sub: "UX lead evaluates\nrecurrence potential" },
        { x: 540, label: "Decision\ngateway", sub: "Promote or\nkeep local" },
        { x: 720, label: "Master\nlibrary", sub: "Documented,\ntokened, governed" },
      ].map((step, i) => (
        <g key={i}>
          <rect x={step.x} y="60" width="160" height="80" rx="2"
            fill={i === 3 ? "var(--red)" : "none"}
            fillOpacity={i === 3 ? "0.06" : "1"}
            stroke={i === 3 ? "var(--red)" : "var(--border)"}
            strokeWidth={i === 3 ? "1" : "0.5"}
          />
          {step.label.split("\n").map((line, li) => (
            <text key={li} x={step.x + 80} y={90 + li * 16} textAnchor="middle"
              fontFamily="var(--font-body)" fontSize="12" fontWeight={i === 4 ? "500" : "400"}
              fill={i === 3 ? "var(--red)" : "var(--ink)"} opacity={i === 3 ? 1 : 0.8}>
              {line}
            </text>
          ))}
          {step.sub.split("\n").map((line, li) => (
            <text key={li} x={step.x + 80} y={124 + li * 14} textAnchor="middle"
              fontFamily="var(--font-body)" fontSize="10"
              fill="var(--muted)">
              {line}
            </text>
          ))}
          {i < 4 && (
            <path d={`M${step.x + 160} 100 L${step.x + 175} 100`} stroke="var(--border)" strokeWidth="1" markerEnd="url(#arrow)"/>
          )}
        </g>
      ))}

      {/* Decision branches */}
      <text x="600" y="50" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">Reuse potential</text>
      <path d="M620 60 L720 60 L720 60" stroke="var(--red)" strokeWidth="0.5" strokeDasharray="3,2"/>
      <text x="600" y="175" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Context-specific</text>
      <path d="M620 155 L620 190 L720 190" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3,2"/>
      <rect x="720" y="175" width="160" height="40" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="800" y="200" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">Stays local</text>

      {/* Arrow marker */}
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="var(--muted)"/>
        </marker>
      </defs>
      <text x="0" y="240" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Engineering not involved in governance decisions — component promotion is a design responsibility</text>
    </svg>
  );
}

// Artifact 3: Velocity delta chart
export function VelocityDeltaArtifact() {
  return (
    <svg viewBox="0 0 900 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="20" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">FEATURE DELIVERY TIME — BEFORE vs AFTER RESTRUCTURE</text>

      {/* Y axis */}
      <line x1="80" y1="40" x2="80" y2="220" stroke="var(--border)" strokeWidth="0.5"/>
      {[
        [80,220,"0"],
        [80,190,"1w"],
        [80,160,"2w"],
        [80,130,"3w"],
        [80,100,"4w"],
        [80,70,"5w"],
        [80,40,"6w"],
      ].map(([x,y,label],i) => (
        <g key={i}>
          <line x1={75} y1={y} x2={880} y2={y} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,4"/>
          <text x={70} y={Number(y)+4} textAnchor="end" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{String(label)}</text>
        </g>
      ))}

      {/* Bars */}
      {[
        { x: 110, label: "Auth flow", before: 140, after: 50 },
        { x: 230, label: "Billing widget", before: 120, after: 40 },
        { x: 350, label: "Error states", before: 100, after: 30 },
        { x: 470, label: "Onboarding", before: 160, after: 55 },
        { x: 590, label: "Search", before: 130, after: 45 },
        { x: 710, label: "Settings", before: 110, after: 35 },
      ].map((bar, i) => (
        <g key={i}>
          {/* Before bar */}
          <rect x={bar.x} y={220 - bar.before} width="36" height={bar.before} rx="1"
            fill="var(--border)" opacity={0.6}/>
          {/* After bar */}
          <rect x={bar.x + 42} y={220 - bar.after} width="36" height={bar.after} rx="1"
            fill="var(--red)" opacity={0.7}/>
          <text x={bar.x + 37} y="236" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{bar.label}</text>
        </g>
      ))}

      {/* Legend */}
      <rect x="600" y="250" width="12" height="12" fill="var(--border)" opacity={0.6}/>
      <text x="618" y="261" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Before</text>
      <rect x="670" y="250" width="12" height="12" fill="var(--red)" opacity={0.7}/>
      <text x="688" y="261" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">After</text>
    </svg>
  );
}

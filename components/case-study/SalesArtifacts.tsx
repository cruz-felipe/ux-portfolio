// Artifact 1: Heuristic Impact Matrix
export function HeuristicMatrixArtifact() {
  const issues = [
    { label: "Flow entry paralysis", criticality: 9, effort: 2, type: "Flow" },
    { label: "Manual approval email", criticality: 9, effort: 3, type: "Flow" },
    { label: "Redundant data entry", criticality: 8, effort: 3, type: "Flow" },
    { label: "No install tracking", criticality: 7, effort: 4, type: "Feature" },
    { label: "Unused feature set", criticality: 2, effort: 5, type: "Visual" },
    { label: "Branding mismatch", criticality: 5, effort: 2, type: "Visual" },
    { label: "Training dependency", criticality: 8, effort: 4, type: "Flow" },
    { label: "Tool fragmentation", criticality: 10, effort: 8, type: "Arch" },
  ];

  const colors: Record<string, string> = {
    Flow: "var(--red)",
    Feature: "#6B8CBA",
    Visual: "var(--muted)",
    Arch: "#8B6BAA",
  };

  return (
    <svg viewBox="0 0 900 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">HEURISTIC IMPACT MATRIX — 32 ISSUES PRIORITIZED</text>

      {/* Axes */}
      <line x1="80" y1="40" x2="80" y2="270" stroke="var(--border)" strokeWidth="0.5"/>
      <line x1="80" y1="270" x2="860" y2="270" stroke="var(--border)" strokeWidth="0.5"/>

      {/* Grid */}
      {[1,2,3,4,5,6,7,8,9,10].map(v => (
        <g key={v}>
          <line x1={80 + v * 78} y1="40" x2={80 + v * 78} y2="270" stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>
          <text x={80 + v * 78} y="284" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{v}</text>
        </g>
      ))}
      {[2,4,6,8,10].map(v => (
        <g key={v}>
          <line x1="80" y1={270 - v * 23} x2="860" y2={270 - v * 23} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>
          <text x="72" y={270 - v * 23 + 4} textAnchor="end" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{v}</text>
        </g>
      ))}

      {/* Labels */}
      <text x="470" y="298" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Engineering effort →</text>
      <text x="20" y="160" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" transform="rotate(-90,20,160)">Criticality →</text>

      {/* Priority zones */}
      <rect x="81" y="178" width="234" height="91" fill="var(--red)" fillOpacity="0.04" stroke="none"/>
      <text x="198" y="196" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--red)" opacity="0.6">HIGH IMPACT · LOW EFFORT → Ship first</text>

      {/* Dots */}
      {issues.map((issue, i) => {
        const cx = 80 + issue.effort * 78;
        const cy = 270 - issue.criticality * 23;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill={colors[issue.type]} opacity="0.8"/>
            <text x={cx + 10} y={cy + 4} fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{issue.label}</text>
          </g>
        );
      })}

      {/* Legend */}
      {Object.entries(colors).map(([type, color], i) => (
        <g key={i}>
          <circle cx={600 + i * 80} cy="305" r="4" fill={color} opacity="0.8"/>
          <text x={610 + i * 80} y="309" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{type}</text>
        </g>
      ))}
    </svg>
  );
}

// Artifact 2: 7-tool to 3-step flow
export function FlowCompressionArtifact() {
  return (
    <svg viewBox="0 0 900 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* BEFORE */}
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">BEFORE — 7 TOOLS · 1 HOUR PER PROPOSAL</text>

      {[
        "1. CRM lookup","2. Product catalog","3. Pricing engine",
        "4. Approval email","5. Contract gen","6. Install scheduler","7. Order confirm",
      ].map((step, i) => (
        <g key={i}>
          <rect x={i * 118} y="28" width="108" height="44" rx="2"
            fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x={i * 118 + 54} y="48" textAnchor="middle"
            fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{step.split(" ").slice(0,2).join(" ")}</text>
          <text x={i * 118 + 54} y="62" textAnchor="middle"
            fontFamily="var(--font-body)" fontSize="9" fill="var(--border)">{step.split(" ").slice(2).join(" ")}</text>
          {i < 6 && (
            <text x={i * 118 + 112} y="52" textAnchor="middle"
              fontFamily="var(--font-body)" fontSize="12" fill="var(--border)">→</text>
          )}
        </g>
      ))}

      <text x="0" y="90" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Manual data re-entry across each tool · approval via email · no tracking</text>

      {/* Divider */}
      <line x1="0" y1="110" x2="900" y2="110" stroke="var(--border)" strokeWidth="0.5"/>

      {/* AFTER */}
      <text x="0" y="130" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">AFTER — 3-STEP EXPRESS FLOW · 15 MINUTES</text>

      {[
        { label: "Step 1", sub: "Client + product\nselection", note: "Single entry point\nEliminated flow paralysis" },
        { label: "Step 2", sub: "Pricing + approval\n(automated)", note: "Manager approval\nautomated in flow" },
        { label: "Step 3", sub: "Contract + install\nscheduling", note: "Tracking built in\nNo email chains" },
      ].map((step, i) => (
        <g key={i}>
          <rect x={i * 280} y="140" width="240" height="80" rx="2"
            fill="var(--red)" fillOpacity="0.05" stroke="var(--red)" strokeWidth="0.5"/>
          <text x={i * 280 + 120} y="162" textAnchor="middle"
            fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="var(--red)">{step.label}</text>
          {step.sub.split("\n").map((line, li) => (
            <text key={li} x={i * 280 + 120} y={178 + li * 14} textAnchor="middle"
              fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" opacity={0.75}>{line}</text>
          ))}
          {step.note.split("\n").map((line, li) => (
            <text key={li} x={i * 280 + 120} y={210 + li * 12} textAnchor="middle"
              fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{line}</text>
          ))}
          {i < 2 && (
            <text x={i * 280 + 254} y="185" textAnchor="middle"
              fontFamily="var(--font-display)" fontSize="18" fontWeight="800" fill="var(--red)">→</text>
          )}
        </g>
      ))}

      <text x="0" y="250" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">75% quote acceleration · 83% faster onboarding · rebrand drove adoption beyond usability improvements alone</text>
    </svg>
  );
}

// Artifact 3: Research methodology map
export function ResearchMethodologyArtifact() {
  return (
    <svg viewBox="0 0 900 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">1-MONTH ON-SITE UX STUDY — SÃO PAULO</text>

      {/* Three methods */}
      {[
        { x: 0, method: "37 Interviews", desc: "Sales agents · team leads\nmanagers · new hires", insight: "System over-flexible\nParalyzes newcomers" },
        { x: 300, method: "25 Usability tests", desc: "Task completion\ntime-on-task · errors", insight: "Unused features\nidentified and cut" },
        { x: 600, method: "20 Shadow sessions", desc: "On the floor\nlive proposal generation", insight: "Real workflow vs\nassumed workflow" },
      ].map((m, i) => (
        <g key={i}>
          <rect x={m.x} y="30" width="260" height="180" rx="2"
            fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x={m.x + 130} y="58" textAnchor="middle"
            fontFamily="var(--font-display)" fontSize="20" fontWeight="800" fill="var(--ink)">{m.method.split(" ")[0]}</text>
          <text x={m.x + 130} y="74" textAnchor="middle"
            fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">{m.method.split(" ").slice(1).join(" ")}</text>
          <line x1={m.x + 20} y1="88" x2={m.x + 240} y2="88" stroke="var(--border)" strokeWidth="0.5"/>
          {m.desc.split("\n").map((line, li) => (
            <text key={li} x={m.x + 130} y={104 + li * 16} textAnchor="middle"
              fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" opacity={0.65}>{line}</text>
          ))}
          <line x1={m.x + 20} y1="144" x2={m.x + 240} y2="144" stroke="var(--border)" strokeWidth="0.5"/>
          <text x={m.x + 20} y="160" fontFamily="var(--font-body)" fontSize="9"
            fill="var(--muted)" letterSpacing="1">KEY FINDING</text>
          {m.insight.split("\n").map((line, li) => (
            <text key={li} x={m.x + 130} y={174 + li * 14} textAnchor="middle"
              fontFamily="var(--font-body)" fontSize="11" fill="var(--red)">{line}</text>
          ))}
        </g>
      ))}

      <text x="0" y="234" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Backlog: 32 documented problems · Heuristic Impact Matrix used to present design debt as business risk to executive team</text>
    </svg>
  );
}

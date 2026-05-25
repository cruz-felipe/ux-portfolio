export function TokenArchitectureArtifact() {
  return (
    <svg viewBox="0 0 860 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* BEFORE label */}
      <text x="10" y="18" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">BEFORE</text>

      {/* Scattered boxes */}
      {[
        { x:10, y:28, w:110, h:30, label:"Button v1" },
        { x:130, y:28, w:110, h:30, label:"Button v2" },
        { x:250, y:28, w:110, h:30, label:"Button v3" },
        { x:10, y:72, w:140, h:30, label:"Modal (local)" },
        { x:165, y:72, w:130, h:30, label:"Card (custom)" },
        { x:10, y:116, w:130, h:30, label:"Icon set A" },
        { x:155, y:116, w:130, h:30, label:"Icon set B" },
        { x:10, y:160, w:160, h:30, label:"Colors (file A)" },
        { x:185, y:160, w:140, h:30, label:"Colors (file B)" },
        { x:10, y:204, w:180, h:30, label:"Form (fragmented)" },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="2" fill="none" stroke="var(--border)" strokeWidth="1"/>
          <text x={b.x + b.w / 2} y={b.y + 19} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{b.label}</text>
        </g>
      ))}
      {/* Chaos lines */}
      {[
        [65,58,195,72],[195,58,305,72],[65,102,170,116],[235,72,220,116],
        [75,146,220,160],[185,130,260,160],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3,3"/>
      ))}

      {/* Divider */}
      <line x1="380" y1="0" x2="380" y2="300" stroke="var(--border)" strokeWidth="0.5"/>

      {/* AFTER label */}
      <text x="400" y="18" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">AFTER</text>

      {/* Level 1 Primitives */}
      <rect x="400" y="28" width="440" height="36" rx="2" fill="var(--red)" fillOpacity="0.07" stroke="var(--red)" strokeWidth="0.5"/>
      <text x="620" y="50" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--red)">Primitive tokens: color · spacing · radius · type</text>

      {/* Arrow */}
      <line x1="620" y1="64" x2="620" y2="80" stroke="var(--border)" strokeWidth="1"/>

      {/* Level 2 Semantic */}
      <rect x="420" y="80" width="400" height="36" rx="2" fill="none" stroke="var(--border)" strokeWidth="1"/>
      <text x="620" y="102" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.7">Semantic tokens: surface · text · border · action</text>

      {/* Arrow */}
      <line x1="620" y1="116" x2="620" y2="132" stroke="var(--border)" strokeWidth="1"/>

      {/* Level 3 Components */}
      {[
        { x:400, label:"Button" },
        { x:510, label:"Input" },
        { x:620, label:"Card" },
        { x:730, label:"Modal" },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="132" width="100" height="34" rx="2" fill="none" stroke="var(--border)" strokeWidth="1"/>
          <text x={c.x + 50} y="153" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.7">{c.label}</text>
        </g>
      ))}

      {/* Arrow */}
      <line x1="620" y1="166" x2="620" y2="182" stroke="var(--border)" strokeWidth="1"/>

      {/* Level 4 Patterns */}
      <rect x="420" y="182" width="400" height="36" rx="2" fill="none" stroke="var(--border)" strokeWidth="1"/>
      <text x="620" y="204" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.7">Composed patterns: Sandbox evaluated, Master promoted</text>

      {/* Code Connect badge */}
      <rect x="500" y="240" width="240" height="30" rx="2" fill="var(--red)" fillOpacity="0.06" stroke="var(--red)" strokeWidth="0.5"/>
      <text x="620" y="259" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">Code Connect: Figma to MUI production codebase</text>
    </svg>
  );
}

export function SandboxWorkflowArtifact() {
  const steps = [
    { label: "New feature", sub: "Product roadmap\nvisibility" },
    { label: "Local build", sub: "Designer solves\nfor this feature" },
    { label: "Reuse check", sub: "UX lead evaluates\nrecurrence" },
    { label: "Decision", sub: "Promote or\nkeep local", highlight: true },
    { label: "Master library", sub: "Documented\ntokened, governed" },
  ];

  return (
    <svg viewBox="0 0 860 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {steps.map((step, i) => {
        const x = i * 174;
        return (
          <g key={i}>
            <rect x={x} y="20" width="160" height="80" rx="2"
              fill={step.highlight ? "var(--red)" : "none"}
              fillOpacity={step.highlight ? 0.06 : 1}
              stroke={step.highlight ? "var(--red)" : "var(--border)"}
              strokeWidth={step.highlight ? 1 : 0.5}
            />
            <text x={x + 80} y="56" textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fontWeight="500"
              fill={step.highlight ? "var(--red)" : "var(--ink)"} fillOpacity={step.highlight ? 1 : 0.8}>
              {step.label}
            </text>
            {step.sub.split("\n").map((line, li) => (
              <text key={li} x={x + 80} y={72 + li * 14} textAnchor="middle"
                fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{line}</text>
            ))}
            {i < steps.length - 1 && (
              <line x1={x + 160} y1="60" x2={x + 174} y2="60" stroke="var(--muted)" strokeWidth="1"/>
            )}
          </g>
        );
      })}

      {/* Decision branches from step 3 */}
      <text x="604" y="16" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">Reuse potential</text>
      <path d="M694 20 L720 20 L720 20" stroke="var(--red)" strokeWidth="0.5" strokeDasharray="3,2"/>

      <text x="604" y="136" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Context-specific</text>
      <path d="M694 100 L694 148 L720 148" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3,2"/>
      <rect x="720" y="132" width="130" height="32" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="785" y="152" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Stays local</text>

      <text x="0" y="210" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Component promotion is a design decision. Engineering not involved in governance.</text>
    </svg>
  );
}

export function VelocityDeltaArtifact() {
  const bars = [
    { label: "Plan mgmt", before: 150, after: 55 },
    { label: "Billing widget", before: 130, after: 45 },
    { label: "Settings", before: 110, after: 38 },
    { label: "Auth flow", before: 160, after: 58 },
    { label: "Onboarding", before: 140, after: 50 },
    { label: "Error states", before: 100, after: 32 },
  ];

  const chartH = 160;
  const barW = 28;
  const gap = 8;
  const groupW = barW * 2 + gap + 20;
  const originX = 60;
  const originY = 220;

  return (
    <svg viewBox="0 0 860 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x={originX} y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">FEATURE DELIVERY TIME: BEFORE vs AFTER RESTRUCTURE</text>

      {/* Y axis labels */}
      {[0,1,2,3,4].map(v => {
        const y = originY - v * (chartH / 4);
        return (
          <g key={v}>
            <text x={originX - 8} y={y + 4} textAnchor="end" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{v === 0 ? "0" : `${v}w`}</text>
            <line x1={originX} y1={y} x2={originX + 780} y2={y} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="3,4"/>
          </g>
        );
      })}

      {/* Y axis */}
      <line x1={originX} y1="28" x2={originX} y2={originY} stroke="var(--border)" strokeWidth="0.5"/>

      {bars.map((bar, i) => {
        const x = originX + 20 + i * groupW;
        const beforeH = (bar.before / 200) * chartH;
        const afterH = (bar.after / 200) * chartH;
        return (
          <g key={i}>
            <rect x={x} y={originY - beforeH} width={barW} height={beforeH} rx="1" fill="var(--muted)" fillOpacity="0.3"/>
            <rect x={x + barW + gap} y={originY - afterH} width={barW} height={afterH} rx="1" fill="var(--red)" fillOpacity="0.7"/>
            <text x={x + barW + gap / 2} y={originY + 16} textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{bar.label}</text>
          </g>
        );
      })}

      {/* Legend */}
      <rect x={originX + 20} y={originY + 32} width="12" height="10" fill="var(--muted)" fillOpacity="0.3"/>
      <text x={originX + 38} y={originY + 41} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Before restructure</text>
      <rect x={originX + 160} y={originY + 32} width="12" height="10" fill="var(--red)" fillOpacity="0.7"/>
      <text x={originX + 178} y={originY + 41} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">After restructure</text>
    </svg>
  );
}

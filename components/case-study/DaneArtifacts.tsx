// Dane Telecom artifacts — editorial infographic style
// Reference: bold geometry, large numbers, red accent, cream background

export function TokenArchitectureArtifact() {
  return (
    <svg viewBox="0 0 860 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* BEFORE side */}
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5" textDecoration="none">BEFORE</text>

      {/* Scattered boxes — 9 scattered rectangles at varying angles suggesting chaos */}
      {[
        {x:10, y:30, w:90, h:26, label:"Button v1"},
        {x:130, y:38, w:90, h:26, label:"Button v2"},
        {x:60, y:80, w:100, h:26, label:"Modal (local)"},
        {x:170, y:72, w:90, h:26, label:"Card"},
        {x:20, y:130, w:110, h:26, label:"Icon set A"},
        {x:150, y:122, w:100, h:26, label:"Icon set B"},
        {x:40, y:178, w:120, h:26, label:"Colors (file A)"},
        {x:175, y:170, w:100, h:26, label:"Colors (B)"},
        {x:80, y:226, w:140, h:26, label:"Form (fragmented)"},
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="2" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray={i % 2 === 0 ? "3,2" : ""}/>
          <text x={b.x + b.w/2} y={b.y + 17} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{b.label}</text>
        </g>
      ))}

      {/* chaos connector lines */}
      <line x1="55" y1="56" x2="130" y2="72" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
      <line x1="110" y1="43" x2="110" y2="80" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
      <line x1="175" y1="98" x2="170" y2="130" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
      <line x1="75" y1="156" x2="175" y2="170" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>

      {/* Divider */}
      <line x1="310" y1="0" x2="310" y2="340" stroke="var(--border)" strokeWidth="0.5"/>

      {/* AFTER side — three stacked levels like the growth chart reference */}
      <text x="330" y="18" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">AFTER</text>

      {/* Level labels */}
      {[
        {y:40, label:"01 Primitive tokens", sub:"color · spacing · radius · type", w:480, accent:true},
        {y:110, label:"02 Semantic tokens", sub:"surface · text · border · action", w:420, accent:false},
        {y:178, label:"03 Components", sub:"Button · Input · Card · Modal", w:360, accent:false},
        {y:246, label:"04 Composed patterns", sub:"Sandbox evaluated · Master promoted", w:480, accent:false},
      ].map((level, i) => (
        <g key={i}>
          <rect x="330" y={level.y} width={level.w} height="46" rx="3"
            fill={level.accent ? "var(--red)" : "none"}
            fillOpacity={level.accent ? 0.08 : 0}
            stroke={level.accent ? "var(--red)" : "var(--border)"}
            strokeWidth={level.accent ? 1 : 0.5}
          />
          <text x="346" y={level.y + 18} fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill={level.accent ? "var(--red)" : "var(--ink)"} fillOpacity={level.accent ? 1 : 0.8}>{level.label}</text>
          <text x="346" y={level.y + 34} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{level.sub}</text>
          {i < 3 && <line x1="570" y1={level.y + 46} x2="570" y2={level.y + 70} stroke="var(--border)" strokeWidth="1"/>}
        </g>
      ))}

      {/* Code Connect badge */}
      <rect x="430" y="302" width="220" height="28" rx="14" fill="var(--red)" fillOpacity="0.08" stroke="var(--red)" strokeWidth="0.5"/>
      <text x="540" y="320" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--red)">Code Connect: Figma ↔ MUI production</text>
    </svg>
  );
}

export function SandboxWorkflowArtifact() {
  const steps = [
    {label:"New feature", sub:"Roadmap input"},
    {label:"Sandbox build", sub:"Designer solves locally"},
    {label:"Reuse check", sub:"UX lead evaluates"},
    {label:"Decision", sub:"Promote or keep local", accent:true},
    {label:"Master library", sub:"Documented, governed"},
  ];

  return (
    <svg viewBox="0 0 860 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* Step number circles — reference image 3/5 style */}
      {steps.map((step, i) => {
        const cx = 86 + i * 172;
        const isAccent = step.accent;
        return (
          <g key={i}>
            {/* Circle */}
            <circle cx={cx} cy="80" r={isAccent ? 50 : 36}
              fill={isAccent ? "var(--red)" : "none"}
              fillOpacity={isAccent ? 0.1 : 0}
              stroke={isAccent ? "var(--red)" : "var(--border)"}
              strokeWidth={isAccent ? 1.5 : 1}
            />
            {/* Step number */}
            <text x={cx} y="76" textAnchor="middle" fontFamily="var(--font-display)" fontSize={isAccent ? "22" : "18"} fontWeight="800"
              fill={isAccent ? "var(--red)" : "var(--ink)"} fillOpacity={isAccent ? 1 : 0.7}>
              {String(i + 1).padStart(2, "0")}
            </text>
            <text x={cx} y="92" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10"
              fill={isAccent ? "var(--red)" : "var(--muted)"}>
              {step.label}
            </text>
            {/* Connector arrow */}
            {i < steps.length - 1 && (
              <line x1={cx + (isAccent ? 50 : 36) + 4} y1="80" x2={cx + (isAccent ? 50 : 36) + (172 - (isAccent ? 50 : 36) - (steps[i+1]?.accent ? 50 : 36) - 4)} y2="80"
                stroke="var(--border)" strokeWidth="1"/>
            )}
            <text x={cx} y="152" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{step.sub}</text>
          </g>
        );
      })}
      <text x="0" y="190" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Engineering not involved in governance decisions. Component promotion is a design responsibility.</text>
    </svg>
  );
}

export function VelocityDeltaArtifact() {
  const bars = [
    {label:"Plan mgmt", before:3, after:0.8},
    {label:"Billing widget", after:0.7, before:2.5},
    {label:"Settings", before:2, after:0.6},
  ];
  const maxDays = 3;
  const chartH = 160;
  const barW = 60;

  return (
    <svg viewBox="0 0 860 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">FEATURE DELIVERY TIME: BEFORE AND AFTER RESTRUCTURE</text>

      {/* Big editorial number */}
      <text x="0" y="90" fontFamily="var(--font-display)" fontSize="96" fontWeight="800" fill="var(--red)" fillOpacity="0.12">50%</text>
      <text x="0" y="110" fontFamily="var(--font-display)" fontSize="20" fontWeight="800" fill="var(--ink)">faster handoff</text>
      <text x="0" y="130" fontFamily="var(--font-body)" fontSize="13" fill="var(--muted)">Two weeks to one week, consistently across all feature types</text>

      {/* Bar chart */}
      {bars.map((bar, i) => {
        const x = 360 + i * 170;
        const beforeH = (bar.before / maxDays) * chartH;
        const afterH = (bar.after / maxDays) * chartH;
        const baseY = 220;
        return (
          <g key={i}>
            {/* Before bar */}
            <rect x={x} y={baseY - beforeH} width={barW} height={beforeH} rx="3" fill="var(--muted)" fillOpacity="0.2"/>
            {/* After bar */}
            <rect x={x + barW + 8} y={baseY - afterH} width={barW} height={afterH} rx="3" fill="var(--red)" fillOpacity="0.7"/>
            <text x={x + barW + 4} y={baseY + 14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{bar.label}</text>
          </g>
        );
      })}

      {/* Baseline */}
      <line x1="355" y1="220" x2="855" y2="220" stroke="var(--border)" strokeWidth="0.5"/>

      {/* Legend */}
      <rect x="360" y="240" width="12" height="8" rx="1" fill="var(--muted)" fillOpacity="0.3"/>
      <text x="378" y="248" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Before</text>
      <rect x="430" y="240" width="12" height="8" rx="1" fill="var(--red)" fillOpacity="0.7"/>
      <text x="448" y="248" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">After</text>
    </svg>
  );
}

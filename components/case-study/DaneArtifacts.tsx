// Palette: --red solid fills, #1a1a1a for dark, #e8e8e4 for light fills, white for reversed text

export function TokenArchitectureArtifact() {
  return (
    <svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>

      {/* BEFORE label */}
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">BEFORE</text>

      {/* Fragmented boxes — 9 boxes, uneven sizes, slight visual chaos */}
      {[
        [0,24,100,28,"Button v1"],[110,24,100,28,"Button v2"],[220,24,80,28,"Button v3"],
        [0,62,130,28,"Modal (local)"],[140,62,110,28,"Card"],
        [0,100,120,28,"Icon set A"],[130,100,110,28,"Icon set B"],
        [0,138,150,28,"Colors A"],[160,138,120,28,"Colors B"],
      ].map(([x,y,w,h,label], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="2" fill="#e8e8e4"/>
          <text x={Number(x)+Number(w)/2} y={Number(y)+18} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="#666">{String(label)}</text>
        </g>
      ))}

      {/* Divider */}
      <line x1="340" y1="10" x2="340" y2="310" stroke="#d0d0d0" strokeWidth="1"/>

      {/* AFTER label */}
      <text x="360" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">AFTER</text>

      {/* 4-level stack — solid fills, decreasing width = hierarchy */}
      {[
        {y:24, w:440, label:"01  Primitive tokens", sub:"color · spacing · radius · type", solid:true},
        {y:84, w:400, label:"02  Semantic tokens", sub:"surface · text · border · action", solid:false},
        {y:144, w:360, label:"03  Components", sub:"Button · Input · Card · Modal", solid:false},
        {y:204, w:440, label:"04  Composed patterns", sub:"Sandbox evaluated · Master promoted", solid:false},
      ].map((row, i) => (
        <g key={i}>
          <rect x="360" y={row.y} width={row.w} height="48" rx="3"
            fill={row.solid ? "var(--red)" : "#1a1a1a"}/>
          <text x="378" y={row.y+20} fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="white">{row.label}</text>
          <text x="378" y={row.y+36} fontFamily="var(--font-body)" fontSize="10" fill={row.solid ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.55)"}>{row.sub}</text>
          {i < 3 && <line x1="580" y1={row.y+48} x2="580" y2={row.y+84} stroke="#d0d0d0" strokeWidth="1"/>}
        </g>
      ))}

      {/* Code Connect */}
      <rect x="410" y="270" width="290" height="30" rx="15" fill="var(--red)"/>
      <text x="555" y="289" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="white">Code Connect: Figma ↔ MUI</text>
    </svg>
  );
}

export function SandboxWorkflowArtifact() {
  const steps = [
    {n:"01", label:"New feature", sub:"Roadmap input"},
    {n:"02", label:"Sandbox build", sub:"Designer solves locally"},
    {n:"03", label:"Reuse check", sub:"UX lead evaluates"},
    {n:"04", label:"Decision", sub:"Promote or keep local", accent:true},
    {n:"05", label:"Master library", sub:"Documented, governed"},
  ];

  return (
    <svg viewBox="0 0 820 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <line x1="0" y1="52" x2="820" y2="52" stroke="#d0d0d0" strokeWidth="1"/>

      {steps.map((step, i) => {
        const x = i * 164;
        return (
          <g key={i}>
            <rect x={x} y="28" width="48" height="48" rx="24"
              fill={step.accent ? "var(--red)" : "#1a1a1a"}/>
            <text x={x+24} y={28+30} textAnchor="middle" fontFamily="var(--font-display)" fontSize="14" fontWeight="800" fill="white">{step.n}</text>
            <text x={x+24} y="100" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--ink)">{step.label}</text>
            <text x={x+24} y="116" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{step.sub}</text>
          </g>
        );
      })}

      <text x="0" y="148" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Engineering not involved in governance. Component promotion is a design decision.</text>
    </svg>
  );
}

export function VelocityDeltaArtifact() {
  const bars = [
    {label:"Plan mgmt", before:150, after:55},
    {label:"Billing widget", before:130, after:45},
    {label:"Settings", before:110, after:38},
  ];
  const maxH = 160;

  return (
    <svg viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">FEATURE DELIVERY TIME: BEFORE AND AFTER</text>

      {/* Big stat — left */}
      <rect x="0" y="30" width="220" height="120" rx="4" fill="#1a1a1a"/>
      <text x="24" y="82" fontFamily="var(--font-display)" fontSize="48" fontWeight="800" fill="var(--red)">50%</text>
      <text x="24" y="106" fontFamily="var(--font-body)" fontSize="13" fontWeight="500" fill="white">faster handoff</text>
      <text x="24" y="124" fontFamily="var(--font-body)" fontSize="11" fill="rgba(255,255,255,0.5)">2 weeks → 1 week</text>

      {/* Bar chart */}
      {bars.map((bar, i) => {
        const x = 280 + i * 180;
        const bH = (bar.before / 200) * maxH;
        const aH = (bar.after / 200) * maxH;
        const base = 200;
        return (
          <g key={i}>
            <rect x={x} y={base-bH} width={60} height={bH} rx="3" fill="#d0d0d0"/>
            <rect x={x+68} y={base-aH} width={60} height={aH} rx="3" fill="var(--red)"/>
            <text x={x+64} y={base+16} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{bar.label}</text>
          </g>
        );
      })}

      <line x1="276" y1="200" x2="820" y2="200" stroke="#e0e0e0" strokeWidth="0.5"/>

      {/* Legend */}
      <rect x="280" y="228" width="12" height="8" rx="1" fill="#d0d0d0"/>
      <text x="298" y="236" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Before restructure</text>
      <rect x="420" y="228" width="12" height="8" rx="1" fill="var(--red)"/>
      <text x="438" y="236" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">After restructure</text>
    </svg>
  );
}

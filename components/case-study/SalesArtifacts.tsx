export function HeuristicMatrixArtifact() {
  const issues = [
    {label:"Flow entry paralysis", crit:9, effort:2},
    {label:"Manual approval", crit:9, effort:3},
    {label:"Redundant data entry", crit:8, effort:2},
    {label:"No install tracking", crit:7, effort:4},
    {label:"Training dependency", crit:8, effort:4},
    {label:"Unused feature set A", crit:2, effort:5},
    {label:"Unused feature set B", crit:3, effort:6},
    {label:"Branding mismatch", crit:5, effort:2},
    {label:"Tool fragmentation", crit:10, effort:8},
    {label:"No progress indicator", crit:6, effort:2},
    {label:"Copy-paste transfer", crit:7, effort:3},
    {label:"No bulk actions", crit:4, effort:5},
    {label:"Inconsistent nav", crit:5, effort:3},
    {label:"Error state missing", crit:6, effort:1},
    {label:"Search not contextual", crit:7, effort:5},
    {label:"Approval visibility", crit:8, effort:3},
  ];

  const oX=60, oY=220, cW=620, cH=180;

  return (
    <svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>

      {/* Priority zone — solid light fill, no stroke */}
      <rect x={oX} y={oY-(6/10)*cH} width={(4/10)*cW} height={(6/10)*cH} rx="2" fill="#f0f0ec"/>
      <text x={oX+12} y={oY-(6/10)*cH+16} fontFamily="var(--font-body)" fontSize="9" fill="#999">Ship first</text>

      {/* Grid lines */}
      {[2,4,6,8,10].map(v => (
        <g key={v}>
          <line x1={oX+(v/10)*cW} y1={oY-cH} x2={oX+(v/10)*cW} y2={oY} stroke="#e8e8e4" strokeWidth="1"/>
          <text x={oX+(v/10)*cW} y={oY+14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="#bbb">{v}</text>
          <line x1={oX} y1={oY-(v/10)*cH} x2={oX+cW} y2={oY-(v/10)*cH} stroke="#e8e8e4" strokeWidth="1"/>
          <text x={oX-8} y={oY-(v/10)*cH+4} textAnchor="end" fontFamily="var(--font-body)" fontSize="9" fill="#bbb">{v}</text>
        </g>
      ))}

      {/* Axes */}
      <line x1={oX} y1={oY-cH} x2={oX} y2={oY} stroke="#1a1a1a" strokeWidth="1.5"/>
      <line x1={oX} y1={oY} x2={oX+cW} y2={oY} stroke="#1a1a1a" strokeWidth="1.5"/>

      {/* Axis labels */}
      <text x={oX+cW/2} y={oY+28} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Engineering effort →</text>
      <text x="14" y={oY-cH/2} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" transform={`rotate(-90,14,${oY-cH/2})`}>↑ Criticality</text>

      {/* Data points */}
      {issues.map((issue, i) => {
        const cx = oX + (issue.effort/10)*cW;
        const cy = oY - (issue.crit/10)*cH;
        const hi = issue.crit >= 7 && issue.effort <= 4;
        return (
          <rect key={i} x={cx-5} y={cy-5} width="10" height="10" rx="5"
            fill={hi ? "var(--red)" : "#1a1a1a"}/>
        );
      })}

      {/* Legend */}
      <rect x={oX} y={oY+42} width="10" height="10" rx="5" fill="var(--red)"/>
      <text x={oX+16} y={oY+51} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">High priority: criticality above 6, effort below 5</text>
      <rect x={oX+310} y={oY+42} width="10" height="10" rx="5" fill="#1a1a1a"/>
      <text x={oX+326} y={oY+51} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Lower priority</text>
    </svg>
  );
}

export function FlowCompressionArtifact() {
  return (
    <svg viewBox="0 0 820 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>

      {/* Before — 7 small grey blocks in a row */}
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">BEFORE: 7 TOOLS · 1 HOUR PER PROPOSAL</text>
      {["CRM","Catalog","Pricing","Approval","Contract","Schedule","Confirm"].map((s, i) => (
        <g key={i}>
          <rect x={i*108} y="22" width="98" height="36" rx="2" fill="#e8e8e4"/>
          <text x={i*108+49} y="44" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="#555">{s}</text>
          {i < 6 && <line x1={i*108+98} y1="40" x2={i*108+108} y2="40" stroke="#bbb" strokeWidth="1"/>}
        </g>
      ))}

      {/* After — 3 solid blocks, growing height */}
      <text x="0" y="82" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">AFTER: 3-STEP EXPRESS FLOW · 15 MINUTES</text>
      {[
        {label:"Step 1", sub:"Client + product", h:60, fill:"var(--red)"},
        {label:"Step 2", sub:"Pricing + approval", h:80, fill:"#1a1a1a"},
        {label:"Step 3", sub:"Contract + install", h:100, fill:"#1a1a1a"},
      ].map((step, i) => (
        <g key={i}>
          <rect x={i*130} y={200-step.h} width="120" height={step.h} rx={60} fill={step.fill}/>
          <text x={i*130+60} y="182" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="white">{step.label}</text>
          <text x={i*130+60} y="196" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill={i===0 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.6)"}>{step.sub}</text>
        </g>
      ))}
    </svg>
  );
}

export function ResearchMethodologyArtifact() {
  const methods = [
    {count:"37", label:"Interviews", sub:"Sales agents, leads,\nmanagers, new hires", finding:"System over-flexible"},
    {count:"25", label:"Usability tests", sub:"Task completion,\ntime-on-task, errors", finding:"Unused features cut"},
    {count:"20", label:"Shadow sessions", sub:"On floor, live\nproposal generation", finding:"Real vs assumed flow"},
  ];

  return (
    <svg viewBox="0 0 820 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">1-MONTH ON-SITE UX STUDY · SÃO PAULO</text>

      {methods.map((m, i) => {
        const x = i * 274;
        return (
          <g key={i}>
            {/* Card */}
            <rect x={x} y="22" width="260" height="164" rx="3" fill={i===0 ? "#1a1a1a" : "#f5f5f2"}/>
            {/* Count */}
            <text x={x+24} y="82" fontFamily="var(--font-display)" fontSize="52" fontWeight="800"
              fill={i===0 ? "var(--red)" : "#1a1a1a"}>{m.count}</text>
            <text x={x+24} y="102" fontFamily="var(--font-body)" fontSize="13" fontWeight="600"
              fill={i===0 ? "white" : "#1a1a1a"}>{m.label}</text>
            <line x1={x+24} y1="112" x2={x+236} y2="112" stroke={i===0 ? "rgba(255,255,255,0.15)" : "#e0e0e0"} strokeWidth="1"/>
            {/* Sub */}
            {m.sub.split("\n").map((line, li) => (
              <text key={li} x={x+24} y={126+li*15} fontFamily="var(--font-body)" fontSize="11"
                fill={i===0 ? "rgba(255,255,255,0.55)" : "#888"}>{line}</text>
            ))}
            {/* Finding */}
            <rect x={x+16} y="162" width="228" height="20" rx="2" fill="var(--red)"/>
            <text x={x+130} y="176" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="white">{m.finding}</text>
          </g>
        );
      })}
    </svg>
  );
}

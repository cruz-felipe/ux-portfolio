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

  const oX = 60, oY = 210, cW = 620, cH = 170;

  return (
    <svg viewBox="0 0 860 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* Editorial headline number */}
      <text x="700" y="80" fontFamily="var(--font-display)" fontSize="80" fontWeight="800" fill="var(--red)" fillOpacity="0.1">32</text>
      <text x="700" y="96" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">issues documented</text>

      {/* Grid */}
      {[2,4,6,8,10].map(v => {
        const x = oX + (v/10)*cW;
        const y = oY - (v/10)*cH;
        return (
          <g key={v}>
            <line x1={x} y1={oY-cH} x2={x} y2={oY} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>
            <text x={x} y={oY+14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{v}</text>
            <line x1={oX} y1={y} x2={oX+cW} y2={y} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>
            <text x={oX-8} y={y+4} textAnchor="end" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{v}</text>
          </g>
        );
      })}
      <line x1={oX} y1={oY-cH} x2={oX} y2={oY} stroke="var(--border)" strokeWidth="0.5"/>
      <line x1={oX} y1={oY} x2={oX+cW} y2={oY} stroke="var(--border)" strokeWidth="0.5"/>

      {/* Priority zone */}
      <rect x={oX} y={oY - (6/10)*cH} width={(4/10)*cW} height={(6/10)*cH} fill="var(--red)" fillOpacity="0.05"/>
      <text x={oX+(2/10)*cW} y={oY-(6/10)*cH+16} textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--red)" fillOpacity="0.5">Ship first</text>

      {/* Axis labels */}
      <text x={oX+cW/2} y={oY+26} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Engineering effort</text>
      <text x="12" y={oY-cH/2} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" transform={`rotate(-90,12,${oY-cH/2})`}>Criticality</text>

      {/* Points */}
      {issues.map((issue, i) => {
        const cx = oX + (issue.effort/10)*cW;
        const cy = oY - (issue.crit/10)*cH;
        const hi = issue.crit >= 7 && issue.effort <= 4;
        return (
          <circle key={i} cx={cx} cy={cy} r={hi ? 7 : 5}
            fill={hi ? "var(--red)" : "var(--muted)"}
            fillOpacity={hi ? 0.8 : 0.25}/>
        );
      })}

      {/* Legend */}
      <circle cx={oX+20} cy={oY+46} r="6" fill="var(--red)" fillOpacity="0.8"/>
      <text x={oX+32} y={oY+50} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">High priority: criticality above 6, effort below 5</text>
      <circle cx={oX+330} cy={oY+46} r="4" fill="var(--muted)" fillOpacity="0.3"/>
      <text x={oX+342} y={oY+50} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Lower priority</text>
    </svg>
  );
}

export function FlowCompressionArtifact() {
  return (
    <svg viewBox="0 0 860 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* Editorial large numbers — reference image 3/4 style */}
      <text x="0" y="80" fontFamily="var(--font-display)" fontSize="96" fontWeight="800" fill="var(--muted)" fillOpacity="0.15">7</text>
      <text x="110" y="80" fontFamily="var(--font-display)" fontSize="48" fontWeight="800" fill="var(--muted)" fillOpacity="0.3">→</text>
      <text x="170" y="80" fontFamily="var(--font-display)" fontSize="96" fontWeight="800" fill="var(--red)" fillOpacity="0.7">3</text>
      <text x="0" y="98" fontFamily="var(--font-body)" fontSize="13" fill="var(--muted)">tools</text>
      <text x="170" y="98" fontFamily="var(--font-body)" fontSize="13" fill="var(--red)">steps</text>

      {/* Time compression */}
      <text x="310" y="60" fontFamily="var(--font-display)" fontSize="48" fontWeight="800" fill="var(--muted)" fillOpacity="0.3">1hr</text>
      <text x="400" y="60" fontFamily="var(--font-display)" fontSize="24" fontWeight="800" fill="var(--muted)" fillOpacity="0.3">→</text>
      <text x="440" y="60" fontFamily="var(--font-display)" fontSize="48" fontWeight="800" fill="var(--red)">15min</text>
      <text x="310" y="78" fontFamily="var(--font-body)" fontSize="12" fill="var(--muted)">per proposal</text>

      {/* 3 steps shown as growing bars — reference image 4 */}
      {[
        {label:"Step 1", detail:"Client and product\nselection", h:60},
        {label:"Step 2", detail:"Pricing and approval\nautomated", h:90},
        {label:"Step 3", detail:"Contract and install\nscheduling", h:120},
      ].map((step, i) => (
        <g key={i}>
          <rect x={310 + i * 180} y={200 - step.h} width="140" height={step.h} rx="70" fill="var(--red)" fillOpacity={0.15 + i * 0.15}/>
          <text x={310 + i * 180 + 70} y={208} textAnchor="middle" fontFamily="var(--font-display)" fontSize="13" fontWeight="800" fill="var(--red)">{step.label}</text>
          {step.detail.split("\n").map((line, li) => (
            <text key={li} x={310 + i * 180 + 70} y={222 + li * 14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{line}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export function ResearchMethodologyArtifact() {
  const methods = [
    {count:"37", label:"Interviews", finding:"System over-flexible.\nParalyzes newcomers."},
    {count:"25", label:"Usability tests", finding:"Unused features\nidentified and cut."},
    {count:"20", label:"Shadow sessions", finding:"Real workflow vs\nassumed workflow."},
  ];

  return (
    <svg viewBox="0 0 860 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">1-MONTH ON-SITE UX STUDY, SÃO PAULO</text>

      {methods.map((m, i) => (
        <g key={i}>
          {/* Large editorial circle — reference image 3 */}
          <circle cx={100 + i * 280} cy="110" r="80"
            fill="var(--red)" fillOpacity={0.04 + i * 0.02}
            stroke="var(--red)" strokeWidth="1" strokeOpacity="0.2"/>
          {/* Big number */}
          <text x={100 + i * 280} y="98" textAnchor="middle" fontFamily="var(--font-display)" fontSize="52" fontWeight="800" fill="var(--ink)" fillOpacity="0.85">{m.count}</text>
          <text x={100 + i * 280} y="118" textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fill="var(--muted)">{m.label}</text>
          {/* Finding */}
          {m.finding.split("\n").map((line, li) => (
            <text key={li} x={100 + i * 280} y={148 + li * 16} textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="var(--red)">{line}</text>
          ))}
        </g>
      ))}

      <text x="0" y="210" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">32 documented problems. Heuristic Impact Matrix presented design debt as business risk to executive team.</text>
    </svg>
  );
}

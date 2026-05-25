export function QuotaArchitectureArtifact() {
  const modules = [
    {title:"Quota management", items:["Client quota overview","Partner quota breakdown","Threshold alerts","Manual adjustments","Usage history"]},
    {title:"API usage", items:["API consumption dashboard","Rate limit status","Usage by product","Trend reporting","Export"]},
    {title:"Change requests", items:["New request form","Approval routing","Request status tracking","Approval history","Audit log"]},
  ];

  return (
    <svg viewBox="0 0 860 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">PLATFORM INFORMATION ARCHITECTURE</text>

      {/* Shared layer */}
      <rect x="0" y="24" width="860" height="30" rx="2" fill="var(--muted)" fillOpacity="0.06" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="430" y="43" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">Shared navigation · Role-based access · Consistent with client tool ecosystem</text>

      {/* Three module columns — reference image 4 bar style growing */}
      {modules.map((mod, mi) => {
        const x = mi * 290;
        const h = 130 + mi * 20;
        return (
          <g key={mi}>
            {/* Growing bar top */}
            <rect x={x} y={64} width="278" height={h} rx="3" fill="var(--red)" fillOpacity={0.04 + mi * 0.02} stroke="var(--border)" strokeWidth="0.5"/>
            <rect x={x} y={64} width="278" height="28" rx="3" fill="var(--muted)" fillOpacity={0.06}/>
            <text x={x + 12} y={82} fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="var(--ink)" fillOpacity="0.85">{`0${mi+1} ${mod.title}`}</text>
            {mod.items.map((item, ii) => (
              <g key={ii}>
                <line x1={x + 12} y1={100 + ii * 22} x2={x + 266} y2={100 + ii * 22} stroke="var(--border)" strokeWidth="0.3"/>
                <text x={x + 12} y={112 + ii * 22} fontFamily="var(--font-body)" fontSize="10" fill="var(--ink)" fillOpacity="0.6">{item}</text>
              </g>
            ))}
          </g>
        );
      })}

      <text x="0" y="254" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Visual language and interaction patterns matched to client existing tool ecosystem. Onboarding overhead designed to be minimal.</text>
    </svg>
  );
}

export function WorkshopMethodArtifact() {
  return (
    <svg viewBox="0 0 860 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">WORKSHOP INPUT TO DESIGN OUTPUT</text>

      {/* Timeline dots — reference image 5 style */}
      <line x1="40" y1="80" x2="820" y2="80" stroke="var(--border)" strokeWidth="1"/>

      {[
        {x:40, label:"Workshop session", sub:"Stakeholder input\nclarification"},
        {x:200, label:"Concept sketch", sub:"Preliminary drafts\nfor reaction"},
        {x:360, label:"Workshop review", sub:"Discuss on top\nof concepts", accent:true},
        {x:520, label:"Design output", sub:"Decisions locked\ndependencies flagged"},
        {x:680, label:"Next session", sub:"Updated concepts\nscope absorbed"},
      ].map((step, i) => {
        const isAccent = step.accent;
        return (
          <g key={i}>
            <circle cx={step.x} cy="80" r={isAccent ? 14 : 8}
              fill={isAccent ? "var(--red)" : "var(--paper)"}
              stroke={isAccent ? "var(--red)" : "var(--border)"}
              strokeWidth={isAccent ? 1.5 : 1}/>
            {isAccent && <circle cx={step.x} cy="80" r="5" fill="var(--red)" fillOpacity="0.6"/>}
            <text x={step.x} y={isAccent ? "52" : "58"} textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill={isAccent ? "var(--red)" : "var(--ink)"} fillOpacity={isAccent ? 1 : 0.8}>{step.label}</text>
            {step.sub.split("\n").map((line, li) => (
              <text key={li} x={step.x} y={112 + li * 14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{line}</text>
            ))}
          </g>
        );
      })}

      <text x="0" y="175" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">Preliminary concepts brought as thinking tools, not proposals. Reacting to something unfinished is faster than constructing from blank paper.</text>
      <text x="0" y="192" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">Alignment dependencies flagged explicitly before committing to detailed work. Client ratification tracked as a blocker, not an assumption.</text>
    </svg>
  );
}

export function ApprovalFlowArtifact() {
  return (
    <svg viewBox="0 0 860 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">CHANGE REQUEST APPROVAL FLOW</text>

      {/* Request types */}
      <text x="0" y="36" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">REQUEST TYPE</text>
      {["Quota increase (standard)","Quota increase (above threshold)","API limit change (any value)"].map((req, i) => (
        <g key={i}>
          <rect x="0" y={44 + i * 46} width="188" height="36" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="12" y={44 + i * 46 + 21} fontFamily="var(--font-body)" fontSize="10" fill="var(--ink)" fillOpacity="0.75">{req}</text>
          <line x1="188" y1={44 + i * 46 + 18} x2="230" y2={44 + i * 46 + 18} stroke="var(--border)" strokeWidth="0.5"/>
        </g>
      ))}

      {/* Routing circle */}
      <circle cx="270" cy="116" r="38" fill="var(--red)" fillOpacity="0.06" stroke="var(--red)" strokeWidth="1"/>
      <text x="270" y="111" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--red)">Routing</text>
      <text x="270" y="125" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Type + value</text>

      {/* Approval paths */}
      <text x="350" y="36" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">APPROVAL PATH</text>
      {[
        {y:44, label:"Supervisor", sub:"Single approval"},
        {y:90, label:"Supervisor + Manager", sub:"Two-step"},
        {y:136, label:"Manager + Director", sub:"Two-step"},
      ].map((path, i) => (
        <g key={i}>
          <line x1="308" y1="116" x2="350" y2={path.y + 18} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,2"/>
          <rect x="350" y={path.y} width="200" height="36" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="362" y={path.y + 15} fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--ink)" fillOpacity="0.85">{path.label}</text>
          <text x="362" y={path.y + 28} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{path.sub}</text>
          <line x1="550" y1={path.y + 18} x2="590" y2={path.y + 18} stroke="var(--border)" strokeWidth="0.5"/>
        </g>
      ))}

      {/* Result */}
      <rect x="590" y="98" width="130" height="36" rx="18" fill="var(--muted)" fillOpacity="0.08" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="655" y="118" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--ink)" fillOpacity="0.7">Applied or rejected</text>

      <text x="0" y="220" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Approval routing configurable to the client's internal sign-off structure. No system configuration change required.</text>
    </svg>
  );
}

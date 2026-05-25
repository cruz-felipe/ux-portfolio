export function QuotaArchitectureArtifact() {
  const modules = [
    {title:"01 Quota management", items:["Client quota overview","Partner breakdown","Threshold alerts","Manual adjustments","Usage history"]},
    {title:"02 API usage", items:["Consumption dashboard","Rate limit status","Usage by product","Trend reporting","Export"]},
    {title:"03 Change requests", items:["New request form","Approval routing","Status tracking","Approval history","Audit log"]},
  ];
  return (
    <svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect x="0" y="0" width="800" height="28" rx="2" fill="#1a1a1a"/>
      <text x="400" y="18" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.55)" letterSpacing="0.5">SHARED NAVIGATION · ROLE-BASED ACCESS · CLIENT TOOL ECOSYSTEM</text>
      {modules.map((mod, mi) => {
        const x = mi * 268;
        return (
          <g key={mi}>
            <rect x={x} y="36" width="255" height="190" rx="3" fill={mi===0 ? "#1a1a1a" : "#f5f5f2"}/>
            <rect x={x} y="36" width="255" height="32" rx="3" fill={mi===0 ? "var(--red)" : "#1a1a1a"}/>
            <text x={x+14} y="57" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="white">{mod.title}</text>
            {mod.items.map((item, ii) => (
              <g key={ii}>
                <line x1={x+14} y1={78+ii*28} x2={x+241} y2={78+ii*28} stroke={mi===0 ? "rgba(255,255,255,0.08)" : "#e8e8e4"} strokeWidth="1"/>
                <text x={x+14} y={92+ii*28} fontFamily="var(--font-body)" fontSize="11" fill={mi===0 ? "rgba(255,255,255,0.7)" : "#555"}>{item}</text>
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export function WorkshopMethodArtifact() {
  const steps = [
    {label:"Workshop session", sub:"Stakeholder input, clarification"},
    {label:"Concept sketch", sub:"Preliminary drafts for reaction"},
    {label:"Workshop review", sub:"Discuss on top of concepts", accent:true},
    {label:"Design output", sub:"Decisions locked, flags raised"},
    {label:"Next session", sub:"Updated scope, new constraints"},
  ];
  const spacing = 148, startX = 60;

  return (
    <svg viewBox="0 0 800 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <line x1={startX} y1="50" x2={startX+(steps.length-1)*spacing} y2="50" stroke="#d0d0d0" strokeWidth="1"/>
      {steps.map((step, i) => {
        const x = startX + i * spacing;
        return (
          <g key={i}>
            <circle cx={x} cy="50" r="28" fill={step.accent ? "var(--red)" : "#1a1a1a"}/>
            <text x={x} y="55" textAnchor="middle" fontFamily="var(--font-display)" fontSize="14" fontWeight="800" fill="white">{String(i+1).padStart(2,"0")}</text>
            <text x={x} y="96" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--ink)">{step.label}</text>
            <text x={x} y="112" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{step.sub.split(",")[0]}</text>
            <text x={x} y="126" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{step.sub.split(",")[1]?.trim()}</text>
          </g>
        );
      })}
      <text x={startX} y="150" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Preliminary concepts as thinking tools, not proposals. Alignment dependencies flagged before committing.</text>
    </svg>
  );
}

export function ApprovalFlowArtifact() {
  return (
    <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="20" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">CHANGE REQUEST APPROVAL FLOW</text>
      {["Quota increase (standard)","Quota increase (above threshold)","API limit change (any value)"].map((req, i) => (
        <g key={i}>
          <rect x="20" y={22+i*46} width="210" height="36" rx="3" fill="#f5f5f2"/>
          <text x="32" y={22+i*46+21} fontFamily="var(--font-body)" fontSize="11" fill="#444">{req}</text>
          <line x1="230" y1={22+i*46+18} x2="258" y2={22+i*46+18} stroke="#ccc" strokeWidth="1"/>
        </g>
      ))}
      <rect x="258" y="68" width="96" height="60" rx="3" fill="#1a1a1a"/>
      <text x="306" y="95" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--red)">Routing</text>
      <text x="306" y="111" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.5)">Type + value</text>
      {[
        {y:28, label:"Supervisor", sub:"Single approval", fill:"var(--red)"},
        {y:74, label:"Supervisor + Manager", sub:"Two-step", fill:"#1a1a1a"},
        {y:120, label:"Manager + Director", sub:"Two-step", fill:"#1a1a1a"},
      ].map((path, i) => (
        <g key={i}>
          <line x1="354" y1="98" x2="380" y2={path.y+18} stroke="#ccc" strokeWidth="1"/>
          <rect x="380" y={path.y} width="210" height="36" rx="3" fill={path.fill}/>
          <text x="394" y={path.y+15} fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="white">{path.label}</text>
          <text x="394" y={path.y+28} fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.6)">{path.sub}</text>
          <line x1="590" y1={path.y+18} x2="618" y2={path.y+18} stroke="#ccc" strokeWidth="1"/>
        </g>
      ))}
      <rect x="618" y="80" width="162" height="36" rx="18" fill="#e8e8e4"/>
      <text x="699" y="98" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="#333">Applied or rejected</text>
      <text x="699" y="111" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="#888">Audit log updated</text>
      <text x="20" y="190" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Routing configurable to client sign-off structure. No system config change required per threshold update.</text>
    </svg>
  );
}

export function QuotaArchitectureArtifact() {
  const modules = [
    {title:"01 Quota management", items:["Client quota overview","Partner breakdown","Threshold alerts","Manual adjustments","Usage history"]},
    {title:"02 API usage", items:["Consumption dashboard","Rate limit status","Usage by product","Trend reporting","Export"]},
    {title:"03 Change requests", items:["New request form","Approval routing","Status tracking","Approval history","Audit log"]},
  ];

  return (
    <svg viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* Shared nav */}
      <rect x="0" y="0" width="820" height="28" rx="2" fill="#1a1a1a"/>
      <text x="410" y="18" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.6)" letterSpacing="0.5">SHARED NAVIGATION · ROLE-BASED ACCESS · CLIENT TOOL ECOSYSTEM</text>

      {modules.map((mod, mi) => {
        const x = mi * 274;
        return (
          <g key={mi}>
            <rect x={x} y="36" width="260" height="190" rx="3" fill={mi===0 ? "#1a1a1a" : "#f5f5f2"}/>
            <rect x={x} y="36" width="260" height="32" rx="3" fill={mi===0 ? "var(--red)" : "#1a1a1a"}/>
            <text x={x+14} y="57" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="white">{mod.title}</text>
            {mod.items.map((item, ii) => (
              <g key={ii}>
                <line x1={x+14} y1={78+ii*28} x2={x+246} y2={78+ii*28} stroke={mi===0 ? "rgba(255,255,255,0.08)" : "#e8e8e4"} strokeWidth="1"/>
                <text x={x+14} y={92+ii*28} fontFamily="var(--font-body)" fontSize="11"
                  fill={mi===0 ? "rgba(255,255,255,0.7)" : "#555"}>{item}</text>
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

  return (
    <svg viewBox="0 0 820 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <line x1="0" y1="44" x2="820" y2="44" stroke="#e0e0e0" strokeWidth="1"/>

      {steps.map((step, i) => {
        const x = i * 164;
        return (
          <g key={i}>
            <rect x={x} y="22" width="44" height="44" rx="22"
              fill={step.accent ? "var(--red)" : "#1a1a1a"}/>
            <text x={x+22} y="49" textAnchor="middle" fontFamily="var(--font-display)" fontSize="13" fontWeight="800" fill="white">{String(i+1).padStart(2,"0")}</text>
            <text x={x+22} y="88" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--ink)">{step.label}</text>
            <text x={x+22} y="104" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{step.sub.split(",")[0]}</text>
            <text x={x+22} y="118" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{step.sub.split(",")[1]?.trim()}</text>
          </g>
        );
      })}

      <text x="0" y="150" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Preliminary concepts as thinking tools, not proposals. Alignment dependencies flagged before committing to detailed work.</text>
    </svg>
  );
}

export function ApprovalFlowArtifact() {
  return (
    <svg viewBox="0 0 820 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">CHANGE REQUEST APPROVAL FLOW</text>

      {/* Request types — solid cards */}
      {["Quota increase (standard)","Quota increase (above threshold)","API limit change (any value)"].map((req, i) => (
        <g key={i}>
          <rect x="0" y={22+i*46} width="200" height="36" rx="3" fill="#f5f5f2"/>
          <text x="12" y={22+i*46+21} fontFamily="var(--font-body)" fontSize="10" fill="#444">{req}</text>
          <line x1="200" y1={22+i*46+18} x2="240" y2={22+i*46+18} stroke="#ccc" strokeWidth="1"/>
        </g>
      ))}

      {/* Router */}
      <rect x="240" y="68" width="100" height="60" rx="3" fill="#1a1a1a"/>
      <text x="290" y="96" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--red)">Routing</text>
      <text x="290" y="112" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.5)">Type + value</text>

      {/* Paths */}
      {[
        {y:28, label:"Supervisor", sub:"Single approval", fill:"var(--red)"},
        {y:74, label:"Supervisor + Manager", sub:"Two-step", fill:"#1a1a1a"},
        {y:120, label:"Manager + Director", sub:"Two-step", fill:"#1a1a1a"},
      ].map((path, i) => (
        <g key={i}>
          <line x1="340" y1="98" x2="380" y2={path.y+18} stroke="#ccc" strokeWidth="1"/>
          <rect x="380" y={path.y} width="220" height="36" rx="3" fill={path.fill}/>
          <text x="394" y={path.y+15} fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="white">{path.label}</text>
          <text x="394" y={path.y+28} fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.6)">{path.sub}</text>
          <line x1="600" y1={path.y+18} x2="640" y2={path.y+18} stroke="#ccc" strokeWidth="1"/>
        </g>
      ))}

      {/* Result */}
      <rect x="640" y="80" width="170" height="36" rx="18" fill="#e8e8e4"/>
      <text x="725" y="98" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="#333">Applied or rejected</text>
      <text x="725" y="111" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="#888">Audit log updated</text>

      <text x="0" y="188" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Routing configurable to client sign-off structure. No system config change required per threshold update.</text>
    </svg>
  );
}

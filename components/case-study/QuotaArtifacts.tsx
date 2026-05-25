export function QuotaArchitectureArtifact() {
  const modules = [
    {
      title: "Quota management",
      items: ["Client quota overview", "Partner quota breakdown", "Threshold alerts", "Manual adjustments", "Usage history"],
    },
    {
      title: "API usage",
      items: ["API consumption dashboard", "Rate limit status", "Usage by product", "Trend reporting", "Export"],
    },
    {
      title: "Change requests",
      items: ["New request form", "Approval routing", "Request status tracking", "Approval history", "Audit log"],
    },
  ];

  return (
    <svg viewBox="0 0 860 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">PLATFORM INFORMATION ARCHITECTURE</text>

      {/* Shared nav bar */}
      <rect x="0" y="22" width="860" height="32" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="16" y="42" fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.6">Shared navigation</text>
      <text x="200" y="42" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Consistent with client existing tool ecosystem</text>

      {/* Permission row */}
      <rect x="0" y="60" width="860" height="24" rx="2" fill="var(--red)" fillOpacity="0.05" stroke="var(--red)" strokeWidth="0.5"/>
      <text x="16" y="76" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">Permission model: Client support agents and partner agents, role-based access per module</text>

      {/* Three modules */}
      {modules.map((mod, mi) => {
        const x = mi * 290;
        return (
          <g key={mi}>
            <rect x={x} y="92" width="278" height="170" rx="3" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
            <rect x={x} y="92" width="278" height="32" rx="3" fill="var(--muted)" fillOpacity="0.06"/>
            <text x={x + 12} y="112" fontFamily="var(--font-body)" fontSize="12" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">{mod.title}</text>
            {mod.items.map((item, ii) => (
              <g key={ii}>
                <line x1={x + 12} y1={130 + ii * 26} x2={x + 266} y2={130 + ii * 26} stroke="var(--border)" strokeWidth="0.3"/>
                <text x={x + 12} y={143 + ii * 26} fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.65">{item}</text>
              </g>
            ))}
          </g>
        );
      })}

      <text x="0" y="276" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Visual language and interaction patterns matched to client existing tool ecosystem. Onboarding overhead for support agents designed to be minimal.</text>
    </svg>
  );
}

export function WorkshopMethodArtifact() {
  const steps = [
    { title: "Workshop session", items: ["Stakeholder input", "Requirement clarification", "Use case walkthrough", "Preliminary concept review"] },
    { title: "Design output", items: ["Flow architecture", "Interaction decisions", "Open questions flagged", "Alignment dependencies noted"] },
    { title: "Next session input", items: ["Updated concepts", "Decisions to ratify", "Scope changes absorbed", "New constraints mapped"] },
  ];

  return (
    <svg viewBox="0 0 860 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">WORKSHOP INPUT TO DESIGN OUTPUT</text>

      {steps.map((step, si) => {
        const x = si * 290;
        const isDesign = si === 1;
        return (
          <g key={si}>
            <rect x={x} y="22" width="276" height="170" rx="3"
              fill={isDesign ? "var(--red)" : "none"}
              fillOpacity={isDesign ? 0.05 : 1}
              stroke={isDesign ? "var(--red)" : "var(--border)"}
              strokeWidth={isDesign ? 1 : 0.5}
            />
            <text x={x + 12} y="42" fontFamily="var(--font-body)" fontSize="12" fontWeight="500"
              fill={isDesign ? "var(--red)" : "var(--ink)"} fillOpacity={isDesign ? 1 : 0.85}>{step.title}</text>
            <line x1={x + 12} y1="50" x2={x + 264} y2="50" stroke={isDesign ? "var(--red)" : "var(--border)"} strokeWidth="0.5" strokeOpacity={isDesign ? 0.3 : 1}/>
            {step.items.map((item, ii) => (
              <text key={ii} x={x + 12} y={68 + ii * 22} fontFamily="var(--font-body)" fontSize="11"
                fill={isDesign ? "var(--ink)" : "var(--muted)"} fillOpacity="0.75">{item}</text>
            ))}
            {si < steps.length - 1 && (
              <text x={x + 284} y="110" textAnchor="middle" fontFamily="var(--font-body)" fontSize="18" fontWeight="800" fill="var(--muted)" fillOpacity="0.4">→</text>
            )}
          </g>
        );
      })}

      <text x="0" y="212" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Preliminary concepts brought into sessions as thinking tools, not proposals. Reacting to something unfinished is faster than constructing from blank paper.</text>
      <text x="0" y="228" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Alignment dependencies flagged explicitly before committing to detailed work. Client-side ratification tracked as a blocker, not an assumption.</text>
    </svg>
  );
}

export function ApprovalFlowArtifact() {
  return (
    <svg viewBox="0 0 860 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">CHANGE REQUEST APPROVAL FLOW</text>

      {/* Request types */}
      <text x="0" y="36" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">REQUEST TYPE</text>
      {[
        { label: "Quota increase", sub: "Standard threshold" },
        { label: "Quota increase", sub: "Above threshold" },
        { label: "API limit change", sub: "Any value" },
      ].map((req, i) => (
        <g key={i}>
          <rect x="0" y={44 + i * 52} width="180" height="40" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="12" y={60 + i * 52} fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">{req.label}</text>
          <text x="12" y={74 + i * 52} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{req.sub}</text>
          <line x1="180" y1={64 + i * 52} x2="220" y2={64 + i * 52} stroke="var(--border)" strokeWidth="0.5"/>
        </g>
      ))}

      {/* Routing logic */}
      <rect x="220" y="44" width="160" height="148" rx="3" fill="var(--red)" fillOpacity="0.05" stroke="var(--red)" strokeWidth="0.5"/>
      <text x="300" y="72" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--red)">Routing logic</text>
      <text x="300" y="90" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Type and value</text>
      <text x="300" y="104" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">threshold check</text>
      <text x="300" y="128" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Configurable per</text>
      <text x="300" y="142" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">client structure</text>
      <text x="300" y="166" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">No system config</text>
      <text x="300" y="180" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">change required</text>

      {/* Approval paths */}
      <text x="420" y="36" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">APPROVAL PATH</text>
      {[
        { y: 52, label: "Agent supervisor", sub: "Single approval" },
        { y: 104, label: "Supervisor and manager", sub: "Two-step approval" },
        { y: 156, label: "Manager and director", sub: "Two-step approval" },
      ].map((path, i) => (
        <g key={i}>
          <line x1="380" y1={path.y + 20} x2="420" y2={path.y + 20} stroke="var(--border)" strokeWidth="0.5"/>
          <rect x="420" y={path.y} width="200" height="40" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="432" y={path.y + 16} fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">{path.label}</text>
          <text x="432" y={path.y + 30} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{path.sub}</text>
          <line x1="620" y1={path.y + 20} x2="660" y2={path.y + 20} stroke="var(--border)" strokeWidth="0.5"/>
        </g>
      ))}

      {/* Outcome */}
      <rect x="660" y="84" width="140" height="40" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="730" y="102" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">Applied or rejected</text>
      <text x="730" y="116" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Audit log updated</text>

      <text x="0" y="232" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Approval routing configurable to the client's internal sign-off structure. Change request types and thresholds defined in collaboration with client business stakeholders.</text>
    </svg>
  );
}

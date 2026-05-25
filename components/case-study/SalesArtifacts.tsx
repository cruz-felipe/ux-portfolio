export function HeuristicMatrixArtifact() {
  const issues = [
    { label: "Flow entry paralysis", crit: 9, effort: 2 },
    { label: "Manual approval email", crit: 9, effort: 3 },
    { label: "Redundant data entry", crit: 8, effort: 2 },
    { label: "No install tracking", crit: 7, effort: 4 },
    { label: "Training dependency", crit: 8, effort: 4 },
    { label: "Unused feature set A", crit: 2, effort: 5 },
    { label: "Unused feature set B", crit: 3, effort: 6 },
    { label: "Branding mismatch", crit: 5, effort: 2 },
    { label: "Tool fragmentation", crit: 10, effort: 8 },
    { label: "No progress indicator", crit: 6, effort: 2 },
    { label: "Copy-paste data transfer", crit: 7, effort: 3 },
    { label: "No bulk actions", crit: 4, effort: 5 },
    { label: "Inconsistent nav", crit: 5, effort: 3 },
    { label: "Error state missing", crit: 6, effort: 1 },
    { label: "Search not contextual", crit: 7, effort: 5 },
    { label: "Approval visibility", crit: 8, effort: 3 },
  ];

  const originX = 50;
  const originY = 200;
  const chartW = 700;
  const chartH = 160;

  return (
    <svg viewBox="0 0 860 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* Grid */}
      {[2,4,6,8,10].map(v => {
        const x = originX + (v / 10) * chartW;
        const y = originY - (v / 10) * chartH;
        return (
          <g key={v}>
            <line x1={x} y1={originY - chartH} x2={x} y2={originY} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>
            <text x={x} y={originY + 14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{v}</text>
            <line x1={originX} y1={y} x2={originX + chartW} y2={y} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>
            <text x={originX - 8} y={y + 4} textAnchor="end" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{v}</text>
          </g>
        );
      })}

      {/* Axes */}
      <line x1={originX} y1={originY - chartH} x2={originX} y2={originY} stroke="var(--border)" strokeWidth="0.5"/>
      <line x1={originX} y1={originY} x2={originX + chartW} y2={originY} stroke="var(--border)" strokeWidth="0.5"/>

      {/* Priority zone: high crit (>6), low effort (<5) */}
      <rect x={originX + 1} y={originY - chartH} width={(4/10)*chartW} height={(4/10)*chartH} fill="var(--red)" fillOpacity="0.04"/>
      <text x={originX + (2/10)*chartW} y={originY - chartH + 14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--red)" fillOpacity="0.5">Ship first</text>

      {/* Labels */}
      <text x={originX + chartW / 2} y={originY + 26} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Engineering effort</text>
      <text x="12" y={originY - chartH / 2} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" transform={`rotate(-90,12,${originY - chartH/2})`}>Criticality</text>

      {/* Points */}
      {issues.map((issue, i) => {
        const cx = originX + (issue.effort / 10) * chartW;
        const cy = originY - (issue.crit / 10) * chartH;
        const isHighPriority = issue.crit >= 7 && issue.effort <= 4;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={isHighPriority ? 6 : 5}
              fill={isHighPriority ? "var(--red)" : "var(--muted)"}
              fillOpacity={isHighPriority ? 0.75 : 0.3}/>
          </g>
        );
      })}

      {/* Legend */}
      <circle cx={originX + 20} cy={originY + 44} r="5" fill="var(--red)" fillOpacity="0.75"/>
      <text x={originX + 32} y={originY + 48} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">High priority (crit over 6, effort under 5)</text>
      <circle cx={originX + 320} cy={originY + 44} r="4" fill="var(--muted)" fillOpacity="0.3"/>
      <text x={originX + 332} y={originY + 48} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Lower priority</text>
    </svg>
  );
}

export function FlowCompressionArtifact() {
  const before = ["CRM lookup","Product catalog","Pricing engine","Approval email","Contract gen","Install scheduler","Order confirm"];
  const after = [
    { title: "Step 1", detail: "Client and product selection. Single entry point." },
    { title: "Step 2", detail: "Pricing and approval. Manager sign-off automated." },
    { title: "Step 3", detail: "Contract and install scheduling. No email chains." },
  ];

  return (
    <svg viewBox="0 0 860 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">BEFORE: 7 TOOLS, 1 HOUR PER PROPOSAL</text>

      {before.map((step, i) => (
        <g key={i}>
          <rect x={i * 123} y="24" width="113" height="36" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x={i * 123 + 56} y="40" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{step.split(" ")[0]}</text>
          <text x={i * 123 + 56} y="53" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{step.split(" ").slice(1).join(" ")}</text>
          {i < before.length - 1 && (
            <text x={i * 123 + 117} y="46" textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fill="var(--border)">→</text>
          )}
        </g>
      ))}

      <text x="0" y="78" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Manual data re-entry at each step. Approvals by email. No install tracking.</text>

      {/* Divider */}
      <line x1="0" y1="96" x2="860" y2="96" stroke="var(--border)" strokeWidth="0.5"/>

      <text x="0" y="114" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">AFTER: 3-STEP EXPRESS FLOW, 15 MINUTES</text>

      {after.map((step, i) => (
        <g key={i}>
          <rect x={i * 286} y="122" width="272" height="72" rx="2" fill="var(--red)" fillOpacity="0.05" stroke="var(--red)" strokeWidth="0.5"/>
          <text x={i * 286 + 136} y="148" textAnchor="middle" fontFamily="var(--font-display)" fontSize="14" fontWeight="800" fill="var(--red)">{step.title}</text>
          <text x={i * 286 + 136} y="168" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.7">{step.detail.split(".")[0]}.</text>
          <text x={i * 286 + 136} y="184" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{step.detail.split(".")[1]}</text>
          {i < after.length - 1 && (
            <text x={i * 286 + 280} y="162" textAnchor="middle" fontFamily="var(--font-display)" fontSize="18" fontWeight="800" fill="var(--red)">→</text>
          )}
        </g>
      ))}

      <text x="0" y="220" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">75% quote acceleration. 83% faster onboarding. Rebrand drove adoption beyond usability gains alone.</text>
    </svg>
  );
}

export function ResearchMethodologyArtifact() {
  const methods = [
    { count: "37", type: "Interviews", detail: "Sales agents, team leads,\nmanagers and new hires", finding: "System over-flexible.\nParalyzes newcomers." },
    { count: "25", type: "Usability tests", detail: "Task completion,\ntime-on-task, error rate", finding: "Unused features\nidentified and cut." },
    { count: "20", type: "Shadow sessions", detail: "On the floor,\nlive proposal generation", finding: "Real workflow vs\nassumed workflow." },
  ];

  return (
    <svg viewBox="0 0 860 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">1-MONTH ON-SITE UX STUDY, SAO PAULO</text>

      {methods.map((m, i) => (
        <g key={i}>
          <rect x={i * 288} y="24" width="274" height="172" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          {/* Count */}
          <text x={i * 288 + 137} y="68" textAnchor="middle" fontFamily="var(--font-display)" fontSize="36" fontWeight="800" fill="var(--ink)" fillOpacity="0.85">{m.count}</text>
          <text x={i * 288 + 137} y="86" textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fill="var(--muted)">{m.type}</text>
          {/* Divider */}
          <line x1={i * 288 + 20} y1="96" x2={i * 288 + 254} y2="96" stroke="var(--border)" strokeWidth="0.5"/>
          {/* Detail */}
          {m.detail.split("\n").map((line, li) => (
            <text key={li} x={i * 288 + 137} y={112 + li * 16} textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.6">{line}</text>
          ))}
          {/* Finding */}
          <line x1={i * 288 + 20} y1="148" x2={i * 288 + 254} y2="148" stroke="var(--border)" strokeWidth="0.5"/>
          <text x={i * 288 + 137} y="163" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">KEY FINDING</text>
          {m.finding.split("\n").map((line, li) => (
            <text key={li} x={i * 288 + 137} y={178 + li * 15} textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--red)">{line}</text>
          ))}
        </g>
      ))}

      <text x="0" y="220" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Backlog: 32 documented problems. Heuristic Impact Matrix used to present design debt as business risk to executives.</text>
    </svg>
  );
}

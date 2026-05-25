export function HeuristicMatrixArtifact() {
  const issues = [
    { label: "Flow entry paralysis", crit: 9, effort: 2 },
    { label: "Manual approval", crit: 9, effort: 3 },
    { label: "Redundant data entry", crit: 8, effort: 3 },
    { label: "No install tracking", crit: 7, effort: 4 },
    { label: "Training dependency", crit: 8, effort: 4 },
    { label: "Unused features", crit: 2, effort: 5 },
    { label: "Branding mismatch", crit: 5, effort: 2 },
    { label: "Tool fragmentation", crit: 10, effort: 8 },
  ];

  const originX = 70;
  const originY = 230;
  const scaleX = 72;
  const scaleY = 22;

  return (
    <svg viewBox="0 0 860 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x={originX} y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">HEURISTIC IMPACT MATRIX: 32 ISSUES PRIORITIZED</text>

      {/* Grid lines */}
      {[2,4,6,8,10].map(v => (
        <g key={v}>
          <line x1={originX + v * scaleX} y1="28" x2={originX + v * scaleX} y2={originY} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>
          <text x={originX + v * scaleX} y={originY + 14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{v}</text>
        </g>
      ))}
      {[2,4,6,8,10].map(v => (
        <g key={v}>
          <line x1={originX} y1={originY - v * scaleY} x2={originX + 10 * scaleX} y2={originY - v * scaleY} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>
          <text x={originX - 8} y={originY - v * scaleY + 4} textAnchor="end" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{v}</text>
        </g>
      ))}

      {/* Axes */}
      <line x1={originX} y1="28" x2={originX} y2={originY} stroke="var(--border)" strokeWidth="0.5"/>
      <line x1={originX} y1={originY} x2={originX + 10 * scaleX} y2={originY} stroke="var(--border)" strokeWidth="0.5"/>

      {/* Priority zone */}
      <rect x={originX + 1} y={originY - 6 * scaleY} width={3 * scaleX} height={6 * scaleY} fill="var(--red)" fillOpacity="0.04" stroke="none"/>
      <text x={originX + 1.5 * scaleX} y={originY - 6 * scaleY + 16} textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--red)" fillOpacity="0.6">Ship first</text>

      {/* Axis labels */}
      <text x={originX + 5 * scaleX} y={originY + 26} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Engineering effort</text>
      <text x="14" y={originY - 5 * scaleY} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" transform={`rotate(-90, 14, ${originY - 5 * scaleY})`}>Criticality</text>

      {/* Data points */}
      {issues.map((issue, i) => {
        const cx = originX + issue.effort * scaleX;
        const cy = originY - issue.crit * scaleY;
        const isHighPriority = issue.crit >= 7 && issue.effort <= 4;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill={isHighPriority ? "var(--red)" : "var(--muted)"} fillOpacity={isHighPriority ? 0.8 : 0.35}/>
            <text x={cx + 10} y={cy + 4} fontFamily="var(--font-body)" fontSize="9" fill={isHighPriority ? "var(--ink)" : "var(--muted)"} fillOpacity={isHighPriority ? 0.8 : 0.6}>{issue.label}</text>
          </g>
        );
      })}
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
          <text x={i * 288 + 20} y="163" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">KEY FINDING</text>
          {m.finding.split("\n").map((line, li) => (
            <text key={li} x={i * 288 + 137} y={177 + li * 14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--red)">{line}</text>
          ))}
        </g>
      ))}

      <text x="0" y="220" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Backlog: 32 documented problems. Heuristic Impact Matrix used to present design debt as business risk to executives.</text>
    </svg>
  );
}

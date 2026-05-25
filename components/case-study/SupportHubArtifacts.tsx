export function ConsolidationMapArtifact() {
  // 32 tools in 4 rows of 8, each 100px wide, 28px tall, 4px gap
  const tools = [
    "Billing portal","Ticket tracker","CRM","Tech DB","Chat log","ID verify","Order sys","Network map",
    "KB search","SLA tracker","Escalation","Routing","Call log","Auth tool","Payment hist","Fraud check",
    "Device reg","Plan mgmt","Usage stats","Field ops","IVR data","Survey","Scheduler","Docs",
    "Approval","Config","Asset mgr","Alert sys","Incident","Report","Audit","Compliance",
  ];
  const colW = 96, rowH = 28, colGap = 6, rowGap = 6;
  const cols = 8;
  const gridW = cols * colW + (cols - 1) * colGap;
  const rows = 4;
  const gridH = rows * rowH + (rows - 1) * rowGap;

  // After panel x offset
  const afterX = gridW + 60;
  const totalW = afterX + 400;

  return (
    <svg viewBox={`0 0 ${totalW} 260`} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>

      {/* BEFORE */}
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">BEFORE: 32 TOOLS</text>
      {tools.map((tool, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const x = c * (colW + colGap);
        const y = 22 + r * (rowH + rowGap);
        return (
          <g key={i}>
            <rect x={x} y={y} width={colW} height={rowH} rx="1" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
            <text x={x + colW / 2} y={y + 18} textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="var(--muted)">{tool}</text>
          </g>
        );
      })}

      {/* Arrow */}
      <text x={gridW + 14} y={22 + gridH / 2 + 8} textAnchor="middle" fontFamily="var(--font-display)" fontSize="22" fontWeight="800" fill="var(--red)">→</text>

      {/* AFTER */}
      <text x={afterX} y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">AFTER: 1 WORKSPACE</text>
      <rect x={afterX} y="22" width="390" height={gridH} rx="3" fill="var(--red)" fillOpacity="0.04" stroke="var(--red)" strokeWidth="1"/>

      {[
        { y: 40, title: "Auto-identification layer", sub: "Customer identified, full history surfaced on connect" },
        { y: 92, title: "Contextual scripting layer", sub: "AI monitors conversation, surfaces relevant data live" },
        { y: 144, title: "Live resolution layer", sub: "Solution presented directly in the session interface" },
      ].map((layer, i) => (
        <g key={i}>
          <rect x={afterX + 14} y={layer.y} width="362" height="38" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x={afterX + 26} y={layer.y + 15} fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">{layer.title}</text>
          <text x={afterX + 26} y={layer.y + 29} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{layer.sub}</text>
        </g>
      ))}

      {/* Stats */}
      <text x={afterX} y={22 + gridH + 22} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">AHT before: 10 min avg</text>
      <text x={afterX} y={22 + gridH + 36} fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">AHT after: 3 min avg. 70% reduction.</text>
      <text x={afterX + 200} y={22 + gridH + 22} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Onboarding before: 3 days</text>
      <text x={afterX + 200} y={22 + gridH + 36} fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">Onboarding after: under half a day</text>
    </svg>
  );
}

export function CognitiveLoadArtifact() {
  const beforeSwitches = ["ID","Billing","Tech","Ticket","Search","CRM","KB","Auth","Plan","Fraud","Log","SLA","Close"];

  return (
    <svg viewBox="0 0 860 230" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">CONTEXT SWITCHES PER CALL</text>

      {/* BEFORE */}
      <text x="0" y="36" fontFamily="var(--font-body)" fontSize="10" fontWeight="500" fill="var(--ink)" fillOpacity="0.6">BEFORE</text>
      <line x1="64" y1="48" x2="840" y2="48" stroke="var(--border)" strokeWidth="0.5"/>
      {beforeSwitches.map((sw, i) => {
        const x = 64 + i * 60;
        return (
          <g key={i}>
            <circle cx={x} cy="48" r="5" fill="var(--muted)" fillOpacity="0.35" stroke="var(--border)" strokeWidth="0.5"/>
            <text x={x} y="40" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="var(--muted)">{sw}</text>
            <line x1={x} y1="53" x2={x} y2="68" stroke="var(--border)" strokeWidth="0.4" strokeDasharray="2,2"/>
          </g>
        );
      })}
      <text x="0" y="82" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">13 context switches. 10 min avg. Institutional knowledge on sticky notes.</text>

      {/* Divider */}
      <line x1="0" y1="100" x2="860" y2="100" stroke="var(--border)" strokeWidth="0.5"/>

      {/* AFTER */}
      <text x="0" y="122" fontFamily="var(--font-body)" fontSize="10" fontWeight="500" fill="var(--ink)" fillOpacity="0.6">AFTER</text>
      <line x1="64" y1="134" x2="364" y2="134" stroke="var(--red)" strokeWidth="0.5"/>
      {["Connect","Resolve","Close"].map((sw, i) => {
        const x = 64 + i * 150;
        return (
          <g key={i}>
            <circle cx={x} cy="134" r="7" fill="var(--red)" fillOpacity="0.12" stroke="var(--red)" strokeWidth="1"/>
            <text x={x} y="126" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--red)">{sw}</text>
          </g>
        );
      })}
      <text x="0" y="162" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">0 context switches. 3 min avg. AI surfaces all data.</text>

      <text x="0" y="192" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Research: remote sessions with agents in Egypt and Jamaica. On-site shadowing in New York and Texas.</text>
      <text x="0" y="208" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" fontStyle="italic">Agents kept sticky notes listing which tool held which data. Institutional knowledge lived on paper, not in the system.</text>
    </svg>
  );
}

export function AIOrchestrationArtifact() {
  const sources = ["Billing history","Interaction log","Technical DB","Plan registry","Ticket system"];
  const outputs = [
    { title: "Auto-ID panel", sub: "Customer identified on connect" },
    { title: "Context script", sub: "Relevant data surfaced mid-call" },
    { title: "Live resolution", sub: "Solution in session interface" },
  ];

  return (
    <svg viewBox="0 0 860 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">AI ORCHESTRATION ARCHITECTURE</text>

      <text x="0" y="34" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">DATA SOURCES</text>
      {sources.map((src, i) => (
        <g key={i}>
          <rect x="0" y={42 + i * 32} width="148" height="24" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="74" y={42 + i * 32 + 15} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{src}</text>
          <line x1="148" y1={42 + i * 32 + 12} x2="220" y2="142" stroke="var(--border)" strokeWidth="0.4" strokeDasharray="2,3" opacity="0.4"/>
        </g>
      ))}

      <rect x="220" y="108" width="180" height="68" rx="3" fill="var(--red)" fillOpacity="0.05" stroke="var(--red)" strokeWidth="1"/>
      <text x="310" y="136" textAnchor="middle" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="var(--red)">AI Orchestration</text>
      <text x="310" y="153" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Real-time inference</text>
      <text x="310" y="167" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Context assembly, NLP</text>

      <text x="450" y="34" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">AGENT SURFACE</text>
      {outputs.map((out, i) => (
        <g key={i}>
          <rect x="450" y={42 + i * 54} width="220" height="42" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="462" y={42 + i * 54 + 17} fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">{out.title}</text>
          <text x="462" y={42 + i * 54 + 32} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{out.sub}</text>
          <line x1="400" y1="142" x2="450" y2={42 + i * 54 + 21} stroke="var(--red)" strokeWidth="0.5" strokeDasharray="3,2" opacity="0.5"/>
        </g>
      ))}

      <rect x="720" y="122" width="130" height="40" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="785" y="140" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.7">Agent</text>
      <text x="785" y="155" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Customer only</text>
      <line x1="670" y1="142" x2="720" y2="142" stroke="var(--border)" strokeWidth="0.5"/>

      <text x="0" y="220" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">The architectural shift: data retrieval moves from the agent to the system. The agent's job becomes the customer.</text>
    </svg>
  );
}

export function ConsolidationMapArtifact() {
  const tools = [
    "Billing portal","Ticket tracker","CRM","Tech DB","Chat log","ID verify","Order sys","Network map",
    "KB search","SLA tracker","Escalation","Routing","Call log","Auth tool","Payment hist","Fraud check",
    "Device reg","Plan mgmt","Usage stats","Field ops","IVR data","Survey","Scheduler","Docs",
    "Approval","Config","Asset mgr","Alert sys","Incident","Report","Audit","Compliance",
  ];

  return (
    <svg viewBox="0 0 860 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">BEFORE: 32 DISCONNECTED TOOLS</text>

      {tools.map((tool, i) => {
        const col = i % 8;
        const row = Math.floor(i / 8);
        const x = col * 48;
        const y = 24 + row * 30;
        return (
          <g key={i}>
            <rect x={x} y={y} width="44" height="22" rx="1" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
            <text x={x + 22} y={y + 14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="var(--muted)">{tool}</text>
          </g>
        );
      })}

      {/* Arrow divider */}
      <text x="400" y="100" textAnchor="middle" fontFamily="var(--font-display)" fontSize="28" fontWeight="800" fill="var(--red)">→</text>

      {/* AFTER */}
      <text x="420" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">AFTER: SINGLE WORKSPACE</text>

      <rect x="420" y="24" width="430" height="155" rx="3" fill="var(--red)" fillOpacity="0.04" stroke="var(--red)" strokeWidth="1"/>

      {[
        { y: 44, title: "Auto-identification layer", sub: "Customer identified and history surfaced on call connect" },
        { y: 96, title: "Contextual scripting layer", sub: "AI monitors conversation, surfaces relevant data in real time" },
        { y: 148, title: "Live resolution layer", sub: "Solution presented directly in session interface" },
      ].map((layer, i) => (
        <g key={i}>
          <rect x="436" y={layer.y} width="398" height="38" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="448" y={layer.y + 16} fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">{layer.title}</text>
          <text x="448" y={layer.y + 30} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{layer.sub}</text>
        </g>
      ))}

      {/* Outcome stats */}
      <text x="420" y="208" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">AHT before: 12 min avg</text>
      <text x="420" y="222" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">AHT after: 3 min avg. 70% reduction.</text>
      <text x="620" y="208" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Onboarding before: 3 days</text>
      <text x="620" y="222" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">Onboarding after: under half a day</text>
    </svg>
  );
}

export function CognitiveLoadArtifact() {
  const beforeSwitches = ["ID","Billing","Tech","Ticket","Search","CRM","KB","Auth","Plan","Fraud","Log","SLA","Close"];

  return (
    <svg viewBox="0 0 860 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">CONTEXT SWITCHES PER CALL</text>

      {/* BEFORE row */}
      <text x="0" y="40" fontFamily="var(--font-body)" fontSize="10" fontWeight="500" fill="var(--ink)" fillOpacity="0.6">BEFORE</text>
      <line x1="60" y1="52" x2="840" y2="52" stroke="var(--border)" strokeWidth="0.5"/>
      {beforeSwitches.map((sw, i) => {
        const x = 60 + i * 60;
        return (
          <g key={i}>
            <circle cx={x} cy="52" r="5" fill="var(--muted)" fillOpacity="0.4" stroke="var(--border)" strokeWidth="0.5"/>
            <text x={x} y="44" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="var(--muted)">{sw}</text>
            <line x1={x} y1="57" x2={x} y2="75" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,2"/>
          </g>
        );
      })}
      <text x="0" y="88" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">13 context switches. 12 min avg. Institutional knowledge on sticky notes.</text>

      {/* Divider */}
      <line x1="0" y1="106" x2="860" y2="106" stroke="var(--border)" strokeWidth="0.5"/>

      {/* AFTER row */}
      <text x="0" y="128" fontFamily="var(--font-body)" fontSize="10" fontWeight="500" fill="var(--ink)" fillOpacity="0.6">AFTER</text>
      <line x1="60" y1="140" x2="360" y2="140" stroke="var(--red)" strokeWidth="0.5"/>
      {["Connect","Resolve","Close"].map((sw, i) => {
        const x = 60 + i * 150;
        return (
          <g key={i}>
            <circle cx={x} cy="140" r="7" fill="var(--red)" fillOpacity="0.12" stroke="var(--red)" strokeWidth="1"/>
            <text x={x} y="132" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--red)">{sw}</text>
          </g>
        );
      })}
      <text x="0" y="170" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">0 context switches. 3 min avg. AI surfaces all data.</text>

      <text x="0" y="200" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Research: remote sessions with agents in Egypt and Jamaica. On-site shadowing in New York and Texas.</text>
      <text x="0" y="216" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" fontStyle="italic">Agents kept sticky notes listing which tool held which data. The institutional knowledge lived on paper, not in the system.</text>
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
    <svg viewBox="0 0 860 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">AI ORCHESTRATION ARCHITECTURE</text>

      {/* Data sources */}
      <text x="0" y="38" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">DATA SOURCES</text>
      {sources.map((src, i) => (
        <g key={i}>
          <rect x="0" y={46 + i * 34} width="150" height="26" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="75" y={46 + i * 34 + 17} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{src}</text>
          <line x1="150" y1={46 + i * 34 + 13} x2="240" y2="152" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3" opacity="0.4"/>
        </g>
      ))}

      {/* AI Core */}
      <rect x="240" y="118" width="180" height="70" rx="3" fill="var(--red)" fillOpacity="0.05" stroke="var(--red)" strokeWidth="1"/>
      <text x="330" y="148" textAnchor="middle" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="var(--red)">AI Orchestration</text>
      <text x="330" y="165" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Real-time inference</text>
      <text x="330" y="179" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Context assembly, NLP</text>

      {/* Outputs */}
      <text x="460" y="38" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">AGENT SURFACE</text>
      {outputs.map((out, i) => (
        <g key={i}>
          <rect x="460" y={46 + i * 56} width="220" height="44" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="472" y={46 + i * 56 + 18} fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">{out.title}</text>
          <text x="472" y={46 + i * 56 + 34} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{out.sub}</text>
          <line x1="420" y1="153" x2="460" y2={46 + i * 56 + 22} stroke="var(--red)" strokeWidth="0.5" strokeDasharray="3,2" opacity="0.5"/>
        </g>
      ))}

      {/* Agent */}
      <rect x="730" y="130" width="120" height="46" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="790" y="150" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.7">Agent</text>
      <text x="790" y="166" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Customer focus only</text>
      <line x1="680" y1="153" x2="730" y2="153" stroke="var(--border)" strokeWidth="0.5"/>

      <text x="0" y="248" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">The architectural shift: data retrieval moves from the agent to the system. The agent's job becomes the customer.</text>
    </svg>
  );
}

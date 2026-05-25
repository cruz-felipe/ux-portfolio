// Artifact 1: 32-tool ecosystem map → 1 workspace
export function ConsolidationMapArtifact() {
  const tools = [
    "Billing portal","Ticket tracker","CRM","Tech DB","Chat log",
    "ID verify","Order sys","Network map","KB search","SLA tracker",
    "Escalation","Routing","Call log","Auth tool","Payment hist",
    "Fraud check","Device reg","Plan mgmt","Usage stats","Field ops",
    "IVR data","Survey","Scheduler","Docs","Approval","Config",
    "Asset mgr","Alert sys","Incident","Report","Audit","Compliance",
  ];

  return (
    <svg viewBox="0 0 900 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">BEFORE — 32 DISCONNECTED TOOLS</text>

      {/* 32 tool boxes in 8x4 grid */}
      {tools.map((tool, i) => {
        const col = i % 8;
        const row = Math.floor(i / 8);
        const x = col * 110;
        const y = 28 + row * 36;
        return (
          <g key={i}>
            <rect x={x} y={y} width="100" height="26" rx="1"
              fill="none" stroke="var(--border)" strokeWidth="0.5"/>
            <text x={x + 50} y={y + 17} textAnchor="middle"
              fontFamily="var(--font-body)" fontSize="8.5" fill="var(--muted)">
              {tool}
            </text>
          </g>
        );
      })}

      {/* Arrow */}
      <text x="440" y="188" textAnchor="middle" fontFamily="var(--font-display)" fontSize="28" fontWeight="800" fill="var(--red)">→</text>

      {/* AFTER — single workspace */}
      <text x="520" y="18" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">AFTER — SINGLE WORKSPACE</text>

      <rect x="520" y="28" width="360" height="180" rx="3"
        fill="var(--red)" fillOpacity="0.04" stroke="var(--red)" strokeWidth="1"/>

      {/* Workspace layers */}
      {[
        { y: 50, label: "Auto-identification layer", sub: "Customer surfaced on call connect" },
        { y: 100, label: "Contextual scripting layer", sub: "AI monitors conversation · surfaces relevant data" },
        { y: 150, label: "Live resolution layer", sub: "Solution presented directly in session interface" },
      ].map((layer, i) => (
        <g key={i}>
          <rect x="540" y={layer.y} width="320" height="36" rx="2"
            fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="556" y={layer.y + 14} fontFamily="var(--font-body)" fontSize="11"
            fontWeight="500" fill="var(--ink)" opacity={0.8}>{layer.label}</text>
          <text x="556" y={layer.y + 28} fontFamily="var(--font-body)" fontSize="10"
            fill="var(--muted)">{layer.sub}</text>
        </g>
      ))}

      {/* Metrics */}
      <text x="520" y="240" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">
        AHT: 12 min
      </text>
      <text x="520" y="254" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">
        AHT: 3 min  ↓ 70%
      </text>
      <text x="680" y="240" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">
        Onboarding: 3 days
      </text>
      <text x="680" y="254" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">
        Onboarding: &lt; half day
      </text>
    </svg>
  );
}

// Artifact 2: Agent cognitive load map
export function CognitiveLoadArtifact() {
  return (
    <svg viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">AGENT COGNITIVE LOAD — CONTEXT SWITCHES PER CALL</text>

      {/* Before timeline */}
      <text x="0" y="48" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">BEFORE</text>
      <line x1="80" y1="44" x2="880" y2="44" stroke="var(--border)" strokeWidth="0.5"/>

      {/* Switch events */}
      {[100,170,240,290,360,420,480,550,610,680,740,800,860].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="44" r="5" fill={i % 3 === 0 ? "var(--red)" : "var(--border)"}
            stroke="var(--border)" strokeWidth="0.5" opacity={0.7}/>
          <text x={x} y="36" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="var(--muted)">
            {["ID","Billing","Tech","Ticket","Search","CRM","KB","Auth","Plan","Fraud","Log","SLA","Close"][i]}
          </text>
          <line x1={x} y1="49" x2={x} y2="80" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,2"/>
        </g>
      ))}

      <text x="0" y="96" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">12 min avg · 13 context switches · sticky notes required</text>

      {/* Divider */}
      <line x1="0" y1="120" x2="900" y2="120" stroke="var(--border)" strokeWidth="0.5"/>

      {/* After timeline */}
      <text x="0" y="148" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">AFTER</text>
      <line x1="80" y1="144" x2="300" y2="144" stroke="var(--red)" strokeWidth="0.5"/>

      {/* Single workspace events */}
      {[100, 180, 280].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="144" r="6" fill="var(--red)" fillOpacity="0.15"
            stroke="var(--red)" strokeWidth="1"/>
          <text x={x} y="136" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="var(--red)">
            {["Connect","Resolve","Close"][i]}
          </text>
        </g>
      ))}

      <text x="0" y="180" fontFamily="var(--font-body)" fontSize="9" fill="var(--red)">3 min avg · 0 context switches · AI surfaces all data</text>

      {/* Research footnote */}
      <text x="0" y="240" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Research: remote sessions with agents in Egypt and Jamaica · on-site shadowing in New York and Texas</text>
      <text x="0" y="256" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">"Agents kept sticky notes next to monitors listing which tool held which type of data."</text>
    </svg>
  );
}

// Artifact 3: AI orchestration architecture
export function AIOrchestrationArtifact() {
  return (
    <svg viewBox="0 0 900 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)" letterSpacing="2">PREDICTIVE SUPPORT HUB — AI ORCHESTRATION MODEL</text>

      {/* Data sources */}
      <text x="0" y="50" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">DATA SOURCES</text>
      {["Billing history","Interaction log","Technical DB","Plan registry","Ticket system"].map((src, i) => (
        <g key={i}>
          <rect x={0} y={60 + i * 36} width="140" height="28" rx="2"
            fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="70" y={60 + i * 36 + 18} textAnchor="middle"
            fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{src}</text>
          <line x1="140" y1={60 + i * 36 + 14} x2="220" y2="180" stroke="var(--border)"
            strokeWidth="0.5" strokeDasharray="2,3" opacity="0.5"/>
        </g>
      ))}

      {/* AI core */}
      <rect x="220" y="140" width="180" height="80" rx="3"
        fill="var(--red)" fillOpacity="0.06" stroke="var(--red)" strokeWidth="1"/>
      <text x="310" y="173" textAnchor="middle" fontFamily="var(--font-display)"
        fontSize="13" fontWeight="700" fill="var(--red)">AI Orchestration</text>
      <text x="310" y="191" textAnchor="middle" fontFamily="var(--font-body)"
        fontSize="10" fill="var(--muted)">Real-time inference engine</text>
      <text x="310" y="206" textAnchor="middle" fontFamily="var(--font-body)"
        fontSize="10" fill="var(--muted)">Context assembly · NLP · Prediction</text>

      {/* Outputs */}
      <text x="480" y="50" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">AGENT SURFACE</text>
      {[
        { label: "Auto-ID panel", sub: "Customer identified on connect" },
        { label: "Context script", sub: "Relevant data surfaced mid-call" },
        { label: "Live resolution", sub: "Solution in session interface" },
      ].map((out, i) => (
        <g key={i}>
          <rect x={480} y={60 + i * 56} width="200" height="44" rx="2"
            fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="496" y={60 + i * 56 + 18} fontFamily="var(--font-body)"
            fontSize="11" fontWeight="500" fill="var(--ink)" opacity={0.8}>{out.label}</text>
          <text x="496" y={60 + i * 56 + 34} fontFamily="var(--font-body)"
            fontSize="10" fill="var(--muted)">{out.sub}</text>
          <line x1="400" y1="180" x2="480" y2={60 + i * 56 + 22}
            stroke="var(--red)" strokeWidth="0.5" strokeDasharray="3,2" opacity="0.5"/>
        </g>
      ))}

      {/* Agent */}
      <rect x="740" y="155" width="140" height="50" rx="2"
        fill="none" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="810" y="176" textAnchor="middle" fontFamily="var(--font-body)"
        fontSize="11" fill="var(--ink)" opacity={0.7}>Agent focus</text>
      <text x="810" y="192" textAnchor="middle" fontFamily="var(--font-body)"
        fontSize="10" fill="var(--muted)">Customer only</text>
      <line x1="680" y1="180" x2="740" y2="180" stroke="var(--border)" strokeWidth="0.5"/>
    </svg>
  );
}

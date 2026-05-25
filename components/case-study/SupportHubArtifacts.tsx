export function ConsolidationMapArtifact() {
  const tools = [
    "Billing","Tickets","CRM","Tech DB","Chat","ID verify","Orders","Network",
    "KB search","SLA","Escalate","Routing","Call log","Auth","Payments","Fraud",
    "Devices","Plans","Usage","Field ops","IVR","Survey","Schedule","Docs",
    "Approvals","Config","Assets","Alerts","Incidents","Reports","Audit","Compliance",
  ];
  const cW=58, rH=24, cG=4, rG=4, cols=8;

  return (
    <svg viewBox="0 0 820 220" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">BEFORE: 32 TOOLS</text>

      {tools.map((tool, i) => {
        const c = i % cols, r = Math.floor(i / cols);
        const x = c * (cW + cG), y = 22 + r * (rH + rG);
        return (
          <g key={i}>
            <rect x={x} y={y} width={cW} height={rH} rx="2" fill="#e8e8e4"/>
            <text x={x+cW/2} y={y+15} textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="#666">{tool}</text>
          </g>
        );
      })}

      {/* Arrow */}
      <rect x="498" y="68" width="32" height="32" rx="16" fill="#1a1a1a"/>
      <text x="514" y="88" textAnchor="middle" fontFamily="var(--font-body)" fontSize="16" fill="white">→</text>

      {/* After */}
      <text x="546" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">AFTER: 1 WORKSPACE</text>

      {[
        {y:22, label:"Auto-identification", sub:"Customer + full history on connect"},
        {y:64, label:"Contextual scripting", sub:"Relevant data surfaced mid-call"},
        {y:106, label:"Live resolution", sub:"Answer in session interface"},
      ].map((layer, i) => (
        <g key={i}>
          <rect x="546" y={layer.y} width="270" height="36" rx="3" fill={i===0 ? "var(--red)" : "#1a1a1a"}/>
          <text x="560" y={layer.y+15} fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="white">{layer.label}</text>
          <text x="560" y={layer.y+28} fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.6)">{layer.sub}</text>
        </g>
      ))}

      <text x="0" y="168" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">AHT before: 10 min</text>
      <rect x="0" y="174" width="120" height="24" rx="3" fill="var(--red)"/>
      <text x="60" y="190" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="white">3 min after · 70%↓</text>

      <text x="140" y="168" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Onboarding before: 3 days</text>
      <rect x="140" y="174" width="160" height="24" rx="3" fill="#1a1a1a"/>
      <text x="220" y="190" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="white">Under half a day after</text>
    </svg>
  );
}

export function CognitiveLoadArtifact() {
  const before = ["ID","Billing","Tech","Ticket","Search","CRM","KB","Auth","Plan","Fraud","Log","SLA","Close"];

  return (
    <svg viewBox="0 0 820 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">CONTEXT SWITCHES PER CALL</text>

      {/* Before row — 13 small filled squares */}
      <text x="0" y="34" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="var(--muted)">BEFORE · 13 switches</text>
      {before.map((sw, i) => {
        const x = i * 60;
        return (
          <g key={i}>
            <rect x={x} y="40" width="50" height="32" rx="2" fill="#e8e8e4"/>
            <text x={x+25} y={40+20} textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="#666">{sw}</text>
            {i < before.length-1 && <line x1={x+50} y1="56" x2={x+60} y2="56" stroke="#ccc" strokeWidth="1"/>}
          </g>
        );
      })}
      <text x="0" y="92" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">10 min avg · institutional knowledge on sticky notes</text>

      <line x1="0" y1="106" x2="820" y2="106" stroke="#e0e0e0" strokeWidth="1"/>

      {/* After row — 3 large solid red blocks */}
      <text x="0" y="124" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="var(--muted)">AFTER · 0 switches</text>
      {["Connect","Resolve","Close"].map((sw, i) => {
        const x = i * 200;
        return (
          <g key={i}>
            <rect x={x} y="130" width="180" height="40" rx="3" fill={i===0 ? "var(--red)" : "#1a1a1a"}/>
            <text x={x+90} y="155" textAnchor="middle" fontFamily="var(--font-body)" fontSize="13" fontWeight="600" fill="white">{sw}</text>
            {i < 2 && <line x1={x+180} y1="150" x2={x+200} y2="150" stroke="#ccc" strokeWidth="1"/>}
          </g>
        );
      })}
      <text x="0" y="188" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">3 min avg · AI surfaces all data · agent focuses on customer</text>
    </svg>
  );
}

export function AIOrchestrationArtifact() {
  return (
    <svg viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">AI ORCHESTRATION ARCHITECTURE</text>

      {/* Sources */}
      <text x="0" y="34" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">DATA SOURCES</text>
      {["Billing history","Interaction log","Technical DB","Plan registry","Ticket system"].map((src, i) => (
        <g key={i}>
          <rect x="0" y={40+i*32} width="140" height="24" rx="2" fill="#e8e8e4"/>
          <text x="70" y={40+i*32+15} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="#444">{src}</text>
          <line x1="140" y1={40+i*32+12} x2="200" y2="140" stroke="#ccc" strokeWidth="0.8"/>
        </g>
      ))}

      {/* AI core — solid dark square */}
      <rect x="200" y="100" width="120" height="80" rx="4" fill="#1a1a1a"/>
      <text x="260" y="136" textAnchor="middle" fontFamily="var(--font-display)" fontSize="16" fontWeight="800" fill="var(--red)">AI</text>
      <text x="260" y="154" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.6)">Orchestration</text>
      <text x="260" y="168" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.6)">Real-time</text>

      {/* Output layers */}
      <text x="370" y="34" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">AGENT SURFACE</text>
      {[
        {label:"Auto-ID panel", sub:"Customer on connect", accent:true},
        {label:"Context script", sub:"Data mid-call"},
        {label:"Live resolution", sub:"Answer in session"},
      ].map((out, i) => (
        <g key={i}>
          <rect x="370" y={40+i*56} width="220" height="44" rx="3" fill={out.accent ? "var(--red)" : "#1a1a1a"}/>
          <text x="384" y={40+i*56+17} fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="white">{out.label}</text>
          <text x="384" y={40+i*56+32} fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.6)">{out.sub}</text>
          <line x1="320" y1="140" x2="370" y2={40+i*56+22} stroke="#ccc" strokeWidth="0.8"/>
        </g>
      ))}

      {/* Agent */}
      <rect x="640" y="118" width="160" height="44" rx="3" fill="#e8e8e4"/>
      <text x="720" y="136" textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="#1a1a1a">Agent</text>
      <text x="720" y="152" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="#666">Customer focus only</text>
      <line x1="590" y1="140" x2="640" y2="140" stroke="#ccc" strokeWidth="0.8"/>

      <text x="0" y="228" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">Data retrieval moves from agent to system. The agent's job becomes the customer.</text>
    </svg>
  );
}

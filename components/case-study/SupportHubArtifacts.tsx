export function ConsolidationMapArtifact() {
  const tools = [
    "Billing","Tickets","CRM","Tech DB","Chat","ID verify","Orders","Network",
    "KB search","SLA","Escalate","Routing","Call log","Auth","Payments","Fraud",
    "Devices","Plans","Usage","Field ops","IVR","Survey","Schedule","Docs",
    "Approvals","Config","Assets","Alerts","Incidents","Reports","Audit","Compliance",
  ];

  return (
    <svg viewBox="0 0 860 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* Big editorial numbers */}
      <text x="0" y="90" fontFamily="var(--font-display)" fontSize="96" fontWeight="800" fill="var(--red)" fillOpacity="0.12">32</text>
      <text x="140" y="90" fontFamily="var(--font-display)" fontSize="96" fontWeight="800" fill="var(--muted)" fillOpacity="0.08">→</text>
      <text x="220" y="90" fontFamily="var(--font-display)" fontSize="96" fontWeight="800" fill="var(--red)" fillOpacity="0.7">1</text>

      <text x="0" y="110" fontFamily="var(--font-body)" fontSize="13" fill="var(--ink)" fillOpacity="0.7">Legacy tools consolidated</text>
      <text x="220" y="110" fontFamily="var(--font-body)" fontSize="13" fill="var(--red)">Single workspace</text>

      {/* Tool grid — small cells */}
      {tools.map((tool, i) => {
        const col = i % 8;
        const row = Math.floor(i / 8);
        const x = 330 + col * 66;
        const y = 20 + row * 32;
        return (
          <g key={i}>
            <rect x={x} y={y} width="60" height="24" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
            <text x={x + 30} y={y + 15} textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="var(--muted)">{tool}</text>
          </g>
        );
      })}

      {/* AHT stats row */}
      <line x1="0" y1="132" x2="320" y2="132" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="0" y="154" fontFamily="var(--font-body)" fontSize="12" fill="var(--muted)">AHT before</text>
      <text x="0" y="174" fontFamily="var(--font-display)" fontSize="28" fontWeight="800" fill="var(--muted)" fillOpacity="0.5">10 min</text>
      <text x="120" y="154" fontFamily="var(--font-body)" fontSize="12" fill="var(--muted)">AHT after</text>
      <text x="120" y="174" fontFamily="var(--font-display)" fontSize="28" fontWeight="800" fill="var(--red)">3 min</text>
      <text x="220" y="174" fontFamily="var(--font-display)" fontSize="28" fontWeight="800" fill="var(--ink)" fillOpacity="0.3">70%↓</text>
    </svg>
  );
}

export function CognitiveLoadArtifact() {
  const beforeSwitches = ["ID","Billing","Tech","Ticket","Search","CRM","KB","Auth","Plan","Fraud","Log","SLA","Close"];

  return (
    <svg viewBox="0 0 860 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">CONTEXT SWITCHES PER CALL</text>

      {/* Before — 13 circles spread across */}
      <text x="0" y="44" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="var(--muted)">BEFORE</text>
      {beforeSwitches.map((sw, i) => {
        const x = 70 + i * 60;
        return (
          <g key={i}>
            <circle cx={x} cy="70" r="18" fill="none" stroke="var(--muted)" strokeWidth="0.5" fillOpacity="0"/>
            <circle cx={x} cy="70" r="18" fill="var(--muted)" fillOpacity="0.08"/>
            <text x={x} y="66" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="var(--muted)">{sw}</text>
            {i < beforeSwitches.length - 1 && (
              <line x1={x+18} y1="70" x2={x+42} y2="70" stroke="var(--muted)" strokeWidth="0.5" strokeDasharray="2,2"/>
            )}
          </g>
        );
      })}
      <text x="70" y="104" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">13 switches · 10 min avg · knowledge on sticky notes</text>

      {/* Divider */}
      <line x1="0" y1="118" x2="860" y2="118" stroke="var(--border)" strokeWidth="0.5"/>

      {/* After — 3 large bold circles */}
      <text x="0" y="140" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="var(--muted)">AFTER</text>
      {["Connect","Resolve","Close"].map((sw, i) => {
        const x = 70 + i * 200;
        return (
          <g key={i}>
            <circle cx={x} cy="168" r="24" fill="var(--red)" fillOpacity={0.1 + i * 0.05} stroke="var(--red)" strokeWidth="1"/>
            <text x={x} y="165" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--red)">{sw}</text>
            {i < 2 && <line x1={x+24} y1="168" x2={x+176} y2="168" stroke="var(--red)" strokeWidth="1" strokeOpacity="0.3"/>}
          </g>
        );
      })}
      <text x="70" y="205" fontFamily="var(--font-body)" fontSize="11" fill="var(--red)">0 context switches · 3 min avg · AI surfaces all data</text>
    </svg>
  );
}

export function AIOrchestrationArtifact() {
  return (
    <svg viewBox="0 0 860 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="18" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">AI ORCHESTRATION: DATA RETRIEVAL SHIFTS TO THE SYSTEM</text>

      {/* Sources — left column */}
      <text x="0" y="40" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">DATA SOURCES</text>
      {["Billing history","Interaction log","Technical DB","Plan registry","Ticket system"].map((src, i) => (
        <g key={i}>
          <rect x="0" y={48 + i*34} width="148" height="26" rx="2" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="74" y={48 + i*34 + 17} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{src}</text>
          <line x1="148" y1={48 + i*34 + 13} x2="200" y2="152" stroke="var(--border)" strokeWidth="0.4" strokeDasharray="2,3" strokeOpacity="0.5"/>
        </g>
      ))}

      {/* AI core — large editorial circle */}
      <circle cx="290" cy="152" r="60" fill="var(--red)" fillOpacity="0.07" stroke="var(--red)" strokeWidth="1.5"/>
      <text x="290" y="146" textAnchor="middle" fontFamily="var(--font-display)" fontSize="13" fontWeight="800" fill="var(--red)">AI</text>
      <text x="290" y="162" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Real-time</text>
      <text x="290" y="175" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">orchestration</text>

      {/* Output layers */}
      <text x="400" y="40" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)" letterSpacing="1">AGENT SURFACE</text>
      {[
        {label:"Auto-ID panel", sub:"Customer identified on connect"},
        {label:"Context script", sub:"Relevant data surfaced mid-call"},
        {label:"Live resolution", sub:"Answer in session interface"},
      ].map((out, i) => (
        <g key={i}>
          <rect x="400" y={48 + i*58} width="220" height="44" rx="3" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
          <text x="414" y={48 + i*58 + 17} fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="var(--ink)" fillOpacity="0.85">{out.label}</text>
          <text x="414" y={48 + i*58 + 32} fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">{out.sub}</text>
          <line x1="350" y1="152" x2="400" y2={48 + i*58 + 22} stroke="var(--red)" strokeWidth="0.5" strokeDasharray="3,2" strokeOpacity="0.4"/>
        </g>
      ))}

      {/* Agent — rightmost */}
      <rect x="680" y="130" width="120" height="44" rx="3" fill="none" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="740" y="150" textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="var(--ink)" fillOpacity="0.7">Agent</text>
      <text x="740" y="165" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Customer focus</text>
      <line x1="620" y1="152" x2="680" y2="152" stroke="var(--border)" strokeWidth="0.5"/>

      <text x="0" y="248" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">The architectural shift: data retrieval moves from the agent to the system. The agent's job becomes the customer.</text>
    </svg>
  );
}

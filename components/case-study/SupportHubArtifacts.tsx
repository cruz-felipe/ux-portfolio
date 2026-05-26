export function LegacyFragmentationArtifact() {
  const tools = [
    "Billing portal","CRM","Ticketing","Tech diagnostics",
    "IVR logs","Order mgmt","SIM mgmt","Network status",
    "Auth system","KB search","Escalation","Scripting",
  ];
  const cols = 4;
  return (
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="20" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">LEGACY ENVIRONMENT — TOOLS AN AGENT NAVIGATED PER CALL (SAMPLE)</text>
      {tools.map((t, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = 20 + col * 192;
        const y = 26 + row * 48;
        return (
          <g key={i}>
            <rect x={x} y={y} width="180" height="36" rx="2" fill="#f0f0ec"/>
            <rect x={x} y={y} width="4" height="36" rx="1" fill={i < 4 ? "var(--red)" : "#d0d0cc"}/>
            <text x={x+16} y={y+22} fontFamily="var(--font-body)" fontSize="11" fill="#444">{t}</text>
          </g>
        );
      })}
      <text x="20" y="206" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Red: tools accessed on every call. Gray: tools accessed situationally. Agent expected to know which to open without a guide.</text>
    </svg>
  );
}

export function CostModelArtifact() {
  // Visual: two bars — fragmentation cost vs consolidation investment
  // Fragmentation: AHT delta × call vol × agents × cost/hr
  // Numbers are illustrative order-of-magnitude, not client actuals
  const barMaxH = 120;

  return (
    <svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="20" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">INFRASTRUCTURE COST MODEL — THE ARGUMENT THAT CHANGED THE ROOM</text>

      {/* Fragmentation cost bar */}
      <rect x="80" y={40 + (barMaxH - barMaxH)} width="200" height={barMaxH} rx="3" fill="#e8e8e4"/>
      <rect x="80" y={40 + (barMaxH - barMaxH)} width="200" height={barMaxH} rx="3" fill="var(--red)" opacity="0.15"/>
      <rect x="80" y="40" width="200" height={barMaxH} rx="3" fill="var(--red)"/>
      <text x="180" y="76" textAnchor="middle" fontFamily="var(--font-display)" fontSize="20" fontWeight="800" fill="white">~$Xm</text>
      <text x="180" y="96" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.75)">annual cost of</text>
      <text x="180" y="110" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.75)">fragmentation</text>
      <text x="180" y="172" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--ink)">Fragmentation cost</text>

      {/* Equals / vs */}
      <text x="340" y="108" textAnchor="middle" fontFamily="var(--font-display)" fontSize="28" fontWeight="800" fill="#d0d0cc">vs</text>

      {/* Consolidation cost bar — shorter */}
      <rect x="420" y={40 + barMaxH * 0.55} width="200" height={barMaxH * 0.45} rx="3" fill="#1a1a1a"/>
      <text x="520" y={40 + barMaxH * 0.55 + 28} textAnchor="middle" fontFamily="var(--font-display)" fontSize="20" fontWeight="800" fill="white">~$Y</text>
      <text x="520" y={40 + barMaxH * 0.55 + 44} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.75)">consolidation</text>
      <text x="520" y={40 + barMaxH * 0.55 + 58} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="rgba(255,255,255,0.75)">investment</text>
      <text x="520" y="172" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="var(--ink)">Consolidation investment</text>

      {/* Formula breakdown */}
      <rect x="20" y="188" width="760" height="56" rx="3" fill="#f5f5f2"/>
      <text x="40" y="208" fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill="#1a1a1a">Fragmentation cost =</text>
      <text x="200" y="208" fontFamily="var(--font-body)" fontSize="11" fill="#555">AHT delta (7 min)</text>
      <text x="320" y="208" fontFamily="var(--font-body)" fontSize="11" fill="#aaa">×</text>
      <text x="340" y="208" fontFamily="var(--font-body)" fontSize="11" fill="#555">call volume</text>
      <text x="430" y="208" fontFamily="var(--font-body)" fontSize="11" fill="#aaa">×</text>
      <text x="450" y="208" fontFamily="var(--font-body)" fontSize="11" fill="#555">3,000 agents</text>
      <text x="560" y="208" fontFamily="var(--font-body)" fontSize="11" fill="#aaa">×</text>
      <text x="580" y="208" fontFamily="var(--font-body)" fontSize="11" fill="#555">cost per agent-hour</text>
      <text x="40" y="230" fontFamily="var(--font-body)" fontSize="10" fill="#aaa">At 40 calls/day × 3,000 agents, the 7-min AHT saving = ~14,000 agent-hours recovered daily. Actual figures are client-confidential; the model structure and argument are accurate.</text>
    </svg>
  );
}

export function UnifiedWorkspaceArtifact() {
  const layers = [
    { label: "Auto-identification", sub: "Customer surfaced on connect — name, account, history, open tickets", fill: "var(--red)" },
    { label: "Contextual scripting", sub: "Real-time call monitoring — relevant data and responses pushed to agent", fill: "#1a1a1a" },
    { label: "Live resolution", sub: "Actions completed in session — no tool switching, no window changes", fill: "#333" },
  ];
  return (
    <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="20" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">UNIFIED WORKSPACE — THREE INTELLIGENCE LAYERS</text>
      {layers.map((layer, i) => (
        <g key={i}>
          <rect x="20" y={26 + i * 52} width="760" height="44" rx="3" fill={layer.fill}/>
          <text x="38" y={26 + i * 52 + 18} fontFamily="var(--font-body)" fontSize="13" fontWeight="600" fill="white">{layer.label}</text>
          <text x="38" y={26 + i * 52 + 34} fontFamily="var(--font-body)" fontSize="11" fill="rgba(255,255,255,0.6)">{layer.sub}</text>
        </g>
      ))}
      <text x="20" y="192" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">32 data sources. One view. Agent's job becomes the customer, not the system.</text>
    </svg>
  );
}

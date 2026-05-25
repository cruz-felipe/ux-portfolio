export function PageReductionArtifact() {
  return (
    <svg viewBox="0 0 860 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      {/* Giant editorial numbers — reference image 4 bar style */}
      <text x="0" y="110" fontFamily="var(--font-display)" fontSize="120" fontWeight="800" fill="var(--muted)" fillOpacity="0.12">160</text>
      <text x="240" y="80" fontFamily="var(--font-display)" fontSize="60" fontWeight="800" fill="var(--muted)" fillOpacity="0.25">→</text>
      <text x="320" y="110" fontFamily="var(--font-display)" fontSize="120" fontWeight="800" fill="var(--red)" fillOpacity="0.7">45</text>

      <text x="0" y="130" fontFamily="var(--font-body)" fontSize="13" fill="var(--muted)">pages before</text>
      <text x="320" y="130" fontFamily="var(--font-body)" fontSize="13" fill="var(--red)">pages after</text>

      {/* 72% badge */}
      <circle cx="650" cy="90" r="70" fill="var(--red)" fillOpacity="0.08" stroke="var(--red)" strokeWidth="1.5"/>
      <text x="650" y="84" textAnchor="middle" fontFamily="var(--font-display)" fontSize="40" fontWeight="800" fill="var(--red)">72%</text>
      <text x="650" y="104" textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fill="var(--red)">reduction</text>

      <text x="0" y="175" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">Redundant sections consolidated. Duplicate device identifiers removed. Engineer-only content cut.</text>
      <text x="0" y="192" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">Copy rewritten to match field technician vocabulary. Validated section by section with business analysts and client stakeholders.</text>
    </svg>
  );
}

export function SectionAuditArtifact() {
  const sections = [
    {name:"Device installation sequence", usage:"High", redundancy:"Low", vocab:"Rewritten", action:"Keep"},
    {name:"Network configuration tables", usage:"High", redundancy:"Medium", vocab:"Rewritten", action:"Keep"},
    {name:"Engineer sign-off fields", usage:"None", redundancy:"High", vocab:"N/A", action:"Remove"},
    {name:"System validation checksums", usage:"None", redundancy:"High", vocab:"N/A", action:"Remove"},
    {name:"Device ID cross-reference", usage:"High", redundancy:"High", vocab:"Simplified", action:"Consolidate"},
    {name:"Installation prerequisites", usage:"High", redundancy:"Low", vocab:"Rewritten", action:"Keep"},
    {name:"OSS system status codes", usage:"None", redundancy:"High", vocab:"N/A", action:"Remove"},
  ];

  const actionColor = (a: string) => a === "Remove" ? "var(--red)" : a === "Consolidate" ? "var(--muted)" : "var(--ink)";

  return (
    <svg viewBox="0 0 860 230" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">SECTION AUDIT: FIELD USAGE AND REDUNDANCY</text>

      <text x="240" y="34" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="var(--muted)" letterSpacing="0.5">FIELD USAGE</text>
      <text x="380" y="34" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="var(--muted)" letterSpacing="0.5">REDUNDANCY</text>
      <text x="510" y="34" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="var(--muted)" letterSpacing="0.5">VOCABULARY</text>
      <text x="640" y="34" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="var(--muted)" letterSpacing="0.5">DECISION</text>

      <line x1="0" y1="40" x2="860" y2="40" stroke="var(--border)" strokeWidth="0.5"/>

      {sections.map((s, i) => {
        const y = 56 + i * 24;
        return (
          <g key={i}>
            <text x="0" y={y} fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.75">{s.name}</text>
            <text x="240" y={y} fontFamily="var(--font-body)" fontSize="11" fill={s.usage === "None" ? "var(--muted)" : "var(--ink)"} fillOpacity={s.usage === "None" ? 0.35 : 0.75}>{s.usage}</text>
            <text x="380" y={y} fontFamily="var(--font-body)" fontSize="11" fill={s.redundancy === "High" ? "var(--red)" : "var(--muted)"} fillOpacity={s.redundancy === "High" ? 0.7 : 0.75}>{s.redundancy}</text>
            <text x="510" y={y} fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">{s.vocab}</text>
            <text x="640" y={y} fontFamily="var(--font-body)" fontSize="11" fontWeight="600" fill={actionColor(s.action)}>{s.action}</text>
            <line x1="0" y1={y + 6} x2="860" y2={y + 6} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>
          </g>
        );
      })}

      <text x="0" y="228" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Assessed in section-by-section review. Field usage and redundancy ratings based on stakeholder and analyst input.</text>
    </svg>
  );
}

export function WorkOrderArtifact() {
  const before = [
    {label:"System header", removed:false},
    {label:"OSS checksums", removed:true},
    {label:"Device ID ref A", removed:true},
    {label:"Network config", removed:false},
    {label:"Device ID ref B", removed:true},
    {label:"Installation seq.", removed:false},
    {label:"Sign-off fields", removed:true},
    {label:"Status codes", removed:true},
    {label:"Prerequisites", removed:false},
    {label:"Device ID ref C", removed:true},
  ];
  const after = ["Field header","Prerequisites","Device identification","Installation sequence","Network configuration"];

  return (
    <svg viewBox="0 0 860 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="16" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1.5">DOCUMENT STRUCTURE: BEFORE AND AFTER</text>

      <text x="0" y="34" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Before: engineer-ordered, 10 sections</text>
      {before.map((s, i) => {
        const col = Math.floor(i / 5);
        const row = i % 5;
        const x = col * 220;
        const y = 42 + row * 30;
        return (
          <g key={i}>
            <rect x={x} y={y} width="208" height="22" rx="2" fill="none" stroke="var(--border)"
              strokeWidth="0.5" strokeDasharray={s.removed ? "3,2" : "none"}/>
            <text x={x + 8} y={y + 14} fontFamily="var(--font-body)" fontSize="10"
              fill={s.removed ? "var(--muted)" : "var(--ink)"}
              fillOpacity={s.removed ? 0.35 : 0.8}>{s.label}</text>
          </g>
        );
      })}

      <line x1="450" y1="30" x2="450" y2="200" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="490" y="80" fontFamily="var(--font-display)" fontSize="32" fontWeight="800" fill="var(--red)">→</text>

      <text x="540" y="34" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">After: task-ordered, 5 sections</text>
      {after.map((s, i) => (
        <g key={i}>
          <rect x="540" y={42 + i * 32} width="300" height="24" rx="12" fill="var(--red)" fillOpacity={0.06 + i * 0.02} stroke="var(--red)" strokeWidth="0.5"/>
          <text x="690" y={42 + i * 32 + 15} textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">{s}</text>
        </g>
      ))}

      <text x="0" y="240" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Dashed sections removed or consolidated. Reading order changed from system-generated to task-execution order.</text>
      <text x="0" y="256" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Copy rewritten throughout to match field technician vocabulary rather than OSS system terminology.</text>
    </svg>
  );
}

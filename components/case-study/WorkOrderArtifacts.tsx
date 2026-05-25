export function PageReductionArtifact() {
  return (
    <svg viewBox="0 0 860 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">DOCUMENT SCOPE: BEFORE AND AFTER REDESIGN</text>

      {/* Before bar */}
      <text x="0" y="38" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Before</text>
      <rect x="60" y="26" width="560" height="22" rx="2" fill="var(--muted)" fillOpacity="0.2" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="628" y="40" fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">160 pages</text>

      {/* After bar */}
      <text x="0" y="72" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">After</text>
      <rect x="60" y="60" width={(45 / 160) * 560} height="22" rx="2" fill="var(--red)" fillOpacity="0.7"/>
      <text x={60 + (45 / 160) * 560 + 10} y="74" fontFamily="var(--font-body)" fontSize="11" fill="var(--red)">45 pages</text>

      {/* Delta */}
      <text x="60" y="108" fontFamily="var(--font-display)" fontSize="32" fontWeight="800" fill="var(--ink)">72%</text>
      <text x="112" y="108" fontFamily="var(--font-body)" fontSize="14" fill="var(--muted)">reduction in document length</text>

      <text x="0" y="140" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Redundant sections consolidated. Duplicate device identifiers removed. Engineer-only content cut. Copy rewritten in field vocabulary.</text>
      <text x="0" y="156" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Validated section by section with business analysts and client stakeholders against field technician use cases.</text>
    </svg>
  );
}

export function SectionAuditArtifact() {
  const sections = [
    { name: "Device installation sequence", usage: "High", redundancy: "Low", vocab: "Rewritten", action: "Keep" },
    { name: "Network configuration tables", usage: "High", redundancy: "Medium", vocab: "Rewritten", action: "Keep" },
    { name: "Engineer sign-off fields", usage: "None", redundancy: "High", vocab: "N/A", action: "Remove" },
    { name: "System validation checksums", usage: "None", redundancy: "High", vocab: "N/A", action: "Remove" },
    { name: "Device ID cross-reference", usage: "High", redundancy: "High", vocab: "Simplified", action: "Consolidate" },
    { name: "Installation prerequisites", usage: "High", redundancy: "Low", vocab: "Rewritten", action: "Keep" },
    { name: "OSS system status codes", usage: "None", redundancy: "High", vocab: "N/A", action: "Remove" },
  ];

  const actionColor = (a: string) => {
    if (a === "Remove") return "var(--red)";
    if (a === "Consolidate") return "var(--muted)";
    return "var(--ink)";
  };

  return (
    <svg viewBox="0 0 860 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">SECTION AUDIT: FIELD USAGE AND REDUNDANCY</text>

      {/* Headers */}
      <text x="240" y="32" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="var(--muted)" letterSpacing="0.5">FIELD USAGE</text>
      <text x="360" y="32" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="var(--muted)" letterSpacing="0.5">REDUNDANCY</text>
      <text x="490" y="32" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="var(--muted)" letterSpacing="0.5">VOCABULARY</text>
      <text x="620" y="32" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="var(--muted)" letterSpacing="0.5">DECISION</text>

      <line x1="0" y1="38" x2="860" y2="38" stroke="var(--border)" strokeWidth="0.5"/>

      {sections.map((s, i) => {
        const y = 54 + i * 26;
        const isLast = i === sections.length - 1;
        return (
          <g key={i}>
            <text x="0" y={y} fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.75">{s.name}</text>
            <text x="240" y={y} fontFamily="var(--font-body)" fontSize="11" fill={s.usage === "None" ? "var(--muted)" : "var(--ink)"} fillOpacity={s.usage === "None" ? 0.4 : 0.75}>{s.usage}</text>
            <text x="360" y={y} fontFamily="var(--font-body)" fontSize="11" fill={s.redundancy === "High" ? "var(--red)" : "var(--muted)"} fillOpacity={s.redundancy === "High" ? 0.7 : 0.75}>{s.redundancy}</text>
            <text x="490" y={y} fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">{s.vocab}</text>
            <text x="620" y={y} fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill={actionColor(s.action)}>{s.action}</text>
            {!isLast && <line x1="0" y1={y + 8} x2="860" y2={y + 8} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>}
          </g>
        );
      })}

      <text x="0" y="244" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Field usage and redundancy assessed in section-by-section review with business analysts and client stakeholders.</text>
    </svg>
  );
}

export function WorkOrderArtifact() {
  const before = [
    { label: "System header (engineer view)", removed: false },
    { label: "OSS validation checksums", removed: true },
    { label: "Device ID cross-ref A", removed: true },
    { label: "Network config tables", removed: false },
    { label: "Device ID cross-ref B", removed: true },
    { label: "Installation sequence", removed: false },
    { label: "Engineer sign-off fields", removed: true },
    { label: "System status codes", removed: true },
    { label: "Prerequisites (buried)", removed: false },
    { label: "Device ID cross-ref C", removed: true },
  ];

  const after = [
    "Field header (technician view)",
    "Prerequisites",
    "Device identification",
    "Installation sequence",
    "Network configuration",
  ];

  return (
    <svg viewBox="0 0 860 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">DOCUMENT STRUCTURE: BEFORE AND AFTER</text>

      <text x="0" y="32" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Before: engineer-ordered, cross-referenced, 10 sections shown</text>
      {before.map((s, i) => {
        const col = Math.floor(i / 5);
        const row = i % 5;
        const x = col * 220;
        const y = 40 + row * 32;
        return (
          <g key={i}>
            <rect x={x} y={y} width="210" height="24" rx="2"
              fill="none"
              stroke="var(--border)"
              strokeWidth="0.5"
              strokeDasharray={s.removed ? "3,2" : "none"}
              fillOpacity={s.removed ? 0 : 1}
            />
            <text x={x + 8} y={y + 15} fontFamily="var(--font-body)" fontSize="9"
              fill={s.removed ? "var(--muted)" : "var(--ink)"}
              fillOpacity={s.removed ? 0.4 : 0.8}
            >{s.label}</text>
          </g>
        );
      })}

      <line x1="460" y1="28" x2="460" y2="220" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="494" y="14" fontFamily="var(--font-body)" fontSize="22" fontWeight="800" fill="var(--red)">→</text>

      <text x="480" y="32" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">After: task-ordered, field vocabulary, 5 sections</text>
      {after.map((s, i) => (
        <g key={i}>
          <rect x="480" y={40 + i * 36} width="360" height="28" rx="2"
            fill="var(--red)" fillOpacity="0.05"
            stroke="var(--red)" strokeWidth="0.5"
          />
          <text x="492" y={40 + i * 36 + 18} fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">{s}</text>
        </g>
      ))}

      <text x="0" y="250" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Dashed sections removed or consolidated. Reading order changed from system-generated to task-execution order.</text>
      <text x="0" y="266" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Copy rewritten throughout to match field technician vocabulary rather than OSS system terminology.</text>
    </svg>
  );
}

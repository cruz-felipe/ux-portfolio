export function PageReductionArtifact() {
  const categories = [
    { label: "Redundant sections consolidated", pages: 52 },
    { label: "Duplicate device identifiers removed", pages: 38 },
    { label: "Unused engineer-only content removed", pages: 18 },
    { label: "Copy rewritten, same content", pages: 7 },
  ];
  const total = categories.reduce((s, c) => s + c.pages, 0);
  const barW = 560;

  return (
    <svg viewBox="0 0 860 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">DOCUMENT REDUCTION: 160 PAGES TO 45</text>

      <text x="0" y="38" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Before</text>
      <rect x="50" y="26" width={barW} height="20" rx="2" fill="var(--muted)" fillOpacity="0.2" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="618" y="40" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">160 pages</text>

      <text x="0" y="68" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">After</text>
      <rect x="50" y="56" width={(45 / 160) * barW} height="20" rx="2" fill="var(--red)" fillOpacity="0.7"/>
      <text x={50 + (45 / 160) * barW + 8} y="70" fontFamily="var(--font-body)" fontSize="10" fill="var(--red)">45 pages</text>

      <text x="0" y="104" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">REMOVED BY CATEGORY</text>

      {categories.map((cat, i) => {
        const w = (cat.pages / total) * barW;
        const x = 50 + categories.slice(0, i).reduce((s, c) => s + (c.pages / total) * barW, 0);
        const opacity = 0.3 + i * 0.18;
        return (
          <g key={i}>
            <rect x={x} y="112" width={w - 2} height="20" rx="1" fill="var(--muted)" fillOpacity={opacity}/>
          </g>
        );
      })}

      {categories.map((cat, i) => {
        const y = 152 + i * 20;
        const w = (cat.pages / total) * barW;
        const opacity = 0.3 + i * 0.18;
        return (
          <g key={i}>
            <rect x="0" y={y - 9} width="10" height="10" rx="1" fill="var(--muted)" fillOpacity={opacity}/>
            <text x="16" y={y} fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.75">{cat.label}</text>
            <text x="640" y={y} fontFamily="var(--font-body)" fontSize="11" fill="var(--muted)">{cat.pages} pages</text>
          </g>
        );
      })}

      <text x="0" y="236" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Total removed: {total} pages. Remaining: 45 pages. Reduction: 72%.</text>
    </svg>
  );
}

export function SectionAuditArtifact() {
  const sections = [
    { name: "Device installation sequence", usage: 9, redundancy: 2, vocab: 8, action: "Keep, rewrite" },
    { name: "Network configuration tables", usage: 8, redundancy: 4, vocab: 6, action: "Keep, simplify" },
    { name: "Engineer sign-off fields", usage: 1, redundancy: 8, vocab: 3, action: "Remove" },
    { name: "System validation checksums", usage: 1, redundancy: 9, vocab: 2, action: "Remove" },
    { name: "Device ID cross-reference", usage: 7, redundancy: 9, vocab: 5, action: "Consolidate" },
    { name: "Installation prerequisites", usage: 8, redundancy: 3, vocab: 7, action: "Keep, rewrite" },
    { name: "Escalation contacts", usage: 6, redundancy: 6, vocab: 9, action: "Consolidate" },
    { name: "OSS system status codes", usage: 2, redundancy: 7, vocab: 2, action: "Remove" },
  ];

  const actionColor = (a: string) => {
    if (a === "Remove") return "var(--red)";
    if (a === "Consolidate") return "var(--muted)";
    return "var(--ink)";
  };

  return (
    <svg viewBox="0 0 860 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">SECTION AUDIT: USAGE vs REDUNDANCY</text>

      <text x="200" y="30" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">Field usage</text>
      <text x="370" y="30" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">Redundancy</text>
      <text x="540" y="30" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">Vocab match</text>
      <text x="710" y="30" fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">Decision</text>

      <line x1="0" y1="36" x2="860" y2="36" stroke="var(--border)" strokeWidth="0.5"/>

      {sections.map((s, i) => {
        const y = 52 + i * 26;
        const isLast = i === sections.length - 1;
        return (
          <g key={i}>
            <text x="0" y={y} fontFamily="var(--font-body)" fontSize="11" fill="var(--ink)" fillOpacity="0.75">{s.name}</text>

            <rect x="200" y={y - 10} width={(s.usage / 10) * 140} height="10" rx="1" fill="var(--red)" fillOpacity={s.usage > 5 ? 0.6 : 0.2}/>
            <text x="348" y={y} fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{s.usage}/10</text>

            <rect x="370" y={y - 10} width={(s.redundancy / 10) * 140} height="10" rx="1" fill="var(--muted)" fillOpacity={s.redundancy > 5 ? 0.5 : 0.2}/>
            <text x="518" y={y} fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{s.redundancy}/10</text>

            <rect x="540" y={y - 10} width={(s.vocab / 10) * 140} height="10" rx="1" fill="var(--muted)" fillOpacity={s.vocab > 5 ? 0.3 : 0.1}/>
            <text x="688" y={y} fontFamily="var(--font-body)" fontSize="9" fill="var(--muted)">{s.vocab}/10</text>

            <text x="710" y={y} fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill={actionColor(s.action)}>{s.action}</text>

            {!isLast && <line x1="0" y1={y + 8} x2="860" y2={y + 8} stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,4"/>}
          </g>
        );
      })}
    </svg>
  );
}

export function WorkOrderArtifact() {
  const before = [
    "System header (engineer view)",
    "OSS validation checksums",
    "Device ID cross-ref A",
    "Network config tables",
    "Device ID cross-ref B",
    "Installation sequence",
    "Engineer sign-off fields",
    "System status codes",
    "Prerequisites (buried)",
    "Escalation contacts",
    "Device ID cross-ref C",
    "Appendix (rarely used)",
  ];

  const after = [
    "Field header (technician view)",
    "Prerequisites",
    "Device identification",
    "Installation sequence",
    "Network configuration",
    "Escalation contacts",
  ];

  return (
    <svg viewBox="0 0 860 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <text x="0" y="14" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)" letterSpacing="1">DOCUMENT STRUCTURE: BEFORE AND AFTER</text>

      <text x="0" y="32" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Before: engineer-ordered, 12 sections, cross-referenced</text>
      {before.map((s, i) => {
        const row = Math.floor(i / 2);
        const col = i % 2;
        const x = col * 200;
        const y = 40 + row * 32;
        const isRemoved = ["OSS validation checksums", "Device ID cross-ref A", "Device ID cross-ref B", "Engineer sign-off fields", "System status codes", "Device ID cross-ref C", "Appendix (rarely used)"].includes(s);
        return (
          <g key={i}>
            <rect x={x} y={y} width="190" height="24" rx="2"
              fill={isRemoved ? "var(--muted)" : "none"}
              fillOpacity={isRemoved ? 0.08 : 1}
              stroke={isRemoved ? "var(--border)" : "var(--border)"}
              strokeWidth="0.5"
              strokeDasharray={isRemoved ? "3,2" : "none"}
            />
            <text x={x + 8} y={y + 15} fontFamily="var(--font-body)" fontSize="9"
              fill={isRemoved ? "var(--muted)" : "var(--ink)"}
              fillOpacity={isRemoved ? 0.5 : 0.8}
              textDecoration={isRemoved ? "line-through" : "none"}
            >{s}</text>
          </g>
        );
      })}

      <line x1="430" y1="28" x2="430" y2="320" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="464" y="14" fontFamily="var(--font-body)" fontSize="22" fontWeight="800" fill="var(--red)">→</text>

      <text x="460" y="32" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">After: task-ordered, 6 sections, field-vocabulary</text>
      {after.map((s, i) => (
        <g key={i}>
          <rect x="460" y={40 + i * 36} width="380" height="28" rx="2"
            fill="var(--red)" fillOpacity="0.05"
            stroke="var(--red)" strokeWidth="0.5"
          />
          <text x="472" y={40 + i * 36 + 18} fontFamily="var(--font-body)" fontSize="11" fontWeight="500" fill="var(--ink)" fillOpacity="0.85">{s}</text>
        </g>
      ))}

      <text x="0" y="308" fontFamily="var(--font-body)" fontSize="10" fill="var(--muted)">Strikethrough sections removed or consolidated. Reading order changed from system-generated to task-execution order.</text>
    </svg>
  );
}

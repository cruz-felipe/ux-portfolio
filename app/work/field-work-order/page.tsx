import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import { WorkOrderArtifact, PageReductionArtifact, SectionAuditArtifact } from "@/components/case-study/WorkOrderArtifacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Work Order Felipe Cruz",
  description: "A 160-page installation document redesigned for field technicians. Delivered in 45 pages.",
};

const data: CaseStudyData = {
  index: "04",
  title: "Field Work Order",
  tagline: "A 160-page installation document that engineers understood and field technicians could not. The fix was not about design. It was about whose language the document was written in.",
  role: "UX Designer",
  location: "Remote, Canada",
  year: "2024",
  roleDetail: "Redesigned OSS installation work order documentation for a a telecom operator. Worked directly with business analysts, a project manager and client stakeholders to audit, restructure and rewrite the document for field technician use.",
  impactSummary: "Document reduced from 160 to 45 pages. Redundant sections eliminated. Navigation optimized for both digital and printed use. Delivered under executive pressure in four months.",
  context: "OSS infrastructure installations are planned by engineers in the system and executed by field technicians on the ground often in difficult conditions, sometimes printed on paper. The document connecting those two realities was 160 pages long, written in technical OSS terminology, with duplicated information spread across sections that no one had ever rationalized as a whole.",
  metrics: [
    { value: "72%", label: "Page reduction. From 160 pages to 45." },
    { value: "45", label: "Pages in the redesigned document." },
    { value: "4mo", label: "December to March, fully remote" },
  ],
  sections: [
    {
      title: "The problem with the document",
      body: [
        "The document was not broken because it was poorly designed. It was broken because it had been built by engineers, for engineers, and then handed to field technicians who had a completely different set of conditions, vocabulary and priorities.",
        "A technician in the field needs to find specific device information fast, often on a phone or a printed sheet in low light or under time pressure. The document they had gave them 160 pages of cross-referenced OSS terminology, repeated device identifiers, and sections that existed because the system generated them, not because anyone on the ground had ever used them.",
        "The gap between the people who wrote the document and the people who used it had never been formally addressed. Nobody had sat down and mapped which sections actually got used, in what order, and by whom.",
      ],
    },
    {
      title: "Getting through 160 pages",
      body: [
        "The hardest part of this project was not the redesign. It was the audit. To propose any restructure, I needed to understand the cross-references inside a technically dense document I had no prior context for. I could not do that alone.",
        "I worked with business analysts from my team and the client's stakeholders to go through the document section by section, mapping what each part was for, what it referenced, and whether any field technician had ever actually used it. That process required patience and genuine collaboration. The business analysts understood the technical layer. I understood the usage layer. Neither of us could do the other's job.",
        "We tackled it in sections to keep the scope manageable and avoid the kind of sprawl that kills remote projects. Every proposed change was validated against a field technician use case before it moved forward.",
      ],
    },
    {
      title: "The decisions that reduced 160 pages to 45",
      body: [
        "Three decisions drove the reduction. First: redundant sections. A significant portion of the document repeated information that appeared elsewhere in a different format. Once we mapped the cross-references, the redundancy became visible and the consolidation became straightforward.",
        "Second: device identification. The original document listed device identifiers with multiple fields that engineers needed for system validation but technicians never used in the field. Removing the duplication did not lose any information technicians needed. It removed noise they had to skip past every time.",
        "Third: language. The copy throughout the document used OSS system terminology. Field technicians used different words for the same things. Rewriting to match their vocabulary was the smallest change with the largest effect on usability. It was the difference between a document someone has to decode and one they can just read.",
        "This was delivered under pressure from top-level management. That pressure was actually useful it kept every decision focused on what was genuinely necessary and prevented the scope from expanding into a full redesign that the timeline could not support.",
      ],
    },
    {
      title: "What I would do differently",
      body: [
        "Without direct access to field technicians, every usage assumption was mediated through business analysts and stakeholders. That was the right call given the constraints, but it introduced a layer of interpretation that a single round of field observation would have removed.",
        "If I were doing this again, I would push harder for even one session watching a technician navigate the document in the field before the audit began. That observation would have given me a ground truth to validate the analyst inputs against, and would have made the prioritization conversation with management faster and cleaner.",
      ],
    },
  ],
  artifacts: [
    {
      id: "page-reduction",
      title: "Document scope reduction",
      caption: "From 160 to 45 pages through section consolidation, redundancy removal and device identifier simplification. Each reduction category mapped to a specific decision.",
      component: <PageReductionArtifact />,
    },
    {
      id: "section-audit",
      title: "Section audit methodology",
      caption: "Each section evaluated across three dimensions: field usage frequency, technical redundancy and vocabulary alignment. Sections with low usage and high redundancy were consolidated first.",
      component: <SectionAuditArtifact />,
    },
    {
      id: "work-order",
      title: "Document structure before and after",
      caption: "Abstract representation of reading flow. Before: non-linear, technically ordered, cross-referenced. After: task-ordered, field-vocabulary aligned, navigable in both digital and printed form.",
      component: <WorkOrderArtifact />,
    },
  ],
  next: { slug: "dane-telecom", title: "Dane Telecom" },
};

export default function FieldWorkOrder() {
  return <CaseLayout data={data} />;
}

import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import { QuotaArchitectureArtifact, WorkshopMethodArtifact, ApprovalFlowArtifact } from "@/components/case-study/QuotaArtifacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quota Management — Felipe Cruz",
  description: "Greenfield B2B asset management tool for a telecom BSS platform. Solo designer, built from workshops to production-ready flows.",
};

const data: CaseStudyData = {
  index: "06",
  title: "Quota Management",
  tagline: "There was no product to replace. No prior version to reference. Just a set of business needs, a stack of workshop notes, and a constraint to fit seamlessly into a tool ecosystem the client already owned.",
  role: "Senior UI Designer",
  location: "Remote",
  year: "2024",
  roleDetail: "Solo designer on the project. Led all design decisions from information architecture and user flows to interaction patterns and visual design. Responsible for cross-functional alignment across client and internal product, business and engineering stakeholders.",
  impactSummary: "Production-ready design for a greenfield B2B platform. Full quota and API management flows, approval workflows and reporting views designed to specification. Pending client-side launch.",
  context: "A B2B BSS telecom platform needed a dedicated asset management tool. Support agents from both the client organisation and their partners use it to manage data quota usage, monitor API consumption, access usage reports and submit change requests through structured approval flows. Nothing existed before this project started.",
  metrics: [
    { value: "0", label: "Existing product to reference. Greenfield from scratch." },
    { value: "4", label: "Stakeholder groups. Client business, client product, client dev, internal team." },
    { value: "3", label: "Core modules. Quota management, API usage, change request flows." },
  ],
  sections: [
    {
      title: "Starting from nothing",
      body: [
        "Greenfield projects feel like freedom until you realise the absence of constraints is itself a constraint. There is no existing behaviour to study, no baseline to improve on, and no shared mental model to anchor decisions to. Everything has to be established from first principles.",
        "The constraint that gave the project shape was the client's existing tool ecosystem. They already had products their teams used daily. The new platform had to match those visual patterns and interaction conventions closely enough that support agents could switch between tools without relearning. That boundary was the most useful design decision on the project, and it was made before I drew a single screen.",
      ],
    },
    {
      title: "Workshops as the design material",
      body: [
        "With no prior product and no user research process, workshops were the primary input. We ran sessions with business, product and development stakeholders from both the client organisation and our own team. The goal of each session was to clarify requirements, understand who would actually use each feature and how the information would flow through real work scenarios.",
        "I developed a habit of bringing preliminary concept sketches into sessions rather than arriving with blank paper. A rough flow or an unfinished layout gives people something to react to. It is faster to agree on what something is not than to construct what it is from an empty whiteboard. Those early drafts were not proposals, they were thinking tools.",
        "The sessions produced two things: shared understanding and a working backlog of design problems. Every ambiguity surfaced in a workshop became a constraint I could design against, rather than an assumption I had to make alone.",
      ],
    },
    {
      title: "The alignment problem",
      body: [
        "The hardest constraint on this project was not technical. It was that the client was still defining the product internally while we were designing it. Requirements that had been agreed in one session would shift by the next because decisions made in the workshop had not yet been ratified by people who were not in the room.",
        "This meant a meaningful portion of the design work was reworked not because the design was wrong, but because the brief behind it had changed. I learned to design with that instability in mind, favouring modular flows that could absorb scope changes without requiring a full rebuild, and flagging alignment dependencies explicitly before committing to detailed work.",
        "A workshop structure built around a topic roadmap, with sessions scoped to specific problem areas, would have surfaced these alignment gaps earlier. Running broad sessions where any stakeholder could introduce any topic meant we regularly finished sessions without the clarity we entered them to get.",
      ],
    },
    {
      title: "What is built",
      body: [
        "The platform covers three core modules. Quota management gives support agents visibility into data quota consumption at the client and partner level, with controls for adjustments and threshold alerts. API usage monitoring surfaces consumption data and rate limit status across the client's API products. Change requests route modification requests through a structured approval flow with configurable steps based on request type and value.",
        "All three modules are designed to the visual language of the client's existing tools. Component choices, interaction patterns and typographic conventions match what their teams already use. The onboarding overhead for support agents is designed to be close to zero.",
      ],
    },
  ],
  artifacts: [
    {
      id: "architecture",
      title: "Platform information architecture",
      caption: "Three-module structure with shared navigation and permission model. Designed to extend without breaking the interaction conventions established in the first release.",
      component: <QuotaArchitectureArtifact />,
    },
    {
      id: "workshop",
      title: "Workshop input to design output",
      caption: "How stakeholder sessions translated into design decisions. Preliminary concepts brought into sessions as thinking tools, not proposals.",
      component: <WorkshopMethodArtifact />,
    },
    {
      id: "approval-flow",
      title: "Change request approval flow",
      caption: "Configurable approval routing based on request type and value threshold. Designed to accommodate the client's internal sign-off structure without requiring system configuration changes.",
      component: <ApprovalFlowArtifact />,
    },
  ],
  next: { slug: "dane-telecom", title: "Dane Telecom" },
};

export default function QuotaManagement() {
  return <CaseLayout data={data} />;
}

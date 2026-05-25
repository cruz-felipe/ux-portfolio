import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import { QuotaArchitectureArtifact, WorkshopMethodArtifact, ApprovalFlowArtifact } from "@/components/case-study/QuotaArtifacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quota Management / Felipe Cruz",
  description: "Greenfield B2B asset management tool for a telecom BSS platform. Solo designer, built from workshops to production-ready flows.",
};

const data: CaseStudyData = {
  index: "05",
  title: "Quota Management",
  tagline: "There was no product to replace. No prior version to reference. Just a set of business needs, a stack of workshop notes, and a constraint to fit seamlessly into a tool ecosystem the client already owned.",
  role: "Senior UI Designer",
  location: "Remote, United States",
  year: "2024",
  roleDetail: "Solo designer on the project. Led all design decisions from information architecture and user flows to interaction patterns and visual design. Responsible for cross-functional alignment across client and internal product, business and engineering stakeholders.",
  impactSummary: "Production-ready design for a greenfield B2B platform. Full quota and API management flows, approval workflows and reporting views designed to specification. Pending client-side launch.",
  context: "A B2B BSS telecom platform needed a dedicated asset management tool. Support agents from both the client organisation and their partners use it to manage data quota usage, monitor API consumption, access usage reports and submit change requests through structured approval flows. Nothing existed before this project started.",
  metrics: [],
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
        "The hardest constraint was not technical. The client was still defining the product internally while we were designing it. I became aware of this about six weeks in, when a flow we had finalised in session three was sent back for rework because a senior stakeholder who had not attended that session disagreed with the direction. The work was not wrong. The sign-off process had a gap we had not mapped.",
        "From that point I changed how I worked. Before starting detailed design on any new flow, I asked explicitly who needed to ratify the decision before it could be treated as stable. That question was uncomfortable in early sessions but it saved more time than it cost. It also gave me a clearer picture of where the real authority sat versus where the vocal authority sat, which are often different things.",
        "The rework itself was manageable because I had been designing in modular flows. The change request approval logic was built so the routing rules were separate from the UI. When the client changed the approval thresholds three times over four weeks, the design absorbed each change without a rebuild. That modularity was not an accident. It was a response to reading the situation early enough to build for it.",
      ],
    },
    {
      title: "What shipped",
      body: [
        "The platform is in production-ready design across three modules. Quota management gives support agents visibility into data consumption at the client and partner level, with manual adjustment controls and threshold alerts. API usage monitoring surfaces rate limit status and consumption trends across the client's API products. Change requests route through a configurable approval flow based on request type and value, with a full audit log.",
        "The visual language matches the client's existing tool ecosystem by design. The decision to constrain visual exploration early was the right one: it removed a category of stakeholder debate and let the design work focus on information architecture and interaction logic, which were the actual hard problems.",
        "The platform is pending client-side launch. The delay is on the client's internal deployment timeline, not on the design. I have used the time to stress-test edge cases in the approval flow and tighten the empty states, which were underspecified in the initial handoff.",
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
};

export default function QuotaManagement() {
  return <CaseLayout data={data} />;
}

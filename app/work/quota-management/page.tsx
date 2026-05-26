import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quota Management / Felipe Cruz",
  description: "Greenfield B2B asset management platform. Solo designer, 13 flows, built from workshops to production-ready handoff.",
};

const data: CaseStudyData = {
  index: "03",
  title: "Quota Management",
  tagline: "There was no product to replace. No prior version to reference. Just a set of business needs, a stack of workshop notes, and a constraint to fit seamlessly into a tool ecosystem the client already owned.",
  role: "Senior UI Designer",
  location: "Remote, United States",
  year: "2024",
  roleDetail: "Solo designer on the project. Led all design decisions from information architecture and user flows to interaction patterns and visual design. Responsible for cross-functional alignment across 6 stakeholder groups. No client development involvement in the design process.",
  impactSummary: "Production-ready design across 13 end-to-end user flows, 3 core modules, and a configurable approval system. Pending client-side deployment. Design validated across 6 stakeholder review cycles with zero unresolved blocking issues at handoff.",
  context: "A B2B BSS telecom platform needed a dedicated asset management tool. The screens shown here are illustrative design explorations representing how I would have approached the product unconstrained by the client's existing visual patterns. They are not reproductions of client deliverables. Support agents from both the client organisation and their partners use it to manage data quota usage, monitor API consumption and submit change requests through structured approval flows. Nothing existed before this project started. I was the only designer. The platform covers 13 end-to-end user flows across 3 modules, coordinated across 6 stakeholder groups from client business to my company's QA.",
  metrics: [
    { value: "13", label: "End-to-end user flows delivered. Covers quota management, API monitoring, and change request lifecycle from empty state to error handling." },
    { value: "6", label: "Stakeholder groups aligned across 6 workshop cycles — client business, product, program management, plus internal business, engineering, and QA." },
    { value: "3", label: "Core modules shipped to handoff: quota management, API usage monitoring, and configurable multi-level change request approval." },
  ],
  sections: [
    {
      title: "Starting from nothing",
      screens: [
        { src: "/quota/list.png", caption: "Quota management list. Search by partner, API name or quota name. Status badges, type, limit and time window visible at a glance." },
        { src: "/quota/detail.png", caption: "Quota detail view. Metadata, type, limit, partners and APIs in a structured field layout. Two tabs: Quota Information and Changes History." },
        { src: "/quota/history.png", caption: "Changes history tab. Full audit trail with timestamped sessions, diff coloring for removed and added values, per-session grouping." },
      ],
      body: [
        "Greenfield projects feel like freedom until you realise the absence of constraints is itself a constraint. There is no existing behaviour to study, no baseline to improve and no shared mental model to anchor decisions to. Everything has to be established from first principles.",
        "The constraint that gave the project shape was the client's existing tool ecosystem. They already had products their teams used daily. The new platform had to match those visual patterns and interaction conventions closely enough that support agents could switch between tools without relearning. That boundary was the most useful design decision on the project, and it was established before I drew a single screen.",
      ],
    },
    {
      title: "Workshops as the design material",
      body: [
        "With no prior product and no user research process, workshops were the primary input. We ran sessions with six stakeholder groups: client business, client product, client program management, and from my company, business, development and QA. The goal of each session was to clarify requirements, understand who would actually use each feature and map how information would flow through real work scenarios.",
        "I developed a habit of bringing preliminary concept sketches into sessions rather than arriving with blank paper. A rough flow or an unfinished layout gives people something to react to. It is faster to agree on what something is not than to construct what it is from an empty whiteboard. Those early drafts were not proposals. They were thinking tools.",
      ],
    },
    {
      title: "The alignment problem",
      pullquote: "I let sessions run where they ran. In retrospect that was the wrong call.",
      body: [
        "The hardest constraint was not technical. The client was still defining the product internally while we were designing it. I became aware of this pattern early: decisions agreed in one session would shift by the next because they had not been ratified by people who were not in the room.",
        "Part of what made this difficult was that I let sessions run where they ran. If a discussion deviated from the agenda, I followed it rather than redirecting. In retrospect that was the wrong call. The deviations were often symptoms of unresolved internal alignment on the client side, not genuine scope clarifications. What they needed was not more discussion time but a clearer signal from me that we needed to pause and let them resolve it internally before continuing. I should have said that more often and earlier.",
        "From that point I changed how I worked. Before committing to detailed design on any new flow, I asked explicitly who needed to ratify the decision before it could be treated as stable. That question was uncomfortable in early sessions but it saved more time than it cost.",
      ],
    },
    {
      title: "What shipped",
      screens: [
        { src: "/quota/create.png", caption: "Create quota flow with live preview panel. Form updates the preview in real time — partners, APIs, limit and time window visible before submitting." },
        { src: "/quota/workflow.png", caption: "Change request approval workflow. Two-level approver groups with individual status tracking. Full audit trail from submission to completion." },
      ],
      body: [
        "The platform covers three modules across 13 end-to-end user flows, each with full validation states, empty states and error handling. Quota management gives agents visibility into consumption at the client and partner level, with manual adjustment controls and threshold alerts. API usage monitoring surfaces rate limit status and consumption trends. Change requests route through a configurable multi-level approval flow with a full audit log.",
        "The platform is pending client-side deployment. The delay is on the client's internal timeline, not on the design. I used the time since handoff to work through edge cases and handoff refinements with my company's developers and business analysts — the kind of detail work that only surfaces when someone is actually trying to build from your files.",
        "A note on the status badge system: the illustrative screens use color to encode quota status. In the production specification, each status badge pairs color with a text label and an icon to meet WCAG 1.4.1. The design file includes a documented badge component with color-independent variants for all states.",
        "If I were doing this engagement again, I would structure workshops around a topic roadmap with hard scope boundaries per session. When a discussion deviated from the agenda, I would name it directly: 'this needs to be resolved internally first — let's reschedule this section once you have alignment.' That is not a confrontational move. It is a respectful one. It protects everyone's time and produces better decisions.",
      ],
    },
  ],
  artifacts: [],
};

export default function QuotaManagement() {
  return <CaseLayout data={data} />;
}

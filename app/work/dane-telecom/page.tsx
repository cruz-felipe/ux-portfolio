import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dane Telecom / Felipe Cruz",
  description: "Design system restructure for a major Danish telecom. On-site Copenhagen. 50% faster handoff.",
};

const data: CaseStudyData = {
  index: "04",
  title: "Dane Telecom",
  tagline: "The client knew their design system lacked scalability. They did not know what to do about it. I was invited on-site in Copenhagen to find out.",
  role: "Senior Product Designer",
  location: "On-site, Copenhagen",
  year: "2023",
  roleDetail: "Led design system restructure working directly with the client's UX lead and UI designers. Introduced token architecture, established component governance and aligned the system roadmap with product delivery priorities.",
  impactSummary: "50% faster handoff. Concept-to-handoff dropped from two weeks to one. 32% velocity boost on concept production across the team.",
  context: "The client's UX lead reached out directly for help with design system optimisation. The system existed and covered the basics. The problem was that it had not been built with the product roadmap in mind. New features were forcing designers to solve the same problems locally, repeatedly, with no path back to the shared system. Before proposing any fixes, I needed to understand what the system actually contained and what it would need to support next.",
  metrics: [
    { value: "50%", label: "Faster handoff. Two weeks to one week, consistently." },
    { value: "32%", label: "Velocity boost on concept production across the team." },
    { value: "3mo", label: "On-site in Copenhagen leading the restructure." },
  ],
  sections: [
    {
      title: "What I found on day one",
      pullquote: "I arrived expecting mature governance. What I found was a component library with significant gaps and no process for deciding what belonged in the system.",
      screens: [
        { src: "/dane/inventory.png", caption: "Component inventory audit. 10 components mapped against Q4 roadmap, classified by status and priority. Illustrative representation of system documentation." },
      ],
      body: [
        "My first assumption was wrong. The client was a large, well-established company in Denmark. I arrived expecting a mature design system with clear governance. What I found was a component library with significant gaps, no documentation, and no process for deciding what belonged in the system versus what stayed local to a feature.",
        "That assumption cost me time. I spent the first week oriented to the wrong problem before the inventory work made the real situation clear. From that point, I ran a full audit mapping every component, every token reference, every deviation before proposing anything. The audit was the most important output of the first three weeks. Without it, any restructure would have been built on the same incomplete picture.",
      ],
    },
    {
      title: "Mapping the gap between system and roadmap",
      body: [
        "The first thing I proposed to the UX lead was a roadmap comparison. My argument was straightforward: before fixing what exists, we need to know what the product will require in the next quarter. A component that works for current features may not work for what is coming. If we restructure without that visibility, we will solve today's problem and create tomorrow's.",
        "That conversation gave the project its direction. The gaps between current system state and near-future product needs became the prioritisation framework. Components that would be stressed by the roadmap got restructured first. Components that were stable got documented and left alone.",
      ],
    },
    {
      title: "Running a restructure while the product kept shipping",
      screens: [
        { src: "/dane/component-audit.png", caption: "Before and after token restructure. Three inconsistent button variants unified under a semantic token layer. Illustrative system documentation." },
        { src: "/dane/token-architecture.png", caption: "Three-tier token architecture and sandbox-to-master governance workflow. Illustrative representation of the restructure approach." },
      ],
      body: [
        "The hardest constraint was that the product was live. We could not restructure in one move. Every change had to be batched carefully to avoid disrupting handoffs already in progress. I introduced a sandbox-to-master workflow: new components and token changes were built in isolation, validated against active handoffs, and only promoted to the master library once confirmed safe.",
        "The scope was larger than one person could cover on the timeline we had. I coordinated with other designers to split the work into batches, each assigned and tracked against the roadmap milestones. That coordination was the part of the project that most required the on-site presence. Remote collaboration on a restructure of this complexity, across a team that was also shipping features, would have been significantly harder.",
        "Being in Copenhagen for three months changed the quality of the work. Understanding how the client's team made decisions, what they trusted and where the real friction was, required the kind of daily proximity that remote work cannot replicate. I also got a clear view of how Danish product teams operate: direct, disciplined, with a strong mutual respect between disciplines. That shaped how I run cross-functional projects today.",
      ],
    },
    {
      title: "What I would do differently",
      body: [
        "I would map the system state and the roadmap on day one, before any other work. My assumption that a company of this scale would have mature governance was the single thing that cost the most time. The lesson is not specific to this engagement: the bigger the company, the more important it is to verify rather than assume. Large organisations accumulate technical and design debt the same way smaller ones do, often more invisibly.",
      ],
    },
  ],
  artifacts: [],
};

export default function DaneTelecom() {
  return <CaseLayout data={data} />;
}

import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import { TokenArchitectureArtifact, SandboxWorkflowArtifact, VelocityDeltaArtifact } from "@/components/case-study/DaneArtifacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dane Telecom Felipe Cruz",
  description: "Design system restructure for a global telecom. 50% faster handoff, 32% velocity boost.",
};

const data: CaseStudyData = {
  index: "01",
  title: "Dane Telecom",
  tagline: "The design system was a library, but we needed an architecture. Every complex interaction was being solved from scratch, by different designers, in different ways. I rebuilt the foundation and the process around it.",
  role: "Senior Product Designer",
  location: "On-site, Copenhagen",
  year: "2023",
  roleDetail: "Led design system restructure working directly with client UI designers. Introduced token architecture, established component governance and aligned the system roadmap with product delivery priorities.",
  impactSummary: "50% faster handoff. Concept-to-handoff dropped from two weeks to one. 32% velocity boost on concept production across the team.",
  context: "The product team was mid-update on both the B2C portal and the eCare platform. New features, new use cases, a visual identity refresh. A design system existed. The problem was that it only covered the simple cases. I spent three months on-site in Copenhagen to rebuild the foundation and the governance that would let it scale.",
  metrics: [
    { value: "50%", label: "Faster handoff. Two weeks to one week, consistently" },
    { value: "32%", label: "Velocity boost. Concept production from 2 days to under 1" },
    { value: "3mo", label: "On-site in Copenhagen leading the restructure" },
  ],
  sections: [
    {
      title: "The problem underneath the problem",
      body: [
        "Four product designers from my team were producing concepts for the eCare platform while two UI designers from the client maintained the system separately. The system existed as a robust component library. What it lacked was structure, process and governance.",
        "There was no documentation, no decision logic, no way to predict what the system would need to support next. Different designers were solving similar problems in different ways. Workshops ran to define requirements, then two or more days producing concepts, then more workshops to validate, then revisions before anything reached handoff.",
        "Nobody had mapped what the product roadmap would demand from the system in the next quarter. Without that visibility, every complex new feature was designed locally, never available to the next designer who faced the same problem. The system was impossible to scale not because of technology but because of process.",
      ],
    },
    {
      title: "The decision that changed the project",
      body: [
        "I requested a direct alignment with the product team to understand their roadmap priority. That conversation was not in my brief. It was a read of the situation: the real blocker was not missing components, it was missing visibility. Without knowing what was coming, the team could only react.",
        "That meeting was the turning point. With roadmap visibility, we could plan the system proactively instead of feature by feature. It also shifted the relationship with the client from vendor to partner. They saw that design was thinking about their delivery problems, not just their UI problems.",
        "From that point the work ran on two parallel tracks: restructuring the existing system and building ahead of what the roadmap would need next quarter.",
      ],
    },
    {
      title: "Rebuilding the foundation",
      body: [
        "We adopted MUI's token architecture as a starting point. A deliberate choice to save time rather than build from zero. From that base we introduced Figma variables mapped to the production codebase via Code Connect, making design tokens the shared language between Figma and engineering.",
        "The component structure followed atomic design principles, but the real change was in how complexity was handled. Before the restructure, a designer facing a new interaction pattern would solve it locally and move on. After, that pattern would be evaluated, documented and, if reusable, promoted to the master system.",
      ],
    },
    {
      title: "Doing this without breaking what was running",
      body: [
        "The hardest constraint was that the product was live and delivering. We could not restructure the system in one move. Every change had to be batched carefully to avoid disrupting features and handoffs already in progress.",
        "We worked in incremental batches, validating each change before moving to the next. This taught me something I apply to every system project now: the sequencing of a restructure matters as much as its architecture. A correct system that breaks ongoing work is not a solution.",
        "Being on-site for three months changed the quality of collaboration in ways remote work could not have replicated. Working directly alongside the client's designers and product team gave me a ground-level understanding of how they made decisions, what they trusted and where the real friction was. I also brought back a firsthand experience of how Danish teams work: a directness and mutual respect between disciplines that shaped how I run cross-functional projects today.",
        "If I were doing this again, I would push for the roadmap alignment conversation in week one, not week three. The two weeks before that meeting were the least efficient of the engagement because we were designing without the full picture.",
      ],
    },
  ],
  artifacts: [
    {
      id: "token-architecture",
      title: "Token architecture: before and after",
      caption: "Left: fragmented components with no shared foundation. Right: three-level token hierarchy mapped to production codebase via Code Connect. The architecture made tokens the single source of truth between Figma and engineering.",
      component: <TokenArchitectureArtifact />,
    },
    {
      id: "sandbox-workflow",
      title: "Sandbox to master governance workflow",
      caption: "New components built locally first, then evaluated for reuse potential by the UX lead. Promotion to master is a design decision, not an engineering one. The criteria: does this solve a problem that will appear again?",
      component: <SandboxWorkflowArtifact />,
    },
    {
      id: "velocity-delta",
      title: "Feature delivery time: before and after restructure",
      caption: "Concept-to-handoff time across representative feature types. Mobile plan management, billing widget and settings went from 2 to 3 days to under 1 day. Average reduction of 50% across the team.",
      component: <VelocityDeltaArtifact />,
    },
  ],
  next: { slug: "predictive-support-hub", title: "Predictive Support Hub" },
};

export default function DaneTelecom() {
  return <CaseLayout data={data} />;
}

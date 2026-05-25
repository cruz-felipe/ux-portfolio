import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import { TokenArchitectureArtifact, SandboxWorkflowArtifact, VelocityDeltaArtifact } from "@/components/case-study/DaneArtifacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dane Telecom — Felipe Cruz",
  description: "Design system restructure for a global telecom. 50% faster handoff, 32% velocity boost.",
};

const data: CaseStudyData = {
  index: "01",
  title: "Dane Telecom",
  tagline: "The design system was a library, but we needed an architecture. Every complex interaction was being solved from scratch, by different designers, in different ways. I rebuilt the foundation — and the process around it.",
  role: "Senior Product Designer",
  context: "The product team was mid-update on both the B2C portal and the eCare platform. A design system existed. The problem was that it only covered the simple cases. I was brought in to restructure the system and establish the governance that would let it scale with the product roadmap — spending three months on-site in Copenhagen to do it.",
  year: "2023",
  metrics: [
    { value: "50%", label: "Faster handoff — from 2 weeks to 1 week consistently" },
    { value: "32%", label: "Velocity boost — concept production from 2–3 days to 4 hours" },
    { value: "3mo", label: "On-site in Copenhagen leading the restructure" },
  ],
  sections: [
    {
      title: "The problem underneath the problem",
      body: [
        "Four product designers from my team were producing concepts for the eCare platform while two UI designers from the client maintained the system separately. The system existed as a robust component library. What it lacked was structure, process and governance.",
        "There was no documentation, no decision logic, no way to predict what the system would need to support next. Different designers were solving similar problems in different ways. Workshops ran to define requirements, then two or more days producing concepts, then more workshops to validate, then revisions before anything reached handoff.",
        "Nobody had mapped what the product roadmap would demand from the system in the next quarter. Without that visibility, every complex new feature became designed locally, never available to the next designer who faced the same problem.",
      ],
    },
    {
      title: "The decision that changed the project",
      body: [
        "I requested a direct alignment with the product team to understand the roadmap priority. That conversation was the turning point. With visibility into what was coming, we could plan the system proactively instead of reacting feature by feature.",
        "From that point, the work ran on two tracks in parallel: restructuring the existing system and building ahead of the roadmap. We adopted MUI's token architecture as a starting point — a deliberate choice to save time rather than build from zero.",
        "Figma variables were mapped to the production codebase via Code Connect, making design tokens the shared language between Figma and engineering.",
      ],
    },
    {
      title: "Sandbox to master",
      body: [
        "When a new feature required a component that didn't exist in the system, designers built it locally for that feature first. The UX designers, who had direct visibility into the product roadmap, would assess whether that component had reuse potential across the platform.",
        "If it did, it was documented and promoted to the master library. If it was specific to one context, it stayed local and didn't create permanent debt in the shared system. Engineering was not part of this decision. Component governance was a design responsibility. The criteria were simple: does this solve a problem that will appear again?",
      ],
    },
    {
      title: "Doing this without breaking what was running",
      body: [
        "The hardest constraint was that the product was live and delivering. We couldn't restructure the system in one move — every change had to be batched carefully to avoid disrupting features and handoffs already in progress.",
        "We worked in incremental batches, validating each change before moving to the next. This taught me something I now apply to every system project: the sequencing of a restructure matters as much as its architecture. A correct system that breaks ongoing work is not a solution.",
        "Being on-site for three months changed the quality of collaboration in ways remote work couldn't have replicated. Working directly alongside the client's designers and product team gave me a ground-level understanding of how they made decisions, what they trusted, and where the real friction was.",
      ],
    },
  ],
  artifacts: [
    {
      id: "token-architecture",
      title: "Token architecture — before and after",
      caption: "Left: fragmented component ecosystem with no shared foundation. Right: three-level token hierarchy mapped to production codebase via Code Connect.",
      component: <TokenArchitectureArtifact />,
    },
    {
      id: "sandbox-workflow",
      title: "Sandbox to master governance workflow",
      caption: "New components built locally first, then evaluated for reuse potential. Promotion to master is a design decision — not an engineering one.",
      component: <SandboxWorkflowArtifact />,
    },
    {
      id: "velocity-delta",
      title: "Feature delivery time — before and after restructure",
      caption: "Illustrative comparison of concept-to-handoff time across representative feature types. Average reduction of 50% post-restructure.",
      component: <VelocityDeltaArtifact />,
    },
  ],
  next: {
    slug: "predictive-support-hub",
    title: "Predictive Support Hub",
  },
};

export default function DaneTelecom() {
  return <CaseLayout data={data} />;
}

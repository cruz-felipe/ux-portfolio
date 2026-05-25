import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import { ConsolidationMapArtifact, CognitiveLoadArtifact, AIOrchestrationArtifact } from "@/components/case-study/SupportHubArtifacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictive Support Hub — Felipe Cruz",
  description: "32 tools consolidated into one AI workspace. AHT dropped from 12 minutes to 3.",
};

const data: CaseStudyData = {
  index: "02",
  title: "Predictive Support Hub",
  tagline: "3,000 support agents were navigating 32 legacy tools on every call. What looked like a UX problem was an infrastructure problem wearing a UX mask. The solution was not a better interface. It was eliminating the reason the interface was so complex to begin with.",
  role: "End-to-end UX Strategy",
  context: "I was brought in to redesign the support experience for a global telecom with 3,000 agents across multiple countries. The audit revealed that every customer call required agents to context-switch across an average of 32 separate legacy tools to find billing history, technical data, and open tickets. There was no single source of truth.",
  year: "2022",
  metrics: [
    { value: "70%", label: "AHT reduction — from 12 minutes to 3 minutes per call" },
    { value: "32→1", label: "Legacy tools consolidated into a single intelligent workspace" },
    { value: "<½d", label: "New agent onboarding — down from 3 full days" },
  ],
  sections: [
    {
      title: "Into the field",
      body: [
        "I conducted remote research sessions with agents in Egypt and Jamaica, observing their screens and listening to live calls to understand the real texture of the problem. Then I went on-site to call centers in New York and Texas to shadow agents in person.",
        "What became clear across every location was that the tools were actively fighting each other. Agents kept sticky notes next to their monitors listing which tool held which type of data. The learning curve for new agents was months, not weeks — because the institutional knowledge lived in those sticky notes, not in the system.",
      ],
    },
    {
      title: "The intelligence layer",
      body: [
        "The solution was a predictive support hub — a single AI-integrated workspace that replaced the 32-tool ecosystem. Three core capabilities drove the reduction in handle time.",
        "Auto-identification: on call connection, the system identified the customer and surfaced their full interaction history automatically. Contextual scripting: the AI monitored the conversation in real time and surfaced relevant data and suggested responses without the agent having to search. Live solutions: rather than presenting a plan for the agent to read aloud, the system surfaced the resolution directly in the session interface.",
      ],
    },
    {
      title: "Shifting the root of the problem",
      body: [
        "By shifting the root of data retrieval from the agent to the system, we freed the agent to focus entirely on the customer. Average Handle Time dropped from 12 to 3 minutes.",
        "Onboarding friction dropped in proportion, because the interface now held the institutional knowledge that previously lived in sticky notes and three-day training sessions. Eliminated data loss between workflows — the integration removed the manual copy-paste cycles agents relied on to move data between legacy systems, reducing both errors and call time.",
      ],
    },
  ],
  artifacts: [
    {
      id: "consolidation-map",
      title: "32-tool ecosystem to single workspace",
      caption: "Abstract representation of the consolidation — 32 disconnected legacy tools replaced by a three-layer AI workspace. Not a reproduction of proprietary screens.",
      component: <ConsolidationMapArtifact />,
    },
    {
      id: "cognitive-load",
      title: "Agent cognitive load — context switches per call",
      caption: "Before: 13 context switches per call, 12 min average. After: 0 context switches, 3 min average. Research conducted across 4 locations in 2 countries.",
      component: <CognitiveLoadArtifact />,
    },
    {
      id: "ai-orchestration",
      title: "AI orchestration architecture",
      caption: "Data sources feeding real-time inference engine, surfacing three agent-facing layers. The agent's job shifts from data retrieval to customer focus.",
      component: <AIOrchestrationArtifact />,
    },
  ],
  next: {
    slug: "b2b-sales-rescue",
    title: "B2B Sales Rescue",
  },
};

export default function PredictiveSupportHub() {
  return <CaseLayout data={data} />;
}

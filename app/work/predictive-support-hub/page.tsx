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
  year: "2022",
  roleDetail: "End-to-end ownership from field research and systemic audit to AI orchestration design and agent workflow redesign. I reframed the problem and led the solution architecture.",
  impactSummary: "AHT reduced from 12 minutes to 3. 32 legacy tools replaced by one intelligent workspace. New agent onboarding cut from 3 days to under half a day.",
  context: "I was brought in to redesign the support experience for a global telecom with 3,000 agents across multiple countries. The initial brief was UX improvement. What the audit revealed was that every customer call required agents to context-switch across an average of 32 separate legacy tools to find billing history, technical data and open tickets. There was no single source of truth. The problem was not the interface.",
  metrics: [
    { value: "70%", label: "AHT reduction. From 12 minutes to 3 per call" },
    { value: "32→1", label: "Legacy tools consolidated into one intelligent workspace" },
    { value: "3→½d", label: "New agent onboarding time" },
  ],
  sections: [
    {
      title: "Into the field",
      body: [
        "I conducted remote research sessions with agents in Egypt and Jamaica, observing their screens and listening to live calls. Then I went on-site to call centers in New York and Texas to shadow agents in person. That choice mattered. Remote observation shows you what people do. On-site observation shows you why.",
        "What became clear across every location was that the tools were actively fighting each other. Agents kept sticky notes next to their monitors listing which tool held which type of data. The institutional knowledge that should have lived in the system lived on paper instead. New agents spent months just learning the map.",
        "When I brought this back to the client, the initial reaction was to request a better search interface. I pushed back. A better search across 32 disconnected tools was still 32 disconnected tools. The problem was architectural, and solving it at the interface level would not change the outcome for agents or customers.",
      ],
    },
    {
      title: "Reframing the problem",
      body: [
        "Getting the client to accept an architectural solution instead of a UI improvement was the hardest part of this project. The engineering and product teams had years of investment in the existing tool stack. A consolidation conversation threatened those decisions.",
        "The approach was to make the cost of the current architecture visible in business terms. Every minute of unnecessary AHT, multiplied by 3,000 agents and thousands of calls per day, had a calculable cost. Framing the solution as a business infrastructure investment rather than a design preference changed the conversation.",
        "Once the reframe landed, the engineering team became partners rather than blockers. They had context on which legacy tools could be retired, which data sources could be unified and where the integration complexity would actually sit.",
      ],
    },
    {
      title: "The intelligence layer",
      body: [
        "The solution was a predictive support hub: a single AI-integrated workspace that replaced the 32-tool ecosystem. Three capabilities drove the reduction in handle time.",
        "Auto-identification: on call connection, the system identified the customer and surfaced their full interaction history automatically. Contextual scripting: the AI monitored the conversation in real time and surfaced relevant data and suggested responses without the agent having to search. Live resolution: the system surfaced the solution directly in the session interface rather than presenting a script for the agent to read aloud.",
        "By shifting the root of data retrieval from the agent to the system, we freed the agent to focus entirely on the customer. The institutional knowledge that had lived in sticky notes was now embedded in the interface itself.",
        "If I were doing this again, I would have pushed harder for a pilot with a single agent cohort before the full rollout. The system worked, but a controlled pilot would have surfaced edge cases earlier and given us better data for the executive conversation about full deployment.",
      ],
    },
  ],
  artifacts: [
    {
      id: "consolidation-map",
      title: "32-tool ecosystem to single workspace",
      caption: "Abstract representation of the consolidation. 32 disconnected legacy tools replaced by a three-layer AI workspace. Each layer corresponds to a stage in the agent workflow: identify, assist, resolve.",
      component: <ConsolidationMapArtifact />,
    },
    {
      id: "cognitive-load",
      title: "Agent cognitive load per call",
      caption: "Before: 13 context switches per call, 12 minute average, institutional knowledge on sticky notes. After: zero context switches, 3 minute average, AI surfaces all relevant data. Research conducted across 4 locations in 2 countries.",
      component: <CognitiveLoadArtifact />,
    },
    {
      id: "ai-orchestration",
      title: "AI orchestration architecture",
      caption: "Data sources feeding a real-time inference engine, surfacing three agent-facing layers. The architectural shift: data retrieval moves from the agent to the system. The agent's job becomes the customer.",
      component: <AIOrchestrationArtifact />,
    },
  ],
  next: { slug: "b2b-sales-rescue", title: "B2B Sales Rescue" },
};

export default function PredictiveSupportHub() {
  return <CaseLayout data={data} />;
}

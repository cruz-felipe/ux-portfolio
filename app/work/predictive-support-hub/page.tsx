import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import { ConsolidationMapArtifact, CognitiveLoadArtifact, AIOrchestrationArtifact } from "@/components/case-study/SupportHubArtifacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictive Support Hub Felipe Cruz",
  description: "32 tools consolidated into one AI workspace. AHT dropped from 10 minutes to 3.",
};

const data: CaseStudyData = {
  index: "02",
  title: "Predictive Support Hub",
  tagline: "3,000 support agents were navigating 32 legacy tools on every call. What looked like a UX problem was an infrastructure problem wearing a UX mask. The solution was not a better interface. It was eliminating the reason the interface was so complex to begin with.",
  role: "End-to-end UX Strategy",
  location: "On-site, New York & Texas",
  year: "2022",
  roleDetail: "End-to-end ownership from field research and systemic audit to AI orchestration design and agent workflow redesign. I reframed the problem and led the solution architecture.",
  impactSummary: "AHT reduced from 10 minutes to 3. 32 legacy tools replaced by one intelligent workspace. New agent onboarding cut from 3 days to under half a day.",
  context: "I was brought in to redesign the support experience for a global telecom with 3,000 agents across multiple countries. The initial brief was UX improvement. What the audit revealed was that every customer call required agents to context-switch across an average of 32 separate legacy tools to find billing history, technical data and open tickets. There was no single source of truth. The problem was not the interface.",
  metrics: [
    { value: "70%", label: "AHT reduction. From 10 minutes to 3 per call" },
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
        "My first presentation of the problem was rejected. The initial response was that a better search interface across the existing tools would solve it. I disagreed and said so directly: a better search across 32 disconnected tools was still 32 disconnected tools. The problem was not findability. It was that the information lived in the wrong place.",
        "The second conversation worked because I changed the frame. I built a cost model: average AHT multiplied by call volume multiplied by 3,000 agents, compared against the projected cost of consolidation. The number made the architectural investment look cheap. Once the conversation was about infrastructure cost rather than design preference, the engineering team stopped being blockers and became partners. They knew exactly which legacy tools could be retired and where the real integration complexity sat.",
      ],
    },
    {
      title: "The intelligence layer",
      body: [
        "The workspace was built on three layers, each corresponding to a stage in the agent workflow. Auto-identification surfaced the customer's full history on call connection without any manual lookup. Contextual scripting monitored the conversation in real time and pushed relevant data to the agent without them having to ask for it. Live resolution put the answer directly in the session interface rather than handing the agent a script to read.",
        "Each layer addressed a specific source of handle time. Auto-identification removed the initial lookup. Contextual scripting removed the mid-call search. Live resolution removed the end-of-call manual documentation. The three together dropped AHT from 10 minutes to 3.",
        "The design problem I underestimated was error states. When the AI surfaced the wrong context, agents had no clear way to override it without losing their place in the call. We caught this in testing but later than we should have. If I were doing this again I would have built explicit override controls into the first prototype rather than treating them as edge cases. The agents who struggled most with the new system were not the ones who found it complex. They were the ones who did not trust it.",
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
      caption: "Before: 13 context switches per call, 10 minute average, institutional knowledge on sticky notes. After: zero context switches, 3 minute average, AI surfaces all relevant data. Research conducted across 4 locations in 2 countries.",
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

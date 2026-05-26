import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictive Support Hub / Felipe Cruz",
  description: "32 tools consolidated into one AI workspace. AHT dropped from 10 minutes to 3.",
};

const data: CaseStudyData = {
  index: "01",
  title: "Predictive Support Hub",
  tagline: "3,000 support agents were navigating 32 legacy tools on every call. What looked like a UX problem was an infrastructure problem wearing a UX mask. The solution was not a better interface. It was eliminating the reason the interface was so complex to begin with.",
  role: "End-to-end UX Strategy",
  location: "On-site, New York & Texas",
  year: "2022",
  roleDetail: "End-to-end ownership from field research and systemic audit to AI orchestration design and agent workflow redesign. I reframed the problem and led the solution architecture.",
  impactSummary: "AHT reduced from 10 minutes to 3. 32 legacy tools replaced by one intelligent workspace. New agent onboarding cut from 3 days to under half a day.",
  context: "I was brought in to redesign the support experience for a global telecom with 3,000 agents across multiple countries. The initial brief was UX improvement. What the audit revealed was that every customer call required agents to context-switch across an average of 32 separate legacy tools to find billing history, technical data and open tickets. There was no single source of truth. The problem was not the interface.",
  metrics: [
    { value: "70%", label: "AHT reduction. From 10 minutes to 3 per call." },
    { value: "32→1", label: "Legacy tools consolidated into one intelligent workspace." },
    { value: "3→½d", label: "New agent onboarding time." },
  ],
  sections: [
    {
      title: "What existed before",
      body: [
        "Agents navigated between dozens of disconnected legacy systems on every call. Billing lived in one tool. Technical data in another. Tickets in a third. There was no shared context, no single customer view and no way to act without opening another window. Institutional knowledge lived on sticky notes next to monitors.",
        "The two screens below are from the legacy environment. One is a raw account management tool that agents used to look up customer data dense, technical, built for system administrators rather than support agents. The other is a bill detail view accessed through a separate portal. These are two of the 32 tools an agent was expected to navigate mid-call.",
      ],
      screens: [
        { src: "/hub/before2.png", caption: "Legacy account management tool. Agent lookup for customer data built for sysadmins, not support agents on a live call." },
        { src: "/hub/before1.png", caption: "Legacy bill detail view accessed through a separate portal. One of many tools an agent toggled between per call." },
      ],
    },
    {
      title: "Into the field",
      body: [
        "I conducted remote research sessions with agents in Egypt and Jamaica, observing their screens and listening to live calls. Then I went on-site to call centers in New York and Texas to shadow agents in person. Remote observation shows you what people do. On-site observation shows you why.",
        "What became clear across every location was that the tools were actively fighting each other. The institutional knowledge that should have lived in the system lived on paper instead. New agents spent months just learning the map. When I brought this back to the client, the picture was new to them. They understood the fragmentation but had not seen it mapped as a cost. That conversation reframed the project from interface improvement to infrastructure investment.",
      ],
    },
    {
      title: "Reframing the problem",
      body: [
        "My first presentation was met with scepticism. The client understood the fragmentation but was not yet convinced that consolidation was the right investment. I changed the frame: instead of arguing about interface quality, I built a cost model. Average AHT multiplied by call volume multiplied by 3,000 agents, compared against the projected cost of consolidation. The infrastructure investment started to look cheap.",
        "The second conversation worked because I changed the frame. I built a cost model: average AHT multiplied by call volume multiplied by 3,000 agents, compared against the projected cost of consolidation. The number made the architectural investment look cheap. Once the conversation was about infrastructure cost rather than design preference, the engineering team stopped being blockers and became partners.",
      ],
    },
    {
      title: "The unified workspace",
      body: [
        "The workspace replaced all 32 tools with three layers. Auto-identification surfaced the customer's full history on call connect name, account, interaction history, open tickets, all without the agent searching. Contextual scripting monitored the call in real time and pushed relevant data and suggested responses to the agent. Live resolution surfaced the answer directly in the session interface.",
        "The auto-identification panel is shown below the first screen an agent sees when a call connects. By the time they say hello, they already know who they are talking to, why that customer likely called and what the last three agents did. Below that, the full unified workspace: one interface, all context, no switching.",
      ],
      screens: [
        { src: "/hub/auto-id.png", caption: "Auto-identification panel on call connect. Customer history, IVR path and authentication surfaced before the agent speaks." },
        { src: "/hub/workspace.png", caption: "Unified agent workspace. Customer context, suggested interaction, services, devices and billing one screen, mid-call." },
        { src: "/hub/workspace2.png", caption: "Workspace with bill payment modal active. Action taken without leaving the interface." },
      ],
    },
    {
      title: "What I would do differently",
      body: [
        "If I were doing this again I would have pushed harder for a pilot with a single agent cohort before the full rollout. The system worked, but a controlled pilot with a defined group would have surfaced edge cases earlier and given us stronger data for the internal conversation about full deployment.",
      ],
    },
  ],
  artifacts: [],
};

export default function PredictiveSupportHub() {
  return <CaseLayout data={data} />;
}

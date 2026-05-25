import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import { HeuristicMatrixArtifact, FlowCompressionArtifact, ResearchMethodologyArtifact } from "@/components/case-study/SalesArtifacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Sales Rescue — Felipe Cruz",
  description: "7 tools to close one deal. Collapsed to a 3-step flow. 75% quote acceleration.",
};

const data: CaseStudyData = {
  index: "03",
  title: "B2B Sales Rescue",
  tagline: "Sales agents needed 7 tools and 3 days of training to close one deal. I joined after two releases had already shipped without a designer. The most important design decision on this project was knowing what not to build.",
  role: "End-to-end UX Strategy",
  context: "I joined this project after the first two releases had already shipped without a designer. The result was a fragmented quoting system that forced Sales Agents to navigate 7 different tools to generate a single customer proposal. Agents handled up to 10 proposals per day. The math didn't add up for a productive workday.",
  year: "2023",
  metrics: [
    { value: "75%", label: "Quote acceleration — from 1 hour to 15 minutes per proposal" },
    { value: "7→1", label: "Tools consolidated into a single unified flow" },
    { value: "83%", label: "Faster onboarding — from 3 days to under half a day" },
  ],
  sections: [
    {
      title: "Evidence-based prioritization",
      body: [
        "We proposed and led a one-month on-site UX study in São Paulo. We embedded. 37 interviews, 25 usability tests, 20 shadowing sessions with agents on the floor.",
        "What we found: the system was over-flexible. It gave users too many ways to start a flow, which paralyzed newcomers. It also surfaced features requested by stakeholders that agents had never once used in production.",
        "With a backlog of 32+ documented problems, the challenge was convincing management to pause for a redesign. I built a Heuristic Impact Matrix to cross-reference three dimensions: criticality (how directly is this blocking a sale?), effort (engineering days required), and type (visual tweak or complete flow rework?).",
      ],
    },
    {
      title: "Making design debt legible to executives",
      body: [
        "The matrix was presented to the executive team as a strategic roadmap. It secured the green light by proving we would tackle high-impact, low-effort wins first.",
        "The matrix gave executives a language to prioritize design debt as business risk, not aesthetic preference. That framing is what made the conversation work. We weren't asking for time to make things look better — we were showing which problems were costing sales.",
      ],
    },
    {
      title: "The 3-step express flow",
      body: [
        "We replaced the 7-tool labyrinth with a 3-step Express Flow for standard proposals. Manager approvals were automated. Installation tracking was built into the flow. Manual email chains were eliminated.",
        "We also rebranded the interface to match the customer's identity. That decision significantly increased sales team buy-in and accelerated platform adoption beyond what the usability improvements alone would have achieved.",
        "The most important design decision on this project was knowing what not to build. Negotiating feature scope with stakeholders and proving through the matrix why certain requests had to wait is what allowed the MVP to land with adoption.",
      ],
    },
  ],
  artifacts: [
    {
      id: "heuristic-matrix",
      title: "Heuristic Impact Matrix",
      caption: "32 documented problems plotted by criticality vs engineering effort. High-impact, low-effort quadrant formed the MVP roadmap presented to executives.",
      component: <HeuristicMatrixArtifact />,
    },
    {
      id: "flow-compression",
      title: "7-tool flow to 3-step express flow",
      caption: "Before: 7 disconnected tools, manual re-entry, email approvals, no tracking. After: 3-step unified flow with automated approvals and built-in install tracking.",
      component: <FlowCompressionArtifact />,
    },
    {
      id: "research-methodology",
      title: "1-month on-site research — São Paulo",
      caption: "37 interviews, 25 usability tests, 20 shadow sessions. Research proved which features were blocking sales vs which were stakeholder assumptions.",
      component: <ResearchMethodologyArtifact />,
    },
  ],
  next: {
    slug: "dane-telecom",
    title: "Dane Telecom",
  },
};

export default function B2BSalesRescue() {
  return <CaseLayout data={data} />;
}

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
  year: "2023",
  location: "On-site, São Paulo",
  roleDetail: "Owned the full design process from embedded field research and stakeholder alignment through interaction design, usability testing and executive prioritization. I led the research study and built the prioritization framework that secured leadership buy-in.",
  impactSummary: "Time-to-proposal reduced from 1 hour to 15 minutes. 7 tools replaced by a 3-step flow. New agent onboarding cut from 3 days to under half a day.",
  context: "I joined this project after the first two releases had already shipped without a designer. The result was a fragmented quoting system that forced Sales Agents to navigate 7 different tools to generate a single customer proposal. Agents handled up to 10 proposals per day. The math did not add up for a productive workday.",
  metrics: [
    { value: "75%", label: "Quote acceleration. From 1 hour to 15 minutes per proposal" },
    { value: "7→1", label: "Tools replaced by a single unified flow" },
    { value: "83%", label: "Faster onboarding. From 3 days to under half a day" },
  ],
  sections: [
    {
      title: "Getting into the problem",
      body: [
        "We proposed and led a one-month on-site UX study in São Paulo. 37 interviews, 25 usability tests, 20 shadowing sessions with agents on the floor. The research was not requested. We proposed it because the existing releases had been built on assumptions, and no amount of interface work would fix a system built around the wrong model.",
        "What we found: the system was over-flexible. It gave users too many ways to start a flow, which paralyzed newcomers. It also surfaced features requested by stakeholders that agents had never once used in production. Every unused feature was a decision that cost engineering time and added cognitive load to the people who had to learn the tool.",
      ],
    },
    {
      title: "Making design debt legible to executives",
      body: [
        "With a backlog of 32 documented problems, the challenge was convincing management to pause for a redesign. Projects already had two releases behind them. The instinct was to keep shipping.",
        "I built a Heuristic Impact Matrix to cross-reference three dimensions: criticality (how directly is this blocking a sale?), effort (engineering days required) and type (visual fix or complete flow rework). Plotted against each other, the data made something visible that had been invisible in the backlog: the highest-impact problems required relatively low engineering effort. The business case for stopping and redesigning was stronger than the case for continuing.",
        "We presented this to the executive team as a strategic roadmap. It secured the green light. The matrix gave executives a language to talk about design debt as business risk, not aesthetic preference. That framing is what made the conversation work.",
      ],
    },
    {
      title: "The 3-step express flow",
      body: [
        "We replaced the 7-tool labyrinth with a 3-step Express Flow for standard proposals. Manager approvals were automated. Installation tracking was built into the flow. Manual email chains were eliminated.",
        "We also rebranded the interface to match the customer's identity. That decision significantly increased sales team buy-in and accelerated platform adoption beyond what the usability improvements alone would have achieved. Sometimes the right UX decision is not about task efficiency.",
        "The most important design decision on this project was knowing what not to build. Negotiating feature scope with stakeholders and proving through the matrix why certain requests had to wait is what allowed the MVP to land with adoption. A complete solution that nobody uses is not a solution.",
        "If I were doing this again, I would have rebranded earlier in the process and used it as a tool for stakeholder alignment from the start. The visual identity shift changed how the sales team talked about the product to management, which made every subsequent conversation easier.",
      ],
    },
  ],
  artifacts: [
    {
      id: "heuristic-matrix",
      title: "Heuristic Impact Matrix",
      caption: "32 documented problems plotted by criticality vs engineering effort. The high-impact, low-effort quadrant formed the MVP roadmap presented to executives. The matrix made design debt legible as business risk.",
      component: <HeuristicMatrixArtifact />,
    },
    {
      id: "flow-compression",
      title: "7-tool flow to 3-step express flow",
      caption: "Before: 7 disconnected tools, manual data re-entry, email approvals, no tracking, 1 hour per proposal. After: 3-step unified flow with automated approvals and built-in install tracking, 15 minutes.",
      component: <FlowCompressionArtifact />,
    },
    {
      id: "research-methodology",
      title: "1-month on-site research, São Paulo",
      caption: "37 interviews, 25 usability tests, 20 shadow sessions. Research identified unused features, flow entry paralysis and the gap between stakeholder assumptions and agent reality.",
      component: <ResearchMethodologyArtifact />,
    },
  ],
  next: { slug: "dane-telecom", title: "Dane Telecom" },
};

export default function B2BSalesRescue() {
  return <CaseLayout data={data} />;
}

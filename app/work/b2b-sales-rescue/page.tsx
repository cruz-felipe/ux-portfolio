import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Sales Rescue / Felipe Cruz",
  description: "7 tools to close one deal. Collapsed to a 3-step flow. 75% quote acceleration.",
};

const data: CaseStudyData = {
  index: "02",
  title: "B2B Sales Rescue",
  tagline: "Two releases had shipped without a designer. When we arrived and said parts needed reworking, the client's management pushed back hard. The work we had done to get there was the only thing that made the conversation possible.",
  role: "End-to-end UX Strategy",
  year: "2023",
  location: "On-site, São Paulo",
  roleDetail: "Owned the full design process from embedded field research and stakeholder alignment through interaction design, usability testing and executive prioritization. Led a one-month on-site research study and built the prioritization framework that secured leadership buy-in.",
  impactSummary: "Time-to-proposal reduced from 1 hour to 15 minutes. 7 tools replaced by a 3-step flow. New agent onboarding cut from 3 days to under half a day.",
  context: "I joined this project after two releases had already shipped without a designer. The result was a fragmented quoting system that forced sales agents to navigate 7 different tools to generate a single customer proposal. Agents handled up to 10 proposals per day. The math did not add up.",
  metrics: [
    { value: "75%", label: "Quote acceleration. From 1 hour to 15 minutes per proposal." },
    { value: "7→1", label: "Tools replaced by a single unified flow." },
    { value: "83%", label: "Faster onboarding. From 3 days to under half a day." },
  ],
  sections: [
    {
      title: "Getting into the problem",
      body: [
        "We proposed and led a one-month on-site research study in São Paulo. 37 interviews, 25 usability tests, 20 shadow sessions with agents on the floor. The research was not in the brief. We proposed it because the existing releases had been built on assumptions, and no amount of interface work would fix a system built around the wrong model.",
        "The most significant finding did not come from the interviews. It came from watching agents work. The interviews told us what agents thought they did. The shadow sessions showed us what they actually did: they captured all the information for a quotation before opening the system, often in notes or spreadsheets, and then entered it manually. The system had been designed around the assumption that agents would configure products as they went. Almost no one did.",
        "The second finding was harder to bring back. Several features that management considered important had near-zero usage in the field. Some agents did not know what they were. Those features had required significant design and development time internally. Surfacing that data required careful framing.",
      ],
    },
    {
      title: "Making the case for rework",
      body: [
        "The client's management pushed back immediately. They had invested in two releases. Having an external team arrive and say parts needed reworking was not a comfortable conversation.",
        "We scored every finding on two axes: criticality by Nielsen's severity scale, and effort by design and development cost combined. The output was not a list of problems it was a roadmap argument. Low-effort, high-criticality fixes first, slotted into the existing release schedule so the rework did not require stopping. The constraint that turned the room was not the severity scores. It was the framing that the system had to keep running. We were not proposing a replacement. We were proposing fixes that could be absorbed into releases that were already scheduled. Management agreed to incremental changes over a reviewed and approved roadmap. That distinction mattered more than any individual finding. The research study we ran was also used to structure the delivery roadmap shown below.",
      ],
      screens: [
        { src: "/b2b/roadmap.png", caption: "Research-to-delivery roadmap. Planning, top-case inputs by segment, and documentation phases structured around what the field study revealed." },
      ],
    },
    {
      title: "The 3-step express flow",
      body: [
        "The shadow sessions had shown that most agents used a small set of predefined configurations. Only major clients required custom plans. The product had been designed for the complex case and applied it to everyone. We designed a 3-step express flow for the standard case: client and product selection, pricing and automated approval, contract and install scheduling.",
        "The three steps are shown below. Step 1 handles market selection and product catalog. Step 2 is the quotation view where pricing is calculated and approval initiated. Step 3 handles geographic and address-level configuration. Each step replaced what previously required switching between separate tools.",
      ],
      screens: [
        { src: "/b2b/step1.png", caption: "Step 1: Market and product selection. Family and sub-family catalog with add-to-cart. Replaces manual product lookup across separate tools." },
        { src: "/b2b/step2.png", caption: "Step 2: Quotation view. Products grouped by location, pricing calculated in real time. Approval initiated from within the same screen." },
        { src: "/b2b/step3.png", caption: "Step 3: Geographic configuration. Address-level product assignment with on-net technology details surfaced inline." },
      ],
    },
    {
      title: "What I would do differently",
      body: [
        "I would have pushed for an MVP scope at the start rather than delivering a prioritized list of improvements. The matrix was the right tool for sequencing. But sequencing a long list is still a long list. A defined MVP with a subset of the highest-impact fixes would have been easier for the client to commit to and faster to demonstrate results.",
      ],
    },
  ],
  artifacts: [],
};

export default function B2BSalesRescue() {
  return <CaseLayout data={data} />;
}

import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vocabulary / Felipe Cruz",
  description: "A flashcard app built for how I actually learn. Shipped and used daily.",
};

const BASE = "/vocabulary";

const data: CaseStudyData = {
  index: "05",
  title: "Vocabulary",
  tagline: "Every flashcard app I tried was built around someone else's curriculum. I wanted one thing: a fast, honest way to learn words. So I built\u00a0it.",
  role: "Designer and Developer",
  location: "Personal project",
  year: "2025",
  roleDetail: "Solo product. Designed and built in Next.js with the Claude API. Shipped to a private URL, used daily by me and a small group of friends learning Spanish, Russian, French and Italian.",
  context: "I was using Duolingo to study Spanish and Russian. It works for gamified progress but not for what I actually needed: sitting down with a set of words and drilling them until they stick. Every dedicated flashcard app I found had too much friction, too much structure I didn't ask for, or none of the vocabulary I needed for work. Building my own was faster than settling.",
  metrics: [],
  sections: [
    {
      title: "Two modes, one honest reason",
      body: [
        "I learn by seeing the Portuguese word and trying to produce the translation. A friend learns the opposite he sees the translated word and types the original. Neither method is better. They are different mental models for how vocabulary anchors itself.",
        "Recognition mode shows the source word and flips to reveal the translation. Recall mode shows the translated word and requires you to type the original. Recall is harder because typing forces active retrieval rather than passive recognition. The synonym layer exists because marking a valid synonym as wrong is counterproductive the app accepts it and notes the distinction.",
      ],
      narrowScreens: true,
      screens: [
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_22.png`, caption: "Home screen. Streak counter, continue prompt, language list with level gates." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_01.png`, caption: "Recognition mode. Portuguese word shown, tap to flip." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_06.png`, caption: "Card revealed. Translation on language-color background with usage example." },
      ],
    },
    {
      title: "Recall mode and feedback states",
      body: [
        "Correct answers turn the card border green. Wrong answers turn it red and show the correct form immediately. The cultural note appears in both cases context sticks regardless of whether you got it right.",
        "The category screen uses the language color as a full-bleed header, which acts as a persistent identifier. Spanish is red, Russian is blue, Italian is green. Switching languages does not require relearning the navigation.",
      ],
      narrowScreens: true,
      screens: [
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_31.png`, caption: "Recall mode. Spanish word shown, type the Portuguese equivalent." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_37.png`, caption: "Correct. Green border, cultural tip surfaces." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_53.png`, caption: "Wrong. Red border, correct form shown with context." },
      ],
    },
    {
      title: "Tech category and AI layer",
      body: [
        "Standard language apps don't teach you how to say 'UX documentation' or 'Do you use Figma?' in Russian. I need that vocabulary for work. The tech category was built specifically for it and covers the same set across all four languages.",
        "Cultural tips are Claude-powered and opt-in. They surface usage context, register notes and memorable associations. The design decision: AI works at the edge as an enrichment layer, not as the core mechanic. Users who want to drill fast should not wait for or dismiss AI output. That distinction shapes how I think about AI integration in larger products too.",
      ],
      narrowScreens: true,
      screens: [
        { src: `/vocabulary/russian-category.png`, caption: "Russian category screen. Blue as the language identifier consistent across recognition and recall modes." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_21_04.png`, caption: "Russian tech card. Cyrillic, phonetic transcription, cultural note." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_22_05.png`, caption: "Recall mode, Russian tech. Correct answer with UX documentation context." },
      ],
    },
  ],
  artifacts: [],
  hideNda: true,
  wideHero: true,
};

export default function Vocabulary() {
  return <CaseLayout data={data} />;
}

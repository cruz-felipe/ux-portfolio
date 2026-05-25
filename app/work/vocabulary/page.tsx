import CaseLayout, { CaseStudyData } from "@/components/case-study/CaseLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vocabulary Felipe Cruz",
  description: "A flashcard app built for how I actually learn. Shipped and used daily.",
};

const BASE = "/vocabulary";

const data: CaseStudyData = {
  index: "06",
  title: "Vocabulary",
  tagline: "Every flashcard app I tried was built around streaks, gamification and someone else's curriculum. I wanted one thing: a fast, honest way to learn words. So I built it.",
  role: "Designer and Developer",
  location: "Personal project",
  year: "2025",
  roleDetail: "Solo product. Designed and built in Next.js with the Claude API. Shipped to a private URL, used daily by me and a small group of friends learning Spanish, Russian, French and Italian.",
  context: "I was using Duolingo to study Spanish and Russian. It works for gamified progress but does not work for what I actually needed sitting down with a set of words and drilling them until they stick. Every dedicated flashcard app I found had either too much friction, too much structure I did not ask for, or none of the specific vocabulary I needed for work. Building my own was faster than settling.",
  metrics: [],
  sections: [
    {
      title: "Home and language selection",
      body: [
        "The home screen is a streak counter, a continue prompt and a language list. Nothing else. Languages you have not unlocked yet are locked behind a level gate a small decision that keeps the first session from feeling overwhelming and gives returning users a clear sense of where they left off.",
        "The category screen opens with the language as a full-bleed header color, which doubles as an identifier Spanish is red, Russian is blue, Italian is green. The mode toggle in the top right switches between flashcard and ABC drill without losing your place.",
      ],
      screens: [
        { src: `${BASE}/Screenshot_2026-05-25_at_13_17_40.png`, caption: "Home screen. Streak, continue prompt, language list with lock state." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_22.png`, caption: "Home with active session. Continue CTA pulls you back to where you stopped." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_15.png`, caption: "Category screen for Spanish. Language color as header, mode toggle top right." },
      ],
    },
    {
      title: "Recognition mode",
      body: [
        "Recognition mode shows you the source word and asks you to recall the translation before flipping. The card flips to reveal the translation on the language color background, with a usage example and cultural context note below.",
        "After revealing, you self-report: I knew it, almost, or I did not know. That three-state feedback is more honest than binary right/wrong for a drill that does not require typed input.",
      ],
      screens: [
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_01.png`, caption: "Recognition mode. Portuguese word shown, tap to reveal translation." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_06.png`, caption: "Card flipped. Spanish translation on red background with usage example below." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_21_04.png`, caption: "Tech category, Russian. Card color is blue. Cultural context note included." },
      ],
    },
    {
      title: "Recall mode",
      body: [
        "Recall mode shows the translated word and asks you to type the original. This is the harder mode because typing forces active retrieval. A friend of mine learns better this way . He needs to produce the word, not just recognize it.",
        "Correct answers turn the card border green. Wrong answers turn it red and show the correct form in a highlight block below. The cultural note appears in both cases so the context sticks regardless of whether you got it right.",
      ],
      screens: [
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_31.png`, caption: "Recall mode. Spanish word shown, type the Portuguese equivalent." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_37.png`, caption: "Correct answer. Green border, cultural note appears, proceed to next." },
        { src: `${BASE}/Screenshot_2026-05-25_at_13_19_53.png`, caption: "Wrong answer. Red border, correct form shown in highlight block with context." },
      ],
    },
    {
      title: "Tech category",
      body: [
        "Standard language apps do not teach you how to say 'UX documentation' or 'Do you use Figma?' in Russian. I need that vocabulary for work and built the tech category specifically for it.",
        "The tech cards include phonetic transcription because Russian script is unfamiliar to most users at this level. The cultural note goes further than vocabulary it explains register and real usage context, like noting that 'Figma dominou o mercado russo, então a resposta é quase sempre sim.'",
      ],
      screens: [
        { src: `${BASE}/Screenshot_2026-05-25_at_13_22_05.png`, caption: "Recall mode, Russian tech. Correct answer, UX documentation example with context note." },
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

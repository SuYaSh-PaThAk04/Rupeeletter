// app/disclaimer/page.tsx
// (For Pages Router: pages/disclaimer.tsx)

import LegalLayout from "@/components/LegalLayout";

interface DisclaimerCard {
  icon: string;
  title: string;
  text: string;
}

const cards: DisclaimerCard[] = [
  {
    icon: "🚫",
    title: "Not Investment Advice",
    text: "Nothing on RupeeLetter should be construed as a recommendation to buy, sell, or hold any financial instrument or security.",
  },
  {
    icon: "📋",
    title: "Not SEBI Registered",
    text: "RupeeLetter is not a SEBI-registered investment advisor, portfolio manager, or research analyst.",
  },
  {
    icon: "🔍",
    title: "Do Your Own Research",
    text: "Users should conduct their own research or consult a qualified professional before making any investment decisions.",
  },
  {
    icon: "⏱️",
    title: "Data May Be Delayed",
    text: "Market data, prices, and information may be delayed, incomplete, or inaccurate. We do not guarantee real-time accuracy.",
  },
  {
    icon: "📰",
    title: "Third-Party Content",
    text: "Some content is sourced from third-party providers. RupeeLetter does not verify or endorse all third-party information.",
  },
  {
    icon: "⚡",
    title: "No Liability",
    text: "RupeeLetter shall not be liable for any financial losses, trading losses, or damages arising from use of this platform.",
  },
];

const points: string[] = [
  "Market news and analysis provided are for general informational purposes and do not account for your specific financial situation.",
  "Past performance of any security, market, or financial instrument mentioned is not indicative of future results.",
  "You are solely responsible for evaluating the credibility and suitability of any information before making financial decisions.",
  "Always consult with a SEBI-registered financial advisor before making investment or trading decisions.",
];

export default function Disclaimer() {
  return (
    <LegalLayout>
      <div className="max-w-4xl mx-auto px-6 py-16 pb-24">
        {/* Header */}
        <header className="border-b border-white/[0.06] pb-12 mb-12">
          <span className="inline-block bg-red-500/10 text-red-400 border border-red-500/30 rounded px-3 py-1 text-[10px] font-mono tracking-[2.5px] uppercase mb-5">
            Legal Notice
          </span>
          <h1 className="text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Disclaimer
          </h1>
          <p className="text-white/50 text-sm leading-relaxed">
            Please read this disclaimer carefully before using RupeeLetter.
          </p>
        </header>

        {/* Main Alert */}
        <div className="flex gap-4 items-start bg-red-500/[0.06] border border-red-500/25 border-l-2 border-l-red-500 rounded-lg px-6 py-5 mb-12">
          <span className="text-2xl shrink-0 mt-0.5">⚠️</span>
          <p className="text-white/75 text-base leading-[1.9]">
            RupeeLetter is a{" "}
            <strong className="text-white">financial news and information platform</strong>. All
            content is provided for{" "}
            <strong className="text-white">
              educational and informational purposes only
            </strong>{" "}
            and should not be considered investment advice.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">
                {card.title}
              </h3>
              <p className="text-white/50 text-[13px] leading-[1.75]">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Key Points */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Key Points</h2>
          <div className="divide-y divide-white/[0.06]">
            {points.map((pt, i) => (
              <div key={i} className="flex gap-5 items-start py-5">
                <span className="font-mono text-[11px] text-[#C9A84C] shrink-0 mt-[3px] tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white/65 text-[15px] leading-[1.85]">{pt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Acknowledgement */}
        <div className="bg-[#C9A84C]/[0.06] border border-[#C9A84C]/25 rounded-xl px-8 py-6 mb-16 text-center">
          <p className="text-[#C9A84C]/90 text-[14px] leading-[1.9] italic font-serif">
            By using RupeeLetter, you acknowledge that you have read and understood this
            disclaimer and agree to use the platform's content at your own discretion.
          </p>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/[0.06] text-center">
          <p className="text-white/20 text-xs font-mono">
            RupeeLetter Technologies Private Limited · Pune, Maharashtra, India
          </p>
        </footer>
      </div>
    </LegalLayout>
  );
}
// app/terms-and-conditions/page.tsx
// (For Pages Router: pages/terms-and-conditions.tsx)

import LegalLayout from "../components/LegalLayout";

interface ContentBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "notlist"; items: string[] };

interface Section {
  title: string;
  content: ContentBlock[];
}

const sections: Section[] = [
  {
    title: "Nature of Services",
    content: [
      {
        type: "p",
        text: "RupeeLetter is a financial news and information platform that provides market news updates, company announcements, earnings summaries, financial insights, AI-generated analytics, and market sentiment analysis.",
      },
      { type: "p", text: "All content is provided strictly for informational and educational purposes only." },
      {
        type: "notlist",
        items: [
          "Investment advice",
          "Financial advisory services",
          "Portfolio management services",
          "Legal or tax advice",
          "Brokerage or execution services",
        ],
      },
    ],
  },
  {
    title: "No Investment Advice Disclaimer",
    content: [
      {
        type: "p",
        text: "The information available on RupeeLetter is general in nature and does not consider your financial situation, risk profile, or objectives. It should not be interpreted as a recommendation to buy, sell, or hold any security.",
      },
      {
        type: "p",
        text: "Users are solely responsible for their investment decisions. You should consult a registered financial advisor, SEBI-registered intermediary, or qualified professional before making financial decisions.",
      },
    ],
  },
  {
    title: "Content Sources & Accuracy",
    content: [
      {
        type: "p",
        text: "Content on RupeeLetter may be sourced from third-party news providers, publicly available market data, AI tools, and financial APIs. While we strive for accuracy and timeliness, we do not guarantee accuracy, completeness, or real-time correctness.",
      },
      {
        type: "p",
        text: "Market data may be delayed. RupeeLetter shall not be liable for any losses arising from reliance on the Platform's content.",
      },
    ],
  },
  {
    title: "User Responsibilities",
    content: [
      { type: "p", text: "By using RupeeLetter, you agree to:" },
      {
        type: "list",
        items: [
          "Use the Platform only for lawful purposes",
          "Not reverse engineer, scrape, or copy proprietary data",
          "Not disrupt or interfere with the Platform's functionality",
          "Not misuse automated systems or bots to extract data",
          "Understand that financial markets involve risk",
        ],
      },
    ],
  },
  {
    title: "Account Registration",
    content: [
      {
        type: "p",
        text: "If you create an account, you must provide accurate and truthful information, maintain account confidentiality, and immediately notify us of unauthorized access.",
      },
      {
        type: "p",
        text: "We reserve the right to suspend or terminate accounts that violate these Terms.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      {
        type: "p",
        text: "All Platform elements including branding, logo, app design, AI systems, UI/UX, and written content are owned by RupeeLetter and protected under applicable intellectual property laws.",
      },
      {
        type: "p",
        text: "Users may not reproduce, distribute, or commercially exploit content without written permission.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      {
        type: "p",
        text: "To the fullest extent permitted by law, RupeeLetter shall not be liable for financial losses, trading losses, indirect or consequential damages, data inaccuracies, service interruptions, or technical failures.",
      },
      { type: "p", text: "Use of the Platform is at your own risk." },
    ],
  },
  {
    title: "Third-Party Links & Integrations",
    content: [
      {
        type: "p",
        text: "The Platform may contain links or integrations with stock exchanges, financial APIs, external websites, and news publishers. RupeeLetter does not control or endorse third-party content and is not responsible for its accuracy or policies.",
      },
    ],
  },
  {
    title: "Suspension & Termination",
    content: [
      { type: "p", text: "We may suspend or terminate your access if you:" },
      {
        type: "list",
        items: [
          "Violate these Terms",
          "Misuse the Platform",
          "Engage in unlawful activities",
          "Attempt to manipulate, hack, or disrupt services",
        ],
      },
    ],
  },
  {
    title: "Governing Law & Jurisdiction",
    content: [
      {
        type: "p",
        text: "These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts located in Pune, Maharashtra.",
      },
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <LegalLayout>
      <div className="max-w-3xl mx-auto px-6 py-16 pb-24">
        {/* Header */}
        <header className="border-b border-white/[0.06] pb-12 mb-12">
          <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30 rounded px-3 py-1 text-[10px] font-mono tracking-[2.5px] uppercase mb-5">
            Legal
          </span>
          <h1 className="text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <div className="flex items-center gap-3 text-xs font-mono text-white/40 mb-6">
            <span>Effective Date: April 8, 2026</span>
            <span className="text-[#C9A84C]">·</span>
            <span>Last Updated: April 8, 2026</span>
          </div>
          <p className="text-white/70 text-base leading-[1.9]">
            Welcome to <strong className="text-white font-semibold">RupeeLetter</strong>. These
            Terms &amp; Conditions govern your access to and use of the RupeeLetter mobile
            application, website, and related services. By accessing or using RupeeLetter, you
            agree to be bound by these Terms.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-0">
          {sections.map((sec, i) => (
            <div
              key={i}
              className="border-b border-white/[0.06] pb-10 mb-10 last:border-0"
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-mono text-[11px] text-[#C9A84C] tracking-widest shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-semibold text-white tracking-tight">
                  {sec.title}
                </h2>
              </div>

              <div className="pl-10 space-y-3">
                {sec.content.map((block, j) => {
                  if (block.type === "p") {
                    return (
                      <p key={j} className="text-white/65 text-[15px] leading-[1.85]">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={j} className="space-y-2 mt-1">
                        {block.items.map((item, k) => (
                          <li
                            key={k}
                            className="flex items-start gap-3 text-white/65 text-[15px] leading-[1.75]"
                          >
                            <span className="text-[#C9A84C] text-[9px] mt-[6px] shrink-0">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "notlist") {
                    return (
                      <div
                        key={j}
                        className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 mt-3"
                      >
                        <p className="text-red-400/80 text-[10px] font-mono tracking-[2px] uppercase font-semibold mb-3">
                          Does NOT include:
                        </p>
                        <ul className="space-y-2">
                          {block.items.map((item, k) => (
                            <li
                              key={k}
                              className="flex items-start gap-3 text-red-300/70 text-[14px] leading-[1.7]"
                            >
                              <span className="text-red-400 text-[9px] mt-[5px] shrink-0">✕</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/[0.06] text-center space-y-2">
          <p className="text-white/40 text-sm">
            Questions? Contact us at{" "}
            <a
              href="mailto:harshgawandi24@gmail.com"
              className="text-[#C9A84C] hover:text-[#e0b85c] transition-colors"
            >
              harshgawandi24@gmail.com
            </a>
          </p>
          <p className="text-white/20 text-xs font-mono">
            RupeeLetter Technologies Private Limited · Pune, Maharashtra, India
          </p>
        </footer>
      </div>
    </LegalLayout>
  );
}
// app/privacy-policy/page.tsx
// (For Pages Router: pages/privacy-policy.tsx)

import LegalLayout from "@/components/LegalLayout";

type ContentBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "nolist"; items: string[] }
  | { type: "sub"; heading: string; items?: string[]; text?: string }
  | { type: "highlight"; text: string };

interface Section {
  title: string;
  content: ContentBlock[];
}

const sections: Section[] = [
  {
    title: "Information We Collect",
    content: [
      {
        type: "sub",
        heading: "1.1 Information You Provide",
        items: [
          "Name",
          "Email address or mobile number",
          "User preferences (followed stocks, notification choices)",
        ],
      },
      {
        type: "sub",
        heading: "1.2 Automatically Collected Information",
        items: [
          "App usage activity (articles viewed, features used)",
          "Device information (device type, OS, app version)",
          "Crash logs and performance data",
        ],
        text: "This data is used only to improve app functionality and user experience.",
      },
    ],
  },
  {
    title: "Information We Do Not Collect",
    content: [
      {
        type: "nolist",
        items: [
          "Bank account details",
          "Trading or brokerage account credentials",
          "Portfolio holdings",
          "Transaction or order data",
          "PAN, Aadhaar, or KYC information",
        ],
      },
      {
        type: "p",
        text: "RupeeLetter is a news and information platform, not a trading or advisory service.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      {
        type: "list",
        items: [
          "Deliver relevant financial news and updates",
          "Personalize content and alerts",
          "Send notifications based on your preferences",
          "Improve app performance, reliability, and features",
          "Respond to support or feedback requests",
        ],
      },
      { type: "highlight", text: "We do not sell your personal data to third parties." },
    ],
  },
  {
    title: "News, Market Data & Third-Party Services",
    content: [
      {
        type: "p",
        text: "RupeeLetter uses third-party services including news and market data providers, analytics and crash-reporting tools, and push notification services.",
      },
      {
        type: "p",
        text: "These services receive only the data required to perform their functions and are bound by their own privacy obligations.",
      },
    ],
  },
  {
    title: "Data Storage & Retention",
    content: [
      {
        type: "list",
        items: [
          "User preference and usage data may be stored while your account is active",
          "News interaction data may be retained for analytics and personalization",
          "Aggregated or anonymized data may be used for internal insights",
        ],
      },
      {
        type: "p",
        text: "We take reasonable steps to protect stored data from unauthorized access.",
      },
    ],
  },
  {
    title: "Notifications",
    content: [
      {
        type: "p",
        text: "The App may send push notifications related to breaking market news, earnings, corporate actions, or updates based on your preferences.",
      },
      {
        type: "p",
        text: "You can enable or disable notifications at any time from within the App or your device settings.",
      },
    ],
  },
  {
    title: "Your Rights & Choices",
    content: [
      {
        type: "list",
        items: [
          "Update your preferences within the App",
          "Opt out of notifications",
          "Request account or data deletion by contacting contact@rupeeletter.com",
        ],
      },
      { type: "p", text: "We will respond to reasonable requests in a timely manner." },
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      {
        type: "p",
        text: "RupeeLetter does not knowingly collect or solicit data from individuals under the age of 18. If we become aware that we have collected personal data from a minor, we will take steps to delete such information promptly.",
      },
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      {
        type: "p",
        text: "We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and continued use of the App indicates acceptance of the updated policy.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout>
      <div className="max-w-3xl mx-auto px-6 py-16 pb-24">
        {/* Header */}
        <header className="border-b border-white/[0.06] pb-12 mb-12">
          <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30 rounded px-3 py-1 text-[10px] font-mono tracking-[2.5px] uppercase mb-5">
            Privacy
          </span>
          <h1 className="text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-white/40 mb-6">Last Updated: April 8, 2026</p>
          <p className="text-white/70 text-base leading-[1.9]">
            <strong className="text-white font-semibold">RupeeLetter</strong> ("we", "our",
            "us") respects your privacy and is committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, store, and protect data when you
            use the RupeeLetter mobile application and related services.
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

                  if (block.type === "sub") {
                    return (
                      <div key={j} className="mb-4">
                        <p className="text-[#C9A84C] text-[11px] font-mono tracking-[1px] font-semibold mb-3">
                          {block.heading}
                        </p>
                        {block.items && (
                          <ul className="space-y-2 mb-3">
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
                        )}
                        {block.text && (
                          <p className="text-white/40 text-[13px] font-mono leading-[1.7] mt-2">
                            {block.text}
                          </p>
                        )}
                      </div>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={j} className="space-y-2">
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

                  if (block.type === "nolist") {
                    return (
                      <div
                        key={j}
                        className="bg-red-500/5 border border-red-500/20 rounded-lg p-4"
                      >
                        <p className="text-red-400/80 text-[10px] font-mono tracking-[2px] uppercase font-bold mb-3">
                          We do NOT collect:
                        </p>
                        <ul className="space-y-2">
                          {block.items.map((item, k) => (
                            <li
                              key={k}
                              className="flex items-start gap-3 text-red-300/70 text-[14px] leading-[1.7]"
                            >
                              <span className="text-red-400 text-[10px] mt-[4px] shrink-0">✕</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }

                  if (block.type === "highlight") {
                    return (
                      <div
                        key={j}
                        className="flex items-center gap-3 bg-[#C9A84C]/[0.07] border border-[#C9A84C]/25 rounded-lg px-5 py-4 mt-2"
                      >
                        <span className="text-xl shrink-0">🔒</span>
                        <p className="text-[#C9A84C] text-[14px] font-semibold font-serif m-0">
                          {block.text}
                        </p>
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
            Questions? Email us at{" "}
            <a
              href="mailto:contact@rupeeletter.com"
              className="text-[#C9A84C] hover:text-[#e0b85c] transition-colors"
            >
              contact@rupeeletter.com
            </a>
          </p>
          <p className="text-white/20 text-xs font-mono">
            Website:{" "}
            <a
              href="https://news.rupeeletter.com"
              className="text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors"
            >
              news.rupeeletter.com
            </a>
          </p>
        </footer>
      </div>
    </LegalLayout>
  );
}
// app/contact-us/page.tsx
// (For Pages Router: pages/contact-us.tsx)
import LegalLayout from "../components/LegalLayout";
interface AppSupportItem {
  icon: string;
  label: string;
}

const appSupportItems: AppSupportItem[] = [
  { icon: "📰", label: "Incorrect or delayed news" },
  { icon: "🐛", label: "App bugs or crashes" },
  { icon: "🔔", label: "Notification issues" },
  { icon: "💡", label: "Feature suggestions" },
  { icon: "👤", label: "Account-related queries" },
];

const tipsList: string[] = [
  "Your registered email (if applicable)",
  "App version",
  "Short description of the issue or feedback",
];

export default function ContactUs() {
  return (
    <LegalLayout>
      <div className="max-w-4xl mx-auto px-6 py-16 pb-24">
        {/* Header */}
        <header className="border-b border-white/[0.06] pb-12 mb-12">
          <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30 rounded px-3 py-1 text-[10px] font-mono tracking-[2.5px] uppercase mb-5">
            Support
          </span>
          <h1 className="text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            Contact Us
          </h1>
          <p className="text-white/65 text-base leading-[1.9] max-w-xl">
            Have a question, spotted an issue, or want to share feedback? We're here to help.
            RupeeLetter is built to deliver fast, clear, and reliable financial news — your
            feedback helps us improve.
          </p>
        </header>

        {/* Main Contact Card */}
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 items-start">
            {/* Left: Email */}
            <div>
              <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] rounded text-[9px] font-mono tracking-[2px] uppercase px-2 py-1 mb-4">
                Primary Contact
              </span>
              <h2 className="text-[22px] font-semibold text-white tracking-tight mb-6">
                Get in Touch
              </h2>

              <div className="flex items-start gap-4 mb-5">
                <span className="text-[#C9A84C] text-xl mt-0.5 shrink-0">✉</span>
                <div>
                  <p className="text-white/35 text-[10px] font-mono tracking-[2px] uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:contact@rupeeletter.com"
                    className="text-[#C9A84C] text-[17px] font-medium hover:text-[#e0b85c] transition-colors"
                  >
                    contact@rupeeletter.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white/40 text-[12px] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399] shrink-0" />
                Response within 24–48 hours (business days)
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block bg-white/[0.06] self-stretch" />

            {/* Right: Tips */}
            <div>
              <p className="text-white/35 text-[10px] font-mono tracking-[2px] uppercase mb-4">
                For faster resolution, include:
              </p>
              <ol className="space-y-3">
                {tipsList.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/65 text-[14px] leading-[1.7]">
                    <span className="w-5 h-5 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* App Support */}
        <div className="mb-10">
          <h2 className="text-[22px] font-semibold text-white tracking-tight mb-2">
            App Support
          </h2>
          <p className="text-white/45 text-[14px] leading-relaxed mb-6">
            If you are contacting us regarding the RupeeLetter mobile app, you can reach out for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {appSupportItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 hover:border-white/15 transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-white/65 text-[14px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy & Data Requests */}
        <div className="bg-[#0F1225] border border-[#2A2A4A] rounded-2xl p-7 mb-8">
          <div className="flex gap-5 items-start">
            <span className="text-3xl shrink-0">🔒</span>
            <div>
              <h3 className="text-[18px] font-semibold text-white mb-2 tracking-tight">
                Privacy &amp; Data Requests
              </h3>
              <p className="text-white/50 text-[14px] leading-[1.75] mb-3">
                For privacy-related concerns, data usage questions, or account deletion requests:
              </p>
              <a
                href="mailto:contact@rupeeletter.com"
                className="text-[#C9A84C] text-[15px] font-medium hover:text-[#e0b85c] transition-colors"
              >
                contact@rupeeletter.com
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-7 mb-8">
          <h3 className="text-[16px] font-semibold text-white mb-3">About RupeeLetter</h3>
          <p className="text-white/45 text-[14px] leading-[1.8] mb-4">
            RupeeLetter is a financial news and insights platform focused on simplifying market
            updates, corporate news, and key events for investors and market participants.
          </p>
          <a
            href="https://news.rupeeletter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A84C] text-[12px] font-mono tracking-wide hover:text-[#e0b85c] transition-colors"
          >
            news.rupeeletter.com ↗
          </a>
        </div>

        {/* Disclaimer Note */}
        <div className="bg-red-500/[0.04] border border-red-500/15 rounded-lg px-5 py-4 mb-16">
          <p className="text-red-400/60 text-[12px] font-mono leading-[1.8]">
            ⚠️ RupeeLetter provides financial news and information for educational and
            informational purposes only. We do not provide investment advice or recommendations.
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
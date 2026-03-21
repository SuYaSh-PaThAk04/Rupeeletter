"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Playfair_Display, DM_Sans, Poppins } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800", "900"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

type FormValues = {
  phoneNumber: string;
  email: string;
};

export default function RupeeLetterPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: `New Advisor Request — ${data.phoneNumber}`,
        from_name: "RupeeConnect Form",
        phoneNumber: data.phoneNumber,
        email: data.email,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      reset();
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${poppins.className}`} style={{ backgroundColor: "#fde8e8" }}>

      {/* ── Header ── */}
      <header className="w-full" style={{ backgroundColor: "#f26b6b" }}>
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center gap-3">
          <Image
            src="/White and Black Logo (1).png"
            alt="RupeeLetter Logo"
            width={44}
            height={44}
            className="object-contain"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <span className={`font-black text-lg md:text-xl tracking-widest uppercase ${playfair.className}`}
            style={{ color: "#ffffff" }}>
            RUPEELETTER CONNECT
          </span>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-5 md:px-12 py-10 md:py-16
                        flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

        {/* ── LEFT ── */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

          {/* Headline */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 ${dmSans.className}`}>
            Find a Trusted Mutual Fund<br className="hidden md:block" /> Advisor Near You
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base md:text-lg mb-4">
            Get connected with verified advisors in minutes.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-5">
            {["No spam", "100% free", "No charges"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 text-sm font-semibold text-green-600">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {badge}
              </span>
            ))}
          </div>

          {/* Trusted by badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-gray-700 text-sm font-medium">Trusted by 500+ investors</span>
            <span className="text-yellow-400 text-lg">⭐</span>
          </div>

          {/* Illustration */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <svg viewBox="0 0 500 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Phone mockup */}
              <rect x="160" y="20" width="155" height="285" rx="22" fill="#2d2d2d" />
              <rect x="168" y="33" width="139" height="259" rx="15" fill="#f9f9f9" />
              <rect x="200" y="28" width="70" height="9" rx="4" fill="#1a1a1a" />

              {/* Chart on screen */}
              <rect x="176" y="50" width="123" height="68" rx="7" fill="#fff" />
              <polyline points="186,108 205,88 225,98 248,74 270,84 291,65"
                fill="none" stroke="#f26b6b" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="248" cy="74" r="4" fill="#f26b6b" />
              <circle cx="291" cy="65" r="4" fill="#f26b6b" />

              {/* List rows */}
              <rect x="176" y="130" width="123" height="13" rx="4" fill="#ffe0e0" />
              <circle cx="185" cy="136" r="5" fill="#f26b6b" />
              <rect x="176" y="152" width="95" height="9" rx="4" fill="#f0f0f0" />
              <rect x="176" y="169" width="110" height="9" rx="4" fill="#f0f0f0" />
              <rect x="176" y="186" width="80" height="9" rx="4" fill="#f0f0f0" />
              <rect x="176" y="203" width="118" height="9" rx="4" fill="#f0f0f0" />
              <rect x="176" y="220" width="90" height="9" rx="4" fill="#f0f0f0" />

              {/* Home indicator */}
              <rect x="217" y="295" width="42" height="5" rx="2.5" fill="#3d3d3d" />

              {/* ── Woman (left) ── */}
              <circle cx="88" cy="175" r="21" fill="#f4c29d" />
              <ellipse cx="88" cy="165" rx="21" ry="13" fill="#2d1b0e" />
              <ellipse cx="88" cy="248" rx="26" ry="56" fill="#f26b6b" />
              <line x1="112" y1="222" x2="160" y2="205" stroke="#f4c29d" strokeWidth="10" strokeLinecap="round" />
              <line x1="64" y1="228" x2="44" y2="245" stroke="#f4c29d" strokeWidth="10" strokeLinecap="round" />
              <rect x="74" y="296" width="13" height="46" rx="6" fill="#2d1b0e" />
              <rect x="92" y="296" width="13" height="46" rx="6" fill="#2d1b0e" />
              <ellipse cx="80" cy="342" rx="11" ry="5" fill="#1a1a1a" />
              <ellipse cx="99" cy="342" rx="11" ry="5" fill="#1a1a1a" />

              {/* ── Man (right) ── */}
              <circle cx="388" cy="178" r="23" fill="#f4c29d" />
              <ellipse cx="388" cy="167" rx="21" ry="12" fill="#1a1a1a" />
              <ellipse cx="388" cy="255" rx="28" ry="58" fill="#3d2b1f" />
              <rect x="380" y="215" width="16" height="48" rx="2" fill="#f9f9f9" />
              <polygon points="388,218 384,248 388,254 392,248" fill="#f26b6b" />
              <line x1="360" y1="228" x2="340" y2="248" stroke="#f4c29d" strokeWidth="10" strokeLinecap="round" />
              <line x1="416" y1="225" x2="436" y2="242" stroke="#f4c29d" strokeWidth="10" strokeLinecap="round" />
              <rect x="372" y="305" width="14" height="48" rx="6" fill="#3d2b1f" />
              <rect x="391" y="305" width="14" height="48" rx="6" fill="#3d2b1f" />
              <ellipse cx="379" cy="353" rx="13" ry="5" fill="#1a1a1a" />
              <ellipse cx="398" cy="353" rx="13" ry="5" fill="#1a1a1a" />
            </svg>
          </div>
        </div>

        {/* ── RIGHT: Form card ── */}
        <div className="w-full md:w-[380px] flex-shrink-0">

          {/* Success banner */}
          {submitted && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium text-center">
              ✅ Submitted! We will call you within 24 hours.
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-md px-7 py-8">

            {/* CONNECT WITH AN ADVISOR — Playfair */}
            <h2
              className={`text-2xl font-black uppercase text-center mb-6 leading-snug ${playfair.className}`}
              style={{ color: "#e53e3e" }}
            >
              CONNECT WITH AN ADVISOR
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  disabled={isSubmitting}
                  className={`w-full border rounded-xl px-4 py-3.5 text-gray-700 text-base outline-none focus:ring-2 focus:ring-red-100 transition disabled:opacity-50 ${
                    errors.phoneNumber ? "border-red-400" : "border-gray-300 focus:border-red-400"
                  }`}
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid 10-digit Indian mobile number",
                    },
                  })}
                />
                {errors.phoneNumber && <p className="mt-1 text-xs text-red-500">{errors.phoneNumber.message}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  disabled={isSubmitting}
                  className={`w-full border rounded-xl px-4 py-3.5 text-gray-700 text-base outline-none focus:ring-2 focus:ring-red-100 transition disabled:opacity-50 ${
                    errors.email ? "border-red-400" : "border-gray-300 focus:border-red-400"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-gray-900 font-semibold text-base md:text-lg transition hover:brightness-95 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                style={{ backgroundColor: "#f5d200" }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Get a Free Call Now"
                )}
              </button>
            </form>

            {/* Trust note */}
            <p className="mt-4 text-xs text-gray-400 text-center leading-relaxed italic">
              We will call you within 24 hours to connect you with a trusted advisor near you.
            </p>
            {/* Urgency line */}
            <p className="mt-3 text-xs text-center font-medium flex items-center justify-center gap-1" style={{ color: "#e53e3e" }}>
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Limited advisor slots available today
            </p>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full py-3 px-6" style={{ backgroundColor: "#f26b6b" }}>
        <p className="text-xs text-white text-center opacity-90">
          RupeeLetter facilitates connections between investors and financial advisors.
          We do not provide investment advice. Mutual fund investments are subject to market risks.*
        </p>
      </footer>
    </div>
  );
}
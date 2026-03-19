"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Playfair_Display, DM_Sans, Poppins } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800", "900"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

type FormValues = {
  fullName: string;
  phoneNumber: string;
  city: string;
  investableCapital: string;
};

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
  "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
];

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
        subject: `New Advisor Request from ${data.fullName}`,
        from_name: "RupeeConnect Form",
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        city: data.city,
        investableCapital: `₹ ${data.investableCapital}`,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      reset();
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${poppins.className}`} style={{ backgroundColor: "#fff5f5" }}>

      {/* Header */}
      <header className="w-full" style={{ backgroundColor: "#f26b6b" }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/White and Black Logo (1).png"
              alt="RupeeLetter Logo"
              width={92}
              height={142}
              className="object-contain"
              onError={(e) => {
                // Fallback to SVG rupee icon if logo.png not found
                e.currentTarget.style.display = "none";
              }}
            />
            {/* SVG fallback shown alongside — hidden if image loads */}
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
              id="fallback-logo"
            >
              <rect width="52" height="52" rx="6" fill="white" fillOpacity="0.2" />
              <text x="8" y="38" fontSize="30" fontWeight="900" fill="white" fontFamily="serif">₹</text>
            </svg>
          </div>

          {/* Brand name */}
          <div className={`leading-snug ${playfair.className}`}>
            <div className="text-white font-black text-lg md:text-xl tracking-wide uppercase">
              RUPEELETTER TECHNOLOGIES
            </div>
            <div className="text-white font-black text-lg md:text-xl tracking-wide uppercase">
              PRIVATE LIMITED
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center px-4 pt-12 pb-16">

        {/* Headline — DM Sans */}
        <h1
          className={`text-4xl md:text-5xl font-bold text-center mb-5 leading-tight ${dmSans.className}`}
          style={{ color: "#e53e3e" }}
        >
          Thank you for showing intrest in our service!
        </h1>

        {/* Subtext — Poppins */}
        <p
          className="text-center text-gray-600 text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
        >
          RupeeConnect is a work-in-progress platform helping investors connect
          with trusted financial advisors. For now, please fill the form below
          and our team will manually connect you with a verified advisor.
        </p>

        {/* Success banner */}
        {submitted && (
          <div className="w-full max-w-xl mb-6 px-4 py-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium text-center">
            ✅ Your request has been submitted! Our team will reach out to you shortly.
          </div>
        )}

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-xl">

          {/* Contact Us — Playfair Display */}
          <h2
            className={`text-3xl font-black uppercase mb-6 tracking-wide ${playfair.className}`}
            style={{ color: "#e53e3e" }}
          >
            CONTACT US
          </h2>

          {/* Form fields — Poppins (inherited) */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>

            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                disabled={isSubmitting}
                className={`w-full border rounded-lg px-4 py-3 text-gray-700 text-base outline-none focus:ring-2 focus:ring-red-100 transition disabled:opacity-50 ${
                  errors.fullName ? "border-red-400" : "border-gray-300 focus:border-red-400"
                }`}
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                placeholder="Phone number"
                disabled={isSubmitting}
                className={`w-full border rounded-lg px-4 py-3 text-gray-700 text-base outline-none focus:ring-2 focus:ring-red-100 transition disabled:opacity-50 ${
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

            {/* Select City */}
            <div>
              <div className="relative">
                <select
                  disabled={isSubmitting}
                  className={`w-full border rounded-lg px-4 py-3 text-base outline-none focus:ring-2 focus:ring-red-100 transition appearance-none bg-white cursor-pointer disabled:opacity-50 ${
                    errors.city ? "border-red-400 text-gray-700" : "border-gray-300 focus:border-red-400 text-gray-500"
                  }`}
                  {...register("city", { required: "Please select a city" })}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>}
            </div>

            {/* Investable Capital */}
            <div>
              <input
                type="text"
                placeholder="Investable capital"
                disabled={isSubmitting}
                className={`w-full border rounded-lg px-4 py-3 text-gray-700 text-base outline-none focus:ring-2 focus:ring-red-100 transition disabled:opacity-50 ${
                  errors.investableCapital ? "border-red-400" : "border-gray-300 focus:border-red-400"
                }`}
                {...register("investableCapital", { required: "Investable capital is required" })}
              />
              {errors.investableCapital && <p className="mt-1 text-xs text-red-500">{errors.investableCapital.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg text-gray-900 font-semibold text-lg transition hover:brightness-95 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                "Connect Me With an Advisor"
              )}
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-3 px-6 border-t" style={{ borderColor: "#f5c6c6" }}>
        <p className="text-xs text-gray-500 text-center">
          RupeeLetter facilitates connections between investors and financial advisors.
          We do not provide investment advice. Mutual fund investments are subject to market risks.*
        </p>
      </footer>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function RupeeLetterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    city: "",
    investableCapital: "",
  });

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you! We will connect you with an advisor shortly.");
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#fff5f5" }}>
      {/* Header */}
      <header className="w-full" style={{ backgroundColor: "#f26b6b" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          {/* Rupee Symbol Logo */}
          <div className="flex items-center justify-center">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="2" y="34" fontSize="32" fontWeight="bold" fill="white" fontFamily="serif">₹</text>
              <line x1="6" y1="40" x2="38" y2="6" stroke="white" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="text-white font-black text-xl tracking-widest uppercase">
              RUPEELETTER TECHNOLOGIES
            </div>
            <div className="text-white font-black text-xl tracking-widest uppercase">
              PRIVATE LIMITED
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 pt-12 pb-16">
        {/* Headline */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
          style={{ color: "#e53e3e" }}
        >
          Thank you for showing intrest in our service!
        </h1>

        {/* Subtext */}
        <p className="text-center text-gray-700 text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
          RupeeConnect is a work-in-progress platform helping investors connect
          with trusted financial advisors. For now, please fill the form below
          and our team will manually connect you with a verified advisor.
        </p>

        {/* Contact Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-xl">
          <h2
            className="text-3xl font-black uppercase mb-6 tracking-wide"
            style={{ color: "#e53e3e" }}
          >
            CONTACT US
          </h2>

          <div className="flex flex-col gap-4">
            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 text-base outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
            />

            {/* Phone Number */}
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 text-base outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
            />

            {/* Select City */}
            <div className="relative">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500 text-base outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition appearance-none bg-white cursor-pointer"
              >
                <option value="" disabled>Select City</option>
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

            {/* Investable Capital */}
            <input
              type="text"
              name="investableCapital"
              placeholder="Investable capital"
              value={formData.investableCapital}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 text-base outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-lg text-gray-900 font-semibold text-lg transition hover:brightness-95 active:scale-95"
              style={{ backgroundColor: "#f5d200" }}
            >
              Connect Me With an Advisor
            </button>
          </div>
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
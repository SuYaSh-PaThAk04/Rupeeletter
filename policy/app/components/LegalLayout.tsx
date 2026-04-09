// components/LegalLayout.tsx
// Shared layout for all legal pages — handles watermark + page wrapper

import React from "react";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] font-serif overflow-x-hidden">
      {/* Fixed Background Logo Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/logo.jpeg"
          alt=""
          className="w-[600px] h-[600px] object-contain opacity-[0.04] grayscale brightness-200 select-none"
        />
      </div>

      {/* Subtle grid texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
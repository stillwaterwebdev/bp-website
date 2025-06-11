"use client";
import ScrollingLogos from "./ScrollingLogos";

export default function TrustedBySection() {
  return (
    <section className="bg-white w-full py-6 px-4 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2
          className="text-xl font-bold text-center text-gray-900 tracking-wide font-serif"
          style={{ fontFamily: 'var(--font-ibm-plex-serif)', paddingBottom: '25px' }}
        >
          Trusted By
        </h2>
        <ScrollingLogos />
      </div>
    </section>
  );
} 
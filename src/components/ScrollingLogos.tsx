"use client";
import React from "react";

const companyLogos = [
  "company1.jpg", "company2.jpg", "company3.jpg", "company4.jpg", "company5.png", "company6.jpeg", "company7.png", "company8.jpg", "company9.jpg", "company10.png", "company11.jpg", "company12.jpg", "company13.jpeg", "company14.jpg", "company15.jpg", "company16.jpg", "company17.jpg", "company18.png", "company19.jpg", "company20.jpg", "company21.jpeg", "company22.jpg", "company23.jpg", "company24.jpg", "company25.jpeg", "company26.jpg", "company27.png", "company28.jpeg", "company29.jpg", "company30.jpeg", "company31.jpg", "company32.jpeg", "company33.png", "company34.png", "company35.jpeg", "company36.png", "company37.png", "company38.jpg", "company39.jpg", "company40.png", "company41.jpg", "company42.jpg", "company43.png", "company44.jpg", "company45.jpg", "company46.jpg", "company47.png", "company48.jpeg", "company49.png", "company50.jpg", "company51.jpeg", "company52.jpg", "company53.jpg", "company54.jpg"
];

export default function ScrollingLogos() {
  return (
    <div className="overflow-hidden relative h-16 w-full">
      <div className="flex animate-scroll-logos gap-8 h-16 min-w-max">
        {[...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos].map((filename, idx) => (
          <img
            key={idx}
            src={`/images/${filename}`}
            alt={`Company ${idx + 1}`}
            className="h-12 w-auto object-contain block"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
} 
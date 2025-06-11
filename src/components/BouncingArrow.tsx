'use client';

export default function BouncingArrow() {
  const scrollToTrustedBy = () => {
    const trustedBySection = document.querySelector('#trusted-by');
    if (trustedBySection) {
      trustedBySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
      <button
        onClick={scrollToTrustedBy}
        className="text-white hover:text-gray-300 transition-colors focus:outline-none animate-bounce-slow"
        aria-label="Scroll to next section"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7 7 7-7"
          />
        </svg>
      </button>
    </div>
  );
} 
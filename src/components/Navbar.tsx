'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-[#0B1F3F] text-white font-sans">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Home">
            <Image
              src="/images/logonav.png"
              alt="Company logo"
              width={160}
              height={54}
              priority
            />
          </Link>

          {/* Navigation links */}
          <div className="ml-auto flex items-center space-x-8">
            <Link href="/" className="hover:text-[#1F6FFF] transition-colors">
              Home
            </Link>
            <Link href="#team" className="hover:text-[#1F6FFF] transition-colors">
              Team
            </Link>
            <Link href="#experience" className="hover:text-[#1F6FFF] transition-colors">
              Experience
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="hover:text-[#1F6FFF] transition-colors flex items-center">
                Services
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-[#0B1F3F] rounded-md shadow-lg py-2 z-50 border border-gray-600">
                  <Link 
                    href="/add-on-search" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#1F6FFF] hover:text-white transition-colors"
                  >
                    Add-On Search
                  </Link>
                  <Link 
                    href="#platform-search" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#1F6FFF] hover:text-white transition-colors"
                  >
                    Platform Search
                  </Link>
                  <Link 
                    href="#platform-formation" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#1F6FFF] hover:text-white transition-colors"
                  >
                    Platform Formation
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="#contact"
              className="rounded-md bg-[#1F6FFF] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
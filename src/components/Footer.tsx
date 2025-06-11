export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="w-full bg-[#0B1F3F] text-white px-4 pt-12 pb-12 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 md:gap-12 mb-10">
          {/* Brand */}
          <div className="mb-8 md:mb-0 md:w-1/4 flex-shrink-0">
            <img src="/images/logonav.png" alt="BowPoint Logo" className="h-16 mb-4" />
            <p className="text-sm leading-relaxed">Powering buy-and-build success for leading private equity firms.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full justify-end">
            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-3 text-base">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="#team" className="hover:underline">Team</a></li>
                <li><a href="#experience" className="hover:underline">Experience</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3 text-base">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <svg className="inline-block w-5 h-5 mr-2 align-text-bottom" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:info@bowpoint.com" className="hover:underline">info@bowpoint.com</a>
                </li>
                <li>
                  <svg className="inline-block w-5 h-5 mr-2 align-text-bottom" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.52l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.06 16.06 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" /></svg>
                  <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
                </li>
              </ul>
            </div>
            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3 text-base">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="hover:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V24h-4V8zM9.98 8h3.54v2.16h.05c.49-.93 1.68-1.9 3.46-1.9 3.7 0 4.38 2.43 4.38 5.59V24h-4v-7.92c0-1.89-.03-4.32-2.64-4.32-2.65 0-3.05 2.06-3.05 4.19V24h-4V8z"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full border-t border-white/20 bg-[#0B1F3F] text-white text-center text-xs pt-4 pb-4" style={{ fontFamily: 'var(--font-open-sans)' }}>
        &copy; {new Date().getFullYear()} BowPoint. All rights reserved.
      </div>
    </>
  );
} 
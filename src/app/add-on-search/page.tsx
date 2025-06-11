export default function AddOnSearch() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/herobg.jpg)' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
            Buyside Addon Acquisition Search &amp; Deal Origination
          </h1>
          <p className="text-xl md:text-2xl text-white font-sans font-bold mb-6" style={{ fontFamily: 'var(--font-open-sans)' }}>
            Systematic Growth Through Strategic Add-On Acquisitions
          </p>
          <p className="text-lg md:text-xl text-gray-100 font-sans mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-open-sans)' }}>
            Accelerate your buy-and-build strategy with our proven 9-step sourcing process.
          </p>
          <a
            href="#start-search"
            className="inline-block rounded-md bg-[#1F6FFF] px-8 py-3 text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity font-sans"
            style={{ fontFamily: 'var(--font-open-sans)' }}
          >
            Start Your Search Process &rarr;
          </a>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="w-full pt-16 pb-12 px-4" style={{ backgroundColor: '#0B1F3F' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
              Who We Serve
            </h2>
            <p className="text-lg text-gray-200 mb-6 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
              We partner with middle-market private equity backed portfolio companies pursuing strategic growth through acquisitions. Whether you&apos;re seeking a single game-changing acquisition or executing a high-volume buy-and-build strategy, our systematic approach delivers qualified opportunities that align with your strategic objectives.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
              Our Clients Include:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-200 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
              <li>Private equity portfolio companies seeking add-on acquisitions</li>
              <li>Management teams executing buy-and-build strategies</li>
              <li>Corporate development teams requiring systematic sourcing support</li>
              <li>Companies pursuing transformational growth through M&amp;A</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Offering */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#0B1F3F] font-serif text-center" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
            Our Comprehensive Service Offering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add-On Acquisition Sourcing */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
              <h3 className="text-xl font-bold font-serif text-[#0B1F3F] mb-4" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                Add-On Acquisition Sourcing
              </h3>
              <p className="text-gray-700 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
                End-to-end sourcing support for portfolio companies seeking strategic add-on acquisitions. We research markets, identify high-fit targets, and manage outreach & qualification.
              </p>
            </div>
            {/* Corporate Development Support */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
              <h3 className="text-xl font-bold font-serif text-[#0B1F3F] mb-4" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                Corporate Development Support
              </h3>
              <p className="text-gray-700 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
                We operate as an extension of your corporate development team, providing dedicated resources and expertise to drive acquisition strategy execution and deal flow management.
              </p>
            </div>
            {/* Market Research */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
              <h3 className="text-xl font-bold font-serif text-[#0B1F3F] mb-4" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                Market Research &amp; Analysis
              </h3>
              <p className="text-gray-700 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
                Comprehensive industry analysis and market mapping to identify consolidation opportunities and competitive insights that inform your acquisition strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t border-gray-200" />
      {/* Industry Focus Areas */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0B1F3F] font-serif text-center" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
            Industry Focus Areas
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 text-gray-700 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
            <div className="bg-gray-50 rounded-lg p-6 min-w-[220px] flex-1 text-left">Blue Collar Services</div>
            <div className="bg-gray-50 rounded-lg p-6 min-w-[220px] flex-1 text-left">White Collar Services</div>
            <div className="bg-gray-50 rounded-lg p-6 min-w-[220px] flex-1 text-left">Consumer Services</div>
            <div className="bg-gray-50 rounded-lg p-6 min-w-[220px] flex-1 text-left">Distribution</div>
            <div className="bg-gray-50 rounded-lg p-6 min-w-[220px] flex-1 text-left">Manufacturing</div>
          </div>
        </div>
      </section>

      {/* 9-Step Process */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: '#0B1F3F' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white font-serif text-center" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
            Our Proven 9-Step Process
          </h2>
          <div className="space-y-10 text-gray-200">
            {/* Phase 1 */}
            <div>
              <h3 className="text-2xl font-semibold text-white font-serif mb-4" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                Phase 1: Strategy &amp; Planning
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-200 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
                <li><strong>Strategy &amp; Criteria Development</strong> – Kick-off call to align on acquisition strategy, ideal criteria, and objectives.</li>
                <li><strong>Target Identification &amp; Research</strong> – Extensive research to build a comprehensive target universe.</li>
                <li><strong>Blacklisting &amp; Refinement</strong> – Exclude existing relationships or conflicts to focus outreach.</li>
              </ol>
            </div>
            {/* Phase 2 */}
            <div>
              <h3 className="text-2xl font-semibold text-white font-serif mb-4" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                Phase 2: Outreach &amp; Engagement
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-200 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }} start={4}>
                <li><strong>Document Creation &amp; Marketing Materials</strong> – Craft compelling materials to support outreach.</li>
                <li><strong>Deal Sourcing &amp; Outreach</strong> – Systematic multi-channel outreach with tenacious follow-up.</li>
                <li><strong>Deal Screening &amp; Qualification</strong> – Gather detailed information to qualify genuine opportunities.</li>
              </ol>
            </div>
            {/* Phase 3 */}
            <div>
              <h3 className="text-2xl font-semibold text-white font-serif mb-4" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                Phase 3: Introduction &amp; Handoff
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-200 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }} start={7}>
                <li><strong>Executive Summary Preparation</strong> – Concise summaries for efficient evaluation.</li>
                <li><strong>Introduction &amp; Coordination</strong> – Facilitate conference calls and handoff.</li>
                <li><strong>Transaction Pursuit Support</strong> – Ongoing support as deals progress toward completion.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BowPoint */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0B1F3F] font-serif text-center" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
            Why Choose BowPoint for Add-On Sourcing?
          </h2>
          <ul className="space-y-4 list-disc pl-6 text-gray-700 font-sans max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-open-sans)' }}>
            <li><strong>Systematic Approach:</strong> Proven 9-step process ensures comprehensive coverage and efficient qualification.</li>
            <li><strong>Industry Expertise:</strong> Deep sector knowledge across our focus areas provides targeted sourcing and insights.</li>
            <li><strong>Relationship Management:</strong> Professional outreach that protects and enhances your brand.</li>
            <li><strong>Dedicated Resources:</strong> Full-time focus without the overhead of building internal capability.</li>
            <li><strong>Proven Results:</strong> Successful introductions and completed transactions across industries and geographies.</li>
          </ul>
        </div>
      </section>
      <hr className="border-t border-gray-200" />
      {/* CTA Section */}
      <section id="start-search" className="w-full py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B1F3F] font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
            Ready to Accelerate Your Growth Strategy?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
            Let&apos;s discuss how our systematic add-on sourcing process can help you identify and engage the right acquisition targets for your growth objectives.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-md bg-[#1F6FFF] px-8 py-3 text-lg font-semibold text-white shadow-md hover:opacity-90 transition-opacity font-sans"
            style={{ fontFamily: 'var(--font-open-sans)' }}
          >
            Schedule Your Strategy Session &rarr;
          </a>
        </div>
      </section>
    </>
  );
} 
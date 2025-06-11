import Image from "next/image";
import TrustedBySection from "../components/TrustedBySection";
import BouncingArrow from "../components/BouncingArrow";

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-[92vh] w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/herobg.jpg)' }}
      >
        {/* Optional: Add overlay for readability */}
        <div className="absolute inset-0">
          <div className="w-full h-full absolute inset-0 backdrop-blur-[2px]" style={{ zIndex: 1 }} />
          <div className="w-full h-full absolute inset-0 bg-black/30" style={{ zIndex: 2 }} />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-3xl px-4 pt-10 pb-4 mx-auto min-h-[80vh] -mt-6">
        <Image
            src="/images/logonav.png"
            alt="Company logo large"
            width={540}
            height={180}
          priority
            className="drop-shadow-xl mb-4"
          />
          <div className="flex flex-col items-center text-white max-w-2xl pt-2">
            <h1 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight text-center" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
              Powering Buy-and-Build Success for Leading Private Equity Firms
            </h1>
            <div className="text-xl md:text-1xl mb-5 font-sans text-center font-bold italic" style={{ fontFamily: 'var(--font-open-sans)' }}>
              250+ transactions. $3+ billion in value. 39 states. 5 countries.
            </div>
            <p className="mb-8 text-base md:text-lg font-sans max-w-xl text-center" style={{ fontFamily: 'var(--font-open-sans)' }}>
              We are the trusted deal origination partner for the most respected private equity groups, sourcing high-quality add-on acquisitions and platform opportunities that fuel exceptional portfolio growth.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-md bg-[#1F6FFF] px-6 py-3 text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity font-sans"
              style={{ fontFamily: 'var(--font-open-sans)' }}
            >
              Schedule a Confidential Discussion &rarr;
            </a>
          </div>
          {/* Bouncing Arrow */}
          <BouncingArrow />
        </div>
      </section>
      {/* Trusted By Section */}
      <div id="trusted-by">
        <TrustedBySection />
      </div>
      {/* Next Section with Navbar BG */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: '#0B1F3F' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-3/4 text-left">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white font-serif"
              style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}
            >
              Who We Are
            </h2>
            <p
              className="text-lg md:text-xl text-gray-200 mb-4 font-sans"
              style={{ fontFamily: 'var(--font-open-sans)' }}
            >
              BowPoint is a leading buyside M&amp;A deal origination firm specializing in accelerating private equity buy-and-build strategies. Since 2013, we have completed over 250 transactions across 5 countries and 39 states, representing more than $3 billion in combined enterprise value.
            </p>
            <p
              className="text-lg md:text-xl text-gray-200 font-sans"
              style={{ fontFamily: 'var(--font-open-sans)' }}
            >
              We serve the most respected private equity groups, billionaire family offices, and Fortune 500 CEOs across the United States and Europe, helping them identify, qualify, and execute strategic acquisitions that drive exceptional portfolio growth.
            </p>
          </div>
        </div>
      </section>
      {/* Our Services Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 font-serif text-center"
            style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="flex items-end min-h-[56px] mb-4">
                <h3 className="text-xl font-bold font-serif text-[#0B1F3F]" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                  Add-On Sourcing &amp; Buy-And-Build Strategies
                </h3>
              </div>
              <p className="text-gray-700 font-sans text-base" style={{ fontFamily: 'var(--font-open-sans)' }}>
                We partner with private equity groups and their portfolio company CEOs to systematically grow platforms through strategic add-on acquisitions. Our proprietary process identifies, qualifies, contacts, develops, and introduces high-quality targets on a direct basis. We specialize in high-volume buy-and-build strategies within fragmented industries where consolidation drives value.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="flex items-start min-h-[56px] mb-4">
                <h3 className="text-xl font-bold font-serif text-[#0B1F3F]" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                  Platform Sourcing &amp; Formation
                </h3>
              </div>
              <p className="text-gray-700 font-sans text-base" style={{ fontFamily: 'var(--font-open-sans)' }}>
                We work with funded private equity groups and billionaire family offices to acquire new platforms or create consolidated platforms through the strategic combination of smaller companies. Our focus is on specific industries where our clients have historical experience and differentiated competitive advantages.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="flex items-end min-h-[56px] mb-4">
                <h3 className="text-xl font-bold font-serif text-[#0B1F3F]" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                  Buyside M&amp;A Research &amp; Corporate Development
                </h3>
              </div>
              <p className="text-gray-700 font-sans text-base" style={{ fontFamily: 'var(--font-open-sans)' }}>
                Our comprehensive research capabilities and corporate development expertise support clients across the entire M&amp;A lifecycle, from market analysis and target identification to deal execution and post-acquisition integration planning.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t border-gray-200" />
      {/* Industry Certifications & Affiliations Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B1F3F] font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
            Industry Certifications &amp; Affiliations
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
            BowPoint maintains the highest professional standards through our certifications and industry affiliations:
          </p>
          <img
            src="/images/Banner5.png"
            alt="Certifications and Affiliations"
            className="mx-auto max-w-full h-auto"
            style={{ maxHeight: '120px' }}
          />
        </div>
      </section>
      <hr className="border-t border-gray-200" />
      {/* Proven Track Record Section */}
      <section className="w-full pt-16 pb-16 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#0B1F3F] font-serif text-center tracking-tight" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
            Proven Track Record
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Case Study */}
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-6 text-black font-serif tracking-tight" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                Case Study: Industry Roll-Up Strategy
              </h3>
              <div className="mb-4">
                <div className="font-bold text-gray-900 mb-1 font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>Challenge:</div>
                <div className="text-gray-700 font-sans mb-3" style={{ fontFamily: 'var(--font-open-sans)' }}>
                  Leading private equity group needed to form a platform and execute an industry roll-up strategy.
                </div>
                <div className="font-bold text-gray-900 mb-1 font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>Solution:</div>
                <div className="text-gray-700 font-sans mb-3" style={{ fontFamily: 'var(--font-open-sans)' }}>
                  BowPoint sourced multiple deals to establish the initial platform and continued systematic add-on acquisition sourcing throughout the consolidation phase.
                </div>
                <div className="font-bold text-gray-900 mb-1 font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>Results:</div>
                <ul className="space-y-2 text-gray-700 font-sans pl-4 list-disc" style={{ fontFamily: 'var(--font-open-sans)' }}>
                  <li>3 acquisitions combined to establish initial platform by end of 2020</li>
                  <li>10 additional add-on acquisitions successfully closed in 2021</li>
                  <li>Total of 13 acquisitions across several states</li>
                  <li>Client transformation: from idea → to platform → to consolidator → to one of the largest companies in its industry in the United States</li>
                </ul>
              </div>
            </div>
            {/* Industry Recognition + Logo */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col w-full">
                <h3 className="text-xl font-semibold mb-6 text-black font-serif tracking-tight" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
                  Industry Recognition
                </h3>
                <ul className="space-y-3 text-gray-700 font-sans text-base pl-6 list-disc" style={{ fontFamily: 'var(--font-open-sans)' }}>
                  <li>#570 &amp; #692 on Inc. 5000 List - Inc. Magazine</li>
                  <li>6-Time Winner "Best M&amp;A Provider" - SBM</li>
                  <li>40 Under 40 Dealmaker - The M&amp;A Advisor</li>
                  <li>40 Under 40 NACVA Certified Valuation Analysts</li>
                  <li>2-Time Winner Top 100 People to Know in Business</li>
                  <li>Top 50 Workplace - Small Business Monthly</li>
                </ul>
              </div>
              <div className="w-full flex justify-center mt-16">
                <img src="/images/bluelogo.png" alt="Blue Logo" className="w-full max-w-[420px] h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t border-gray-200" />
      {/* Client Testimonials Section */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: '#0B1F3F' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white font-serif text-center" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Testimonial 1 */}
            <div className="rounded-lg border border-white p-6 flex flex-col bg-[#0B1F3F]">
              <div className="flex items-center mb-4">
                <img src="/images/scottcolvert.jpg" alt="Scott Colvert" className="w-16 h-16 rounded-full mr-4 object-cover border border-white" />
                <div className="font-semibold text-white font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>— Scott Colvert, Trinity Hunt Partners</div>
              </div>
              <p className="text-white font-sans text-base" style={{ fontFamily: 'var(--font-open-sans)' }}>
                "After working with several other buyside firms, we have found BowPoint to be a breath of fresh air. They are hard working, responsive, and recently sourced a new platform company for us in the healthcare services sector. They are great at helping us execute our buy-and-build strategies in targeted industry themes by sourcing both platform and add-on opportunities. BowPoint is a key pillar in our front-end origination efforts."
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="rounded-lg border border-white p-6 flex flex-col bg-[#0B1F3F]">
              <div className="flex items-center mb-4">
                <img src="/images/johnwillert.jpg" alt="John Willert" className="w-16 h-16 rounded-full mr-4 object-cover border border-white" />
                <div className="font-semibold text-white font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>— John Willert, Heartwood Partners</div>
              </div>
              <p className="text-white font-sans text-base" style={{ fontFamily: 'var(--font-open-sans)' }}>
                "We retained BowPoint on the buyside to conduct a search and they delivered. BowPoint demonstrated an uncanny ability to deeply understand what makes us tick and then efficiently executed a process that resulted in an introduction to our newest deal. I would recommend BowPoint to all of my private equity colleagues who are looking for their next deal."
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="rounded-lg border border-white p-6 flex flex-col bg-[#0B1F3F]">
              <div className="flex items-center mb-4">
                <img src="/images/jaylandauer.jpg" alt="Jay Landauer" className="w-16 h-16 rounded-full mr-4 object-cover border border-white" />
                <div className="font-semibold text-white font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>— Jay Landauer, Union Capital</div>
              </div>
              <p className="text-white font-sans text-base" style={{ fontFamily: 'var(--font-open-sans)' }}>
                "I have had the good fortune of working with Berlin and the BowPoint team for several years. BowPoint delivers results that exceed our extremely high expectations with the highest level of professionalism and consistency. I would highly recommend the firm to anyone."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B1F3F] font-serif" style={{ fontFamily: 'var(--font-ibm-plex-serif)' }}>
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-sans" style={{ fontFamily: 'var(--font-open-sans)' }}>
            Contact BowPoint today to discuss how our proven deal origination capabilities can help you execute your next strategic acquisition or build your industry-leading platform.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-md bg-[#1F6FFF] px-8 py-3 text-lg font-semibold text-white shadow-md hover:opacity-90 transition-opacity font-sans"
            style={{ fontFamily: 'var(--font-open-sans)' }}
          >
            Request a Custom Growth Plan &rarr;
          </a>
        </div>
      </section>
    </>
  );
}

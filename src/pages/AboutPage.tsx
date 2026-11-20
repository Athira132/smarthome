import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target
} from 'lucide-react';
import { OUR_APPROACH, WHY_CHOOSE_US } from '../data/companyData';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* ============================================================ */}
      {/* 1. PHOTOGRAPHIC HERO BANNER */}
      {/* ============================================================ */}
      <section className="relative min-h-[50vh] sm:min-h-[56vh] flex items-center justify-center py-20 bg-[#FAF8F5] border-b border-[#E2DDD3] overflow-hidden">
        {/* Architectural Background Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-about.jpg"
            alt="Modern Luxury Kerala House Architectural Design"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle light overlay to ensure photograph is clearly visible while text has optimal contrast */}
          <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-3 block">
            About Smart Homes
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14171A] mb-5 leading-tight">
            Designing With Purpose.<br />
            <span className="text-[#B38E46]">Building With Integrity.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#3E464E] font-normal max-w-3xl mx-auto leading-relaxed">
            Smart Homes Builders and Designers is a full-service architecture and design company committed to delivering beautiful, functional and cost-effective building solutions. We believe good architecture should not be limited by budget. Through thoughtful planning, innovative design and professional expertise, we help clients create spaces that suit their needs and lifestyles.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. WHO WE ARE */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-3">
                Who We Are
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14171A] mb-6 leading-tight">
                A Dedicated Architecture & Design Practice
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#3E464E] font-normal leading-relaxed mb-8">
                <p>
                  At Smart Homes Builders and Designers, we approach every structure as a unique dialogue between human life, available land, and natural surroundings. Based in Palakkad, Kerala, our practice offers integrated architectural planning, 3D visualization, interior craftsmanship, and turnkey construction supervision.
                </p>
                <p>
                  We recognize that constructing or renovating a home is one of life’s most meaningful investments. That is why our team is committed to disciplined budgeting, transparent communication, and meticulous technical precision throughout the entire project lifecycle.
                </p>
                <p>
                  From compact modern residential houses to sprawling contemporary villas and practical commercial spaces, our portfolio reflects our dedication to enduring beauty and practical comfort.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-[#E2DDD3]">
                <div className="p-4 rounded-lg bg-white border border-[#E2DDD3] shadow-xs">
                  <span className="text-xs uppercase tracking-widest text-[#B38E46] block font-bold mb-1">Planning</span>
                  <p className="text-xs text-[#57606A]">Precision architectural blueprints and customized space planning.</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-[#E2DDD3] shadow-xs">
                  <span className="text-xs uppercase tracking-widest text-[#B38E46] block font-bold mb-1">Execution</span>
                  <p className="text-xs text-[#57606A]">Comprehensive on-site supervision and turnkey completion.</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-[#E2DDD3] shadow-lg">
                <img
                  src="/images/about/who-we-are.jpg"
                  alt="Smart Homes Architectural Studio & Planning"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white border border-[#B38E46]/30 p-5 rounded-xl shadow-xl hidden sm:block max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#B38E46]/10 flex items-center justify-center text-[#B38E46]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#14171A]">Full-Service Architecture</span>
                </div>
                <p className="text-[11px] text-[#57606A]">From preliminary sketches to building permits and turnkey delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. OUR MISSION */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#F5F2EB] border-y border-[#E2DDD3] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-[#E2DDD3] shadow-md">
                <img
                  src="/images/about/our-mission.jpg"
                  alt="Family Home Architectural Design"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start lg:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#B38E46]/10 flex items-center justify-center text-[#B38E46] mb-4">
                <Target className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-2">
                Our Mission
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14171A] mb-6 leading-tight">
                Making Better Spaces Accessible to Everyone
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#3E464E] font-normal leading-relaxed mb-6">
                <p>
                  Our mission is to provide high-quality, cost-effective home extension, renovation and construction solutions.
                </p>
                <p>
                  Whether you are planning additional floors, expanding your kitchen or bathroom, renovating an existing space or building a new home, we bring the experience and expertise needed to make your project successful.
                </p>
                <p className="text-[#14171A] font-semibold">
                  We are passionate about creating beautiful, functional and comfortable spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. OUR APPROACH (THE 7 GUIDING PRINCIPLES) */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-3 block">
              Methodology & Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] mb-4">
              Our Architectural Approach
            </h2>
            <p className="text-sm sm:text-base text-[#57606A] font-normal leading-relaxed">
              We guide every project through seven structured, client-centered steps to ensure flawless execution and budget discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OUR_APPROACH.map((step) => (
              <div
                key={step.step}
                className="group p-7 rounded-xl bg-white border border-[#E2DDD3] hover:border-[#B38E46] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-[#B38E46]">
                      0{step.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E2DDD3] flex items-center justify-center text-[#B38E46] group-hover:bg-[#B38E46] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#14171A] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57606A] font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Card as a Contact Invitation */}
            <div className="p-7 rounded-xl bg-[#F5F2EB] border border-[#B38E46]/40 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold block mb-2">Ready to Begin?</span>
                <h3 className="font-display text-xl font-bold text-[#14171A] mb-3">
                  Let's Discuss Your Architectural Project
                </h3>
                <p className="text-xs text-[#57606A] leading-relaxed mb-6 font-normal">
                  Get in touch with our team in Palakkad for personalized consultations and preliminary site assessments.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded bg-[#B38E46] hover:bg-[#96722E] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Contact Our Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. WHY CHOOSE US SUMMARY */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#F5F2EB] border-t border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-2 block">
              Core Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14171A] mb-4">
              Why Clients Trust Smart Homes
            </h2>
            <p className="text-sm text-[#57606A] leading-relaxed font-normal">
              We combine creative thinking, practical planning and professional expertise to deliver architectural solutions that balance beauty, functionality and affordability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.slice(0, 4).map((item) => (
              <div key={item.id} className="p-6 rounded-lg bg-white border border-[#E2DDD3] shadow-xs">
                <span className="font-serif text-[#B38E46] text-xl font-bold block mb-2">0{item.id}</span>
                <h4 className="font-display text-base font-bold text-[#14171A] mb-2">{item.title}</h4>
                <p className="text-xs text-[#57606A] leading-relaxed font-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

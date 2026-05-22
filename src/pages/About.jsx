// src/pages/About.jsx
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// ── Data ────────────────────────────────────────────────────
const WHY_CHOOSE = [
  'Over 7000+ PCs Crafted with Precision',
  'Industry-Expert Consultation',
  '48-Hour In-House Testing for Quality Assurance',
  '3-Stage Ultra-Durable Packaging',
  'Dedicated and Experienced Technical Support for Hardware',
  '3 Months Free Onsite Warranty Included',
  'Free delivery and setup available for residents in Chennai',
  'We fully handle Warranty claims for PC Hardware',
  'Pan India free Shipping',
  'No Service charge for Hardware upgrade',
]

const BUILDS = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/80?img=11',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80',
    desc: 'Built for YouTuber Finally, this AMD R9 3900X and RTX 2060 setup with 32GB RAM and 500GB NVMe SSD delivers top-notch performance for content creation.',
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/80?img=52',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    desc: 'Built for movie star Vijay Antony, this Dell PowerEdge RX70 server with 144TB storage handles massive data workloads with ease.',
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/80?img=33',
    image: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=600&q=80',
    desc: 'Built for YouTuber Madan Gowri, this high-performance Intel i9-13900K and RTX 4080 setup with 64GB RAM and dual 1TB NVMe handles 4K editing effortlessly.',
  },
  {
    id: 4,
    avatar: 'https://i.pravatar.cc/80?img=14',
    image: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=600&q=80',
    desc: 'Built for popular YouTuber Simply Sarath, this editing-focused PC features an AMD R9 3900X, RX570, 16GB RAM, and exceptional CPU performance for smooth, reliable content creation.',
  },
  {
    id: 5,
    avatar: 'https://i.pravatar.cc/80?img=55',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80',
    desc: 'Designed for YouTuber Out Of Focus, this high-performance build with AMD Ryzen 7 3700X, RTX 2060, 16GB RAM, and 500GB NVMe SSD ensures smooth video editing and content creation.',
  },
  {
    id: 6,
    avatar: 'https://i.pravatar.cc/80?img=66',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80',
    desc: 'Designed for singer and actor Hiphop Tamizha, this Intel i7-13700K and RTX 4070 build, paired with 64GB RAM and 1TB Gen4 SSD, ensures exceptional music production and video editing.',
  },
  {
    id: 7,
    avatar: 'https://i.pravatar.cc/80?img=17',
    image: 'https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=600&q=80',
    desc: 'A custom RGB gaming rig built for a pro esports player featuring RTX 4090 and i9-14900K with liquid cooling for tournament-level performance.',
  },
]

// Show 3 cards at a time
const VISIBLE = 3

export default function About() {
  const [slide, setSlide] = useState(0)
  const totalSlides = Math.ceil(BUILDS.length / 1) - (VISIBLE - 1)

  const prev = () => setSlide((s) => Math.max(0, s - 1))
  const next = () => setSlide((s) => Math.min(BUILDS.length - VISIBLE, s + 1))

  const visible = BUILDS.slice(slide, slide + VISIBLE)

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* ── HERO — About Us ───────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 pt-14 pb-0">
        <h1 className="text-5xl font-extrabold text-white mb-16">About Us</h1>

        {/* Mission */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-24">
          {/* Left text */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-orange-500 text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-white text-xl font-bold mb-4">
              Making powerful PCs accessible to everyone.
            </p>
            <p className="text-gray-300 text-[15px] leading-relaxed text-justify">
              At ISERK we build reliable, easy-to-use computers and back them with expert
              support. We focus on simple experiences so customers can get the performance
              they need without the complexity.
            </p>
          </div>

          {/* Right image — target/bullseye */}
          <div className="flex-shrink-0 w-72 h-72 flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-2xl">
              {/* Outer ring */}
              <circle cx="150" cy="160" r="130" fill="#c0392b" />
              <circle cx="150" cy="160" r="100" fill="#e74c3c" />
              <circle cx="150" cy="160" r="70"  fill="#c0392b" />
              <circle cx="150" cy="160" r="40"  fill="#e74c3c" />
              <circle cx="150" cy="160" r="15"  fill="#c0392b" />
              {/* Stand */}
              <rect x="130" y="280" width="40" height="16" rx="4" fill="#555" />
              <rect x="110" y="292" width="80" height="8"  rx="4" fill="#333" />
              {/* Arrows */}
              <line x1="50"  y1="80"  x2="150" y2="160" stroke="#e67e22" strokeWidth="5" strokeLinecap="round"/>
              <polygon points="150,160 140,145 165,148" fill="#e67e22"/>
              <line x1="90"  y1="50"  x2="150" y2="160" stroke="#e67e22" strokeWidth="5" strokeLinecap="round"/>
              <polygon points="150,160 135,152 158,140" fill="#e67e22"/>
            </svg>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 mb-24">
          {/* Right text */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-orange-500 text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-white text-xl font-bold mb-4">
              Technology that empowers opportunity.
            </p>
            <p className="text-gray-300 text-[15px] leading-relaxed text-justify">
              We envision a future where thoughtful design and dependable hardware remove
              barriers to creativity, learning, and work — enabling everyone to benefit from
              modern computing.
            </p>
          </div>

          {/* Left image — eye */}
          <div className="flex-shrink-0 w-80 h-52 flex items-center justify-center">
            <svg viewBox="0 0 400 220" className="w-full h-full drop-shadow-2xl">
              {/* Eye outline */}
              <path
                d="M20,110 Q200,-40 380,110 Q200,260 20,110 Z"
                fill="none" stroke="#e74c3c" strokeWidth="18" strokeLinejoin="round"
              />
              {/* Iris */}
              <circle cx="200" cy="110" r="72" fill="#c0392b" />
              {/* Inner rings */}
              <circle cx="200" cy="110" r="55" fill="#111" />
              <circle cx="200" cy="110" r="38" fill="#c0392b" />
              <circle cx="200" cy="110" r="24" fill="#111" />
              {/* Pupil white */}
              <circle cx="200" cy="110" r="13" fill="white" />
              {/* Sparkles */}
              <text x="185" y="100" fill="white" fontSize="18" fontWeight="bold">✦</text>
              <text x="200" y="118" fill="white" fontSize="10">✦</text>
              {/* Eye lines (decorative) */}
              <path d="M128,110 Q200,50 272,110" fill="none" stroke="#e74c3c" strokeWidth="6"/>
              <path d="M128,110 Q200,170 272,110" fill="none" stroke="#e74c3c" strokeWidth="6"/>
            </svg>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-24">
          {/* Left text */}
          <div className="flex-1">
            <h2 className="text-orange-500 text-3xl font-bold mb-6">Why Choose Us</h2>
            <ul className="flex flex-col gap-3">
              {WHY_CHOOSE.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white text-[15px]">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right image — handshake */}
          <div className="flex-shrink-0 w-72 h-64 flex items-center justify-center">
            <svg viewBox="0 0 320 260" className="w-full h-full drop-shadow-2xl">
              {/* Orange sleeves */}
              <path d="M0,80 L110,130 L80,200 L0,180 Z"   fill="#e74c3c"/>
              <path d="M320,80 L210,130 L240,200 L320,180 Z" fill="#e74c3c"/>
              {/* Hands — simplified */}
              <ellipse cx="130" cy="148" rx="45" ry="28" fill="#f0d0a0" transform="rotate(-10,130,148)"/>
              <ellipse cx="190" cy="148" rx="45" ry="28" fill="#d4a870" transform="rotate(10,190,148)"/>
              {/* Fingers */}
              <rect x="100" y="120" width="14" height="30" rx="7" fill="#f0d0a0" transform="rotate(-15,107,135)"/>
              <rect x="116" y="115" width="14" height="32" rx="7" fill="#f0d0a0" transform="rotate(-8,123,131)"/>
              <rect x="132" y="113" width="14" height="32" rx="7" fill="#f0d0a0"/>
              <rect x="175" y="113" width="14" height="32" rx="7" fill="#d4a870"/>
              <rect x="191" y="115" width="14" height="32" rx="7" fill="#d4a870" transform="rotate(8,198,131)"/>
              <rect x="207" y="120" width="14" height="30" rx="7" fill="#d4a870" transform="rotate(15,214,135)"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ── BUILDS CAROUSEL ──────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 pb-20">
        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((build, i) => {
              const isCenter = i === 1
              return (
                <div
                  key={build.id}
                  className={`relative rounded-3xl overflow-visible transition-transform duration-300 ${
                    isCenter
                      ? 'bg-white text-black scale-105 shadow-2xl z-10'
                      : 'bg-[#1a1a1a] text-gray-300'
                  }`}
                >
                  {/* Avatar */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-14 h-14 rounded-full border-4 border-orange-500 overflow-hidden">
                      <img
                        src={build.avatar}
                        alt="avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="pt-10 px-4 pb-5 flex flex-col gap-4">
                    {/* Build image */}
                    <div className="rounded-2xl overflow-hidden h-52">
                      <img
                        src={build.image}
                        alt="build"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Description */}
                    <p className={`text-[13px] leading-relaxed text-justify italic ${
                      isCenter ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {build.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              disabled={slide === 0}
              className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {BUILDS.slice(0, BUILDS.length - VISIBLE + 1).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === slide
                      ? 'w-6 h-3 bg-orange-500'
                      : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={slide >= BUILDS.length - VISIBLE}
              className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 pb-24 flex flex-col items-center">
        <h2 className="text-orange-500 text-4xl font-extrabold italic mb-10">Founder</h2>

        <div className="relative flex flex-col items-center">
          {/* Founder photo */}
          <div className="w-64 h-80 relative">
            <img
              src="https://i.pravatar.cc/300?img=68"
              alt="Founder"
              className="w-full h-full object-cover object-top"
              style={{ background: 'transparent' }}
            />
          </div>

          {/* Name card */}
          <div
            className="relative bg-white text-black px-8 py-3 mt-0"
            style={{
              clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0% 100%)',
              minWidth: 260,
            }}
          >
            <p className="font-bold text-[18px]">Nandha Kumar A</p>
            <p className="text-gray-500 text-[14px]">Founder, CEO</p>
          </div>

          <p className="text-gray-300 text-[14px] mt-3 text-center max-w-xl">
            Nandha Kumar is a systems engineer and entrepreneur with over a decade of
            experience building custom PCs and technical services across India. He leads
            product strategy and customer support with a focus on reliability and value.
          </p>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────── */}
      <section id="contact" className="max-w-[1280px] mx-auto px-6 pb-32 flex flex-col items-center">
        <h2 className="text-orange-500 text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-300 mb-6 text-center max-w-xl">
          Have a project or a question? Reach out and we'll help you find the right
          solution — free consultation and quotes available.
        </p>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full"
        >
          Contact Us
        </a>
      </section>

    </div>
  )
}

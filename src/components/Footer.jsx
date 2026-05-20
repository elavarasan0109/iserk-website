// src/components/Footer.jsx
import { Mail } from 'lucide-react'

const COL_LINKS = {
  Company: ['About Us', 'Prebuild', 'Accessories'],
  Support: ['Contact Us', 'Refund Policy', 'Privacy Policy', 'Terms of Service'],
}

export default function Footer() {
  return (
    <footer className="bg-brand-gray border-t border-brand-gray-mid mt-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="flex flex-col gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path d="M14 2C14 2 20 8 20 14C20 17.3 17.3 20 14 20C10.7 20 8 17.3 8 14C8 11 10 9 10 9C10 9 10 13 13 13C13 10 12 7 14 2Z" fill="#FF4500"/>
              <path d="M14 20C14 20 11 18 11 15C11 13.3 12.3 12 14 12C15.7 12 17 13.3 17 15C17 17 15.5 19 14 20Z" fill="#FFCC00"/>
            </svg>
            <span className="font-display font-800 text-brand-black tracking-widest text-lg uppercase"
                  style={{ letterSpacing: '0.18em' }}>
              ISERK
            </span>
          </div>
          <p className="font-sans font-400 text-[13px] text-brand-text-muted leading-relaxed max-w-[220px]">
           Premium tech accessories and precision-built PCs designed just for you. We deeply consider a PC is an investment to POWER YOUR JOURNEY
          </p>
        </div>

        {/* Nav link columns */}
        {Object.entries(COL_LINKS).map(([heading, links]) => (
          <div key={heading} className="flex flex-col gap-3">
            <p className="font-sans font-700 text-[14px] text-brand-black uppercase tracking-wide">
              {heading}
            </p>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans font-400 text-[14px] text-brand-text-muted hover:text-brand-orange transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Reach to us */}
        <div className="flex flex-col gap-3">
          <p className="font-sans font-700 text-[14px] text-brand-black uppercase tracking-wide">
            Reach to us
          </p>
          <div className="flex flex-col gap-3">
            {/* Support */}
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                <Mail size={14} strokeWidth={2} className="text-white" />
              </span>
              <div>
                <p className="font-sans font-600 text-[12px] text-brand-text-muted uppercase tracking-wide">
                  For Support
                </p>
                <a
                  href="mailto:support@iserk.in"
                  className="font-sans font-500 text-[13px] text-brand-black hover:text-brand-orange transition-colors"
                >
                  support@iserk.in
                </a>
              </div>
            </div>

            {/* Sales */}
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                <Mail size={14} strokeWidth={2} className="text-white" />
              </span>
              <div>
                <p className="font-sans font-600 text-[12px] text-brand-text-muted uppercase tracking-wide">
                  For Sales
                </p>
                <a
                  href="mailto:enquiry@iserk.in"
                  className="font-sans font-500 text-[13px] text-brand-black hover:text-brand-orange transition-colors"
                >
                  enquiry@iserk.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-gray-mid">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans font-400 text-[13px] text-brand-text-muted">
            © {new Date().getFullYear()} ISERK. All rights reserved.
          </p>
          <p className="font-sans font-400 text-[13px] text-brand-text-muted">
            Built with ❤️ for gamers & creators
          </p>
        </div>
      </div>
    </footer>
  )
}

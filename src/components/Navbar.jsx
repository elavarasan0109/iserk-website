import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Prebuild", to: "/prebuild" },
  { label: "Accessories", to: "/accessories" },
  { label: "About", to: "/about" },
  { label: "My Configurations", to: "/configurations" },
  { label: "Gallery", to: "/gallery" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getCartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md text-white shadow-xl shadow-slate-950/20">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">ISERK PC</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-inner shadow-black/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-slate-100 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-orange-400 md:inline-flex"
          >
            LOG in
          </Link>

          <Link to="/cart" className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white transition hover:bg-slate-800 md:h-10 md:w-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 13L5 21h14l-2-8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 18a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z" fill="currentColor" />
            </svg>
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                {getCartCount()}
              </span>
            )}
          </Link>

          <button className="hidden h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-slate-900 md:inline-flex">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80" alt="Profile" className="h-full w-full object-cover" />
          </button>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-200 transition hover:border-slate-500 md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((current) => !current)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 pb-4 pt-3 md:hidden">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="block rounded-xl px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-slate-900 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <button className="w-full rounded-full bg-orange-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-orange-400">
              Build Now
            </button>
            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 13L5 21h14l-2-8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 18a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z" fill="currentColor" />
                </svg>
              </button>
              <button className="h-9 w-9 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80" alt="Profile" className="h-full w-full object-cover" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

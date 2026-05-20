export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.75fr_1.1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-bold text-white">
                N
              </div>
              <p className="text-2xl font-semibold tracking-tight">NUKEPC</p>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-900">
              Hassle-free computing experience with precision-built PCs designed just for you. We deeply consider a PC is an investment to POWER YOUR JOURNEY.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4 text-sm text-slate-900">
              <a href="#about" className="block transition hover:text-slate-700">About Us</a>
              <a href="#prebuild" className="block transition hover:text-slate-700">Prebuild</a>
              <a href="#accessories" className="block transition hover:text-slate-700">Accessories</a>
            </div>
            <div className="space-y-4 text-sm text-slate-900">
              <a href="#contact" className="block transition hover:text-slate-700">Contact Us</a>
              <a href="#refund" className="block transition hover:text-slate-700">Refund Policy</a>
              <a href="#privacy" className="block transition hover:text-slate-700">Privacy Policy</a>
              <a href="#terms" className="block transition hover:text-slate-700">Terms of Service</a>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-3xl font-semibold tracking-tight text-slate-950">Reach to us</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-[1.75rem] bg-white px-5 py-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">For Support</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">support@nukepc.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-[1.75rem] bg-white px-5 py-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">For Sales</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">enquiry@nukepc.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-[1.75rem] bg-white px-5 py-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.86 19.86 0 0 1 3 4.09 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75 12.01 12.01 0 0 0 .7 2.58 1 1 0 0 1-.23 1L8.36 8.91a16.05 16.05 0 0 0 7.73 7.73l1.56-1.2a1 1 0 0 1 1 .03 12.01 12.01 0 0 0 2.58.7 1 1 0 0 1 .75 1V16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">For Instant Replies</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">+91 90253 80083</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-[1.75rem] bg-white px-5 py-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M21 10a9 9 0 1 1-9-9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 10a9 9 0 0 1-5.64 8.37L12 12" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 10H12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">Our Address</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">Chennai, TN</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-300 pt-8 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-center gap-4 text-slate-500 sm:justify-start">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700">IG</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700">YT</span>
          </div>
          <p className="mt-4 text-sm text-slate-500 sm:mt-0">© 2026 Nuke Technologies Private Limited. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

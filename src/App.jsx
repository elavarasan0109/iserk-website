import Navbar from './components/Navbar'
import Footer from './components/Footer'
import heroImg from './assets/hero.png'

const serviceItems = [
  {
    title: 'Gaming / Streaming',
    subtitle: 'Play titles, stream live, and keep your rig running cool.',
    icon: '🎮',
    accent: 'from-orange-500/20 via-transparent to-transparent',
  },
  {
    title: 'Content Creation',
    subtitle: 'Video editing, 3D work, and creative production workflows.',
    icon: '🎬',
    accent: 'from-amber-500/20 via-transparent to-transparent',
  },
  {
    title: 'Engineering Works',
    subtitle: 'CAD, simulation, and design with powerful compute.',
    icon: '🛠️',
    accent: 'from-rose-500/20 via-transparent to-transparent',
  },
  {
    title: 'Data Science and others',
    subtitle: 'AI, analytics, and compute-heavy research workloads.',
    icon: '📊',
    accent: 'from-sky-500/20 via-transparent to-transparent',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute right-[-12rem] top-12 h-[36rem] w-[36rem] rounded-full bg-orange-600/20 blur-3xl" />

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-orange-400">NUKEPC</p>
                <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
                  Power <span className="text-orange-500">Your</span> Journey
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Get your Powerful PC - <span className="text-orange-400">Hassle-free</span> designed and assembled to Power Your Journey.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#build"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_20px_60px_-30px_rgba(255,92,25,0.8)] transition hover:bg-orange-400"
                >
                  Build Now
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#priority"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-orange-500/40 bg-slate-900/70 px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-orange-400/60"
                >
                  Priority - Rs.299
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-3xl">
              <div className="absolute left-1/2 top-8 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/30">
                <img src={heroImg} alt="NUKEPC rig" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-[3rem] border border-white/10 bg-slate-950/90 p-6 ring-1 ring-white/5 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {serviceItems.map((item) => (
                <div key={item.title} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                  <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${item.accent} blur-3xl`} />
                  <div className="relative space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-sm leading-6 text-slate-300">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App

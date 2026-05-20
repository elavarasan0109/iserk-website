export default function About() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm text-slate-500 mb-4">Home / About</p>
        <h1 className="text-4xl font-bold text-slate-950 mb-6">About</h1>
        <div className="space-y-6 rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/70 border border-slate-200">
          <p className="text-base leading-8 text-slate-700">
            Welcome to NukePC. We craft powerful prebuilt gaming PCs and accessories so you can get back to what matters most — performance, reliability, and style.
          </p>
          <p className="text-base leading-8 text-slate-700">
            Our team combines premium components with expert assembly, making it simple to choose the right setup for your needs.
          </p>
        </div>
      </div>
    </div>
  )
}

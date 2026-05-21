export default function Gallery() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm text-slate-500 mb-4">Home / Gallery</p>
        <h1 className="text-4xl font-bold text-slate-950 mb-6">Gallery</h1>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="h-60 rounded-[2rem] bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 shadow-lg" />
          <div className="h-60 rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 shadow-lg" />
          <div className="h-60 rounded-[2rem] bg-gradient-to-br from-emerald-500 via-cyan-500 to-sky-500 shadow-lg" />
        </div>
      </div>
    </div>
  )
}

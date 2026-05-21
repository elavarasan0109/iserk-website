import { useState } from 'react'

export default function Gallery() {
  const [filter, setFilter] = useState('all')

  const galleryItems = [
    {
      id: 1,
      title: 'Black CPU Build',
      category: 'black',
      src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=80'
    },
    {
      id: 2,
      title: 'White CPU Setup',
      category: 'white',
      src: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1400&q=80'
    },
    {
      id: 3,
      title: 'Black Gaming PC',
      category: 'black',
      src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80'
    },
    {
      id: 4,
      title: 'White Performance Rig',
      category: 'white',
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80'
    },
    {
      id: 5,
      title: 'Black RGB CPU',
      category: 'black',
      src: 'https://images.unsplash.com/photo-1505740106531-4243f3831f4b?auto=format&fit=crop&w=1400&q=80'
    },
    {
      id: 6,
      title: 'White Cooler Tower',
      category: 'white',
      src: 'https://images.unsplash.com/photo-1580894908361-0230b9a3a7cf?auto=format&fit=crop&w=1400&q=80'
    },
    {
      id: 7,
      title: 'Black CPU Closeup',
      category: 'black',
      src: 'https://images.unsplash.com/photo-1527430253228-019af2562c04?auto=format&fit=crop&w=1400&q=80'
    },
    {
      id: 8,
      title: 'White High-End Build',
      category: 'white',
      src: 'https://images.unsplash.com/photo-1494891848038-0bd7a2bf1f54?auto=format&fit=crop&w=1400&q=80'
    }
  ]

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === filter)

  const filterButtons = [
    { value: 'all', label: 'All' },
    { value: 'white', label: 'White' },
    { value: 'black', label: 'Black' }
  ]

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-8">
          <div>
            <p className="text-sm text-slate-400 mb-2">Home / Gallery</p>
            <h1 className="text-4xl font-extrabold tracking-tight">
              <span className="text-white">ISERK PC </span>
              <span className="text-orange-500">Gallery</span>
            </h1>

            <div className="mt-4 flex flex-wrap gap-3">
              {filterButtons.map(button => (
                <button
                  key={button.value}
                  type="button"
                  onClick={() => setFilter(button.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    filter === button.value
                      ? 'bg-orange-500 text-black shadow-lg'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-full bg-slate-900/30 p-1 shadow-inner">
            <div className="flex items-center rounded-full bg-slate-800/30 p-1">
              <button className="px-4 py-2 rounded-full bg-orange-500 text-black font-medium">
                Gallery
              </button>
              <button className="px-4 py-2 rounded-full text-slate-300">Wallpapers</button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map(item => (
            <button
              key={item.id}
              type="button"
              onClick={() => window.open(item.src, '_blank')}
              className="group rounded-3xl overflow-hidden shadow-[0_35px_80px_-45px_rgba(255,255,255,0.25)] bg-slate-900/30 transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-4 bg-slate-950/80">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="text-sm text-slate-400 mt-1 capitalize">
                  {item.category} CPU build
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

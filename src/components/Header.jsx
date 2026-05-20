import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-bold">I</div>
          <span className="text-xl font-bold">ISERK PC</span>
        </div>

        <nav className="hidden md:flex gap-8">
          <a href="/" className="hover:text-orange-500 transition">Home</a>
          <a href="/prebuild" className="hover:text-orange-500 transition">Prebuild</a>
          <a href="/accessories" className="hover:text-orange-500 transition">Accessories</a>
          <a href="/about" className="hover:text-orange-500 transition">About</a>
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-gray-700 px-6 py-4 flex flex-col gap-4">
          <a href="/" className="hover:text-orange-500">Home</a>
          <a href="/prebuild" className="hover:text-orange-500">Prebuild</a>
          <a href="/accessories" className="hover:text-orange-500">Accessories</a>
          <a href="/about" className="hover:text-orange-500">About</a>
        </nav>
      )}
    </header>
  );
};

export default Header;

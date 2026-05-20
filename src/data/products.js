// src/data/products.js
// Product catalogue for ISERK Accessories page

export const CATEGORIES = [
  { id: 'monitor',  label: 'Monitor',  icon: 'Monitor' },
  { id: 'mouse',    label: 'Mouse',    icon: 'Mouse' },
  { id: 'keyboard', label: 'Keyboard', icon: 'Keyboard' },
  { id: 'others',   label: 'Others',   icon: 'Headphones' },
]

export const PRODUCTS = [
  // ── Monitors ──────────────────────────────────────────────
  {
    id: 1,
    name: 'GIGABYTE GS27QA 27" QHD 165Hz Gaming Monitor',
    category: 'monitor',
    price: 15699,
    image: 'https://m.media-amazon.com/images/I/51oqrxnOKSL._SX679_.jpg',
    badge: 'Gaming',
  },
  {
    id: 2,
    name: 'BENQ GW2790Q 27" IPS QHD 100Hz Monitor',
    category: 'monitor',
    price: 15499,
    image: 'https://image.benq.com/is/image/benqco/GW2786tc-front-high?$ResponsivePreset$&fmt=png-alpha',
    badge: 'Eye Care',
  },
  {
    id: 3,
    name: 'Samsung LS24D300GAWXXL 24" IPS FHD Monitor',
    category: 'monitor',
    price: 7700,
    image: 'https://m.media-amazon.com/images/I/71JwKnROg8L._SX679_.jpg',
    badge: 'Budget Pick',
  },
  {
    id: 4,
    name: 'Samsung Odyssey G4 LS25BG402 25" IPS 240Hz',
    category: 'monitor',
    price: 14999,
    image: 'https://m.media-amazon.com/images/I/81DR0onRZrL._SX450_.jpg',
    badge: 'Fast IPS',
  },
  {
    id: 5,
    name: 'VIEWSONIC VX3276-2K-MHD 32" QHD IPS Monitor',
    category: 'monitor',
    price: 19990,
    image: 'https://image.benq.com/is/image/benqco/01-ex271q-front-high?$ResponsivePreset$&fmt=png-alpha',
    badge: '32 Inch',
  },
  {
    id: 6,
    name: 'LG 27GP850-B 27" IPS QHD 165Hz Nano IPS',
    category: 'monitor',
    price: 22999,
    image: 'https://m.media-amazon.com/images/I/81F3Adp4TrL._SX679_.jpg',
    badge: 'Nano IPS',
  },

  // ── Mice ──────────────────────────────────────────────────
  {
    id: 7,
    name: 'Logitech G502 X Plus Wireless Gaming Mouse',
    category: 'mouse',
    price: 8999,
    image: 'https://m.media-amazon.com/images/I/313-AmeyIEL._SY300_SX300_QL70_FMwebp_.jpg',
    badge: 'Wireless',
  },
  {
    id: 8,
    name: 'Razer DeathAdder V3 HyperSpeed Wireless',
    category: 'mouse',
    price: 5999,
    image: 'https://m.media-amazon.com/images/I/41OoMb0b23L._SY300_SX300_QL70_FMwebp_.jpg',
    badge: 'Ergonomic',
  },
  {
    id: 9,
    name: 'SteelSeries Aerox 3 Ultra-Light Gaming Mouse',
    category: 'mouse',
    price: 4999,
    image: 'https://m.media-amazon.com/images/I/61sj+FpAQOL.jpg',
    badge: 'Ultra-Light',
  },
  {
    id: 10,
    name: 'Logitech MX Master 3S Wireless Productivity',
    category: 'mouse',
    price: 9299,
    image: 'https://m.media-amazon.com/images/I/313-AmeyIEL._SY300_SX300_QL70_FMwebp_.jpg',
    badge: 'Productivity',
  },

  // ── Keyboards ────────────────────────────────────────────
  {
    id: 11,
    name: 'Keychron K8 Pro Wireless Mechanical Keyboard',
    category: 'keyboard',
    price: 7499,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&q=80',
    badge: 'Mechanical',
  },
  {
    id: 12,
    name: 'Corsair K70 RGB Pro Full-size MX Red',
    category: 'keyboard',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&q=80',
    badge: 'RGB',
  },
  {
    id: 13,
    name: 'Logitech G915 TKL Lightspeed Wireless',
    category: 'keyboard',
    price: 15999,
    image: 'https://m.media-amazon.com/images/I/611TTTsiGDL._AC_UY218_.jpg',
    badge: 'Wireless',
  },
  {
    id: 14,
    name: 'HyperX Alloy Origins 60 Mechanical TKL',
    category: 'keyboard',
    price: 5499,
    image: 'https://m.media-amazon.com/images/I/61oN0PZVWEL._AC_UY218_.jpg',
    badge: '60%',
  },

  // ── Others ────────────────────────────────────────────────
  {
    id: 15,
    name: 'Logitech C270 HD Webcam 720p',
    category: 'others',
    price: 2000,
    image: 'https://m.media-amazon.com/images/I/51Fwl-lCwGL._AC_UY218_.jpg',
    badge: 'Webcam',
  },
  {
    id: 16,
    name: 'HyperX Cloud II Wired Gaming Headset',
    category: 'others',
    price: 6999,
    image: 'https://m.media-amazon.com/images/I/71ltsViEA8L._AC_UY218_.jpg',
    badge: 'Headset',
  },
  {
    id: 17,
    name: 'Ant Esports Python Premium Gaming Chair Black',
    category: 'others',
    price: 16499,
    image: 'https://m.media-amazon.com/images/I/31jDV1B5vIL._AC_SR250,250_QL65_.jpg',
    badge: 'Chair',
  },
  {
    id: 18,
    name: 'Zebronics Zeb-Companion 107 USB Mouse & Keyboard Combo',
    category: 'others',
    price: 599,
    image: 'https://m.media-amazon.com/images/I/61ZvJw9wlXL._SX679_.jpg',
    badge: 'Combo',
  },
]

export const BANNER_SLIDES = [
  {
    id: 1,
    tag: 'Just at ₹ 16,499',
    title: 'Ant Esports Python\nPremium Gaming Chair\nBlack',
    cta: 'Shop Now',
    bg: '#FFCC00',
    textColor: '#111111',
    image: 'https://m.media-amazon.com/images/I/519hXESzIWL._SX679_.jpg',
  },
  {
    id: 2,
    tag: 'Just at ₹ 8,999',
    title: 'Logitech G502 X Plus\nWireless Gaming\nMouse',
    cta: 'Shop Now',
    bg: '#111111',
    textColor: '#FFCC00',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80',
  },
  {
    id: 3,
    tag: 'Just at ₹ 15,699',
    title: 'GIGABYTE GS27QA\n27" QHD 165Hz\nGaming Monitor',
    cta: 'Shop Now',
    bg: '#FF4500',
    textColor: '#ffffff',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80',
  },
]

export const MAX_BUDGET = 50000

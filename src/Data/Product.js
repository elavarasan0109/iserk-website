import gaming from "../assets/gaming.png";
import creator from "../assets/creator.png";
import productivity from "../assets/productivity.png";
import office from "../assets/office.png";
import redpill from "../assets/redpill.png";
import consolePc from "../assets/console.png";

const products = [
  {
    id: 1,
    title: "High FPS Gaming",
    type: "Mid-Range",
    price: "72,290",
    image: gaming,
    purpose: "gaming streaming",
    warranty: "12 Months",
    processor: "AMD RYZEN 5 5500 6C/12T | PROCESSOR",
    gpu: "ASUS AMD RADEON RX 7600 8GB DUAL OC | Graphics Card",
    motherboard: "MSI B550M PRO-VDH DDR4 WIFI | MOTHERBOARD",
    ram: "ADATA XPG GAMMIX D30 16GB 3200MHZ DDR4 | RAM - 16GB",
    cooler: "N/A",
    storage1: "GIGABYTE 240GB SATA | SSD",
    storage2: "N/A",
    case: "MSI MAG FORCE 120A AIRFLOW BLACK CABINET",
    psu: "MSI MAG A550BN 550W 80 PLUS BRONZE | PSU"
  },
  {
    id: 2,
    title: "Gaming X Creator",
    type: "Mid-Range",
    price: "64,990",
    image: creator,
    purpose: "gaming rendering",
    warranty: "12 Months",
    processor: "Intel Core i5-12400F 6C/12T | PROCESSOR",
    gpu: "NVIDIA RTX 3060 12GB | Graphics Card",
    motherboard: "ASUS Prime B660M-K | MOTHERBOARD",
    ram: "Crucial Ballistix 16GB DDR4 3200MHz | RAM",
    cooler: "Stock Cooler",
    storage1: "Kingston 240GB NV1 M.2 SSD",
    storage2: "N/A",
    case: "Corsair SPEC-DELTA RGB Cabinet",
    psu: "Corsair CV550 550W 80 PLUS BRONZE | PSU"
  },
  {
    id: 3,
    title: "Entry Productivity PC",
    type: "Entry",
    price: "36,190",
    image: productivity,
    purpose: "productivity office",
    warranty: "12 Months",
    processor: "AMD Ryzen 3 3100 4C/8T | PROCESSOR",
    gpu: "Integrated Graphics",
    motherboard: "ASRock B450M Pro4 | MOTHERBOARD",
    ram: "Kingston ValueRAM 8GB DDR4 | RAM",
    cooler: "Stock Cooler",
    storage1: "Kingston 240GB SSD",
    storage2: "N/A",
    case: "Generic Mid Tower Cabinet",
    psu: "Corsair CV450 450W | PSU"
  },
  {
    id: 4,
    title: "Daily Productivity PC",
    type: "Entry",
    price: "30,990",
    image: office,
    purpose: "office work",
    warranty: "12 Months",
    processor: "Intel Pentium G6900 2C/2T | PROCESSOR",
    gpu: "Integrated Graphics",
    motherboard: "Intel H610 Chipset Board | MOTHERBOARD",
    ram: "Kingston ValueRAM 8GB DDR4 | RAM",
    cooler: "Stock Cooler",
    storage1: "Kingston 240GB SSD",
    storage2: "N/A",
    case: "Basic Mid Tower Cabinet",
    psu: "Corsair CV450 450W | PSU"
  },
  {
    id: 5,
    title: "Red Pill PC",
    type: "Mid-Range",
    price: "42,490",
    image: redpill,
    purpose: "gaming productivity",
    warranty: "12 Months",
    processor: "AMD Ryzen 5 3600 6C/12T | PROCESSOR",
    gpu: "NVIDIA GTX 1660 Super 6GB | Graphics Card",
    motherboard: "MSI B550M-A PRO | MOTHERBOARD",
    ram: "Corsair Vengeance LPX 16GB DDR4 | RAM",
    cooler: "Stock Cooler",
    storage1: "Kingston 480GB SSD",
    storage2: "1TB HDD",
    case: "Corsair Carbide Series Cabinet",
    psu: "Seasonic S12II-520 520W | PSU"
  },
  {
    id: 6,
    title: "Console Killer PC",
    type: "Mid-Range",
    price: "84,990",
    image: consolePc,
    purpose: "ultra gaming",
    warranty: "12 Months",
    processor: "Intel Core i7-12700 12C/20T | PROCESSOR",
    gpu: "NVIDIA RTX 3080 Ti 12GB | Graphics Card",
    motherboard: "ASUS TUF Gaming Z690-Plus D4 | MOTHERBOARD",
    ram: "G.SKILL Trident Z 32GB DDR4 3600MHz | RAM",
    cooler: "Be Quiet! Dark Rock Pro 4",
    storage1: "Samsung 970 EVO Plus 1TB NVMe SSD",
    storage2: "2TB HDD",
    case: "Corsair iCUE 4000 Airflow RGB Cabinet",
    psu: "Corsair RM1000x 1000W 80 PLUS GOLD | PSU"
  }
];

export default products;
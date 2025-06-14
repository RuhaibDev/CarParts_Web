import img from './image.png';
import a1 from './Images/A1.jpg';
import a2 from './Images/A2.jpg';
import a3 from './Images/A3.jpg';
import a4 from './Images/A4.jpg';
import a5 from './Images/A5.jpg';
import a6 from './Images/A6.jpg';
import a7 from './Images/A7.jpg';
import a8 from './Images/A8.jpg';
import a9 from './Images/A9.jpg';
import a10 from './Images/A10.jpg';
import a11 from './Images/A11.jpg';
import a12 from './Images/A12.jpg';
import a13 from './Images/A13.jpg';
import a14 from './Images/A14.jpg';
import a15 from './Images/A15.jpg';
import a16 from './Images/A16.jpg';
import a17 from './Images/A17.jpg';
import a18 from './Images/A18.jpg';
import a19 from './Images/A19.jpg';
import a20 from './Images/A20.jpg';
import a21 from './Images/A21.jpg';
import a22 from './Images/A22.jpg';
import a23 from './Images/A23.jpg';
import a24 from './Images/A24.jpg';

const Api = [
  {
    id: 1,
    name: "Heater XLi New Denso",
    model: "Toyota Corolla",
    company: "Toyota",
    price: 50,
    rating: 5,
    description: `Elevate cabin comfort with the Denso XLi heater, designed specifically for the Toyota Corolla. Its precision engineering ensures rapid warm-up and consistent temperature control, even on the coldest mornings. Experience reliable performance you can count on year-round.`,
    stock: 150,
    image: a1
  },
  {
    id: 2,
    name: "Section & Discharge Line Alto",
    model: "Toyota Alto",
    company: "Toyota",
    price: 15,
    rating: 5,
    description: `Improve your Alto’s cooling efficiency with this durable section and discharge line set. Crafted from premium-grade materials, it resists wear and ensures smooth fluid flow. Perfect fit guaranteed for seamless installation.`,
    stock: 80,
    image: a2
  },
  {
    id: 3,
    name: "Wagon R Discharge Pipe",
    model: "Suzuki Wagon R",
    company: "Suzuki",
    price: 20,
    rating: 5,
    description: `Upgrade to the Wagon R discharge pipe for your Wagon R and enjoy effortless coolant circulation. Its robust construction stands up to high temperatures, preventing leaks and blockages. Trust in superior durability mile after mile.`,
    stock: 100,
    image: a3
  },
  {
    id: 4,
    name: "Heater City GM",
    model: "Honda City",
    company: "Honda",
    price: 30,
    rating: 5,
    description: `Step into a cozy cabin every time with the Honda City GM heater. Featuring fast heat delivery and quiet operation, it ensures a comfortable ride without distraction. Built to OEM standards for perfect compatibility.`,
    stock: 200,
    image: a4
  },
  {
    id: 5,
    name: "Heater Alto New ",
    model: "Suzuki Alto",
    company: "Suzuki",
    price: 120,
    rating: 5,
    description: `Specifically engineered for the Alto 660, this high-efficiency heater delivers rapid warmth on chilly drives. Its corrosion-resistant housing guarantees longevity, while easy installation saves you time. Drive comfortably in style.`,
    stock: 50,
    image: a5
  },
  {
    id: 6,
    name: "XLi New 1.6 Discharge Pipe",
    model: "Toyota Corolla",
    company: "Toyota",
    price: 100,
    rating: 5,
    description: `Optimize coolant flow with this 1.6 discharge pipe, tailored for the Corolla XLi. Its smooth interior reduces friction and heat build-up, promoting engine longevity. Engineered for a leak-free, long-lasting seal.`,
    stock: 30,
    image: a6
  },
  {
    id: 7,
    name: "Condenser Alto",
    model: "Suzuki Alto",
    company: "Suzuki",
    price: 35,
    rating: 5,
    description: `Refresh your Alto’s A/C system with this high-performance condenser. Fast heat exchange and corrosion-resistant fins keep your cabin cool even in extreme heat. Installation is hassle-free for quick on-road comfort.`,
    stock: 90,
    image: a7
  },
  {
    id: 8,
    name: "Gas Cylinder Generator",
    model: "Any Car",
    company: "Honeywell",
    price: 130,
    rating: 5,
    description: `Power your car’s auxiliary systems with this reliable gas cylinder generator. Compact design fits seamlessly under the hood, delivering consistent voltage for all your electrical needs. Engineered to OEM specs for perfect compatibility.`,
    stock: 40,
    image: a8
  },
  {
    id: 9,
    name: "Condenser Kia Sportage",
    model: "Kia Sportage",
    company: "Kia",
    price: 20,
    rating: 5,
    description: `Beat the heat with this efficient A/C condenser for the Kia Sportage. Precision-welded joints prevent leaks, while the high-capacity core ensures rapid cooling. Designed to fit seamlessly into your vehicle’s system.`,
    stock: 110,
    image: a9
  },
  {
    id: 10,
    name: "Condenser XLi 10",
    model: "Toyota Corolla",
    company: "Toyota",
    price: 150,
    rating: 5,
    description: `Unleash peak cooling performance with the XLi 10 condenser, crafted for the Corolla. Its advanced fin design boosts airflow, reducing cabin heat swiftly. Built tough to last through varying conditions.`,
    stock: 60,
    image: a10
  },
  {
    id: 11,
    name: "Condenser Suzuki Wagon R",
    model: "Suzuki Wagon R",
    company: "Suzuki",
    price: 80,
    rating: 5,
    description: `Keep cool on every journey with this durable Wagon R condenser. Superior thermal conductivity and reinforced frame deliver long-lasting performance. Simple bolt-on installation gets you back on the road fast.`,
    stock: 70,
    image: a11
  },
  {
    id: 12,
    name: "Condenser Kia Picanto",
    model: "Kia Picanto",
    company: "Kia",
    price: 200,
    rating: 5,
    description: `Upgrade your Picanto’s A/C with this high-efficiency condenser. Rapid heat rejection and anti-corrosive coating guard against wear. Precision-fit design ensures easy integration.`,
    stock: 25,
    image: a12
  },
  {
    id: 13,
    name: "Compressor Oil ND8 1000ml",
    model: "All",
    company: "Denso",
    price: 180,
    rating: 5,
    description: `Protect and extend the life of any compressor with ND8’s premium lubricant. Its advanced formula reduces friction and resists high temperatures, ensuring smooth operation under heavy loads. Ideal for all makes and models.`,
    stock: 45,
    image: a13
  },
  {
    id: 14,
    name: "Compressor Oil Panda 1 Liter",
    model: "All",
    company: "Emkarate",
    price: 100,
    rating: 5,
    description: `Panda’s compressor oil delivers exceptional protection against wear and heat. Its high-viscosity formulation maintains stability under extreme conditions, ensuring reliable performance every time. Perfect choice for diverse compressor systems.`,
    stock: 35,
    image: a14
  },
  {
    id: 15,
    name: "Evaporator Honda Civic 18-19",
    model: "Honda Civic",
    company: "Honda",
    price: 70,
    rating: 5,
    description: `Restore crisp, cool air in your Civic with this genuine evaporator unit. Designed for 2018-2019 models, it guarantees efficient heat exchange and quiet operation. Delivers OEM-level quality and fit.`,
    stock: 90,
    image: a15
  },
  {
    id: 16,
    name: "Evaporator Alto New",
    model: "Suzuki Alto",
    company: "Suzuki",
    price: 220,
    rating: 5,
    description: `Experience rapid cooling with this high-flow evaporator for the new Alto. Its corrosion-resistant coating preserves performance over time, while exact-fit design simplifies installation. Keep your cabin fresh all summer.`,
    stock: 20,
    image: a16
  },
  {
    id: 17,
    name: "Evaporator Mira 2010",
    model: "Daihatsu Mira",
    company: "Daihatsu",
    price: 60,
    rating: 5,
    description: `Upgrade your 2010 Mira with this efficient evaporator that excels in heat absorption. Crafted with precision-engineered coils, it ensures uniform cooling and long service life. Direct OEM fit for hassle-free replacement.`,
    stock: 75,
    image: a17
  },
  {
    id: 18,
    name: "Evaporator Toyota Rivo 4x4",
    model: "Toyota Rivo 4x4",
    company: "Toyota",
    price: 150,
    rating: 5,
    description: `Conquer tough terrain and extreme weather with this rugged Rivo 4x4 evaporator. Its reinforced housing withstands harsh environments while delivering consistent cooling. Built to Toyota’s exacting standards.`,
    stock: 40,
    image: a18
  },
  {
    id: 19,
    name: "Evaporator Suzuki Wagon R Pakistani",
    model: "Suzuki Wagon R",
    company: "Suzuki",
    price: 95,
    rating: 5,
    description: `Specifically tuned for Pakistani Wagon R models, this evaporator provides swift and steady cooling. Its precision-coated fins resist corrosion, ensuring lasting efficiency and comfort. Easy plug-and-play installation.`,
    stock: 30,
    image: a19
  },
  {
    id: 20,
    name: "Evaporator Toyota Corolla 04",
    model: "Toyota Corolla",
    company: "Toyota",
    price: 190,
    rating: 5,
    description: `Revitalize your ’04 Corolla’s climate control with this precision evaporator. Advanced coil design maximizes heat exchange, while durable materials guarantee longevity. OEM-quality for a seamless fit.`,
    stock: 20,
    image: a20
  },
  {
    id: 21,
    name: "Evaporator Honda Vezel",
    model: "Honda Vezel",
    company: "Honda",
    price: 25,
    rating: 5,
    description: `Enjoy quiet, efficient cooling with this Vezel-specific evaporator. Its optimized airflow pathways ensure rapid temperature drop, while high-strength components resist wear. Perfect OEM match.`,
    stock: 110,
    image: a21
  },
  {
    id: 22,
    name: "Evaporator MG Hs",
    model: "MG Hs",
    company: "MG",
    price: 120,
    rating: 5,
    description: `Bring premium cooling to your MG HS with this state-of-the-art evaporator. Engineered for maximum heat absorption, its corrosion-resistant build lasts through years of use. Simple swap with original unit.`,
    stock: 50,
    image: a22
  },
  {
    id: 23,
    name: "Evaporator Hyundai Elantra",
    model: "Hyundai Elantra",
    company: "Hyundai",
    price: 180,
    rating: 5,
    description: `Achieve peak A/C performance in your Elantra with this efficient evaporator unit. Its precision-engineered coils deliver uniform cooling, while durable construction withstands corrosion. OEM-grade quality and fit.`,
    stock: 25,
    image: a23
  },
  {
    id: 24,
    name: "Evaporator Kia Sportage",
    model: "Kia Sportage",
    company: "Kia",
    price: 20,
    rating: 5,
    description: `Ensure cool comfort in your Sportage with this robust evaporator. High-efficiency coil design optimizes heat removal, and anti-corrosion finish extends lifespan. Direct replacement for hassle-free upgrade.`,
    stock: 150,
    image: a24
  }
];

export default Api;

import React from 'react'
import Nav from '../Nav/Nav'
import Footer from './Footer'

function Products() {
  const products = [
    {
      name: "Eveready 9W LED Bulb",
      price: "499",
      img: "https://m.media-amazon.com/images/I/71SpLm9FuyL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Eveready 9W LED Bulb, Cool Day Light (6500K), B22 Base, Energy-Efficient, 4kV Surge Protection, Long-Lasting Durability - Pack of 10."
    },
    {
      name: "Type-c Charger ",
      price: "₹300",
      img: "https://m.media-amazon.com/images/I/51+OdWR1ArL._AC_UY327_FMwebp_QL65_.jpg",
      description:
        "Fast Charging. Long lifespan and perfect for reducing electricity bills."
    },
    {
      name: "Atomberg Efficio Ceiling Fan",
      price: "₹699",
      img: "https://m.media-amazon.com/images/I/61CwkCxvECL._SX679_.jpg",
      description:
        "Consuming only 28 watts at full speed, it delivers superior airflow while saving up to 65% on electricity bills."
    },
    {
      name: "Crompton Water Heater",
      price: "₹8000",
      img: "https://m.media-amazon.com/images/I/41qz+ZQQtiL._AC_UY327_FMwebp_QL65_.jpg",
      description:
        "25-litre, 5-star rated storage geyser with safety features and fast heating element."
    },
    {
      name: "Digital Programmable Timer Plug",
      price: "₹6,499",
      img: "https://m.media-amazon.com/images/I/71juuhW7VqS._SX679_.jpg",
      description:
        "Schedule your appliances to save power. Comes with LCD display and multiple time settings."
    },
    {
      name: "Chefman Cooler",
      price: "₹2,490",
      img: "https://m.media-amazon.com/images/I/61+M3neaPbL._SX679_.jpg",
      description:
        "The Bajaj PX 97 Torque is a compact and energy-efficient personal air cooler designed for small to medium-sized rooms. ."
    },
    {
      name: "V-Guard Divino Water Purifier",
      price: "₹6,299",
      img: "https://m.media-amazon.com/images/I/51mmACaG3sL._AC_UY327_FMwebp_QL65_.jpg",
      description:
        "The V-Guard Divino is a highly efficient water purifier equipped with RO, UV, and UF purification technologies, along with a TDS controller to retain essential minerals."     }
  ];

  return (
    <>
    <Nav/>
      <h1 className='text-center mt-5 text-[25px] font-bold text-[rgb(2_90_2)]'> Our Products </h1>
      <div className='flex flex-wrap justify-center gap-6 my-5'>
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 w-80 flex flex-col justify-between transition-transform transform hover:scale-105 cursor-pointer"
          >
            <img src={product.img} alt={product.name} className='rounded-md w-full h-[200px] object-contain py-3' />
            <h2 className='text-lg font-semibold text-gray-800'>{product.name}</h2>
            <p className='text-gray-500 text-sm mt-1'>{product.description}</p>
            <p className='text-green-600 font-bold mt-2'>{product.price}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Products
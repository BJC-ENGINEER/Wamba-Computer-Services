import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

// Import images (make sure names/extensions match exactly in your folder)
import LenovoImg from "../assets/images/ALL-IN-ONE-LENOVO.jpg";
import HpElite840Img from "../assets/images/HP-ELITEBOOK840-G3.jpg";
import SsdSataImg from "../assets/images/SSD-SATA256GB.jpg";
import DellLatitudeImg from "../assets/images/DELL-LATITUDE5420.jpg";
import WirelessKeyboardWithMouseImg from "../assets/images/WIRELESS-KEYBOARD-WITH-MOUSE.jpg";
import HpElitebook820g1Img from "../assets/images/HP-ELITEBOOK820-G1.jpg";
import HpProbook640g1Img from "../assets/images/HP-PROBOOK640-G1.jpg";

export default function Products() {
  const products = [
    {
      name: "LENOVO ALL-IN-ONE",
      img: LenovoImg,
      description: "Pentium | 4GB RAM | 500GB HDD | Compact all-in-one desktop",
      price: "200,000 RWF",
    },
    {
      name: "HP ELITEBOOK 840 G3",
      img: HpElite840Img,
      description: "Core i5 | 8GB RAM | 256GB SSD | Backlight keyboard",
      price: "270,000 RWF",
    },
    {
      name: "SSD SATA 256GB",
      img: SsdSataImg,
      description: "256GB SATA SSD – Fast storage upgrade for laptops and desktops",
      price: "30,000 RWF",
    },
    {
      name: "DELL LATITUDE 5420",
      img: DellLatitudeImg,
      description:
        "Core i5 | 8GB RAM | 256GB SSD | Backlight keyboard | 11th Gen",
      price: "400,000 RWF",
    },
    {
      name: "WIRELESS KEYBOARD WITH MOUSE",
      img: WirelessKeyboardWithMouseImg,
      description:
        "Compact wireless keyboard and mouse combo | Reliable & durable",
      price: "17,000 RWF",
    },
    {
      name: "HP ELITEBOOK 820 G1",
      img: HpElitebook820g1Img,
      description: "8GB RAM | 256GB SSD | Slim & lightweight business laptop",
      price: "220,000 RWF",
    },
    {
      name: "HP PROBOOK 640 G1",
      img: HpProbook640g1Img,
      description: "Core i5 | 4th Gen | 8GB RAM | 500GB HDD",
      price: "190,000 RWF",
    },
  ];

  return (
    <div className="px-4 sm:px-6 py-6 max-w-screen-xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        OUR PRODUCTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-lg p-4 flex flex-col items-center bg-white hover:shadow-2xl transition"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 sm:h-72 md:h-80 object-contain mb-4"
            />
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-center">
              {product.name}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-2 text-center">
              {product.description}
            </p>
            <p className="text-blue-600 font-bold text-sm sm:text-base mb-3">
              {product.price}
            </p>

            {/* WhatsApp button with icon */}
            <a
              href={`https://wa.me/250783405592?text=Hello, I'm interested in ${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
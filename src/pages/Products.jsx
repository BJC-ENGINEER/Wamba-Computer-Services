import React from "react";
import LenovoImg from "../assets/images/all-in-one-lenovo.jpg";
import HpElite840Img from "../assets/images/hp-elitebook840-g3.jpg";
import SsdSataImg from "../assets/images/ssd-sata-256gb.jpg";
import DellLatitudeImg from "../assets/images/dell-latitude-2420.jpg";
import LedProjector1Img from "../assets/images/led-projector-eo3i31-egate-1.jpg";
import WirelessKeyboardwithmouseImg from "../assets/images/wireless-keyboard-with-mouse.jpg";
import HpElitebook820g1Img from "../assets/images/hp-elitebook820-g1.jpg";
import HpProbook640g1Img from "../assets/images/hp-probook640-g1.jpg";

export default function Products() {
  const products = [
    {
      name: "HP EliteBook 840 G3",
      img: HpElite840Img,
      description: "Core i5 | 8GB RAM | 256GB SSD | Backlight keyboard",
      price: "270,000 RWF",
    },
    {
      name: "Dell Latitude 5420",
      img: DellLatitudeImg,
      description:
        "Core i5 | 8GB RAM | 256GB SSD | Backlight keyboard | 11th Gen",
      price: "400,000 RWF",
    },
    {
      name: "SSD SATA 256GB",
      img: SsdSataImg,
      description:
        "256GB SATA SSD – Fast storage upgrade for laptops and desktops",
      price: "30,000 RWF",
    },
    {
      name: "LED Projector - E03i31 EGATE",
      img: LedProjector1Img,
      description: "Portable LED projector | High brightness | Ideal for home & office",
      price: "180,000 RWF",
    },
    {
      name: "Wireless Keyboard with Mouse",
      img: WirelessKeyboardwithmouseImg, // ✅ fixed
      description:
        "Compact wireless keyboard and mouse combo | Reliable & durable",
      price: "17,000 RWF",
    },
    {
      name: "HP EliteBook 820 G1",
      img: HpElitebook820g1Img, // ✅ fixed
      description: "8GB RAM | 256GB SSD | Slim & lightweight business laptop",
      price: "220,000 RWF",
    },
    {
      name: "HP ProBook 640 G1",
      img: HpProbook640g1Img, // ✅ fixed
      description: "Core i5 | 4th Gen | 8GB RAM | 500GB HDD",
      price: "190,000 RWF",
    },
    {
      name: "All-in-One Lenovo",
      img: LenovoImg,
      description: "Pentium | 4GB RAM | 500GB HDD | Compact all-in-one desktop",
      price: "200,000 RWF",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="border rounded-xl shadow-lg p-4 flex flex-col items-center bg-white hover:shadow-2xl transition"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-64 h-64 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <p className="text-blue-600 font-bold">{product.price}</p>
        </div>
      ))}
    </div>
  );
}
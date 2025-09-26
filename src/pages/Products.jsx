import React from "react";

export default function Products() {
  const products = [
    {
      name: "HP EliteBook 840 G3",
      img: "/images/hp-elitebook840-g3.jpg",
      description: "Core i5 | 8GB RAM | 256GB SSD | Backlight keyboard",
      price: "270,000 RWF",
    },
    {
      name: "Dell Latitude 5420",
      img: "/images/dell-latitude-2420.jpg",
      description:
        "Core i5 | 8GB RAM | 256GB SSD | Backlight keyboard | 11th Gen",
      price: "400,000 RWF",
    },
    {
      name: "SSD SATA 256GB",
      img: "/images/ssd-sata-256gb.jpg",
      description:
        "256GB SATA SSD – Fast storage upgrade for laptops and desktops",
      price: "30,000 RWF",
    },
    {
      name: "LED Projector - E03i31 EGATE",
      img: "/images/led-projector-eo3i31-egate-1.jpg",
      description:
        "Portable LED projector | High brightness | Ideal for home & office",
      price: "180,000 RWF",
    },
    {
      name: "Wireless Keyboard with Mouse",
      img: "/images/wireless-keyboard-with-mouse.jpg",
      description:
        "Compact wireless keyboard and mouse combo | Reliable & durable",
      price: "17,000 RWF",
    },
    {
      name: "HP EliteBook 820 G1",
      img: "/images/hp-elitebook820-g1.jpg",
      description: "8GB RAM | 256GB SSD | Slim & lightweight business laptop",
      price: "220,000 RWF",
    },
    {
      name: "HP ProBook 640 G1",
      img: "/images/hp-probook640-g1.jpg",
      description: "Core i5 | 4th Gen | 8GB RAM | 500GB HDD",
      price: "190,000 RWF",
    },
    {
      name: "Lenovo All-in-One",
      img: "/images/lenovo-all-in-one.jpg",
      description:
        "Pentium | 4GB RAM | 500GB HDD | Compact all-in-one desktop",
      price: "200,000 RWF",
    },
  ];

  return (
    <div className="px-4 sm:px-6 py-6 max-w-screen-xl mx-auto">
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
            <p className="text-blue-600 font-bold text-sm sm:text-base">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
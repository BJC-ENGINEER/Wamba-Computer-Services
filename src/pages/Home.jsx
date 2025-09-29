import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

// Import images from assets/images
import LenovoImg from "../assets/images/ALL-IN-ONE-LENOVO.jpg";
import HpElite840Img from "../assets/images/HP-ELITEBOOK840-G3.jpg";
import SsdSataImg from "../assets/images/SSD-SATA256GB.jpg";

export default function Home() {
  const featuredProducts = [
    {
      name: "LENOVO-ALL-IN-ONE",
      img: LenovoImg,
      description:
        "Pentium, 4GB RAM, 500GB HDD – a compact all-in-one desktop for home or office.",
      price: "200,000 RWF",
    },
    {
      name: "HP ELITEBOOK 840 G3",
      img: HpElite840Img,
      description:
        "Core i5, 8GB RAM, 256GB SSD, Backlight keyboard – perfect for professionals.",
      price: "270,000 RWF",
    },
    {
      name: "SSD SATA 256GB",
      img: SsdSataImg,
      description:
        "Fast 256GB SATA SSD – boost performance and storage for laptops & desktops.",
      price: "30,000 RWF",
    },
  ];

  return (
    <div className="px-4 sm:px-6 py-6 max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          WELCOME TO WAMBA COMPUTER SERVICES
        </h2>
        <p className="text-gray-700 text-sm sm:text-base max-w-lg mx-auto">
          Quality computers, tablets, and accessories at the best prices.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="mb-10 text-left">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">Introduction</h3>
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-2xl">
          Wamba-Computer-Services is an electronic shop located in Kigali near
          Makuza Peace Plaza. We buy and sell computers, tablets, and
          accessories. Since 2023, we have been proudly serving Kigali with
          quality products and reliable services. We are committed to offering
          the best prices and ensuring that electronics are always near you.
        </p>
      </section>

      {/* Featured Products Section */}
      <section>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          FEATURED PRODUCTS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
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

              {/* WhatsApp button */}
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

        {/* Call to Explore More */}
        <p className="mt-6 text-center text-base sm:text-lg">
          Want to see more? Visit our{" "}
          <Link
            to="/products"
            className="text-blue-600 font-semibold hover:underline"
          >
            PRODUCTS PAGE
          </Link>{" "}
          to explore all categories.
        </p>
      </section>
    </div>
  );
}
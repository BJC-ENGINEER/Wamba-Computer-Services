import React from "react";

export default function About() {
  return (
    <div className="px-4 sm:px-6 py-10 max-w-5xl mx-auto">
      {/* Tagline */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Welcome to Wamba Computer Services
      </h1>
      <p className="text-base sm:text-lg text-center mb-6 sm:mb-10 text-gray-700">
        High-quality computers, tablets, and accessories at unbeatable prices.
      </p>

      {/* Vision */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">🌍 Vision</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          To be the trusted electronics shop in Kigali, providing quality
          computers, tablets, and accessories that make technology easy and
          accessible for everyone.
        </p>
      </div>

      {/* Goal */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">🎯 Goal</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Our goal is to serve our customers with reliable products, fair
          prices, and excellent service, helping individuals and businesses stay
          connected and productive.
        </p>
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">💡 Why Choose Us</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          We provide trusted products and services you can rely on.  
          Our unbeatable prices make technology affordable for everyone.  
          We are dedicated to excellent customer care with every purchase.  
          Proudly serving Kigali since 2023, right near Makuza Peace Plaza.  
        </p>
      </div>
    </div>
  );
}
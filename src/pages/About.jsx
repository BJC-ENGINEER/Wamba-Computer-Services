import React from "react";

export default function About() {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      {/* Tagline */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to Wamba Computer Services
      </h1>
      <p className="text-lg text-center mb-10 text-gray-700">
        High-quality computers, tablets, and accessories at unbeatable prices.
      </p>

      {/* Vision */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🌍 Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To be the trusted electronics shop in Kigali, providing quality
          computers, tablets, and accessories that make technology easy and
          accessible for everyone.
        </p>
      </div>

      {/* Goal */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">🎯 Goal</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our goal is to serve our customers with reliable products, fair
          prices, and excellent service, helping individuals and businesses stay
          connected and productive.
        </p>
      </div>
    </div>
  );
}
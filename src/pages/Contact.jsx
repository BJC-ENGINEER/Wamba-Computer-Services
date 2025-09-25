import React from "react";
import { FaPhone, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="px-4 sm:px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Left Column: Contact Form */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded text-base w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded text-base w-full"
            />
            <textarea
              placeholder="Message"
              className="border p-3 rounded text-base w-full min-h-[120px]"
            ></textarea>
            <button className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 text-base">
              Send
            </button>
          </form>
        </div>

        {/* Right Column: Other Contact Info */}
        <div className="flex-1 bg-gray-100 p-6 rounded shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Other Ways to Reach Us
          </h3>
          <ul className="space-y-4 text-base sm:text-lg">
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
              <a href="tel:+250787478308" className="hover:underline">
                +250 787 478 308
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
              <a
                href="https://wa.me/250787478308"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +250 787 478 308
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-pink-500 w-5 h-5 sm:w-6 sm:h-6" />
              <a
                href="https://www.instagram.com/wamba_computer_services"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Wamba Computer Services
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
              <a href="tel:+250783405592" className="hover:underline">
                +250 783 405 592
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-600 w-5 h-5 sm:w-6 sm:h-6" />
              <a
                href="mailto:wamba4852@gmail.com"
                className="hover:underline"
              >
                wamba4852@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
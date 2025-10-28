import React from "react";
import { FaWhatsapp, FaHeart, FaCopyright } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-t border-gray-700 py-8 mt-auto text-center shadow-inner shadow-black/30">
      <div className="container mx-auto px-4">
        {/* Copyright */}
        <p className="flex items-center justify-center gap-2 text-sm md:text-base">
          <FaCopyright className="text-red-400" /> {year}{" "}
          <span className="font-semibold text-white">FlickFinder</span> — All rights reserved.
        </p>

        {/* Collaboration text */}
        <p className="mt-3 text-sm md:text-base text-gray-400">
          Want to{" "}
          <span className="text-red-400 font-semibold">collaborate</span> or get a custom project built?
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/2349122656254?text=Hi%20Joshua!%20I%20saw%20your%20movie%20project%20and%20would%20like%20to%20collaborate%20or%20get%20a%20custom%20website."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-green-500/40"
        >
          <FaWhatsapp className="text-xl animate-pulse" />
          Chat me on WhatsApp
        </a>

        {/* Signature */}
        <p className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-1">
          Built with <FaHeart className="text-red-500 animate-pulse" /> by{" "}
          <span className="font-semibold text-white">Joshua Nnorom</span>
        </p>
      </div>
    </footer>
  );
}

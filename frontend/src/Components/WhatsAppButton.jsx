"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919001895993";

  const defaultMessage = "Hello! I have a question about Bari Fresh spices.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-99 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />

      <span className="absolute right-16 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with us!
      </span>
    </a>
  );
}

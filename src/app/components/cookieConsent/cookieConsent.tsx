"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  }

  function handleDecline() {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-md mx-auto md:max-w-sm z-50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-700 text-sm md:text-base">
            Usamos cookies para melhorar sua experiência e analisar o tráfego do site.{" "}
            <a
              href="/politica-de-privacidade"
              className="underline hover:text-[var(--oceanBlue)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
            .
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 rounded-md font-semibold border border-gray-400 text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
              Recusar
            </button>
            <button
              onClick={handleAccept}
              className="bg-[var(--oceanBlue)] text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

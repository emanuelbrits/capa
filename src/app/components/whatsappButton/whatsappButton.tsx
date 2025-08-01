"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsappButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const handleClick = () => {
    const mensagem = encodeURIComponent(
      "Olá! Gostaria de esclarecer algumas dúvidas sobre meus direitos trabalhistas. Pode me ajudar?"
    );
    const numero = "5586999814301";
    const link = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(link, "_blank");
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={`shiny-icon flex items-center justify-center gap-2 shadow-xl hover:shadow-4xl bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg md:text-xl xl:text-3xl font-semibold px-6 py-3 rounded-xl transition-all duration-700 ease-out hover:scale-105 active:scale-95 cursor-pointer
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 blur-sm "}`}
    >
      <FaWhatsapp className="text-2xl" />
      Quero falar com um advogado!
    </button>
  );
}

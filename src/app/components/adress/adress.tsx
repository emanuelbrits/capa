"use client";

import { useEffect } from "react";
import { FaMapPin } from "react-icons/fa6";
import WhatsappButton from "../whatsappButton/whatsappButton";
import { motion, easeOut, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const infoVariants = {
  hidden: {
    opacity: 0,
    x: 50,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOut },
  },
};

const mapVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easeOut } },
};

export default function Adress() {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row py-16 px-6 md:px-20 bg-white gap-10 items-center"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Mapa à esquerda */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={mapVariants}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.1382184910085!2d-42.8115459!3d-5.0813352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39db391c26bf%3A0x9c855704b2e1d515!2sDr.%20Carlos%20Alberto%20Pereira%20de%20Andrade!5e0!3m2!1spt-BR!2sbr!4v1753803157603!5m2!1spt-BR!2sbr"
          className="w-full h-[300px] md:h-[22rem] rounded-xl shadow-2xl border border-[var(--oceanBlue)]"
          loading="lazy"
          title="Mapa do escritório em Teresina"
        />
      </motion.div>

      {/* Informações de contato à direita */}
      <motion.div
        className="flex flex-col w-full md:w-1/2 text-[var(--blackPanther)] space-y-6"
        variants={infoVariants}
      >
        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-4 text-[var(--oceanBlue)]"
          variants={infoVariants}
        >
          <div className="flex items-center gap-2">
            <FaMapPin className="text-[var(--oceanBlue)]" />
            Visite nosso escritório
          </div>
        </motion.h2>

        <motion.div variants={infoVariants}>
          <p className="text-lg font-bold">Nosso endereço</p>
          <p className="text-gray-700">
            Av. Miguel Rosa, 1946 - Norte - Centro (Sul), Teresina - PI,
            64000-480
          </p>
        </motion.div>

        <motion.div variants={infoVariants}>
          <p className="text-lg font-bold">Contato</p>
          <p className="text-gray-700">(86) 99981-4301</p>
        </motion.div>

        <motion.div variants={infoVariants}>
          <p className="text-lg font-bold">E-mail</p>
          <p className="text-gray-700">capa@hotmail.com</p>
        </motion.div>

        <motion.div variants={infoVariants}>
          <WhatsappButton />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

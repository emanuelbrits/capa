"use client";

import { useEffect } from "react";
import { FaMapPin } from "react-icons/fa6";
import WhatsappButton from "../whatsappButton/whatsappButton";
import { motion, easeOut, useAnimation } from "framer-motion";
import { Mail, Smartphone } from "lucide-react";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const infoVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOut }
  },
};

const mapVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easeOut } },
};

export default function ContactAnimated() {
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
      className="flex flex-col md:flex-row py-16 px-6 md:px-20 bg-white gap-10"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Texto (esquerda) */}
      <motion.div
        className="flex flex-col w-full md:w-1/2 justify-center space-y-6 text-[var(--oceanBlue)]"
        variants={infoVariants}
      >
        <motion.h2
          className="text-3xl md:text-5xl xl:text-6xl font-extrabold font-playfair leading-snug"
          variants={infoVariants}
        >
          Entre em contato agora mesmo!
        </motion.h2>

        <motion.div className="flex gap-4 items-start" variants={infoVariants}>
          <Smartphone className="bg-[var(--blackPanther)] text-white w-8 xl:w-12 h-8 xl:h-12 p-2 rounded-full" />
          <div>
            <p className="text-lg xl:text-xl font-bold">Telefone</p>
            <p className="xl:text-lg">(86) 99981-4301</p>
          </div>
        </motion.div>

        <motion.div className="flex gap-4 items-start" variants={infoVariants}>
          <Mail className="bg-[var(--blackPanther)] text-white w-8 xl:w-12 h-8 xl:h-12 p-2 rounded-full" />
          <div>
            <p className="text-lg xl:text-xl font-bold">E-mail</p>
            <p className="xl:text-lg">capa@hotmail.com</p>
          </div>
        </motion.div>

        <motion.div className="flex gap-4 items-start" variants={infoVariants}>
          <FaMapPin className="bg-[var(--blackPanther)] text-white w-8 xl:w-12 h-8 xl:h-12 p-2 rounded-full" />
          <div>
            <p className="text-lg xl:text-xl font-bold">Endereço</p>
            <p className="xl:text-lg">
              Av. Miguel Rosa, 1946 - Norte - Centro (Sul), Teresina - PI, 64000-480
            </p>
          </div>
        </motion.div>

        <motion.div variants={infoVariants}>
          <WhatsappButton />
        </motion.div>
      </motion.div>

      {/* Mapa (direita) */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center"
        variants={mapVariants}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.1382184910085!2d-42.8115459!3d-5.0813352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39db391c26bf%3A0x9c855704b2e1d515!2sDr.%20Carlos%20Alberto%20Pereira%20de%20Andrade!5e0!3m2!1spt-BR!2sbr!4v1753803157603!5m2!1spt-BR!2sbr"
          className="w-full h-[300px] md:h-[20rem] rounded-lg shadow-lg border-1 border-[var(--oceanBlue)]"
          loading="lazy"
          title="Mapa do escritório em Teresina"
        />
      </motion.div>
    </motion.div>
  );
}
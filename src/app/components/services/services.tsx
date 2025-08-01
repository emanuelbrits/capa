"use client";

import {
  FileText,
  UserCheck,
  Video,
  CreditCard,
  Bell,
  Briefcase,
  Layers,
  ShieldCheck,
  Gavel,
  Hourglass,
} from "lucide-react";
import Image from "next/image";
import { motion, useAnimation, Easing, AnimatePresence, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import WhatsappButton from "../whatsappButton/whatsappButton";

// easing correto importado
const ease: Easing = [0.43, 0.13, 0.23, 0.96];

const services = [
  {
    title: "Revisão de Contrato de Trabalho",
    resolved: 184,
    image: "/legal-contract-meeting.jpg",
    icon: FileText,
  },
  {
    title: "Rescisão e Verbas Trabalhistas",
    resolved: 221,
    image: "/employee-termination.avif",
    icon: Gavel,
  },
  {
    title: "Ações de Indenização por Danos Morais",
    resolved: 143,
    image: "/harassment.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Reconhecimento de Vínculo Empregatício",
    resolved: 97,
    image: "/legal-employment-documents.jpg",
    icon: UserCheck,
  },
  {
    title: "Cálculo de Horas Extras e Adicionais",
    resolved: 168,
    image: "/overtime-calculation.jpg",
    icon: Hourglass,
  },
  {
    title: "Acompanhamento de Processos Trabalhistas",
    resolved: 204,
    image: "/legal-process-monitoring.jpg",
    icon: Bell,
  },
];

const titleVariants = {
  hidden: { opacity: 0, x: -50, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeInOut },
  },
  exit: {
    opacity: 0,
    x: -50,
    filter: "blur(4px)",
    transition: { duration: 0.4, ease: easeInOut },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease,
      delay: 0.6 + i * 0.15,
    },
  }),
};

export default function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
    triggerOnce: false,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(activeIndex);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // Quando clicar no botão, dispara a troca da imagem animada:
  const handleServiceClick = (index: number) => {
    if (index === activeIndex) return; // se clicar no mesmo, não faz nada
    setCurrentIndex(-1); // anima desaparecimento
    setTimeout(() => {
      setActiveIndex(index);
      setCurrentIndex(index); // anima aparecimento
    }, 300); // tempo do exit animation
  };

  return (
    <div className="bg-[var(--tundraFrost)]" ref={ref}>
      <div className="py-20 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-8"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--blackPanther)]">
              Diferentes casos, necessitam de diferentes soluções
            </h3>
            <p className="text-base text-[var(--blackPanther)] mt-4">
              Seguimos com você até a resolução judicial do seu caso com dedicação e transparência.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  onClick={() => handleServiceClick(index)}
                  className={`flex flex-col items-center justify-center gap-2 px-4 py-6 border-t-4 cursor-pointer
    ${isActive ? "border-[var(--oceanBlue)]" : "border-gray-300 bg-transparent"}`}
                >

                  <Icon size={48} className="text-[var(--oceanBlue)]" />
                  <span className="font-semibold text-center text-[var(--blackPanther)]">
                    {service.title}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 relative"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <AnimatePresence mode="wait">
            {currentIndex === activeIndex && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50, filter: "blur(4px)" }}   // entra vindo da direita (+x)
                animate={{ opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: easeInOut } }}
                exit={{ opacity: 0, x: -50, filter: "blur(4px)", transition: { duration: 0.3, ease: easeInOut } }} // sai para a esquerda (-x)
                className="relative w-full h-[500px] lg:h-[600px] rounded-tl-3xl shadow-2xl overflow-hidden"
              >
                <Image
                  src={services[activeIndex].image}
                  alt={`Foto de ${services[activeIndex].title}`}
                  fill
                  className="object-cover rounded-tl-3xl"
                  priority
                />
                <div className="absolute bottom-0 left-0 bg-[var(--oceanBlue)]/50 backdrop-blur-md text-white text-center px-10 py-16 shadow-xl">
                  <p className="text-2xl md:text-3xl font-bold">{services[activeIndex].resolved}</p>
                  <p className="text-xl md:text-2xl">casos resolvidos</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      <div className="pt-4 pb-8 md:pt-8 md:pb-16 flex justify-center">
        <WhatsappButton />
      </div>
    </div>
  );
}

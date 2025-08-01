"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const items = [
    { value: "10+", label: "Anos de experiência" },
    { value: "3500+", label: "Processos concluídos" },
    { value: "1000+", label: "Clientes" },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20 min-h-screen" ref={ref}>
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-extrabold font-playfair text-[var(--oceanBlue)] leading-snug mb-12"
      >
        Quem é o Dr. Carlos Alberto?
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-stretch gap-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {/* Imagem */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 1.2 }}
          className="relative border-1 border-[var(--oceanBlue)] w-full md:w-1/2 aspect-square md:aspect-auto md:h-auto rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="/advogado.webp"
            alt="Foto do advogado"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            priority
          />
        </motion.div>

        {/* Card */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 1.2 }}
          className="bg-white border-1 border-[var(--oceanBlue)] w-full md:w-1/2 rounded-xl shadow-lg p-6 md:p-10 text-[var(--blackPanther)] flex flex-col justify-between gap-6"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--oceanBlue)]">
              Dr. Carlos Alberto Pereira Andrade
            </h3>
            <p className="text-lg leading-relaxed">
              Advogado especialista em Direito Previdenciário e Trabalhista, com
              mais de uma década de atuação, dedicado a garantir os direitos dos
              trabalhadores e segurados. Membro ativo da OAB, com reconhecimentos
              nacionais.
              Aqui, seu problema será tratado com prioridade, responsabilidade e
              profundo conhecimento jurídico. Temos o compromisso de buscar a
              melhor solução para você — com transparência, ética e resultados reais.
            </p>

            {/* Especializações */}
            <div>
              <h4 className="font-medium text-[var(--oceanBlue)] mt-4 mb-2">
                Especializações:
              </h4>
              <ul className="list-disc list-inside text-base text-gray-700">
                <li>Direito Previdenciário</li>
                <li>Direito Trabalhista</li>
                <li>Planejamento de Aposentadoria</li>
                <li>Processos Administrativos junto ao INSS</li>
              </ul>
            </div>

            {/* Selos */}
            <div className="flex flex-wrap gap-4 mt-6 shiny-icon">
              <Image
                src="/Selo-OAB.webp"
                alt="Selo OAB"
                width={96}
                height={96}
                className="object-contain"
              />
              <Image
                src="/seloCPRPPS.png"
                alt="Certificação em Direito Previdenciário"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          </div>

          {/* Cards de experiência */}
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-evenly gap-6 mt-8">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              const [cardRef, cardInView] = useInView({
                threshold: 0.3,
              });

              return (
                <motion.div
                  key={index}
                  ref={cardRef}
                  initial="hidden"
                  animate={cardInView ? "visible" : "hidden"}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: isEven ? 50 : -50,
                      filter: "blur(8px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="group flex flex-col h-44 w-full sm:w-40 gap-3 border-t-4 border-[var(--oceanBlue)] justify-center text-center shiny-icon bg-white hover:bg-[var(--oceanBlue)] text-[var(--oceanBlue)] hover:text-white transition-colors duration-300 rounded shadow-md"
                >
                  <div>
                    <p className="text-4xl">{item.value}</p>
                    <div className="h-[3px] w-10 mx-auto my-1 bg-[var(--oceanBlue)] transition-colors duration-300 group-hover:bg-white rounded" />
                  </div>
                  <p className="text-base px-2">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

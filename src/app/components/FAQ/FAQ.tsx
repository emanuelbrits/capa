"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";

const faqItems = [
  {
    label: "Quais documentos preciso levar para uma consulta jurídica?",
    value:
      "Documentos pessoais (RG e CPF), comprovante de residência, documentos relacionados ao caso (contratos, recibos, processos, laudos médicos, etc.). Se tiver dúvidas, entre em contato antes da consulta.",
  },
  {
    label: "Como funciona a primeira consulta?",
    value:
      "A primeira consulta serve para entender sua situação e avaliar quais são as possibilidades legais. Após a análise, explicamos os próximos passos e os custos envolvidos, sem compromisso.",
  },
  {
    label: "Vocês atendem apenas presencialmente ou também online?",
    value:
      "Atendemos presencialmente em nosso escritório e também realizamos atendimentos online, por vídeo ou telefone, para sua comodidade.",
  },
  {
    label: "Quais são as formas de pagamento disponíveis?",
    value:
      "Aceitamos pagamento por Pix, boleto, transferência bancária e cartão de crédito. Em alguns casos, é possível parcelar os honorários.",
  },
  {
    label: "Quanto tempo leva um processo judicial?",
    value:
      "O tempo varia de acordo com o tipo de ação, o local do processo e outros fatores. Após a análise do seu caso, forneceremos uma estimativa baseada em nossa experiência.",
  },
  {
    label: "O que é necessário para entrar com um pedido de aposentadoria?",
    value:
      "É necessário apresentar documentos como RG, CPF, comprovante de residência, carteira de trabalho, carnês de contribuição, CNIS e outros relacionados ao histórico de trabalho. Avaliamos sua situação e indicamos o melhor caminho.",
  },
  {
    label: "Vocês atuam em outras áreas além do direito previdenciário?",
    value:
      "Sim, também atuamos em trabalhista, civil e direito de família. Nosso time é preparado para oferecer uma assessoria completa.",
  },
  {
    label: "Como acompanho o andamento do meu processo?",
    value:
      "Você receberá atualizações por WhatsApp ou e-mail sempre que houver movimentações importantes. Além disso, pode entrar em contato conosco a qualquer momento.",
  },
  {
    label: "Meu caso é sigiloso?",
    value:
      "Sim. Toda consulta e processo são tratados com total sigilo profissional, conforme o Código de Ética da OAB.",
  },
  {
    label: "O que é necessário para dar entrada em um processo trabalhista?",
    value:
      "Documentos como carteira de trabalho, holerites, extrato do FGTS, rescisão contratual e quaisquer provas relacionadas à relação de trabalho. Uma análise prévia será feita para definir a estratégia.",
  },
];

export default function FAQ() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // para repetir animação ao entrar e sair da viewport
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
      setOpenIndex(null); // opcional: fecha todos ao sair da área
    }
  }, [inView, controls]);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[var(--tundraFrost)]" ref={ref}>
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-extrabold text-center pt-16 px-6 md:px-20 font-playfair text-[var(--blackPanther)]"
      >
        Dúvidas Frequentes <br /> <span className="text-4xl md:text-6xl"><span className="font-extralight">Respostas dos Nossos</span> Especialistas</span>
      </motion.h2>

      <div className="px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto divide-y divide-gray-200">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const [measureRef, { height }] = useMeasure();

            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    filter: "blur(8px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { delay: index * 0.1, duration: 0.5 },
                  },
                }}
                className={`
            group 
            border-l-8 
            transition-all 
            duration-300
            bg-white
            ${isOpen ? 'border-l-[var(--oceanBlue)]' : 'border-gray-300 hover:bg-[var(--oceanBlue)]/15'} 
          `}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-6 flex items-center justify-between cursor-pointer"
                >
                  <span className="text-2xl md:text-3xl font-bold text-[var(--blackPanther)]">
                    {item.label}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-transparent border border-[var(--oceanBlue)] rounded-full p-1"
                  >
                    <ChevronDown size={32} className="text-black" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      animate={{ height }}
                      initial={{ height: 0 }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="px-6 overflow-hidden"
                    >
                      <div
                        ref={measureRef}
                        className="py-4 text-lg md:text-xl text-[var(--blackPanther)]"
                      >
                        {item.value}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

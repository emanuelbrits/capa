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

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import WhatsappButton from "../whatsappButton/whatsappButton";

const services = [
  {
    title: "Análise de Documentos Jurídicos",
    description:
      "Orientamos sobre quais documentos são necessários para cada caso, garantindo que você esteja bem preparado para a consulta ou processo.",
    icon: FileText,
  },
  {
    title: "Consulta Jurídica Personalizada",
    description:
      "Na primeira consulta avaliamos sua situação e explicamos os próximos passos de forma clara e objetiva, sem compromisso.",
    icon: UserCheck,
  },
  {
    title: "Atendimento Presencial e Online",
    description:
      "Você escolhe: venha até nosso escritório ou receba atendimento de forma remota por vídeo ou telefone.",
    icon: Video,
  },
  {
    title: "Formas de Pagamento Flexíveis",
    description:
      "Aceitamos Pix, boleto, cartão de crédito e transferências. Em alguns casos, oferecemos parcelamento dos honorários.",
    icon: CreditCard,
  },
  {
    title: "Acompanhamento de Processos",
    description:
      "Enviamos atualizações por WhatsApp ou e-mail sempre que houver novidades. Você também pode entrar em contato a qualquer momento.",
    icon: Bell,
  },
  {
    title: "Aposentadoria e Planejamento Previdenciário",
    description:
      "Analisamos seu histórico de trabalho e documentos como CNIS e carteiras profissionais para orientar o melhor momento e forma de aposentadoria.",
    icon: Briefcase,
  },
  {
    title: "Atuação Multidisciplinar",
    description:
      "Além do direito previdenciário, atuamos nas áreas trabalhista, civil e família, oferecendo suporte jurídico completo.",
    icon: Layers,
  },
  {
    title: "Sigilo e Confiança",
    description:
      "Todos os casos são tratados com total sigilo, seguindo o Código de Ética da OAB. Sua privacidade é nossa prioridade.",
    icon: ShieldCheck,
  },
  {
    title: "Processos Trabalhistas",
    description:
      "Avaliamos seu vínculo empregatício e reunimos provas como holerites, carteira de trabalho e FGTS para construir a melhor estratégia.",
    icon: Gavel,
  },
  {
    title: "Estimativa de Prazos Processuais",
    description:
      "Após entender seu caso, informamos uma estimativa realista baseada em nossa experiência com ações semelhantes.",
    icon: Hourglass,
  },
];

export default function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div className="bg-[var(--tundraFrost)]" ref={ref}>
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-extrabold pt-16 px-6 md:px-20 font-playfair text-[var(--blackPanther)]"
      >
        Nossos Serviços
      </motion.h2>

      <div className="py-20 px-4 md:px-8 lg:px-20">
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 3 === 0;
            const isMiddle = index % 3 === 1;
            const isRight = index % 3 === 2;

            return (

              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: isLeft ? -50 : isRight ? 50 : 0,
                    y: isMiddle ? 50 : 0,
                    filter: "blur(8px)",
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                  },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-white border-1 border-[var(--oceanBlue)] rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition hover:shadow-2xl max-w-[350px] w-full sm:w-[48%] lg:w-[30%]"
              >

                <div className="flex flex-col items-center gap-3">
                  <div className="bg-[var(--oceanBlue)/10] p-2 rounded-full">
                    <Icon size={128} className="text-[var(--oceanBlue)]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[var(--blackPanther)] text-center">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--blackPanther)] text-base font-light text-center">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <WhatsappButton />
        </div>
      </div>
    </div>
  );
}

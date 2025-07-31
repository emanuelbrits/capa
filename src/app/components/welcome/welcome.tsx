"use client";

import { motion } from "framer-motion";
import WhatsappButton from "../whatsappButton/whatsappButton";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="relative w-full">
      {/* Imagem otimizada com prioridade */}
      <Image
        src="/justice.webp"
        alt="Justiça"
        fill
        priority
        quality={75}
        className="object-cover object-center -z-10"
        sizes="100vw"
      />

      {/* Camada escura sobre a imagem */}
      <div className="bg-black/60 min-h-screen flex items-center">
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-32">
          <div className="flex flex-col md:items-start items-center text-center md:text-left w-full max-w-4xl p-8 md:p-12 space-y-6 text-[var(--starburst)]">

            {/* Animação leve no título */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair leading-tight"
            >
              Defendemos seus direitos com compromisso, ética e excelência.
            </motion.h1>

            {/* Texto sem delay, aparece normalmente */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl">
              Se você enfrenta problemas trabalhistas como demissão injusta, verbas
              não pagas ou assédio no ambiente de trabalho, nosso time de advogados
              especializados está pronto para te orientar. Conte com uma equipe
              experiente, pronta para lutar por você e garantir a justiça que você
              merece.
            </motion.p>

            <WhatsappButton />
          </div>
        </div>
      </div>
    </section>
  );
}

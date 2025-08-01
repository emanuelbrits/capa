"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
import { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const testimonials = [
    {
        name: "Ana Silva",
        rating: 5,
        text: "Excelente atendimento! Resolvi meu processo previdenciário com muita clareza e profissionalismo.",
    },
    {
        name: "João Pereira",
        rating: 5,
        text: "Equipe muito competente e dedicada. Sempre me manteve informado sobre o andamento do meu caso.",
    },
    {
        name: "Maria Oliveira",
        rating: 5,
        text: "Recomendo de olhos fechados! Profissionais atenciosos e eficazes.",
    },
    {
        name: "Carlos Eduardo",
        rating: 5,
        text: "Muito satisfeito com o serviço. Responderam minhas dúvidas rapidamente e conseguiram um ótimo resultado.",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex justify-center space-x-1 text-[#FFD700]">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={20}
                    fill={i < rating ? "currentColor" : "none"}
                    stroke="currentColor"
                />
            ))}
        </div>
    );
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
    },
};

export default function Testimonials() {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false,
        rootMargin: "900px 0px 100px 0px",
    });

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    return (
        <div className="bg-white">
            <motion.h2
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: {
                        opacity: 0,
                        x: -50,
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                    },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-extrabold pt-16 px-6 md:px-20 font-playfair text-[var(--oceanBlue)]"
            >
                O que nossos clientes dizem
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto py-16 px-6 md:px-20"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                        className="bg-[var(--tundraFrost)] border-1 border-[var(--oceanBlue)] rounded-xl shadow-lg p-6 flex flex-col justify-between text-[var(--blackPanther)] min-h-[300px]"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <StarRating rating={item.rating} />
                            <div className="w-full flex justify-start text-xl">
                                <FaQuoteLeft />
                            </div>
                            <p className="text-center text-base md:text-lg italic mt-2">{item.text}</p>
                            <div className="w-full flex justify-end text-xl">
                                <FaQuoteRight />
                            </div>
                        </div>

                        <p className="font-semibold mt-6 text-center">{item.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

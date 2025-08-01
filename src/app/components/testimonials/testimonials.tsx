"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Scale } from "lucide-react";
import { useEffect } from "react";

export default function Testimonials() {
    const inView = useInView({
        threshold: 0.3,
        triggerOnce: false,
        rootMargin: "500px 0px 100px 0px",
    });

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://apps.elfsight.com/p/platform.js";
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="bg-white py-16 px-6 md:px-20">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-normal font-playfair text-[var(--blackPanther)] mb-10"
            >
                <div className="flex md:gap-8">
                    <div className="flex flex-col gap-4">
                        <div>
                            <span className="font-bold text-[var(--oceanBlue)]">Escritório</span> bem avaliado
                        </div>
                        <div>
                            Referência em <span className="font-bold text-[var(--oceanBlue)]">Direito</span>
                        </div>
                    </div>
                    <div className="shiny-icon">
                        <Scale className="w-[7rem] h-[7rem] text-[var(--blackPanther)]" />
                    </div>
                </div>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div
                    className="elfsight-app-576a9a9a-d193-45ea-996c-a57f06d14d5d"
                    data-elfsight-app-lazy
                ></div>
            </motion.div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero_poster.png"
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-[center_40%] scale-[1.15] md:scale-100 transition-transform duration-700"
          aria-hidden="true"
        >
          <source src="/video_hertz.mp4" type="video/mp4" />
          {/* Fallback text if video is not supported */}
          Seu navegador não suporta vídeos HTML5.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-zinc-950/70" />
        {/* Gradient fade at bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            PRODUÇÃO AUDIOVISUAL <span className="text-amber-500"> & ESTRATÉGICA</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="mt-4 text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-10">
            Transformamos visão em realidade através de produções audiovisuais memoráveis e estratégias que convertem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            href="/#services"
            className="group w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-zinc-950 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 hover:scale-105"
          >
            Ver Serviços
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto bg-transparent border border-zinc-500 hover:border-amber-400 hover:text-amber-400 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
          >
            Fale Conosco
          </Link>
        </motion.div>
      </div>

    </section>
  );
}

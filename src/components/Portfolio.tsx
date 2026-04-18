"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "./ContactModal";

const projects = [
  {
    id: 1,
    title: "Produção em Estúdio",
    category: "Audiovisual",
    image: "/images/portfolio_1.png",
  },
  {
    id: 2,
    title: "Captação & Bastidores",
    category: "Cinematografia",
    image: "/images/portfolio_2.png",
  },
  {
    id: 3,
    title: "Comercial",
    category: "Produção",
    image: "/images/portfolio_3.jpg",
  },
  {
    id: 4,
    title: "Eventos Corporativos",
    category: "Executivo",
    image: "/images/portfolio_4.jpg",
  },
  {
    id: 5,
    title: "Documentário",
    category: "Cinema",
    image: "/images/portfolio_5.jpg",
  },
  {
    id: 6,
    title: "Vídeo Institucional",
    category: "B2B",
    image: "/images/portfolio_6.jpg",
  },
  {
    id: 7,
    title: "Marketing Digital",
    category: "Social Media",
    image: "/images/portfolio_7.jpg",
  },
  {
    id: 8,
    title: "Produção Hertz",
    category: "Audiovisual",
    image: "/images/portfolio_8.jpg",
  },
  {
    id: 9,
    title: "Estratégia de Marca",
    category: "Consultoria",
    image: "/images/portfolio_9.jpg",
  },
  {
    id: 10,
    title: "Lançamento de Produto",
    category: "Inovação",
    image: "/images/portfolio_10.jpg",
  },
  {
    id: 11,
    title: "Cinema Independente",
    category: "Produção",
    image: "/images/portfolio_11.jpg",
  },
  {
    id: 12,
    title: "Bastidores PRO",
    category: "Cinematografia",
    image: "/images/portfolio_12.jpg",
  },
];

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="portfolio" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Portfólio <span className="text-amber-500">em destaque</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl px-4"
          >
            Um olhar sobre os momentos incríveis que ajudamos a criar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <a href="#" className="text-amber-500 hover:text-amber-400 font-semibold flex items-center gap-2 group">
              Ver todos os projetos
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsModalOpen(true)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer will-change-[transform,opacity]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/0 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-amber-500 font-medium mb-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

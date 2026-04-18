"use client";

import { motion, Variants } from "framer-motion";
import { Video, LineChart, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Produção Audiovisual",
    description: "Criamos conteúdo visual de alta qualidade que conta histórias impactantes. Vídeos institucionais, comerciais, documentários e muito mais.",
    icon: Video,
    bullets: [
      "Vídeos Institucionais",
      "Comerciais",
      "Documentários",
      "Motion Graphics"
    ],
    link: "/servicos/audiovisual"
  },
  {
    title: "Consultoria Estratégica",
    description: "Desenvolvemos estratégias empresariais personalizadas para impulsionar seu negócio e alcançar resultados extraordinários.",
    icon: LineChart,
    bullets: [
      "Planejamento Estratégico",
      "Análise de Mercado para Empresas e Afiliados",
      "Posicionamento de Marca",
      "Growth Strategy",
      "Branding",
      "Análises Internas"
    ],
    link: "/servicos/consultoria"
  },
  {
    title: "Tráfego & Conversão",
    description: "Campanhas de tráfego pago focadas em resultados reais. Maximizamos seu ROI com estratégias de conversão comprovadas.",
    icon: Target,
    bullets: [
      "Meta Ads",
      "Google Ads",
      "Funis de Vendas",
      "Otimização de Conversão"
    ],
    link: "/servicos/trafego"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Nossos <span className="text-amber-500">Serviços</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg tracking-widest uppercase font-semibold"
          >
            O QUE FAZEMOS
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 will-change-[transform,opacity]"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden flex flex-col h-full will-change-[transform,opacity]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />

              <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center mb-6 py-4 px-4 group-hover:border-amber-500 transition-colors duration-300 shrink-0">
                <service.icon className="w-7 h-7 text-amber-500" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Bullets List */}
              <ul className="space-y-3 mb-10 grow">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4 text-zinc-300 text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-sm mt-1.5 shrink-0 opacity-80" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Saiba Mais Button */}
              <Link
                href={service.link}
                className="mt-auto inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-semibold text-sm uppercase tracking-wider transition-all pt-6 w-full group/btn"
              >
                Saiba Mais
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

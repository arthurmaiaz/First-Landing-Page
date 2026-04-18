"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { TrendingUp, Award, Lightbulb } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";


const categories = [
  {
    title: "Estratégia & Crescimento",
    icon: TrendingUp,
    items: [
      {
        title: "Planejamento Estratégico",
        description: "Definição de metas claras e roteiros detalhados para alcançar o sucesso do seu negócio a longo prazo.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Growth Strategy",
        description: "Metodologias ágeis para acelerar o crescimento, focando em aquisição, retenção e otimização de métricas.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Análise de Mercado",
        description: "Estudos profundos para empresas e afiliados sobre tendências, concorrentes e oportunidades de oceano azul.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Posicionamento & Branding",
    icon: Award,
    items: [
      {
        title: "Posicionamento de Marca",
        description: "Encontre sua voz e destaque-se no mercado construindo uma percepção única na mente do consumidor.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Branding",
        description: "Criação de identidades visuais e narrativas poderosas que engajam e fidelizam clientes.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Análises Internas",
        description: "Diagnóstico completo das operações e cultura organizacional para alinhar equipe e objetivos empresariais.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  }
];

export default function ConsultoriaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="bg-zinc-950 min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="mb-20">
            <h4 className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Nossos Serviços
            </h4>
            <h1 className="text-4xl md:text-6xl font-normal text-white mb-6">
              Consultoria <span className="text-amber-500 font-semibold">Estratégica</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              Soluções inteligentes e estratégias personalizadas para elevar o patamar do seu negócio.
            </p>
          </div>

          {/* Categories Sections */}
          <div className="space-y-24">
            {categories.map((category, idx) => (
              <div key={idx}>
                {/* Section Title with Line */}
                <div className="flex items-center gap-6 mb-10">
                  <div className="shrink-0 w-12 h-12 border border-amber-500/30 rounded flex items-center justify-center bg-zinc-900/50">
                    <category.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="grow h-px bg-amber-500/20 relative">
                    <div className="absolute left-0 top-0 h-full w-24 bg-amber-500/60" />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-semibold text-amber-500 mb-8">
                  {category.title}
                </h2>

                {/* Enhanced Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, i) => (
                    <div key={i} className="group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                      <div className="relative h-60 md:h-52 lg:h-64 rounded-xl overflow-hidden mb-6 border border-zinc-800/50 hover:border-amber-500/30 transition-colors duration-300">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
      <Footer />
    </>
  );
}

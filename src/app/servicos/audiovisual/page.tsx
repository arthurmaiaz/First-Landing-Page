"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Sparkles, Video, Clapperboard, Smartphone } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";


const categories = [
  {
    title: "Efeitos Visuais (VFX)",
    icon: Sparkles,
    images: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      "/images/audiovisual/vfx_4.png",
    ]
  },
  {
    title: "Motion Graphics",
    icon: Video,
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1974&auto=format&fit=crop",
    ]
  },
  {
    title: "Produções para Redes Sociais",
    icon: Clapperboard,
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
      "/images/audiovisual/social_media_2.png",
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2006&auto=format&fit=crop",
    ]
  },
  {
    title: "Posts e Vídeos Curtos",
    icon: Smartphone,
    images: [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1915&auto=format&fit=crop",
    ]
  }
];

export default function Audiovisual() {
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
              Produção <span className="text-amber-500 font-semibold">Audiovisual</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              Do conceito à tela, criamos experiências visuais que capturam a essência da sua marca e conectam com seu público.
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

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.images.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setIsModalOpen(true)}
                      className="relative h-64 rounded-xl overflow-hidden group border border-zinc-800/50 hover:border-amber-500/30 transition-colors duration-300 cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`${category.title} Exemplo ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

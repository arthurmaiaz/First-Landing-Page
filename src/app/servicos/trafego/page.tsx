import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MousePointerClick, BarChart3, Fingerprint } from "lucide-react";

export const metadata = {
  title: "Tráfego & Conversão | Hertz",
  description: "Estratégias baseadas em dados para atrair o público certo e escalar suas vendas.",
};

const categories = [
  {
    title: "Gestão de Tráfego",
    icon: MousePointerClick,
    items: [
      {
        title: "Google Ads & YouTube",
        description: "Alcance pessoas no exato momento em que procuram pelos seus serviços com anúncios de alta intenção.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description: "Segmentação cirúrgica para impactar as pessoas certas nas maiores redes sociais do mundo.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
      },
      {
        title: "TikTok Ads",
        description: "Fale com as novas gerações e crie demandas através de conteúdos altamente virais.",
        image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Otimização & Funil (CRO)",
    icon: BarChart3,
    items: [
      {
        title: "Modelagem de Funis de Vendas",
        description: "Estruturamos passo a passo a jornada perfeita do usuário, desde o clique até o checkout.",
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Otimização de Conversão",
        description: "Testes A/B e mapeamento de calor para descobrir por que usuários não compram e consertar os vazamentos.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Data & Tracking",
        description: "Implementação avançada de pixels, APIs de conversão e dashboards para inteligência de dados.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      }
    ]
  }
];

export default function TrafegoPage() {
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
              Tráfego <span className="text-amber-500 font-semibold">& Conversão</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              Estratégias baseadas em dados para atrair o público certo e escalar suas vendas.
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
                    <div key={i} className="group cursor-pointer">
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
      </main>
      <Footer />
    </>
  );
}

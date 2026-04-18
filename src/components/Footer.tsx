import { Camera, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
          {/* Logo & Description */}
          <div className="mb-8 md:mb-0 text-center md:text-left max-w-sm">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white inline-block mb-4">
              HERTZ<span className="text-amber-500">.</span>
            </Link>
            <p className="text-zinc-500">
              Transformando experiências em momentos inesquecíveis. A sua parceira ideal em entretenimento e produção de eventos de alto padrão.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left mb-8 md:mb-0">
            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li><Link href="/#home" className="text-zinc-500 hover:text-amber-400 transition-colors">Início</Link></li>
                <li><Link href="/#services" className="text-zinc-500 hover:text-amber-400 transition-colors">Serviços</Link></li>
                <li><Link href="/#portfolio" className="text-zinc-500 hover:text-amber-400 transition-colors">Portfólio</Link></li>
                <li><Link href="/#contact" className="text-zinc-500 hover:text-amber-400 transition-colors">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Social</h4>
              <ul className="space-y-2 text-zinc-500">
                <li><a href="https://www.instagram.com/hertz.filmes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-amber-400 transition-colors">Instagram</a></li>
                <li><a href="https://wa.me/5585999136583" className="hover:text-amber-400 transition-colors">Whatsapp</a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=entertainmenthertz@gmail.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {currentYear} Hertz Entertainment. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-zinc-600">
            <a href="#" className="hover:text-white transition-colors" title="Instagram"><Camera size={20} /></a>
            <a href="#" className="hover:text-white transition-colors" title="Whatsapp"><Phone size={20} /></a>
            <a href="#" className="hover:text-white transition-colors" title="Email"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

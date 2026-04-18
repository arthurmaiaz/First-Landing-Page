"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Camera, Mail, Copy, Check, X } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const email = "entertainmenthertz@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Entre em Contato</h2>
              <p className="text-zinc-500">Escolha a melhor forma de contato</p>
            </div>

            <div className="flex flex-col gap-4">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/5585999136583"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-5 rounded-lg transition-all transform active:scale-95"
              >
                <MessageCircle size={22} fill="currentColor" />
                <span className="tracking-widest uppercase">WhatsApp</span>
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/hertz.filmes/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#E1306C] hover:bg-[#d0245b] text-white font-bold py-5 rounded-lg transition-all transform active:scale-95"
              >
                <Camera size={22} />
                <span className="tracking-widest uppercase">Instagram</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-3 w-full bg-[#EA4335] hover:bg-[#d63a2a] text-white font-bold py-5 rounded-lg transition-all transform active:scale-95 relative"
              >
                {copied ? <Check size={22} /> : <Copy size={22} />}
                <span className="tracking-widest uppercase">
                  {copied ? "Copiado!" : "Copiar E-mail"}
                </span>
              </button>
            </div>
            
            <p className="mt-8 text-center text-zinc-600 text-xs">
              Estamos prontos para transformar sua ideia em realidade.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

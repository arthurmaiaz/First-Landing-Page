"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Camera, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contato Hertz - ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
    );
    
    window.location.href = `mailto:entertainmenthertz@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Vamos criar algo <span className="text-amber-500">incrível juntos?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg mb-12"
            >
              Entre em contato com nossa equipe para discutirmos o seu próximo grande projeto.
            </motion.p>

            <div className="space-y-6">
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=entertainmenthertz@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-zinc-300 hover:text-amber-400 group transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="font-medium text-lg">entertainmenthertz@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                href="https://wa.me/5585999136583"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-zinc-300 hover:text-green-500 group transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-green-500 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">WhatsApp</p>
                  <p className="font-medium text-lg">(85) 99913-6583</p>
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                href="https://www.instagram.com/hertz.filmes/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-zinc-300 hover:text-pink-500 group transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-pink-500 transition-colors">
                  <Camera className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Instagram</p>
                  <p className="font-medium text-lg">@hertz.filmes</p>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Deixe sua mensagem</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1" htmlFor="name">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 group transition-all"
              >
                Enviar Mensagem
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ROTA: src/sections/lead-form.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Lock } from "lucide-react";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", whatsapp: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-36 bg-card/50">
      <div className="container px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-primary" />
            <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-sans font-bold">
              Acesso exclusivo
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6 leading-tight">
            Imóveis que{" "}
            <span className="text-gradient-gold italic">não estão nos portais</span>
          </h2>
          <p className="text-foreground/45 font-sans leading-[1.8] text-[15px] mb-8">
            Alguns dos nossos melhores imóveis são negociados antes de serem publicados. 
            Cadastre-se e receba oportunidades exclusivas diretamente no seu WhatsApp.
          </p>
          <div className="flex items-center gap-2 text-foreground/30 font-sans text-xs">
            <Lock size={12} />
            <span>Seus dados estão protegidos. Sem spam.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="bg-card border border-foreground/5 p-8 md:p-10"
        >
          {submitted ? (
            <div className="text-center py-16">
              <CheckCircle size={40} className="text-primary mx-auto mb-5" />
              <h3 className="text-2xl font-display text-foreground mb-3">Cadastro realizado!</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Em breve você receberá as melhores oportunidades de Guarulhos.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold font-sans">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-foreground/15"
                  placeholder="Como podemos te chamar?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold font-sans">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-foreground/15"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold font-sans">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-foreground/15"
                  placeholder="seu@email.com"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-all duration-500 mt-2"
              >
                <Send size={13} />
                Quero receber oportunidades
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

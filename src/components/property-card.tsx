// ROTA: src/components/property-card.tsx
"use client";

import { motion } from "framer-motion";
import { BedDouble, Bath, Car, Maximize, MessageCircle } from "lucide-react";
import Image from "next/image";
import type { Property } from "@/types/property";

const WHATSAPP_URL = "https://wa.me/5511947070056?text=[ L.P ] Olá! Gostaria de saber mais sobre o imóvel ";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group relative bg-card border border-foreground/5 overflow-hidden cursor-pointer hover:border-primary/15 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {property.tag && (
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.15em] font-bold font-sans">
            {property.tag}
          </div>
        )}

        <div className="absolute bottom-4 left-4">
          <span className="text-2xl font-display font-bold text-foreground drop-shadow-lg">
            {property.price}
          </span>
        </div>
      </div>

      <div className="p-5 pt-4">
        <p className="text-primary/80 font-sans font-medium text-[10px] uppercase tracking-[0.2em] mb-1.5">
          {property.neighborhood} · {property.city}
        </p>
        <h3 className="text-lg font-display text-foreground mb-4 leading-snug">{property.title}</h3>

        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-foreground/5">
          <div className="flex items-center gap-1.5">
            <Maximize size={12} className="text-primary/50" />
            <span className="text-[11px] text-foreground/50 font-sans">{property.sqft}m²</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BedDouble size={12} className="text-primary/50" />
            <span className="text-[11px] text-foreground/50 font-sans">{property.beds} quartos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath size={12} className="text-primary/50" />
            <span className="text-[11px] text-foreground/50 font-sans">{property.baths}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Car size={12} className="text-primary/50" />
            <span className="text-[11px] text-foreground/50 font-sans">{property.parking}</span>
          </div>
        </div>

        <a
          href={`${WHATSAPP_URL}${property.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 border border-primary/20 text-primary font-sans font-bold uppercase tracking-[0.15em] text-[10px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          <MessageCircle size={12} />
          Tenho Interesse
        </a>
      </div>
    </motion.div>
  );
}

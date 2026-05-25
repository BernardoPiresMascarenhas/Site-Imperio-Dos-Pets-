"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  wpplink: string;
  img: string;
  openModal: (
    title: string,
    description: string,
    wpplink: string,
    img: string,
    directToCatalog?: boolean
  ) => void;
  directToCatalog?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  openModal,
  wpplink,
  img,
  directToCatalog,
}) => {
  return (
    <button
      type="button"
      onClick={() => openModal(title, description, wpplink, img, directToCatalog)}
      className="group relative w-full text-left bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg border border-cream-200 hover:border-brand-200 transition-all duration-500 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2 focus:ring-offset-cream-100"
    >
      {/* Imagem */}
      <div className="relative aspect-[5/4] overflow-hidden bg-cream-200">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />

        {/* Icon chip flutuante */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-soft border border-cream-200">
          <div className="text-brand-600 [&>svg]:w-6 [&>svg]:h-6">{icon}</div>
        </div>

        {/* Arrow chip */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 text-brand-700" />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 lg:p-7">
        <h3 className="font-display text-2xl font-semibold text-ink-900 mb-2 group-hover:text-brand-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-ink-500 leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:gap-3 transition-all duration-300">
          <span>{directToCatalog ? "Ver catálogo" : "Saiba mais"}</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Borda decorativa inferior */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-500 via-brand-400 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </button>
  );
};

export default ServiceCard;

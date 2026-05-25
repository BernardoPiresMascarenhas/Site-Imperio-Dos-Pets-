"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

type PromoModalProps = {
  onClose: () => void;
  onWhatsApp: () => void;
};

const PromoModal = ({ onClose, onWhatsApp }: PromoModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] overflow-y-auto bg-ink-900/60 backdrop-blur-md p-4 flex items-center justify-center"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-cream-50 rounded-3xl shadow-soft-lg border border-cream-200 w-full max-w-sm overflow-hidden"
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-white/80 backdrop-blur-sm text-ink-700 hover:text-red-500 hover:bg-white rounded-full transition-all shadow-soft"
          >
            <X size={18} />
          </button>

          {/* Imagem */}
          <div className="relative w-full aspect-square">
            <Image src="/promocao.png" alt="Promoção especial" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />
          </div>

          {/* Conteúdo */}
          <div className="p-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/15 text-gold-600 rounded-full text-xs font-semibold mb-3">
              <Sparkles className="w-3 h-3" />
              Oferta limitada
            </div>
            <h2 className="font-display text-2xl font-medium text-ink-900 leading-tight">
              Promoção especial para o seu pet!
            </h2>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              Aproveite condições imperdíveis e cuide do seu melhor amigo com quem entende.
            </p>

            <motion.button
              onClick={onWhatsApp}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3.5 text-white text-base font-semibold rounded-full bg-green-600 hover:bg-green-700 shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero saber mais!
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoModal;

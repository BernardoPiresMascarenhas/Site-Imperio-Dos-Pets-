"use client";
import { motion } from "framer-motion";

export default function BotaoTireDuvidas() {
  return (
    <motion.a
      href="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20tirar%20uma%20dúvida."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300 mt-4"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      Tire suas dúvidas
    </motion.a>
  );
}

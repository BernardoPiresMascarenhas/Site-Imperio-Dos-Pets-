"use client";
import { motion } from "framer-motion";

const BotaoAgendamento = () => {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 96;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.a
      href="#contact"
      onClick={(e) => scrollToSection(e, "contact")}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300"
    >
      <span>Agende uma consulta</span>
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
    </motion.a>
  );
};

export default BotaoAgendamento;

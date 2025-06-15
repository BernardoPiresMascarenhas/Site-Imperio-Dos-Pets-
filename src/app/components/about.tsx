"use client";

import BotaoTireDuvidas from "@/app/components/BotaoTireDuvidas";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }} // amount: 30% visível para disparar animação
        >
          {/* Imagem à esquerda */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/sobrenos.png"
              alt="Sobre nós"
              width={350}
              height={350}
              className="rounded-2xl shadow-xl border-4 border-purple-200"
            />
          </motion.div>

          {/* Título, texto e botão à direita */}
          <div>
            <motion.h2
              className="text-4xl font-extrabold text-purple-700 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Sobre Nós
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              No Império dos Pets, nossa missão é garantir a qualidade de vida
              e o bem-estar dos seus animais de estimação. Com uma equipe
              dedicada e apaixonada, oferecemos uma ampla gama de serviços para
              cuidar da saúde e felicidade dos seus amigos peludos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <BotaoTireDuvidas />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

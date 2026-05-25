"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Scissors, HeartPulse, Check } from "lucide-react";
import { FaStethoscope, FaSyringe, FaMicroscope, FaShoppingCart } from "react-icons/fa";

const AboutUs = () => {
  const services = [
    { icon: <FaStethoscope />, name: "Consultas veterinárias" },
    { icon: <FaSyringe />, name: "Vacinações completas" },
    { icon: <FaMicroscope />, name: "Exames laboratoriais" },
    { icon: <HeartPulse className="w-4 h-4" />, name: "Pequenas cirurgias" },
    { icon: <FaShoppingCart />, name: "Pet shop selecionado" },
    { icon: <Scissors className="w-4 h-4" />, name: "Banho e tosa" },
  ];

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Imagem com composição */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-soft-lg">
                <Image
                  src="/sobrenos.png"
                  alt="Equipe da Império dos Pets cuidando de um pet"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Moldura decorativa */}
              <div className="absolute -inset-4 -z-10 rounded-[3rem] border border-brand-200/60" />
              <div className="absolute -bottom-6 -right-6 -z-10 w-32 h-32 bg-gold-400/20 rounded-full blur-2xl" />

              {/* Selo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-soft-lg border border-cream-200"
              >
                <div className="font-display text-4xl font-semibold text-brand-700 leading-none">5+</div>
                <div className="text-xs text-ink-500 mt-1 uppercase tracking-wider font-medium">
                  anos de história
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sage-50 border border-sage-100 rounded-full text-xs font-semibold text-sage-500 tracking-wide uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
              Quem somos
            </span>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink-900 leading-[1.05]">
              Mais que uma clínica,{" "}
              <span className="italic text-gradient-brand">uma família</span>{" "}
              que cuida.
            </h2>

            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              A Império dos Pets nasceu da paixão por animais e da certeza de que cada pet merece
              atendimento atencioso, profissional e cheio de carinho. Há mais de 5 anos cuidando
              da saúde, da estética e do bem-estar do seu melhor amigo.
            </p>

            <p className="mt-4 text-lg text-ink-500 leading-relaxed">
              Nossa missão vai além dos serviços — buscamos promover qualidade de vida e tranquilidade
              para tutores e pets. Aqui, eles são tratados como verdadeiros membros da família.
            </p>

            {/* Lista de estrutura */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-5">
                Estrutura completa
              </h3>
              <motion.ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-cream-50 border border-cream-200 hover:border-brand-200 hover:bg-brand-50/50 transition-colors duration-300"
                    variants={listItemVariants}
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0 text-brand-700 [&>svg]:w-4 [&>svg]:h-4">
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium text-ink-800">{service.name}</span>
                    <Check className="w-4 h-4 text-sage-400 ml-auto flex-shrink-0" />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

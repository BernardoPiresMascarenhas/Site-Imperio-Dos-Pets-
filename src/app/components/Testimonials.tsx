"use client";
import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      name: "Fabiana",
      relation: "Tutora do Titico",
      text: "Titico é assíduo no banho, tosa e atendimentos veterinários. Equipe muito atenciosa, cuidadosa, confiável. Eu atravesso a cidade para levá-lo para o banho semanal e vacinas. Confio de olhos fechados.",
    },
    {
      name: "Larissa",
      relation: "Tutora do Cookie",
      text: "Sem dúvida, a Império dos Pets é a melhor clínica veterinária! Meu cachorro já foi tomar banho em alguns pet shops antes e ele sempre ia cheio de medo, quando conhecemos a Império dos Pets, ele passou a ir super tranquilo e feliz.",
    },
    {
      name: "Tatiana",
      relation: "Tutora do Luke",
      text: "Fiquei muito satisfeita com a consulta do meu filhote neste local. O veterinário foi muito atencioso e dedicou tempo para explicar tudo sobre a saúde do meu pet. Recomendo demais!",
    },
    {
      name: "Priscila",
      relation: "Tutora da Panqueca",
      text: "Melhor clínica do mundo! Atenciosos, carinhosos e hiper responsáveis. Minha cachorrinha é cliente antiga e é apaixonada por todos da clínica. Só tenho elogios e agradecimento a todos que trabalham lá!",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden" id="depoimentos">
      {/* Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-500/10 border border-gold-500/30 rounded-full text-xs font-semibold text-gold-600 tracking-wide uppercase mb-5">
            <Star className="w-3 h-3" fill="currentColor" />
            Depoimentos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink-900 leading-[1.05]">
            Tutores que nos{" "}
            <span className="italic text-gradient-brand">amam</span>
          </h2>
          <p className="mt-5 text-lg text-ink-500 leading-relaxed">
            Histórias reais de pessoas que confiam o cuidado dos seus pets à Império dos Pets.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviews.map((review, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group relative bg-white p-7 lg:p-8 rounded-3xl shadow-soft hover:shadow-soft-lg border border-cream-200 hover:border-brand-200 hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-7">
                <div className="w-10 h-10 bg-brand-600 rounded-2xl flex items-center justify-center shadow-soft">
                  <Quote className="text-white w-5 h-5" fill="currentColor" />
                </div>
              </div>

              <div className="flex-1">
                {/* Estrelas */}
                <div className="flex gap-0.5 mb-5 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold-500" fill="currentColor" />
                  ))}
                </div>

                <p className="text-ink-700 leading-relaxed text-[15px] mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Autor */}
              <div className="pt-5 border-t border-cream-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-semibold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-ink-900 text-sm">{review.name}</p>
                  <p className="text-xs text-ink-500">{review.relation}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

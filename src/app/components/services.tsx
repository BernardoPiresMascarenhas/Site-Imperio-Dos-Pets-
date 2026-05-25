"use client";
import React, { useState } from "react";
import { Scissors, Syringe, Stethoscope, HeartPulse, BriefcaseMedical } from "lucide-react";
import Modal from "./modal";
import ServiceCard from "./ServiceCard";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

interface CartItem {
  id: number;
  name: string;
  image: string;
  available: boolean;
  price: string;
  category: string;
  onSale: boolean;
  onNovo: boolean;
  quantity: number;
}

interface ServicesProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Services: React.FC<ServicesProps> = ({ cartItems, setCartItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
    wpplink: string;
    img: string;
    directToCatalog?: boolean;
  } | null>(null);

  const openModal = (
    title: string,
    description: string,
    wpplink: string,
    img: string,
    directToCatalog?: boolean
  ) => {
    setModalContent({ title, description, wpplink, img, directToCatalog });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const services = [
    {
      icon: <Stethoscope />,
      title: "Consultas",
      description:
        "Atendimento personalizado com diagnósticos precisos e tratamentos eficazes para todas as fases da vida do seu pet.",
      wpplink: "https://wa.me/553195306014?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.",
      img: "/dog1.png",
    },
    {
      icon: <Scissors />,
      title: "Banho e Tosa",
      description:
        "Cuidados estéticos e higiênicos com produtos selecionados para deixar seu pet sempre bonito e confortável.",
      wpplink: "https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Banho%20e%20Tosa.",
      img: "/cat1.png",
    },
    {
      icon: <Syringe />,
      title: "Vacinação",
      description:
        "Calendário completo de vacinação para prevenir doenças e manter seu melhor amigo sempre saudável.",
      wpplink: "https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Vacinação.",
      img: "/dog2.png",
    },
    {
      icon: <HeartPulse />,
      title: "Cirurgia",
      description:
        "Procedimentos cirúrgicos com profissionais experientes e ambiente seguro, do pré ao pós-operatório.",
      wpplink: "https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20Procedimentos%20Cirúrgicos.",
      img: "/cat3.png",
    },
    {
      icon: <FaShoppingCart />,
      title: "Pet Shop",
      description:
        "Produtos, acessórios, brinquedos e itens de higiene selecionados com qualidade para o bem-estar do seu pet.",
      wpplink: "https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20Produtos%20e%20Acessórios.",
      img: "/cat2.png",
      directToCatalog: true,
    },
    {
      icon: <BriefcaseMedical />,
      title: "Farmácia Pet",
      description:
        "Medicamentos, vermífugos, antiparasitários e suplementos com orientação profissional para tratar e cuidar.",
      wpplink: "https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Farmácia%20Pet.",
      img: "/cat4.png",
      directToCatalog: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-cream-50 overflow-hidden"
    >
      {/* Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-sage-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-xs font-semibold text-brand-700 tracking-wide uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            O que oferecemos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink-900 leading-[1.05]">
            Tudo para o seu pet,{" "}
            <span className="italic text-gradient-brand">em um só lugar</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-ink-500 leading-relaxed">
            Da consulta de rotina ao banho carinhoso. Estrutura completa
            pensada para a saúde e o bem-estar do seu melhor amigo.
          </p>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={cardVariants}>
              <ServiceCard
                icon={s.icon}
                title={s.title}
                description={s.description}
                openModal={openModal}
                wpplink={s.wpplink}
                img={s.img}
                directToCatalog={s.directToCatalog}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {isModalOpen && modalContent && (
        <Modal
          title={modalContent.title}
          description={modalContent.description}
          wpplink={modalContent.wpplink}
          img={modalContent.img}
          closeModal={closeModal}
          directToCatalog={modalContent.directToCatalog}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
    </section>
  );
};

export default Services;

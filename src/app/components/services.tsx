import React, { useState } from "react";
import { Scissors, Syringe, Stethoscope, Bath, HeartPulse, BriefcaseMedical, House } from "lucide-react";
import { LiaToothSolid } from "react-icons/lia";
import Modal from "./modal";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
    wpplink: string;
    img: string;
  } | null>(null);

  const openModal = (title: string, description: string, wpplink: string, img: string) => {
    setModalContent({ title, description, wpplink, img });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div id="services" className="py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-purple-800 mb-10 drop-shadow flex items-center justify-center gap-2">
          <span>🐾</span>
            <span>Nossos Serviços</span>
          <span>🐾</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard
            icon={<Stethoscope className="h-10 w-10 text-pink-600" />}
            title="Consultas"
            description="Atendimento personalizado para diagnósticos precisos e tratamentos eficazes."
            openModal={openModal}
            wpplink="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
            img="/dog1.png"
          />
          <ServiceCard
            icon={<Scissors className="h-10 w-10 text-rose-500" />}
            title="Banho e Tosa"
            description="Cuidados estéticos e higiênicos para deixar seu pet sempre bonito e confortável."
            openModal={openModal}
            wpplink="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Banho%20e%20Tosa."
            img="/cat1.png"
          />
          <ServiceCard
            icon={<Syringe className="h-10 w-10 text-indigo-500" />}
            title="Vacinação"
            description="Proteção completa para prevenir doenças e manter seu pet saudável."
            openModal={openModal}
            wpplink="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Vacinação."
            img="/dog2.png"
          />
          <ServiceCard
            icon={<HeartPulse className="h-10 w-10 text-red-500" />}
            title="Cirurgia"
            description="Procedimentos seguros com profissionais experientes e cuidadosos."
            openModal={openModal}
            wpplink="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20Procedimentos%20Cirúrgicos."
            img="/cat3.png"
          />
          <ServiceCard
            icon={<Bath className="h-10 w-10 text-teal-500" />}
            title="Pet Shop"
            description="Produtos e acessórios para seu pet com muito amor e qualidade."
            openModal={openModal}
            wpplink="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20Produtos%20e%20Acessórios."
            img="/cat2.png"
          />
          <ServiceCard
            icon={<BriefcaseMedical className="h-10 w-10 text-green-600" />}
            title="Farmácia Pet"
            description="Medicamentos e suplementos de qualidade para o bem-estar do seu bichinho."
            openModal={openModal}
            wpplink="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Farmácia%20Pet."
            img="/cat4.png"
          />
        </div>
      </div>

      {isModalOpen && modalContent && (
        <Modal
          title={modalContent.title}
          description={modalContent.description}
          wpplink={modalContent.wpplink}
          img={modalContent.img}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Services;


import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  wpplink: string;
  img: string;
  openModal: (title: string, description: string, wpplink: string, img: string, directToCatalog?: boolean) => void;
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
    <div
      className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-lg border border-transparent hover:border-purple-300 transition-all duration-300 transform hover:scale-105 cursor-pointer"
      onClick={() => openModal(title, description, wpplink, img, directToCatalog)}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 shadow-inner mb-4">
        <div className="text-purple-600 text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-purple-800 mb-2">{title}</h3>
      <p className="text-gray-600">Clique para saber mais!</p>
    </div>
  );
};

export default ServiceCard;
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  title: string;
  description: string;
  wpplink: string;
  img: string;
  closeModal: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: "-5%" },
  visible: {
    opacity: 1,
    scale: 1,
    y: "0%",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.9, y: "5%" },
};

const Modal: React.FC<ModalProps> = ({ title, description, closeModal, wpplink, img }) => {
  const [showCatalog, setShowCatalog] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const isPharmacy = title === "Farmácia Pet";
  const isPetShop = title === "Pet Shop";

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const pharmacyItems = [
    { id: 1, name: "Antibiótico Canino", image: "/catalogo/farmacia/antibiotico.png", available: true, price: "R$ 45,00", category: "Remédio", onSale: true },
    { id: 2, name: "Vermífugo para Gatos", image: "/catalogo/farmacia/vermifigo.png", available: false, price: "R$ 32,00", category: "Remédio", onSale: false },
    { id: 3, name: "Shampoo Medicinal", image: "/catalogo/farmacia/shampoo.png", available: true, price: "R$ 27,00", category: "Higiene", onSale: false },
    { id: 4, name: "Suplemento Vitaminico", image: "/catalogo/farmacia/suplemento.png", available: true, price: "R$ 50,00", category: "Suplemento", onSale: true },
    { id: 5, name: "Colírio Veterinário", image: "/catalogo/farmacia/colirio.png", available: false, price: "R$ 22,00", category: "Remédio", onSale: false },
    { id: 6, name: "Pomada Cicatrizante", image: "/catalogo/farmacia/pomada.png", available: true, price: "R$ 29,00", category: "Remédio", onSale: false },
  ];

  const petShopItems = [
    { id: 1, name: "Bola Interativa", image: "/catalogo/petshop/bola.png", available: true, price: "R$ 18,00", category: "Brinquedo", onSale: true },
    { id: 2, name: "Coleira Ajustável", image: "/catalogo/petshop/coleira.png", available: false, price: "R$ 25,00", category: "Acessório", onSale: false },
    { id: 3, name: "Ração Premium", image: "/catalogo/petshop/racao.png", available: true, price: "R$ 90,00", category: "Ração", onSale: false },
    { id: 4, name: "Osso de Brinquedo", image: "/catalogo/petshop/osso.png", available: false, price: "R$ 15,00", category: "Brinquedo", onSale: false },
    { id: 5, name: "Arranhador para Gatos", image: "/catalogo/petshop/arranhador.png", available: true, price: "R$ 55,00", category: "Acessório", onSale: true },
    { id: 6, name: "Casinha para Cachorros", image: "/catalogo/petshop/casa.png", available: false, price: "R$ 120,00", category: "Acessório", onSale: false },
    { id: 7, name: "Tapete Higiênico", image: "/catalogo/petshop/tapete.png", available: false, price: "R$ 36,00", category: "Higiene", onSale: false },
    { id: 8, name: "Osso de Cenoura", image: "/catalogo/petshop/ossocenoura.png", available: true, price: "R$ 30,00", category: "Brinquedo", onSale: true },
    { id: 9, name: "Ração de gato", image: "/catalogo/petshop/racaogato.png", available: true, price: "R$ 150,00", category: "Ração", onSale: true },
  ];

  const currentItems = isPharmacy ? pharmacyItems : petShopItems;

  const categories = ["Todos", ...Array.from(new Set(currentItems.map(i => i.category))), "Desconto"];

  const filteredItems = currentItems.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "Todos" ||
      (selectedCategory === "Desconto" && item.onSale) ||
      item.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gray-900 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleBackdropClick}
      >
        <motion.div
          className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-purple-100"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {!showCatalog ? (
            <>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">{title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
              <motion.div
                className="flex justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src={img}
                  alt="petImage"
                  width={500}
                  height={250}
                  objectFit="contain"
                  className="rounded-xl border-4 border-purple-300 shadow-xl hover:shadow-purple-400 transition duration-300"
                />
              </motion.div>
              <div className="flex flex-wrap gap-3 mt-6">
                {wpplink && (
                  <a href={wpplink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg text-white shadow-md">
                      Entre em Contato
                    </button>
                  </a>
                )}
                <button onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 transition px-4 py-2 rounded-lg text-gray-800 shadow-sm">
                  Fechar
                </button>
                {(isPharmacy || isPetShop) && (
                  <button
                    onClick={() => setShowCatalog(true)}
                    className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg text-white shadow-md"
                  >
                    Catálogo
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">{title}</h3>
              <input
                type="text"
                placeholder="Pesquisar produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 mb-4 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-400"
              />
              <div className="flex gap-2 flex-wrap mb-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${
  selectedCategory === cat
    ? "bg-purple-600 text-white"
    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent pr-2">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex flex-col items-center border p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300"
                >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className={`object-contain h-[90px] ${!item.available ? "opacity-50" : ""}`}
                />

                {item.onSale && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-md">
                    Promoção
                  </span>
                )}

                {item.onSale ? (
                  <span className="text-green-600 font-semibold text-sm mt-2">{item.price}</span>
                ) : (
                  <span className="text-gray-800 font-medium text-sm mt-2">{item.price}</span>
                )}

                <p className="text-sm text-gray-700 text-center mt-1">{item.name}</p>

                {!item.available && (
                  <span className="text-red-500 text-xs font-bold mt-1">Indisponível</span>
                )}
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-2">Produto não encontrado.</p>
          )}
        </div>
              <button
                onClick={() => setShowCatalog(false)}
                className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg text-white mt-4 shadow-md"
              >
                Voltar
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
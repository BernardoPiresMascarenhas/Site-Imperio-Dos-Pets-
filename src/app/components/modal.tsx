import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from "lucide-react";


interface CatalogItem {
  id: number;
  name: string;
  image: string;
  available: boolean;
  price: string;
  category: string;
  onSale: boolean;
  onNovo: boolean;
}

interface CartItem extends CatalogItem {
  quantity: number;
}

interface ModalProps {
  title: string;
  description: string;
  wpplink: string;
  img: string;
  closeModal: () => void;
  directToCatalog?: boolean;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

// --- VARIANTES DE ANIMAÇÃO (Framer Motion) ---
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

// --- COMPONENTE PRINCIPAL ---
const Modal: React.FC<ModalProps> = ({ 
  title, 
  description, 
  closeModal, 
  wpplink, 
  img, 
  directToCatalog,
  cartItems,
  setCartItems
}) => {
  // --- ESTADOS LOCAIS ---
  const [showCatalog, setShowCatalog] = useState(directToCatalog || false);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // --- DADOS ---
  const isPharmacy = title === "Farmácia Pet";
  const isPetShop = title === "Pet Shop";
  
  const pharmacyItems: CatalogItem[] = [
    { id: 1, name: "Bravecto - 250mg", image: "/catalogo/farmacia/Bravecto250mg.png", available: true, price: "R$ 214,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 2, name: "Bravecto - 112,50mg", image: "/catalogo/farmacia/BravectoCães 112,5mg.png", available: true, price: "R$ 197,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 3, name: "Bravecto - 500mg", image: "/catalogo/farmacia/Bravecto500.png", available: true, price: "R$ 256,00", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 4, name: "Defenza - 200mg", image: "/catalogo/farmacia/Defenza.png", available: true, price: "R$ 119,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 5, name: "Vermífugo Vetmax Plus", image: "/catalogo/farmacia/Vermífugo Vetmax Plus.png", available: true, price: "R$ 42,90", category: "Vermífugos", onSale: false, onNovo: false }, 
    { id: 6, name: "Simparic - 80mg", image: "/catalogo/farmacia/Simparic80.png", available: true, price: "R$ 139,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 7, name: "Simparic - 40mg", image: "/catalogo/farmacia/Simparic40.png", available: true, price: "R$ 115,00", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 8, name: "Simparic - 20mg", image: "/catalogo/farmacia/Simparic20.png", available: true, price: "R$ 95,00", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 9, name: "Simparic - 10mg", image: "/catalogo/farmacia/Simparic10.png", available: true, price: "R$ 89,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 10, name: "Scalibor - Grande", image: "/catalogo/farmacia/Scalibor Grande.png", available: true, price: "R$ 140,00", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 11, name: "Scalibor - Pequeno e médio", image: "/catalogo/farmacia/Scalibor - Pequeno e médio.png", available: true, price: "R$ 120,00", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 12, name: "Defendpro - antiparasitário gatos", image: "/catalogo/farmacia/Defendpro - antiparasitário gatos.png", available: true, price: "R$ 25,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 13, name: "Glicopan pet", image: "/catalogo/farmacia/Glicopan pet.png", available: true, price: "R$ 39,90", category: "Suplemento Vitamínico", onSale: false, onNovo: false },
    { id: 14, name: "Hemolitan pet", image: "/catalogo/farmacia/Hemolitan pet.png", available: true, price: "R$ 41,90", category: "Suplemento Vitamínico", onSale: false, onNovo: false },
    { id: 15, name: "Enterex", image: "/catalogo/farmacia/Enterex.png", available: true, price: "R$ 23,90", category: "Anti tóxico", onSale: false, onNovo: false }, 
    { id: 16, name: "Pulvex", image: "/catalogo/farmacia/Pulvex.png", available: true, price: "R$ 49,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 17, name: "Mectal - Gatos", image: "/catalogo/farmacia/Mectal - Gatos.png", available: true, price: "R$ 39,90", category: "Vermífugos", onSale: false, onNovo: false },
    { id: 18, name: "Mectal - Filhotes", image: "/catalogo/farmacia/Mectal - Filhotes.png", available: true, price: "R$ 55,90", category: "Vermífugos", onSale: false, onNovo: false },
    { id: 19, name: "Sarniran", image: "/catalogo/farmacia/Sarniran.png", available: true, price: "R$ 25,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 20, name: "Endogard - 10kg", image: "/catalogo/farmacia/Endogard - 10kg.png", available: true, price: "R$ 55,90", category: "Vermífugos", onSale: false, onNovo: false },
    { id: 21, name: "Compplet Mix", image: "/catalogo/farmacia/comppletmix.png", available: true, price: "R$ 39,90", category: "Suplemento Vitamínico", onSale: false, onNovo: false },
  ];
  const petShopItems: CatalogItem[] = [
    { id: 101, name: "Removedor de Cerúmem", image: "/catalogo/petshop/RemovedordeCerúmem.png", available: true, price: "R$ 59,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 102, name: "Kit Otovet", image: "/catalogo/petshop/KitOtovet.png", available: true, price: "R$ 79,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 103, name: "Otovet", image: "/catalogo/petshop/Otovet.png", available: true, price: "R$ 35,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 104, name: "Limpa Orelha", image: "/catalogo/petshop/LimpaOrelhas.png", available: true, price: "R$ 19,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 105, name: "DentaBite", image: "/catalogo/petshop/Dentabite.png", available: true, price: "R$ 3,50", category: "Petisco", onSale: false, onNovo: false },
    { id: 106, name: "Creme Dental", image: "/catalogo/petshop/CremeDental.png", available: true, price: "R$ 17,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 107, name: "Hálito Pet", image: "/catalogo/petshop/HálitoPet.png", available: true, price: "R$ 29,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 108, name: "Educador - Pipi Pode", image: "/catalogo/petshop/EducadorPipiPode.png", available: true, price: "R$ 25,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 109, name: "Educador de Mordidas", image: "/catalogo/petshop/EducadorDeMordidas.png", available: true, price: "R$ 24,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 110, name: "Educador - Pipi não Pode", image: "/catalogo/petshop/EducadorPipiNãoPode.png", available: true, price: "R$ 27,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 111, name: "Banho a seco", image: "/catalogo/petshop/BANHOSECO.png", available: true, price: "R$ 31,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 112, name: "Kit xixi stop", image: "/catalogo/petshop/xixistop.png", available: true, price: "R$ 23,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 113, name: "Luva Mágica", image: "/catalogo/petshop/LuvaMagica.png", available: true, price: "R$ 28,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 114, name: "Limpa lágrimas", image: "/catalogo/petshop/LIMPALAGRIMAS.png", available: true, price: "R$ 31,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 115, name: "Limpa dobrinhas", image: "/catalogo/petshop/LIMPADOBRINHA.png", available: true, price: "R$ 25,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 116, name: "Limpa carinha", image: "/catalogo/petshop/LIMPACARINHA.png", available: true, price: "R$ 39,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 117, name: "Canelone", image: "/catalogo/petshop/SnacksmastigáveisCanelone.png", available: true, price: "R$ 29,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 118, name: "Snacks de Osso", image: "/catalogo/petshop/SnacksmastigáveisOsso.png", available: true, price: "R$ 21,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 119, name: "Trança bovina", image: "/catalogo/petshop/SnacksmastigáveisTrançaBovina.png", available: true, price: "R$ 31,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 120, name: "Biscoito Doogs", image: "/catalogo/petshop/BiscoitoDoogs.png", available: true, price: "R$ 12,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 121, name: "Doogs Dental Care", image: "/catalogo/petshop/DentalCare.png", available: true, price: "R$ 26,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 122, name: "Bifinhos", image: "/catalogo/petshop/Bifinhos.png", available: true, price: "R$ 3,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 123, name: "Casco Bovino", image: "/catalogo/petshop/CascoBovino.png", available: true, price: "R$ 25,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 124, name: "Chifre Bovino", image: "/catalogo/petshop/ChifreBovino.png", available: true, price: "R$ 17,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 125, name: "Nuggets Caats", image: "/catalogo/petshop/NuggetsCaats.png", available: true, price: "R$ 8,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 126, name: "Orelha Bovina", image: "/catalogo/petshop/OrelhaBovina.png", available: true, price: "R$ 9,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 127, name: "Bola Mágica", image: "/catalogo/petshop/BolaMagica.png", available: true, price: "R$ 59,90", category: "Brinquedos", onSale: false, onNovo: false },
    { id: 128, name: "Bolinha com guizo", image: "/catalogo/petshop/BolinhascomGuizo.png", available: true, price: "R$ 2,50", category: "Brinquedos", onSale: false, onNovo: false },
    { id: 129, name: "Ratinho", image: "/catalogo/petshop/ratinho.png", available: true, price: "R$ 6,90", category: "Brinquedos", onSale: false, onNovo: false },
    { id: 130, name: "Bola Lisa", image: "/catalogo/petshop/BolaLisa.png", available: true, price: "R$ 39,90", category: "Brinquedos", onSale: false, onNovo: false },
    { id: 131, name: "Graveto Nylon", image: "/catalogo/petshop/Graveto.png", available: true, price: "R$ 33,90", category: "Brinquedos", onSale: false, onNovo: false },
    { id: 132, name: "Bola Maluca", image: "/catalogo/petshop/BolaMaluca.png", available: true, price: "R$ 39,90", category: "Brinquedos", onSale: false, onNovo: false },
    { id: 133, name: "Alimentador Pet", image: "/catalogo/petshop/AlimentadorPet.png", available: true, price: "R$ 98,00", category: "Acessórios", onSale: false, onNovo: false },
    { id: 134, name: "Cortador de unha", image: "/catalogo/petshop/Cortadordeunha.png", available: true, price: "R$ 32,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 135, name: "Cata Caca", image: "/catalogo/petshop/CataCaca.png", available: true, price: "R$ 9,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 136, name: "Denta Bone", image: "/catalogo/petshop/DentalBone.png", available: true, price: "R$ 11,90", category: "Brinquedos", onSale: false, onNovo: false },
    { id: 137, name: "Pazinha", image: "/catalogo/petshop/Pazinha.png", available: true, price: "R$ 6,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 138, name: "Protein Bar", image: "/catalogo/petshop/ProteinBar.png", available: true, price: "R$ 9,90", category: "Petisco", onSale: false, onNovo: true },
  ];
  const WHATSAPP_NUMBER = "553195306014";

  // --- LÓGICA DE NEGÓCIO ---
  const currentItems = isPharmacy ? pharmacyItems : petShopItems;
  const categories = ["Todos", ...Array.from(new Set(currentItems.map(i => i.category))), "Desconto", "Novidade"];
  
  const filteredItems = currentItems.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "Todos" ||
      (selectedCategory === "Desconto" && item.onSale) ||
      (selectedCategory === "Novidade" && item.onNovo) || 
      item.category === selectedCategory;
    return matchSearch && matchCategory;
  })
  
  .sort((a, b) => {
      if (a.onNovo && !b.onNovo) return -1;
      if (!a.onNovo && b.onNovo) return 1;
      return 0;
  });

  const handleAddToCart = (product: CatalogItem) => {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };
  
  const parsePrice = (price: string): number => {
    const sanitizedPrice = price.replace("R$ ", "").replace(".", "").replace(",", ".");
    return parseFloat(sanitizedPrice) || 0;
  };

  const totalPrice = useMemo(() => {
    const total = cartItems.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }, [cartItems]);

  const generateWhatsAppMessage = () => {
    let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
    cartItems.forEach(item => {
      message += `*${item.quantity}x* - ${item.name} (${item.price})\n`;
    });
    message += `\n*Total do Pedido: ${totalPrice}*`;
    return encodeURIComponent(message);
  };
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };


  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gray-900 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleBackdropClick}
      >
        <motion.div
          className="bg-gradient-to-br from-white to-purple-50 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-purple-100 relative flex flex-col"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:scale-110 transition-transform z-20">
            <X size={24} />
          </button>
          
          {!showCatalog && !showCart && (
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
                <Image src={img} alt="petImage" width={500} height={250} style={{objectFit:"contain"}} className="rounded-xl border-4 border-purple-300 shadow-xl hover:shadow-purple-400 transition duration-300" />
              </motion.div>
              <div className="flex flex-wrap items-center justify-start gap-4 mt-6">
                {wpplink && !directToCatalog && (
                  <a href={wpplink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <motion.button className="relative w-full py-3 text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 via-green-400 to-green-600 transition-transform duration-300 shadow-lg overflow-hidden" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      Entre em Contato
                    </motion.button>
                  </a>
                )}
                {(isPharmacy || isPetShop) && (
                  <button onClick={() => setShowCatalog(true)} className="bg-purple-600 hover:bg-purple-700 transition w-full py-3 text-white text-lg font-semibold rounded-xl shadow-md">
                    Ver Catálogo
                  </button>
                )}
              </div>
            </>
          )}

          {showCatalog && !showCart && (
             <>
              <div className="flex justify-between items-center mb-4 pr-8">
                 <h3 className="text-2xl font-bold text-purple-800">{title}</h3>
                 <button onClick={() => setShowCart(true)} className="relative p-2 text-purple-700 hover:bg-purple-100 rounded-full transition-colors">
                    <ShoppingCart size={24} />
                    {cartItems.length > 0 && (
                        <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                           {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                        </span>
                    )}
                 </button>
              </div>
              <input type="text" placeholder="Pesquisar produto..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-2 mb-4 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500" />
              <div className="flex gap-2 flex-wrap mb-4">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-1 rounded-full text-sm font-medium border ${selectedCategory === cat ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                    {cat}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent pr-2">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`relative flex flex-col justify-between border p-3 rounded-xl bg-white shadow-md h-full transition-transform duration-300 ${item.available ? 'hover:scale-105 hover:shadow-lg' : 'opacity-60'}`}
                    >
                      <div>
                        <Image src={item.image} alt={item.name} width={100} height={100} className={`object-contain mx-auto h-[90px] ${!item.available ? "opacity-50" : ""}`} />
                        {item.onSale && <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-md">Promoção</span>}
                        {item.onNovo && <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-md">Novidade</span>}
                        <p className="text-sm text-gray-700 text-center mt-1 font-semibold">{item.name}</p>
                      </div>
                      <div className="mt-2 text-center">
                        <span className={`text-lg ${item.onSale ? 'text-green-600 font-bold' : 'text-gray-800 font-bold'}`}>{item.price}</span>
                        {item.available ? (
                          <button onClick={() => handleAddToCart(item)} className="mt-2 w-full bg-purple-600 text-white py-1.5 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-1">
                             <Plus size={16}/> Adicionar
                          </button>
                        ) : (
                          <span className="block text-red-500 text-xs font-bold mt-2">Indisponível</span>
                        )}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 col-span-full">Produto não encontrado.</p>
                )}
              </div>
            </>
          )}

          {showCart && (
             <div className="w-full">
                <div className="flex items-center mb-4">
                    <button onClick={() => setShowCart(false)} className="p-2 text-gray-500 hover:text-purple-700 mr-2">
                        <ArrowLeft size={24} />
                    </button>
                    <h3 className="text-2xl font-bold text-purple-800">Meu Carrinho</h3>
                </div>
                {cartItems.length > 0 ? (
                   <>
                      <div className="space-y-3 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent">
                        {cartItems.map(item => (
                           <div key={item.id} className="flex items-center justify-between bg-white p-2 rounded-lg border">
                              <div className="flex items-center gap-3">
                                  <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden rounded-md">
                                      {item.onSale && (
                                          <div
                                              className="absolute top-0 left-0 w-6 h-6 bg-red-500 z-10"
                                              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                                          ></div>
                                      )}
                                      <Image 
                                          src={item.image} 
                                          alt={item.name} 
                                          fill 
                                          className="object-cover"
                                      />
                                  </div>
                                  <div>
                                      <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                                      <p className={`text-sm ${item.onSale ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
                                          {item.price}
                                      </p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"><Minus size={14}/></button>
                                <span className="font-bold w-6 text-center text-gray-900">{item.quantity}</span>
                                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"><Plus size={14}/></button>
                                <button onClick={() => handleRemoveFromCart(item.id)} className="ml-2 p-1 text-red-500 hover:text-red-700"><Trash2 size={18}/></button>
                              </div>
                           </div>
                        ))}
                      </div>
                      <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-bold">
                           <span className="text-gray-700">Total:</span>
                           <span className="text-purple-800">{totalPrice}</span>
                        </div>
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`} target="_blank" rel="noopener noreferrer" className="block mt-4 w-full">
                            <motion.button className="w-full py-3 text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-green-600 shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Finalizar Pedido no WhatsApp
                            </motion.button>
                        </a>
                      </div>
                   </>
                ) : (
                    <div className="text-center py-10">
                        <ShoppingCart size={48} className="mx-auto text-gray-300"/>
                        <p className="mt-4 text-gray-500">Seu carrinho está vazio.</p>
                        <button onClick={() => setShowCart(false)} className="mt-4 text-purple-600 font-semibold hover:underline">
                           Voltar ao catálogo
                        </button>
                    </div>
                )}
             </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
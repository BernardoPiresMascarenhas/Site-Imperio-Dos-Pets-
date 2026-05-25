"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Plus, Minus, Trash2, ArrowLeft, Search } from "lucide-react";

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

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 28 },
  },
  exit: { opacity: 0, scale: 0.95, y: 20 },
};

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  closeModal,
  wpplink,
  img,
  directToCatalog,
  cartItems,
  setCartItems,
}) => {
  const [showCatalog, setShowCatalog] = useState(directToCatalog || false);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const isPharmacy = title === "Farmácia Pet";
  const isPetShop = title === "Pet Shop";

  const pharmacyItems: CatalogItem[] = [
    { id: 1, name: "Bravecto - 250mg", image: "/catalogo/farmacia/Bravecto250mg.png", available: true, price: "R$ 214,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 2, name: "Bravecto - 112,50mg", image: "/catalogo/farmacia/BravectoCaes112.png", available: true, price: "R$ 197,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 3, name: "Bravecto - 500mg", image: "/catalogo/farmacia/Bravecto500.png", available: true, price: "R$ 256,00", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 4, name: "Defenza - 200mg", image: "/catalogo/farmacia/Defenza.png", available: true, price: "R$ 119,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 5, name: "Vermífugo Vetmax Plus", image: "/catalogo/farmacia/VermifugoVetmaxPlus.png", available: true, price: "R$ 42,90", category: "Vermífugos", onSale: false, onNovo: false },
    { id: 6, name: "Simparic - 80mg", image: "/catalogo/farmacia/Simparic80.png", available: true, price: "R$ 139,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 7, name: "Simparic - 40mg", image: "/catalogo/farmacia/Simparic40.png", available: true, price: "R$ 115,00", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 8, name: "Simparic - 20mg", image: "/catalogo/farmacia/Simparic20.png", available: true, price: "R$ 95,00", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 9, name: "Simparic - 10mg", image: "/catalogo/farmacia/Simparic10.png", available: true, price: "R$ 89,90", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 10, name: "Scalibor - Grande", image: "/catalogo/farmacia/Scalibor Grande.png", available: true, price: "R$ 140,00", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 11, name: "Scalibor - Pequeno e médio", image: "/catalogo/farmacia/ScaliborPequenoemedio.png", available: true, price: "R$ 120,00", category: "Antiparasitários", onSale: false, onNovo: false },
    { id: 12, name: "Defendpro - antiparasitário gatos", image: "/catalogo/farmacia/Defendproantiparasitariogatos.png", available: true, price: "R$ 25,90", category: "Antiparasitários", onSale: false, onNovo: false },
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
    { id: 101, name: "Removedor de Cerúmem", image: "/catalogo/petshop/RemovedordeCerumem.png", available: true, price: "R$ 59,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 102, name: "Kit Otovet", image: "/catalogo/petshop/KitOtovet.png", available: true, price: "R$ 79,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 103, name: "Otovet", image: "/catalogo/petshop/Otovet.png", available: true, price: "R$ 35,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 104, name: "Limpa Orelha", image: "/catalogo/petshop/LimpaOrelhas.png", available: true, price: "R$ 19,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 105, name: "DentaBite", image: "/catalogo/petshop/Dentabite.png", available: true, price: "R$ 3,50", category: "Petisco", onSale: false, onNovo: false },
    { id: 106, name: "Creme Dental", image: "/catalogo/petshop/CremeDental.png", available: true, price: "R$ 17,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 107, name: "Hálito Pet", image: "/catalogo/petshop/HalitoPet.png", available: true, price: "R$ 29,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 108, name: "Educador - Pipi Pode", image: "/catalogo/petshop/EducadorPipiPode.png", available: true, price: "R$ 25,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 109, name: "Educador de Mordidas", image: "/catalogo/petshop/EducadorDeMordidas.png", available: true, price: "R$ 24,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 110, name: "Educador - Pipi não Pode", image: "/catalogo/petshop/EducadorPipiNãoPode.png", available: true, price: "R$ 27,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 111, name: "Banho a seco", image: "/catalogo/petshop/BANHOSECO.png", available: true, price: "R$ 31,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 112, name: "Kit xixi stop", image: "/catalogo/petshop/xixistop.png", available: true, price: "R$ 23,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 113, name: "Luva Mágica", image: "/catalogo/petshop/LuvaMagica.png", available: true, price: "R$ 28,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 114, name: "Limpa lágrimas", image: "/catalogo/petshop/LIMPALAGRIMAS.png", available: true, price: "R$ 31,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 115, name: "Limpa dobrinhas", image: "/catalogo/petshop/LIMPADOBRINHA.png", available: true, price: "R$ 25,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 116, name: "Limpa carinha", image: "/catalogo/petshop/LIMPACARINHA.png", available: true, price: "R$ 39,90", category: "Higiene", onSale: false, onNovo: false },
    { id: 117, name: "Canelone", image: "/catalogo/petshop/SnacksmastigaveisCanelone.png", available: true, price: "R$ 29,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 118, name: "Snacks de Osso", image: "/catalogo/petshop/SnacksmastigaveisOsso.png", available: true, price: "R$ 21,90", category: "Petisco", onSale: false, onNovo: false },
    { id: 119, name: "Trança bovina", image: "/catalogo/petshop/SnacksmastigaveisTrancaBovina.png", available: true, price: "R$ 31,90", category: "Petisco", onSale: false, onNovo: false },
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

  const currentItems = isPharmacy ? pharmacyItems : petShopItems;
  const categories = ["Todos", ...Array.from(new Set(currentItems.map(i => i.category))), "Desconto", "Novidade"];

  const filteredItems = currentItems
    .filter((item) => {
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
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
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
    return total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }, [cartItems]);

  const generateWhatsAppMessage = () => {
    let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
    cartItems.forEach((item) => {
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
        className="fixed inset-0 bg-ink-900/60 backdrop-blur-md flex justify-center items-center z-[60] p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleBackdropClick}
      >
        <motion.div
          className="bg-cream-50 p-6 sm:p-8 rounded-3xl shadow-soft-lg w-full max-w-lg border border-cream-200 relative flex flex-col max-h-[90vh] overflow-hidden"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close */}
          <button
            onClick={closeModal}
            aria-label="Fechar"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-ink-500 hover:text-red-500 hover:bg-cream-200 rounded-full transition-all z-20"
          >
            <X size={20} />
          </button>

          {/* Tela inicial (apresentação do serviço) */}
          {!showCatalog && !showCart && (
            <>
              <h3 className="font-display text-3xl font-medium text-ink-900 mb-3 pr-10">{title}</h3>
              <p className="text-ink-500 mb-6 leading-relaxed">{description}</p>

              <motion.div
                className="flex justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden border border-cream-200 shadow-soft">
                  <Image src={img} alt={title} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 90vw, 500px" />
                </div>
              </motion.div>

              <div className="flex flex-col gap-3 mt-6">
                {wpplink && !directToCatalog && (
                  <a href={wpplink} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-white text-base font-semibold rounded-full bg-green-600 hover:bg-green-700 shadow-soft transition-all"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                      </svg>
                      Falar no WhatsApp
                    </motion.button>
                  </a>
                )}
                {(isPharmacy || isPetShop) && (
                  <button
                    onClick={() => setShowCatalog(true)}
                    className="w-full py-3.5 text-white text-base font-semibold rounded-full bg-brand-600 hover:bg-brand-700 shadow-soft transition-all"
                  >
                    Ver Catálogo
                  </button>
                )}
              </div>
            </>
          )}

          {/* Catálogo */}
{showCatalog && !showCart && (
  <>
    {/* Cabeçalho do Catálogo (Título e Carrinho) */}
    <div className="flex justify-between items-center mb-4 pr-10">
      <h3 className="font-display text-2xl font-medium text-ink-900">{title}</h3>
      <button
        onClick={() => setShowCart(true)}
        aria-label="Abrir carrinho"
        className="relative p-2.5 text-brand-700 hover:bg-brand-50 rounded-full transition-colors"
      >
        <ShoppingCart size={22} />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 text-xs font-bold text-white bg-red-500 rounded-full">
            {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        )}
      </button>
    </div>

    {/* Barra de Pesquisa */}
    <div className="relative mb-3 flex-shrink-0">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-3 py-2.5 bg-white border border-cream-300 rounded-xl text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400 transition-all"
      />
    </div>

    {/* Categorias / Filtros (Abaixo da pesquisa e sem restrição de altura) */}
    <div className="flex gap-2 flex-wrap mb-4 flex-shrink-0 w-full">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
            selectedCategory === cat
              ? "bg-brand-600 text-white shadow-soft"
              : "bg-white text-ink-700 border border-cream-300 hover:border-brand-300 hover:text-brand-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Grid de Produtos */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto pr-1 flex-1 pb-4">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`relative flex flex-col justify-between border border-cream-200 p-3 rounded-2xl bg-white shadow-soft h-full transition-all duration-300 ${
              item.available ? "hover:shadow-soft-lg hover:-translate-y-1 hover:border-brand-200" : "opacity-60"
            }`}
          >
            <div>
              <div className="relative h-[90px] mb-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="120px"
                  className={`object-contain ${!item.available ? "opacity-50" : ""}`}
                />
              </div>
              {item.onSale && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-soft">
                  Promoção
                </span>
              )}
              {item.onNovo && (
                <span className="absolute top-2 right-2 bg-brand-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-soft">
                  Novidade
                </span>
              )}
              <p className="text-xs text-ink-800 text-center font-medium leading-tight line-clamp-2 min-h-[2rem]">
                {item.name}
              </p>
            </div>
            <div className="mt-2 text-center">
              <span className={`block text-sm font-bold ${item.onSale ? "text-sage-500" : "text-ink-900"}`}>
                {item.price}
              </span>
              {item.available ? (
                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-2 w-full bg-brand-600 text-white py-1.5 rounded-lg text-xs font-semibold hover:bg-brand-700 transition-colors flex items-center justify-center gap-1"
                >
                  <Plus size={14} /> Adicionar
                </button>
              ) : (
                <span className="block text-red-500 text-xs font-bold mt-2">Indisponível</span>
              )}
            </div>
          </motion.div>
        ))
      ) : (
        <p className="text-center text-ink-500 col-span-full py-8 text-sm">
          Nenhum produto encontrado.
        </p>
      )}
    </div>
  </>
)}

          {/* Carrinho */}
          {showCart && (
            <div className="w-full flex flex-col flex-1 overflow-hidden">
              <div className="flex items-center mb-4 pr-10">
                <button
                  onClick={() => setShowCart(false)}
                  aria-label="Voltar"
                  className="p-2 text-ink-500 hover:text-brand-700 mr-2 rounded-full hover:bg-cream-200 transition-colors"
                >
                  <ArrowLeft size={22} />
                </button>
                <h3 className="font-display text-2xl font-medium text-ink-900">Meu Carrinho</h3>
              </div>

              {cartItems.length > 0 ? (
                <>
                  <div className="space-y-2 overflow-y-auto pr-1 flex-1">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between bg-white p-3 rounded-2xl border border-cream-200"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden rounded-xl bg-cream-100">
                            {item.onSale && (
                              <div
                                className="absolute top-0 left-0 w-6 h-6 bg-red-500 z-10"
                                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                              />
                            )}
                            <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-ink-900 truncate">{item.name}</p>
                            <p className={`text-sm ${item.onSale ? "text-sage-500 font-semibold" : "text-ink-500"}`}>
                              {item.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            aria-label="Diminuir"
                            className="p-1.5 rounded-full bg-cream-100 hover:bg-cream-200 text-ink-800 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-bold w-5 text-center text-ink-900 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            aria-label="Aumentar"
                            className="p-1.5 rounded-full bg-cream-100 hover:bg-cream-200 text-ink-800 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            aria-label="Remover"
                            className="ml-1 p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-cream-300">
                    <div className="flex justify-between items-center text-lg font-bold mb-4">
                      <span className="text-ink-700">Total:</span>
                      <span className="text-brand-700 font-display text-2xl">{totalPrice}</span>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3.5 text-white text-base font-semibold rounded-full bg-green-600 hover:bg-green-700 shadow-soft inline-flex items-center justify-center gap-2 transition-all"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                        </svg>
                        Finalizar no WhatsApp
                      </motion.button>
                    </a>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 flex-1 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-cream-200 flex items-center justify-center mb-4">
                    <ShoppingCart size={36} className="text-ink-400" />
                  </div>
                  <p className="text-ink-500 mb-1">Seu carrinho está vazio.</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="mt-3 text-brand-600 font-semibold hover:underline text-sm"
                  >
                    ← Voltar ao catálogo
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

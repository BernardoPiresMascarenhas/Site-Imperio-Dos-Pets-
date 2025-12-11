"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import AboutUs from "./components/about";
import Gallery from "./components/gallery";
import Testimonials from "./components/Testimonials";
import Image from 'next/image';

import FormularioContato from "@/app/components/FormularioContato";
import PromoModal from "./components/PromoModal"; 
import { InstagramLogo, TiktokLogo, ThreadsLogo } from "@phosphor-icons/react";


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

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 112; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

function App() {

  const PROMO_START_DATE = new Date('2025-09-01T00:00:00'); 
  const PROMO_END_DATE = new Date('2025-09-07T23:59:59');

  const now = new Date();
  const isPromoPeriodActive = now >= PROMO_START_DATE && now <= PROMO_END_DATE;

  const [showPromo, setShowPromo] = useState(false);      
  const [minimized, setMinimized] = useState(false);      
  const [cartItems, setCartItems] = useState<CartItem[]>([]); 

  useEffect(() => {
  
    if (isPromoPeriodActive) {
      const timer = setTimeout(() => {
        setShowPromo(true); 
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isPromoPeriodActive]); 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Promo Modal */}
      {showPromo && (
        <PromoModal
          onClose={() => {
            setShowPromo(false);
            setMinimized(true);
          }}
          onWhatsApp={() => {
            window.open("https://wa.me/553195306014?text=Olá,%20quero%20ver%20as%20promoções!", "_blank");
            setShowPromo(false);
            setMinimized(true);
          }}
        />
      )}

      {/* Container Flexbox para alinhar os botões flutuantes */}
      <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-between items-center pointer-events-none z-50">
        <div className="pointer-events-auto"> 
          {minimized && !showPromo && (
            <button
              onClick={() => {
                setShowPromo(true);
                setMinimized(false);
              }}
              className="p-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/promo-icon.png"
                alt="Promoção"
                width={100}
                height={100}
                className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"
              />
            </button>
          )}
        </div>
        <a
          href="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-110 pointer-events-auto"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={48}
            height={48}
          />
        </a>
      </div>

      <Header />
      <Hero />

      <Services cartItems={cartItems} setCartItems={setCartItems} />

      <AboutUs />
      <Testimonials />
      <Gallery />
      <div id="contact" className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
      {/* Coluna da Esquerda: Informações e Mapa */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Entre em Contato
          </h2>      

        {/* NOVO BLOCO DO MAPA */}
        <div className="mt-10 h-80 w-full overflow-hidden rounded-lg shadow-xl">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.722748197771!2d-43.91007482563063!3d-19.89389973822187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699f848601e8b%3A0x6a0a09b3096b78e4!2sR.%20Jo%C3%A3o%20Arantes%2C%20341%20-%20Cidade%20Nova%2C%20Belo%20Horizonte%20-%20MG%2C%2031170-010!5e0!3m2!1spt-BR!2sbr!4v1725830631388!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Império dos Pets no Google Maps"
          ></iframe>
        </div>
        {/* FIM DO BLOCO DO MAPA */}
          <div className="mt-8 space-y-6">
            <ContactInfo
              icon={<MapPin />}
              text="Rua João Arantes, 341 - Cidade Nova, Belo Horizonte, Brasil"
            />
            <ContactInfo icon={<Phone />} text="(31) 9530-6014" />
            <ContactInfo icon={<Clock />} text="Seg-Sex: 9h às 18h" />
            <ContactInfo icon={<Clock />} text="Sab: 9h às 12h" />
          </div>
        </div>
        
      </div>

      {/* Coluna da Direita: Formulário */}
      <div className="mt-10 lg:mt-0">
        <p className="text-gray-600 mb-6 text-base leading-relaxed">
          Tem alguma dúvida ou quer agendar um horário? Preencha os campos
          abaixo e nossa equipe entrará em contato o mais breve possível.
        </p>
        <FormularioContato />
      </div>
    </div>
  </div>
</div>

      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Império dos Pets" 
                  width={180} 
                  height={180}
                  priority 
                />
              </a>
              <p className="text-sm max-w-xs">
                O lugar onde seu pet é tratado com muito amor. Oferecemos os melhores produtos e serviços para o bem-estar do seu melhor amigo.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white tracking-wider uppercase mb-4">
                Navegação
              </h3>
              <ul className="space-y-2">
                <li><a href="#home" onClick={(e) => scrollToSection(e, "home")} className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-purple-400 transition-colors">Serviços</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-purple-400 transition-colors">Sobre</a></li>
                <li><a href="#depoimentos" onClick={(e) => scrollToSection(e, "depoimentos")} className="hover:text-purple-400 transition-colors">Depoimentos</a></li>
                <li><a href="#gallery" onClick={(e) => scrollToSection(e, "gallery")} className="hover:text-purple-400 transition-colors">Galeria</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="hover:text-purple-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white tracking-wider uppercase mb-4">
                Contato
              </h3>
              <ul className="space-y-2">
                <li><p>Rua João Arantes, 341 - Cidade Nova, Belo Horizonte, Brasil</p></li>
                <li><a href="mailto:contato@imperiodospets.com.br" className="hover:text-purple-400 transition-colors">clinicaimperiodospets@gmail.com</a></li>
                <li><a href="tel:+553195306014" className="hover:text-purple-400 transition-colors">(31) 9530-6014</a></li>
              </ul>
              
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                  <a href="https://www.instagram.com/clinicaimperiodospets" target="_blank" rel="noopener noreferrer">
                    <InstagramLogo className="w-7 h-7 text-purple-500 hover:text-purple-600 transition-transform duration-300 transform hover:scale-110" />
                  </a>
                  <a href="https://www.threads.net/@clinicaimperiodospets?xmt=AQGzhw9JpXcIAOqozTJ_9O7LDv3qi-ZZZWn2lBf4Mkiq-tk" target="_blank" rel="noopener noreferrer">
                    <ThreadsLogo className="w-7 h-7 text-purple-500 hover:text-purple-600 transition-transform duration-300 transform hover:scale-110" />
                  </a>
                  <a href="https://www.tiktok.com/@clinicaimperiodospets?lang=pt-BR" target="_blank" rel="noopener noreferrer">
                    <TiktokLogo className="w-7 h-7 text-purple-500 hover:text-purple-600 transition-transform duration-300 transform hover:scale-110" />
                  </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Império dos Pets. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center">
      <div className="text-purple-600">{icon}</div>
      <span className="ml-3 text-gray-600">{text}</span>
    </div>
  );
}

export default App;
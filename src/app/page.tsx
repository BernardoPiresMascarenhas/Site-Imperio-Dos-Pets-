"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import AboutUs from "./components/about";
import Gallery from "./components/gallery";

import FormularioContato from "@/app/components/FormularioContato";
import PromoModal from "./components/PromoModal"; 

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPromo, setShowPromo] = useState(false);       
  const [minimized, setMinimized] = useState(false);       

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromo(true); // Abre o modal após 3 segundos
    }, 7000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const inputname = document.querySelector('input[name="name"]') as HTMLInputElement;
    const inputemail = document.querySelector('input[name="email"]') as HTMLInputElement;
    const inputnumero = document.querySelector('input[name="numero"]') as HTMLInputElement;
    const inputmessage = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const formDataConverted = {
      nome: data.name,
      email: data.email,
      numero: data.numero,
      mensagem: data.message,
    };

    try {
      const response = await fetch("/api/agendar", {
        method: "POST",
        body: JSON.stringify(formDataConverted),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result) {
        inputname.value = "";
        inputemail.value = "";
        inputnumero.value = "";
        inputmessage.value = "";
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    } finally {
      setIsLoading(false);
    }
  };

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

      {/* Botão flutuante para reabrir o modal */}
      {minimized && !showPromo && (
      <button
        onClick={() => {
        setShowPromo(true);
        setMinimized(false);
      }}
      className="fixed bottom-4 left-8 p-2 rounded-full hover:scale-110 transition-transform duration-300 z-50"
      >
      <img
        src="/promo-icon.png"
        alt="Promoção"
        className="w-20 h-20 animate-bounce"
      />
    </button>
)}

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <AboutUs />

      

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">
                Entre em Contato
              </h2>
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
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <FormularioContato />
            </div>
          </div>
        </div>
      </div>

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-110"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex items-center">
              <img src="/logo.png" alt="Império dos Pets" width={150} height={150} />
            </div>
            <div className="mt-4 md:mt-0">
              <p>&copy; 2025 Império dos Pets. Todos os direitos reservados.</p>
            </div>
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

"use client";

import { useState } from 'react';
import { InstagramLogo, TiktokLogo, ThreadsLogo, List, X } from "@phosphor-icons/react"; 
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="bg-gradient-to-br from-white via-purple-100 to-purple-200 shadow-sm sticky top-0 z-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-28 items-center">
                    <div className="flex items-center">
                        {/* Logo */}
                        <a
                            href="#home"
                            onClick={(e) => scrollToSection(e, "home")}
                            className="text-gray-700 hover:text-purple-600"
                        >
                            <Image
                                src="/logo.png"
                                alt="Logo Império do Pets"
                                width={150}
                                height={150}
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </a>
                    </div>

                    {/* Links do Menu Desktop - Escondido em telas menores (md) */}
                    <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">
                        <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="text-gray-700 hover:text-purple-600">Home</a>
                        <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="text-gray-700 hover:text-purple-600">Serviços</a>
                        <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-gray-700 hover:text-purple-600">Sobre</a>
                        <a href="#gallery" onClick={(e) => scrollToSection(e, "gallery")} className="text-gray-600 hover:text-purple-600 transition-colors">Galeria</a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-gray-700 hover:text-purple-600">Contato</a>
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

                    {/* 4. Botão do Menu Hambúrguer - Visível apenas em telas menores */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna o estado do menu
                            className="text-purple-600 hover:text-purple-800 focus:outline-none"
                            aria-label="Abrir menu"
                        >
                            {isMenuOpen ? (
                                <X size={32} /> 
                            ) : (
                                <List size={32} /> 
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* 5. Menu Mobile - Renderização Condicional */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-sm absolute top-full left-0 w-full shadow-lg">
                    <div className="flex flex-col items-center space-y-4 py-8 text-lg font-semibold">
                        <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="text-gray-700 hover:text-purple-600">Home</a>
                        <a href="#services" onClick={(e) => scrollToSection(e, "services")} className="text-gray-700 hover:text-purple-600">Serviços</a>
                        <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-gray-700 hover:text-purple-600">Sobre</a>
                        <a href="#gallery" onClick={(e) => scrollToSection(e, "gallery")} className="text-gray-600 hover:text-purple-600 transition-colors">Galeria</a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-gray-700 hover:text-purple-600">Contato</a>
                        
                        {/* Ícones de redes sociais no menu mobile */}
                        <div className="flex space-x-6 pt-4">
                            <a href="https://www.instagram.com/clinicaimperiodospets" target="_blank" rel="noopener noreferrer">
                                <InstagramLogo className="w-8 h-8 text-purple-500 hover:text-purple-600" />
                            </a>
                            <a href="https://www.threads.net/@clinicaimperiodospets?xmt=AQGzhw9JpXcIAOqozTJ_9O7LDv3qi-ZZZWn2lBf4Mkiq-tk" target="_blank" rel="noopener noreferrer">
                                <ThreadsLogo className="w-8 h-8 text-purple-500 hover:text-purple-600" />
                            </a>
                            <a href="https://www.tiktok.com/@clinicaimperiodospets?lang=pt-BR" target="_blank" rel="noopener noreferrer">
                                <TiktokLogo className="w-8 h-8 text-purple-500 hover:text-purple-600" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
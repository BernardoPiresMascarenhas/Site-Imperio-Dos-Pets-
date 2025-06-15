"use client";

import { InstagramLogo, TiktokLogo, ThreadsLogo } from "@phosphor-icons/react";

import Image from "next/image";

const Header = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 112; // This matches our header height of 4rem (64px)
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
    };

  return (
    <nav className="bg-gradient-to-br from-white via-purple-100 to-purple-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-gray-700 hover:text-purple-600"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={150}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
          </a>
          </div>
          <div className="hidden md:flex space-x-8 text-lg font-semibold">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-gray-700 hover:text-purple-600"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="text-gray-700 hover:text-purple-600"
            >
              Serviços
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-gray-700 hover:text-purple-600"
            >
              Sobre
            </a>

            <a
              href="#gallery"
              onClick={(e) => scrollToSection(e, "gallery")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Galeria
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-gray-700 hover:text-purple-600"
            >
              Contato
            </a>
            <a
              href="https://www.instagram.com/clinicaimperiodospets"
              target="_blank"
              rel="noopener noreferrer"
              >
              <InstagramLogo className="w-7 h-7 text-purple-500 hover:text-purple-600 transition-transform duration-300 transform hover:scale-110" />
            </a>

            <a
              href="https://www.threads.net/@clinicaimperiodospets?xmt=AQGzhw9JpXcIAOqozTJ_9O7LDv3qi-ZZZWn2lBf4Mkiq-tk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ThreadsLogo className="w-7 h-7 text-purple-500 hover:text-purple-600 transition-transform duration-300 transform hover:scale-110" />
            </a>

            <a
              href="https://www.tiktok.com/@clinicaimperiodospets?lang=pt-BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiktokLogo className="w-7 h-7 text-purple-500 hover:text-purple-600 transition-transform duration-300 transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

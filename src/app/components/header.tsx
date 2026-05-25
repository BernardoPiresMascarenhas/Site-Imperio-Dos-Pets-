"use client";

import { useState, useEffect } from "react";
import { InstagramLogo, TiktokLogo, ThreadsLogo, List, X } from "@phosphor-icons/react";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 96;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
        if (isMenuOpen) setIsMenuOpen(false);
    };

    const navItems = [
        { href: "home", label: "Início" },
        { href: "services", label: "Serviços" },
        { href: "about", label: "Sobre" },
        { href: "depoimentos", label: "Depoimentos" },
        { href: "social-feed", label: "Feed" },
        { href: "gallery", label: "Galeria" },
        { href: "contact", label: "Contato" },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-cream-100/90 backdrop-blur-xl shadow-soft border-b border-cream-300/50"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex justify-between items-center transition-all duration-500 ${
                        scrolled ? "h-20" : "h-24"
                    }`}
                >
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, "home")}
                        className="flex items-center gap-2 group"
                        aria-label="Voltar ao topo"
                    >
                        <Image
                            src="/logo.png"
                            alt="Império dos Pets"
                            width={130}
                            height={130}
                            priority
                            className={`transition-all duration-500 ease-out group-hover:scale-105 ${
                                scrolled ? "w-[88px] h-auto" : "w-[110px] h-auto"
                            }`}
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={`#${item.href}`}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="relative px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-600 transition-colors group"
                            >
                                {item.label}
                                <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-brand-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                            </a>
                        ))}

                        <div className="mx-3 h-6 w-px bg-cream-300" />

                        {/* Social icons */}
                        <a
                            href="https://www.instagram.com/clinicaimperiodospets"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="p-2 text-brand-600 hover:text-brand-700 hover:bg-brand-50 rounded-full transition-all duration-300"
                        >
                            <InstagramLogo className="w-5 h-5" weight="bold" />
                        </a>
                        <a
                            href="https://www.threads.net/@clinicaimperiodospets"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Threads"
                            className="p-2 text-brand-600 hover:text-brand-700 hover:bg-brand-50 rounded-full transition-all duration-300"
                        >
                            <ThreadsLogo className="w-5 h-5" weight="bold" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@clinicaimperiodospets?lang=pt-BR"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                            className="p-2 text-brand-600 hover:text-brand-700 hover:bg-brand-50 rounded-full transition-all duration-300"
                        >
                            <TiktokLogo className="w-5 h-5" weight="bold" />
                        </a>

                        {/* CTA */}
                        <a
                            href="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-full shadow-soft hover:bg-brand-700 hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Agendar
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile burger */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-brand-600 hover:bg-brand-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-300"
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        {isMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-cream-50 border-b border-cream-300 shadow-soft-lg overflow-hidden transition-all duration-500 ease-out ${
                    isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
            >
                <div className="px-6 py-6 flex flex-col gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={`#${item.href}`}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="px-4 py-3 text-base font-medium text-ink-800 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all duration-200 flex items-center justify-between group"
                        >
                            <span>{item.label}</span>
                            <span className="text-brand-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all">→</span>
                        </a>
                    ))}

                    <a
                        href="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-600 text-white font-semibold rounded-xl shadow-soft hover:bg-brand-700 transition-all"
                    >
                        Agendar Consulta
                    </a>

                    <div className="flex justify-center gap-3 pt-4 mt-2 border-t border-cream-300">
                        <a href="https://www.instagram.com/clinicaimperiodospets" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-full transition-colors">
                            <InstagramLogo className="w-6 h-6" weight="bold" />
                        </a>
                        <a href="https://www.threads.net/@clinicaimperiodospets" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="p-3 text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-full transition-colors">
                            <ThreadsLogo className="w-6 h-6" weight="bold" />
                        </a>
                        <a href="https://www.tiktok.com/@clinicaimperiodospets?lang=pt-BR" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-3 text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-full transition-colors">
                            <TiktokLogo className="w-6 h-6" weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;

"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import AboutUs from "./components/about";
import Gallery from "./components/gallery";
import Testimonials from "./components/Testimonials";
import Image from "next/image";
import InstagramFeed from "./components/SocialFeed";
import FormularioContato from "@/app/components/FormularioContato";
import PromoModal from "./components/PromoModal";
import { InstagramLogo, TiktokLogo, ThreadsLogo } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

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
        const headerOffset = 96;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
};

function App() {
    const PROMO_START_DATE = new Date("2025-09-01T00:00:00");
    const PROMO_END_DATE = new Date("2025-09-07T23:59:59");

    const now = new Date();
    const isPromoPeriodActive = now >= PROMO_START_DATE && now <= PROMO_END_DATE;

    const [showPromo, setShowPromo] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        if (isPromoPeriodActive) {
            const timer = setTimeout(() => setShowPromo(true), 3000);
            return () => clearTimeout(timer);
        }
    }, [isPromoPeriodActive]);

    return (
        <div className="min-h-screen bg-cream-100">
            {/* Promo Modal */}
            <AnimatePresence>
                {showPromo && (
                    <PromoModal
                        onClose={() => {
                            setShowPromo(false);
                            setMinimized(true);
                        }}
                        onWhatsApp={() => {
                            window.open(
                                "https://wa.me/553195306014?text=Olá,%20quero%20ver%20as%20promoções!",
                                "_blank"
                            );
                            setShowPromo(false);
                            setMinimized(true);
                        }}
                    />
                )}
            </AnimatePresence>

            {/* === BOTÕES FLUTUANTES === */}
            <div className="fixed bottom-5 left-0 right-0 px-4 flex justify-between items-end pointer-events-none z-40">
                {/* Promo flutuante (esquerda) */}
                <div className="pointer-events-auto">
                    {minimized && !showPromo && (
                        <motion.button
                            onClick={() => {
                                setShowPromo(true);
                                setMinimized(false);
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="block"
                            aria-label="Ver promoção"
                        >
                            <Image
                                src="/promo-icon.png"
                                alt="Promoção"
                                width={100}
                                height={100}
                                className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
                            />
                        </motion.button>
                    )}
                </div>

                {/* WhatsApp flutuante (direita) */}
                <motion.a
                    href="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.4 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Fale conosco no WhatsApp"
                    className="pointer-events-auto group relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-soft-lg transition-colors duration-300 animate-pulse-soft"
                >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {/* Tooltip */}
                    <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 bg-ink-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Fale conosco
                    </span>
                </motion.a>
            </div>

            <Header />
            <Hero />
            <Services cartItems={cartItems} setCartItems={setCartItems} />
            <AboutUs />
            <Testimonials />
            <InstagramFeed />
            <Gallery />

            {/* === CONTATO === */}
            <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-100/30 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto text-center mb-14 lg:mb-20"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-xs font-semibold text-brand-700 tracking-wide uppercase mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                            Fale conosco
                        </span>
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink-900 leading-[1.05]">
                            Vamos cuidar juntos do{" "}
                            <span className="italic text-gradient-brand">seu pet</span>
                        </h2>
                        <p className="mt-5 text-lg text-ink-500 leading-relaxed">
                            Tem alguma dúvida ou quer agendar um horário? Nossa equipe responde rapidinho.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                        {/* Info + Mapa */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            <div className="bg-cream-50 rounded-3xl p-6 lg:p-8 border border-cream-200 shadow-soft">
                                <h3 className="font-display text-2xl font-medium text-ink-900 mb-6">
                                    Informações
                                </h3>
                                <div className="space-y-5">
                                    <ContactInfo
                                        icon={<MapPin className="w-5 h-5" />}
                                        title="Endereço"
                                        text="Rua João Arantes, 341 — Cidade Nova, Belo Horizonte"
                                    />
                                    <ContactInfo
                                        icon={<Phone className="w-5 h-5" />}
                                        title="Telefone"
                                        text="(31) 9530-6014"
                                        href="tel:+553195306014"
                                    />
                                    <ContactInfo
                                        icon={<Mail className="w-5 h-5" />}
                                        title="E-mail"
                                        text="clinicaimperiodospets@gmail.com"
                                        href="mailto:clinicaimperiodospets@gmail.com"
                                    />
                                    <ContactInfo
                                        icon={<Clock className="w-5 h-5" />}
                                        title="Horário"
                                        text="Seg-Sex: 9h às 18h · Sáb: 9h às 12h"
                                    />
                                </div>
                            </div>

                            <div className="h-72 lg:h-80 w-full overflow-hidden rounded-3xl shadow-soft border border-cream-200">
                                <iframe
                                    className="h-full w-full grayscale-[20%]"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.722748197771!2d-43.91007482563063!3d-19.89389973822187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699f848601e8b%3A0x6a0a09b3096b78e4!2sR.%20Jo%C3%A3o%20Arantes%2C%20341%20-%20Cidade%20Nova%2C%20Belo%20Horizonte%20-%20MG%2C%2031170-010!5e0!3m2!1spt-BR!2sbr!4v1725830631388!5m2!1spt-BR!2sbr"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização da Império dos Pets"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Formulário */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-cream-50 rounded-3xl p-6 lg:p-10 border border-cream-200 shadow-soft">
                                <h3 className="font-display text-2xl font-medium text-ink-900 mb-2">
                                    Envie sua mensagem
                                </h3>
                                <p className="text-ink-500 mb-8">
                                    Preencha os campos abaixo e entraremos em contato o mais breve possível.
                                </p>
                                <FormularioContato />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* === FOOTER === */}
            <footer className="bg-ink-900 text-cream-200 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                        {/* Logo + descrição */}
                        <div className="md:col-span-5 flex flex-col items-center md:items-start">
                            <a
                                href="#home"
                                onClick={(e) => scrollToSection(e, "home")}
                                className="mb-5 inline-block"
                                aria-label="Topo"
                            >
                                <Image
                                    src="/logo.png"
                                    alt="Império dos Pets"
                                    width={150}
                                    height={150}
                                    className="brightness-0 invert"
                                    priority
                                />
                            </a>
                            <p className="text-sm leading-relaxed text-cream-300/80 max-w-sm text-center md:text-left">
                                O lugar onde seu pet é tratado com muito amor. Oferecemos os melhores produtos
                                e serviços para o bem-estar do seu melhor amigo.
                            </p>
                            <div className="flex gap-3 mt-6">
                                <a
                                    href="https://www.instagram.com/clinicaimperiodospets"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-brand-600 border border-white/10 rounded-full transition-all duration-300 hover:border-brand-600 hover:-translate-y-0.5"
                                >
                                    <InstagramLogo className="w-5 h-5 text-cream-200" />
                                </a>
                                <a
                                    href="https://www.threads.net/@clinicaimperiodospets"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Threads"
                                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-brand-600 border border-white/10 rounded-full transition-all duration-300 hover:border-brand-600 hover:-translate-y-0.5"
                                >
                                    <ThreadsLogo className="w-5 h-5 text-cream-200" />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@clinicaimperiodospets?lang=pt-BR"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="TikTok"
                                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-brand-600 border border-white/10 rounded-full transition-all duration-300 hover:border-brand-600 hover:-translate-y-0.5"
                                >
                                    <TiktokLogo className="w-5 h-5 text-cream-200" />
                                </a>
                            </div>
                        </div>

                        {/* Navegação */}
                        <div className="md:col-span-3 text-center md:text-left">
                            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-5">
                                Navegação
                            </h3>
                            <ul className="space-y-2.5 text-sm">
                                {[
                                    { id: "home", label: "Início" },
                                    { id: "services", label: "Serviços" },
                                    { id: "about", label: "Sobre" },
                                    { id: "depoimentos", label: "Depoimentos" },
                                    { id: "gallery", label: "Galeria" },
                                    { id: "contact", label: "Contato" },
                                ].map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => scrollToSection(e, item.id)}
                                            className="text-cream-300/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-brand-400 transition-all duration-300" />
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contato */}
                        <div className="md:col-span-4 text-center md:text-left">
                            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-5">
                                Contato
                            </h3>
                            <ul className="space-y-3 text-sm text-cream-300/80">
                                <li className="flex items-start gap-3 justify-center md:justify-start">
                                    <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                                    <span>Rua João Arantes, 341<br />Cidade Nova, Belo Horizonte</span>
                                </li>
                                <li>
                                    <a
                                        href="mailto:clinicaimperiodospets@gmail.com"
                                        className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors"
                                    >
                                        <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                                        <span>clinicaimperiodospets@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+553195306014"
                                        className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors"
                                    >
                                        <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                                        <span>(31) 9530-6014</span>
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 justify-center md:justify-start">
                                    <Clock className="w-4 h-4 text-brand-400 flex-shrink-0" />
                                    <span>Seg-Sex 9h-18h · Sáb 9h-12h</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-300/60">
                        <p>
                            © {new Date().getFullYear()} Império dos Pets. Todos os direitos reservados.
                        </p>
                        <p className="italic">Feito com 💜 para os pets que amamos.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function ContactInfo({
    icon,
    title,
    text,
    href,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
    href?: string;
}) {
    const content = (
        <div className="flex items-start gap-4 group">
            <div className="w-11 h-11 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                {icon}
            </div>
            <div className="min-w-0">
                <div className="text-xs font-semibold text-ink-500 uppercase tracking-wider mb-0.5">
                    {title}
                </div>
                <div className="text-ink-800 text-sm leading-snug">{text}</div>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block hover:opacity-80 transition-opacity">
                {content}
            </a>
        );
    }
    return content;
}

export default App;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Heart } from "lucide-react";
import BotaoAgendamento from "@/app/components/BotaoAgendamento";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-cream-100 pt-12 pb-20 lg:pt-20 lg:pb-32"
        >
            {/* Decorative background blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-32 w-80 h-80 bg-sage-200/50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Texto */}
                    <motion.div
                        className="lg:col-span-6 text-center lg:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-brand-100 rounded-full shadow-soft mb-6"
                        >
                            <div className="flex -space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="text-gold-500" fill="currentColor" />
                                ))}
                            </div>
                            <span className="text-xs font-semibold text-ink-700 tracking-wide">
                                +5 anos de tutores satisfeitos
                            </span>
                        </motion.div>

                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.05] tracking-tight text-ink-900">
                            Excelência veterinária{" "}
                            <span className="relative inline-block">
                                <span className="text-gradient-brand italic">com coração.</span>
                                <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 200 12"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M2 9.5 Q 50 2, 100 6 T 198 4"
                                        stroke="url(#heroGrad)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        fill="none"
                                    />
                                    <defs>
                                        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#5B2A86" />
                                            <stop offset="100%" stopColor="#C9A55C" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </h1>

                        <p className="mt-6 text-lg lg:text-xl text-ink-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Cuidamos do seu pet como família. Atendimento humanizado,
                            equipe especializada e a estrutura completa que o seu melhor amigo merece.
                        </p>

                        {/* CTAs */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <BotaoAgendamento />
                            <a
                                href="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20tirar%20uma%20dúvida."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border-2 border-brand-200 text-brand-700 font-semibold rounded-full hover:bg-brand-50 hover:border-brand-300 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Fale no WhatsApp
                            </a>
                        </div>

                        {/* Trust strip */}
                        <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 pt-8 border-t border-cream-300">
                            <div className="text-center lg:text-left">
                                <div className="font-display text-3xl lg:text-4xl font-semibold text-brand-700">5+</div>
                                <div className="text-xs lg:text-sm text-ink-500 mt-1">anos de cuidado</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="font-display text-3xl lg:text-4xl font-semibold text-brand-700">1.5k+</div>
                                <div className="text-xs lg:text-sm text-ink-500 mt-1">pets atendidos</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="font-display text-3xl lg:text-4xl font-semibold text-brand-700">4.9</div>
                                <div className="text-xs lg:text-sm text-ink-500 mt-1">avaliação média</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Imagem com composição */}
                    <motion.div
                        className="lg:col-span-6 relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {/* Alterado de aspect-[5/6] para aspect-video (16:9) ou aspect-[4/3] para não espremer a imagem */}
                        <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] max-w-md mx-auto lg:max-w-none">
                            {/* Imagem principal */}
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-soft-lg">
                                <Image
                                    src="/hero.jpg"
                                    alt="Cachorro e gato felizes na Império dos Pets"
                                    fill
                                    sizes="(max-width: 1024px) 90vw, 50vw"
                                    className="object-cover" 
                                    priority
                                />
                                {/* Overlay sutil para coesão de cor */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/10 via-transparent to-transparent" />
                            </div>
                            

                            {/* Card flutuante: Amor */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="hidden sm:flex absolute -right-4 bottom-16 lg:-right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-soft-lg border border-cream-200 items-center gap-3"
                            >
                                <div className="w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                                    <Heart className="w-5 h-5 text-brand-600" fill="currentColor" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-ink-900">Atendimento humanizado</div>
                                    <div className="text-[11px] text-ink-500">Cada pet é único</div>
                                </div>
                            </motion.div>

                            {/* Decorative ring */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-brand-200/40" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

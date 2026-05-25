"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slidesData = [
  [
    { id: 1, src: "/galeria16.png", alt: "Pet feliz na clínica 1" },
    { id: 2, src: "/galeria2.png", alt: "Pet feliz na clínica 2" },
    { id: 3, src: "/galeria12.png", alt: "Pet feliz na clínica 3" },
    { id: 4, src: "/galeria9.png", alt: "Pet feliz na clínica 4" },
    { id: 5, src: "/galeria10.png", alt: "Pet feliz na clínica 5" },
    { id: 6, src: "/galeria11.png", alt: "Pet feliz na clínica 6" },
    { id: 7, src: "/galeria7.png", alt: "Pet feliz na clínica 7" },
    { id: 8, src: "/galeria17.png", alt: "Pet feliz na clínica 8" },
  ],
  [
    { id: 1, src: "/galeria13.png", alt: "Pet feliz na clínica 9" },
    { id: 2, src: "/galeria8.png", alt: "Pet feliz na clínica 10" },
    { id: 3, src: "/galeria3.png", alt: "Pet feliz na clínica 11" },
    { id: 4, src: "/galeria15.png", alt: "Pet feliz na clínica 12" },
    { id: 5, src: "/galeria1.png", alt: "Pet feliz na clínica 13" },
    { id: 6, src: "/galeria18.png", alt: "Pet feliz na clínica 14" },
    { id: 7, src: "/galeria14.png", alt: "Pet feliz na clínica 15" },
    { id: 8, src: "/galeria6.png", alt: "Pet feliz na clínica 16" },
  ],
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden"
    >
      {/* Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-sage-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-xs font-semibold text-brand-700 tracking-wide uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            Galeria
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink-900 leading-[1.05]">
            O carinho que seu pet{" "}
            <span className="italic text-gradient-brand">merece</span>
          </h2>
          <p className="mt-5 text-lg text-ink-500 leading-relaxed">
            Momentos especiais do nosso dia a dia cuidando dos nossos amigos peludos.
          </p>
        </motion.div>

        {/* Carrossel */}
        <div className="relative px-2 sm:px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".gallery-swiper-button-next",
              prevEl: ".gallery-swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            className="gallery-swiper"
          >
            {slidesData.map((slideImages, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pb-4">
                  {/* Coluna 1 */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="relative h-32 sm:h-40 overflow-hidden rounded-2xl shadow-soft group">
                      <Image src={slideImages[0].src} alt={slideImages[0].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="relative h-48 sm:h-64 overflow-hidden rounded-2xl shadow-soft group">
                      <Image src={slideImages[4].src} alt={slideImages[4].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </div>
                  {/* Coluna 2 */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="relative h-48 sm:h-64 overflow-hidden rounded-2xl shadow-soft group">
                      <Image src={slideImages[1].src} alt={slideImages[1].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="relative h-32 sm:h-40 overflow-hidden rounded-2xl shadow-soft group">
                      <Image src={slideImages[5].src} alt={slideImages[5].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </div>
                  {/* Coluna 3 */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="relative h-48 sm:h-64 overflow-hidden rounded-2xl shadow-soft group">
                      <Image src={slideImages[2].src} alt={slideImages[2].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="relative h-32 sm:h-40 overflow-hidden rounded-2xl shadow-soft group">
                      <Image src={slideImages[6].src} alt={slideImages[6].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </div>
                  {/* Coluna 4 */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="relative h-32 sm:h-40 overflow-hidden rounded-2xl shadow-soft group">
                      <Image src={slideImages[3].src} alt={slideImages[3].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="relative h-48 sm:h-64 overflow-hidden rounded-2xl shadow-soft group">
                      <Image src={slideImages[7].src} alt={slideImages[7].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botões */}
          <div className="gallery-swiper-button-prev" aria-label="Anterior">
            <ChevronLeft className="w-6 h-6" />
          </div>
          <div className="gallery-swiper-button-next" aria-label="Próximo">
            <ChevronRight className="w-6 h-6" />
          </div>
        </div>

        {/* Paginação */}
        <div className="custom-pagination mt-10 flex justify-center gap-2"></div>
      </div>
    </section>
  );
};

export default Gallery;

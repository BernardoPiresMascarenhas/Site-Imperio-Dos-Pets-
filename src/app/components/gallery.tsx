import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";


const slidesData = [
 
  [
    { id: 1, src: '/galeria16.png', alt: 'Animal de estimação 1' },
    { id: 2, src: '/galeria2.png', alt: 'Animal de estimação 2' },
    { id: 3, src: '/galeria12.png', alt: 'Animal de estimação 3' },
    { id: 4, src: '/galeria9.png', alt: 'Animal de estimação 4' },
    { id: 5, src: '/galeria10.png', alt: 'Animal de estimação 5' },
    { id: 6, src: '/galeria11.png', alt: 'Animal de estimação 6' },
    { id: 7, src: '/galeria7.png', alt: 'Animal de estimação 7' },
    { id: 8, src: '/galeria17.png', alt: 'Animal de estimação 8' },
  ],

  [
    { id: 1, src: '/galeria13.png', alt: 'Animal de estimação 1' },
    { id: 2, src: '/galeria8.png', alt: 'Animal de estimação 2' },
    { id: 3, src: '/galeria3.png', alt: 'Animal de estimação 3' },
    { id: 4, src: '/galeria15.png', alt: 'Animal de estimação 4' },
    { id: 5, src: '/galeria1.png', alt: 'Animal de estimação 5' },
    { id: 6, src: '/galeria18.png', alt: 'Animal de estimação 6' },
    { id: 7, src: '/galeria14.png', alt: 'Animal de estimação 7' },
    { id: 8, src: '/galeria6.png', alt: 'Animal de estimação 8' },
  ],
  
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-purple-700 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          O Carinho Que Seu Pet Merece
        </motion.h2>

        {/* Container relativo para os botões de navegação */}
        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".gallery-swiper-button-next",
              prevEl: ".gallery-swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            slidesPerView={1} 
            spaceBetween={50} 
            loop={true}
            className="gallery-swiper"
          >
            {/* Mapeia cada array de slide para um componente SwiperSlide */}
            {slidesData.map((slideImages, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                {/* DENTRO de cada slide, renderizamos a nossa grade estática */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                  {/* Coluna 1 */}
                  <div className="flex flex-col gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg shadow-md">
                      <Image src={slideImages[0].src} alt={slideImages[0].alt} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                      <Image src={slideImages[4].src} alt={slideImages[4].alt} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                  </div>

                  {/* Coluna 2 */}
                  <div className="flex flex-col gap-4">
                    <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                      <Image src={slideImages[1].src} alt={slideImages[1].alt} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg shadow-md">
                      <Image src={slideImages[5].src} alt={slideImages[5].alt} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                  </div>

                  {/* Coluna 3 */}
                  <div className="flex flex-col gap-4">
                    <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                      <Image src={slideImages[2].src} alt={slideImages[2].alt} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-lg shadow-md">
                      <Image src={slideImages[6].src} alt={slideImages[6].alt} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                  </div>

                  {/* Coluna 4 */}
                  <div className="flex flex-col gap-4">
                    <div className="relative h-40 overflow-hidden rounded-lg shadow-md">
                      <Image src={slideImages[3].src} alt={slideImages[3].alt} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                      <Image src={slideImages[7].src} alt={slideImages[7].alt} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botões de navegação personalizados (externos ao Swiper) */}
          <div className="gallery-swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </div>
          <div className="gallery-swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>

        {/* Paginação */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
  );
};

export default Gallery;
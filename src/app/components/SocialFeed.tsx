"use client";
import React from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.36Z" />
  </svg>
);

const SocialFeed = () => {
  const instagramPosts = [
    { id: 1, img: "/insta1.jpg", link: "https://www.instagram.com/p/DPyw5QyDRzQ/?img_index=1" },
    { id: 2, img: "/insta2.jpg", link: "https://www.instagram.com/p/DLQd5Mnpmgm/" },
    { id: 3, img: "/insta3.jpg", link: "https://www.instagram.com/p/DKsMPsMpZzi/" },
    { id: 4, img: "/insta4.jpg", link: "https://www.instagram.com/p/DHbuPWBPJR-/" },
  ];

  const tiktokPosts = [
    { id: 1, img: "/tiktok1.jpg", link: "https://www.tiktok.com/@clinicaimperiodospets/video/7474253568111906054?lang=pt-BR" },
    { id: 2, img: "/tiktok2.png", link: "https://www.tiktok.com/@clinicaimperiodospets/video/7443976045683952952?lang=pt-BR" },
    { id: 3, img: "/tiktok3.png", link: "https://www.tiktok.com/@clinicaimperiodospets/video/7434307707991002423?lang=pt-BR" },
    { id: 4, img: "/tiktok4.png", link: "https://www.tiktok.com/@clinicaimperiodospets/video/7421321762807237894?lang=pt-BR" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const renderBlock = (
    title: string,
    subtitle: string,
    handle: string,
    handleLink: string,
    Icon: React.ComponentType<{ className?: string }>,
    posts: { id: number; img: string; link: string }[],
    iconLabel: string,
    accentClass: string
  ) => (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
      >
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-11 h-11 rounded-2xl ${accentClass} flex items-center justify-center text-white shadow-soft`}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-medium text-ink-900 tracking-tight">
              {title}
            </h3>
          </div>
          <p className="text-ink-500 max-w-xl">{subtitle}</p>
        </div>
        <a
          href={handleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors self-start sm:self-end whitespace-nowrap"
        >
          <span>{handle}</span>
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </a>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {posts.map((post) => (
          <motion.a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir post ${post.id} - ${iconLabel}`}
            className="group relative overflow-hidden rounded-2xl aspect-square block shadow-soft hover:shadow-soft-lg transition-shadow duration-500"
            variants={itemVariants}
          >
            <Image
              src={post.img}
              alt={`${iconLabel} ${post.id}`}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-ink-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
              <Icon className="text-white w-7 h-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="social-feed" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-24">
        {renderBlock(
          "Acompanhe no Instagram",
          "Dicas, bastidores e muito conteúdo sobre saúde e bem-estar pet.",
          "@clinicaimperiodospets",
          "https://www.instagram.com/clinicaimperiodospets",
          Instagram,
          instagramPosts,
          "Instagram",
          "bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400"
        )}

        {renderBlock(
          "Veja no TikTok",
          "Vídeos rápidos com orientações práticas para tutores e apaixonados por animais.",
          "@clinicaimperiodospets",
          "https://www.tiktok.com/@clinicaimperiodospets?lang=pt-BR",
          TikTokIcon,
          tiktokPosts,
          "TikTok",
          "bg-ink-900"
        )}
      </div>
    </section>
  );
};

export default SocialFeed;

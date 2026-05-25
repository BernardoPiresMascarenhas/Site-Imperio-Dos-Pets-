import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Império dos Pets — Clínica Veterinária & Pet Shop em BH",
  description:
    "Clínica veterinária e pet shop em Belo Horizonte. Consultas, vacinação, banho e tosa, cirurgia e farmácia pet. Cuidado de excelência para o seu melhor amigo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased bg-cream-100 text-ink-900`}
      >
        {children}
      </body>
    </html>
  );
}

import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata: Metadata = {
  title: "Luan Hércules Tattoo | Elite Tattoo Artist",
  description: "Onde a arte encontra o império. Especialista em Realismo, Fineline de Luxo e Geometria Sacra em Maceió.",
  keywords: ["Tatuagem Maceió", "Luan Hércules", "Realismo", "Tattoo de Luxo", "Black and Grey"],
  openGraph: {
    title: "Luan Hércules Tattoo | Arte & Honra",
    description: "Experiência exclusiva em tatuagem de alta performance.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luan Hércules Tattoo Studio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@200;300;400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="noise-overlay"></div>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
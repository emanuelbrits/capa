import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Lora } from 'next/font/google'
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700'], // pesos que você for usar
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: "Dr. Carlos Alberto Pereira Andrade - Advogado Trabalhista Teresina",
  description: "Entre em contato com nosso escritório em Teresina. Atendimento rápido via telefone, WhatsApp ou e-mail. Estamos prontos para ajudar você!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="overflow-x-hidden">
      <body className={`${playfair.variable} ${lora.variable} antialiased`}>
        {children}
        <Script id="ld-json" strategy="afterInteractive" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Dr. Carlos Alberto Pereira Andrade",
            description: "c",
            telephone: "(86) 99981-4301",
            email: "capa@hotmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. Miguel Rosa, 1946 - Norte - Centro (Sul)",
              addressLocality: "Teresina",
              addressRegion: "PI",
              postalCode: "64000-480",
              addressCountry: "BR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -5.0813352,
              longitude: -42.8115459,
            },
            url: "https://seusite.com/contato",
            openingHours: "Mo,Tu,We,Th,Fr 08:00-18:00",
          })}
        </Script>
      </body>
    </html>
  );
}
"use client";

import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "FAQ", href: "#faq" },
  { label: "Endereço", href: "#endereco" },
];

export default function FooterLanding() {
  return (
    <footer className="bg-[var(--oceanBlue)] text-white px-6 md:px-20 pt-12 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Coluna 1 - Logo e Descrição */}
        <div>
          <div className="mb-4">
            <div className="w-full max-w-[24rem] h-auto text-yellow-400 fill-current">
              {/* Exemplo de SVG inline */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 107.000000 29.000000"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full fill-current"
              >
                <g transform="translate(0.000000,29.000000) scale(0.100000,-0.100000)" stroke="none">
                  <path d="M845 228 c-16 -34 -31 -53 -42 -53 -10 0 -29 -17 -42 -37 -13 -21
                  -28 -35 -33 -31 -9 5 -5 64 9 122 5 19 3 22 -8 15 -15 -9 -19 -10 -64 -20 -39
                  -9 -55 -22 -48 -40 5 -13 7 -13 17 0 6 8 22 17 34 21 22 6 23 5 12 -14 -6 -12
                  -20 -27 -30 -34 -11 -6 -20 -17 -20 -24 0 -7 -9 -17 -20 -23 -11 -6 -20 -17
                  -20 -25 0 -12 5 -12 25 -3 14 6 24 17 21 24 -6 17 14 34 40 34 17 0 23 -7 26
                  -27 2 -23 8 -28 33 -29 17 -1 40 8 54 20 20 17 23 18 18 4 -7 -19 8 -34 18
                  -18 4 6 8 27 9 48 3 41 41 122 57 122 6 0 7 5 4 10 -13 20 -27 9 -50 -42z
                  m-133 -43 c-3 -26 -9 -35 -23 -35 -10 0 -19 3 -19 6 0 6 40 64 44 64 1 0 0
                  -16 -2 -35z m82 -60 c-27 -36 -34 -41 -34 -26 0 13 40 61 51 61 6 0 -2 -16
                  -17 -35z"/>
                  <path d="M222 227 c-23 -24 -52 -87 -52 -112 0 -8 11 -20 24 -26 28 -13 86 12
                  86 37 0 12 -7 10 -31 -10 -17 -14 -35 -26 -40 -26 -17 0 -21 28 -10 63 20 60
                  81 107 67 52 -4 -14 -2 -25 3 -25 8 0 26 49 19 55 -18 16 -47 12 -66 -8z"/>
                  <path d="M421 183 c-12 -24 -51 -152 -51 -169 0 -8 5 -14 10 -14 6 0 10 12 10
                  28 0 15 9 45 19 67 18 40 61 87 61 67 0 -19 -21 -66 -33 -74 -8 -5 -7 -8 4 -8
                  17 0 39 39 39 70 0 28 -19 34 -43 13 -21 -18 -21 -18 -7 2 8 11 20 23 25 27 6
                  5 3 8 -7 8 -10 0 -21 -8 -27 -17z"/>
                  <path d="M318 162 c-29 -32 -41 -63 -29 -75 8 -8 18 -4 35 12 24 23 25 23 19
                  2 -3 -12 -1 -21 6 -21 6 0 12 3 12 8 1 4 3 18 4 32 2 14 5 31 7 39 5 20 -37
                  23 -54 3z m32 -9 c-1 -5 -12 -21 -25 -38 -28 -33 -34 -18 -9 20 16 24 34 33
                  34 18z"/>
                  <path d="M518 162 c-29 -32 -41 -63 -29 -75 8 -8 18 -4 35 12 24 23 25 23 19
                  2 -3 -12 -1 -21 6 -21 6 0 12 3 12 8 1 4 3 18 4 32 2 14 5 31 7 39 5 20 -37
                  23 -54 3z m32 -9 c-1 -5 -12 -21 -25 -38 -28 -33 -34 -18 -9 20 16 24 34 33
                  34 18z"/>
                  <path d="M863 168 c-15 -19 -4 -88 13 -88 8 0 23 15 34 33 21 34 27 73 10 62
                  -5 -3 -10 -14 -10 -24 0 -22 -26 -58 -36 -48 -4 4 -3 23 3 42 11 35 4 46 -14
                  23z"/>
                </g>
              </svg>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/80">
            Escritório de advocacia especializado em direito trabalhista em Teresina, com atendimento personalizado.
          </p>
        </div>



        {/* Coluna 2 - Contato */}
        <div className="space-y-4 text-base"> {/* Alterado de text-sm para text-base */}
          <p className="flex flex-col items-start gap-2 text-white/80">
            <div className="inline-flex gap-2 text-yellow-400">
              <MapPin className="mt-1 w-6 h-6" /> {/* Ligeiramente maior também */}
              <h3 className="text-xl font-semibold ">Nosso endereço</h3> {/* Maior */}
            </div>
            Av. Miguel Rosa, 1946 - Norte - Centro (Sul), Teresina - PI, 64000-480
          </p>

          <p className="flex flex-col items-start gap-2 text-white/80">
            <div className="inline-flex gap-2 text-yellow-400">
              <Phone className="mt-1 w-6 h-6" />
              <h3 className="text-xl font-semibold">Contato</h3>
            </div>
            (86) 99981-4301
          </p>

          <p className="flex flex-col items-start gap-2 text-white/80">
            <div className="inline-flex gap-2 text-yellow-400">
              <Mail className="mt-1 w-6 h-6" />
              <h3 className="text-xl font-semibold">E-Mail</h3>
            </div>
            capa@hotmail.com
          </p>

          <p className="flex flex-col items-start gap-2 text-white/80">
            <div className="inline-flex gap-2 text-yellow-400">
              <Clock className="mt-1 w-6 h-6" />
              <h3 className="text-xl font-semibold">Atendimento</h3>
            </div>
            Segunda à Sexta - das 8:00 às 12:00 – 13:00 às 17:00
          </p>
        </div>

        {/* Coluna 3 - Navegação */}
        <div className="text-base"> {/* Alterado de text-sm para text-base */}
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Navegue pelo site</h3>
          <ul className="grid grid-cols-2 space-y-2 text-white/80">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Linha final */}
      <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between text-sm text-white/50">
        <p>© 2025 Dr. Carlos Alberto Pereira Andrade. Todos os Direitos Reservados.</p>
      </div>
    </footer>
  );
}

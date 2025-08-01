"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const links = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Testemunhos", href: "#testemunhos" },
    { label: "FAQ", href: "#faq" },
    { label: "Endereço", href: "#endereco" },
];

export default function NavbarLanding() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-[var(--oceanBlue)] shadow z-50">
            <div className="flex items-center justify-between px-6 py-4 md:px-20">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-[var(--oceanBlue)]">
                    <Image
                        className="dark:invert"
                        src="/logo-inverse.png"
                        alt="logo CAPA"
                        width={97}
                        height={23}
                        priority>
                    </Image>
                </Link>

                {/* Botão Mobile */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Abrir menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Links Desktop */}
                <ul className="hidden md:flex gap-8 text-base xl:text-lg font-semibold text-white">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="hover:text-[var(--blackPanther)] transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Menu Mobile */}
            <div
                className={clsx(
                    "md:hidden flex flex-col px-6 border-t-2 transition-all duration-300 bg-white",
                    menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                )}
            >
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-[var(--oceanBlue)] hover:text-[var(--oceanBlue)] py-3 text-lg font-medium"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

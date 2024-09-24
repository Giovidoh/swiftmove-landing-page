/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { Menu, Wallet } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";

// Navigation links
const navLinks = [
    {
        href: "/",
        text: "Accueil",
    },
    {
        href: "/",
        text: "Investir",
    },
    {
        href: "/",
        text: "Services",
    },
    {
        href: "/",
        text: "À Propos",
    },
    {
        href: "/",
        text: "Contact",
    },
];

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <header className="relative flex justify-between items-center px-14 py-3 shadow-md">
            <div>
                <h1 className="font-bold text-xl">SwiftMove</h1>
            </div>
            <nav className="hidden min-[750px]:flex gap-8">
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.href}>
                        {link.text}
                    </Link>
                ))}
            </nav>
            <div className="hidden lg:flex gap-3">
                <Button>S'inscrire</Button>
                <Button className="flex gap-2">
                    <Wallet size={20} color="white" />
                    Investir Maintenant
                </Button>
            </div>
            <button
                className="block lg:hidden"
                onClick={() => setToggleMenu((prev) => !prev)}
            >
                <Menu size={24} color="black" />
            </button>
            {toggleMenu ? (
                <div className="absolute right-0 top-full flex flex-col items-center gap-3 p-10">
                    <nav className="flex min-[750px]:hidden flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-center"
                            >
                                {link.text}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex lg:hidden flex-col gap-3">
                        <Button>S'inscrire</Button>
                        <Button className="flex gap-2">
                            <Wallet size={20} color="white" />
                            Investir Maintenant
                        </Button>
                    </div>
                </div>
            ) : (
                ""
            )}
        </header>
    );
};

export default Header;

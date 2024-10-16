"use client";
import Link from "next/link";
import { Menu, Wallet } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import LanguagesSelect from "../selects/LanguagesSelect";
import { useLocale, useTranslations } from "next-intl";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const localActive = useLocale();
    const t = useTranslations("SwiftMovePage.Header");

    // Navigation links
    const navLinks = [
        {
            href: `/${localActive}`,
            text: t("links.link1"),
        },
        {
            href: `/${localActive}/#how-it-works`,
            text: t("links.link2"),
        },
        {
            href: `/${localActive}/#opportunities`,
            text: t("links.link3"),
        },
        {
            href: `/${localActive}/#advantages`,
            text: t("links.link4"),
        },
    ];

    return (
        <header className="relative flex justify-center w-full sm:px-14 py-3 shadow-md">
            <div className="container flex justify-between items-center w-full px-5">
                <div className="flex items-center gap-5">
                    <h1 className="font-bold text-xl">SwiftMove</h1>
                    <div className="hidden min-[1125px]:block">
                        <LanguagesSelect />
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <nav className="hidden min-[750px]:flex gap-8">
                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                {link.text}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden min-[1125px]:flex gap-3">
                        <Button>{t("button1 text")}</Button>
                        <Button className="flex items-center capitalize gap-2">
                            <Wallet size={20} color="white" strokeWidth={1.5} />
                            {t("button2 text")}
                        </Button>
                    </div>
                </div>
                <motion.button
                    className="block min-[1125px]:hidden"
                    onClick={() => setToggleMenu((prev) => !prev)}
                    whileTap={{ scale: 0.9 }}
                >
                    <Menu size={24} color="black" />
                </motion.button>
                <motion.div
                    animate={{
                        opacity: toggleMenu ? 1 : 0,
                        x: toggleMenu ? 0 : "100%",
                        scale: toggleMenu ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.2, ease: "easeIn" }}
                    className={`absolute right-0 top-full min-[1125px]:hidden flex flex-col items-center bg-white border gap-3 p-10 rounded-md z-10`}
                >
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
                    <div className="flex min-[1125px]:hidden flex-col gap-3">
                        <div className="w-full">
                            <LanguagesSelect />
                        </div>
                        <Button>{t("button1 text")}</Button>
                        <Button className="flex items-center capitalize gap-2">
                            <Wallet size={20} color="white" strokeWidth={1.5} />
                            {t("button2 text")}
                        </Button>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;

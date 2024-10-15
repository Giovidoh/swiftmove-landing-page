import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-center bg-primary text-primary-foreground w-full px-5 sm:px-14 pt-10 md:pt-20 pb-4 md:pb-10">
            <div className="container flex flex-col gap-20">
                <div className="flex flex-wrap justify-between gap-20 w-full">
                    <div>
                        <h2 className="font-bold text-2xl">SwiftMove</h2>
                    </div>
                    <div className="flex flex-wrap gap-10 sm:gap-20 lg:gap-40">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold">Liens utiles</h3>
                            <div className="flex flex-col gap-2">
                                <Link href="#">Investir</Link>
                                <Link href="#">Service</Link>
                                <Link href="#">A propos</Link>
                                <Link href="#">Contact</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold">Ressources</h3>
                            <div className="flex flex-col gap-2">
                                <Link href="#">Conditions d'utilisation</Link>
                                <Link href="#">
                                    Politique de confidentialité
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold">Contact</h3>
                            <div className="flex flex-col gap-2">
                                <p>infos@swiftmove.com</p>
                                <p>+0000000000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-3">
                    <p className="font-thin text-sm text-white/70">
                        Copyright | 2024
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("SwiftMovePage.Footer");

    return (
        <footer className="flex justify-center bg-primary text-primary-foreground w-full px-5 sm:px-14 py-20">
            <div className="container flex flex-col gap-20">
                <div className="flex flex-wrap justify-between gap-20 w-full">
                    <div>
                        <h2 className="font-bold text-2xl">SwiftMove</h2>
                    </div>
                    <div className="flex flex-wrap gap-10 sm:gap-20 lg:gap-40">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold">{t("col1.title")}</h3>
                            <div className="flex flex-col gap-2">
                                <Link href="#">{t("col1.link1")}</Link>
                                <Link href="#how-it-works">
                                    {t("col1.link2")}
                                </Link>
                                <Link href="#opportunities">
                                    {t("col1.link3")}
                                </Link>
                                <Link href="#advantages">
                                    {t("col1.link4")}
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold">{t("col2.title")}</h3>
                            <div className="flex flex-col gap-2">
                                <Dialog>
                                    <DialogTrigger className="text-start">
                                        {t("col2.link1")}
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <div className="flex flex-col items-center gap-5">
                                                <DialogTitle className="uppercase">
                                                    {t("col2.link1")}
                                                </DialogTitle>
                                                <ScrollArea className="w-full max-h-[600px] px-5">
                                                    <DialogDescription className="flex flex-col text-primary gap-4">
                                                        <div className="border-b pb-3">
                                                            <p className="font-semibold text-pretty text-justify">
                                                                Bienvenue sur
                                                                SwiftMove. En
                                                                utilisant notre
                                                                site et nos
                                                                services, vous
                                                                acceptez de
                                                                respecter les
                                                                présentes
                                                                conditions
                                                                générales
                                                                d'utilisation
                                                                (les
                                                                "Conditions").
                                                                Veuillez les
                                                                lire
                                                                attentivement
                                                                avant d'utiliser
                                                                nos services.
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col border-b gap-2 pb-3">
                                                            <h3 className="font-semibold text-lg">
                                                                1. Acceptation
                                                                des Conditions
                                                            </h3>
                                                            <p className="text-pretty text-justify">
                                                                Bienvenue sur
                                                                SwiftMove. En
                                                                utilisant notre
                                                                site et nos
                                                                services, vous
                                                                acceptez de
                                                                respecter les
                                                                présentes
                                                                conditions
                                                                générales
                                                                d'utilisation
                                                                (les
                                                                "Conditions").
                                                                Veuillez les
                                                                lire
                                                                attentivement
                                                                avant d'utiliser
                                                                nos services.
                                                            </p>
                                                        </div>
                                                    </DialogDescription>
                                                </ScrollArea>
                                            </div>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>

                                <Dialog>
                                    <DialogTrigger className="text-start">
                                        {t("col2.link2")}
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <div className="flex flex-col items-center gap-5">
                                                <DialogTitle className="uppercase">
                                                    {t("col2.link2")}
                                                </DialogTitle>
                                                <ScrollArea className="w-full max-h-[600px] px-5">
                                                    <DialogDescription className="flex flex-col text-primary gap-4">
                                                        <div className="border-b pb-3">
                                                            <p className="font-semibold text-pretty text-justify">
                                                                Bienvenue sur
                                                                SwiftMove. En
                                                                utilisant notre
                                                                site et nos
                                                                services, vous
                                                                acceptez de
                                                                respecter les
                                                                présentes
                                                                conditions
                                                                générales
                                                                d'utilisation
                                                                (les
                                                                "Conditions").
                                                                Veuillez les
                                                                lire
                                                                attentivement
                                                                avant d'utiliser
                                                                nos services.
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col border-b gap-2 pb-3">
                                                            <h3 className="font-semibold text-lg">
                                                                1. Acceptation
                                                                des Conditions
                                                            </h3>
                                                            <p className="text-pretty text-justify">
                                                                Bienvenue sur
                                                                SwiftMove. En
                                                                utilisant notre
                                                                site et nos
                                                                services, vous
                                                                acceptez de
                                                                respecter les
                                                                présentes
                                                                conditions
                                                                générales
                                                                d'utilisation
                                                                (les
                                                                "Conditions").
                                                                Veuillez les
                                                                lire
                                                                attentivement
                                                                avant d'utiliser
                                                                nos services.
                                                            </p>
                                                        </div>
                                                    </DialogDescription>
                                                </ScrollArea>
                                            </div>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>

                                <Dialog>
                                    <DialogTrigger className="text-start">
                                        {t("col3.title")}
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <div className="flex flex-col items-center gap-5">
                                                <DialogTitle className="uppercase">
                                                    {t("col3.title")}
                                                </DialogTitle>
                                                <ScrollArea className="w-full max-h-[600px] px-5">
                                                    <DialogDescription className="flex flex-col text-primary gap-4">
                                                        <div className="border-b pb-3">
                                                            <p className="font-semibold text-pretty text-justify">
                                                                Bienvenue sur
                                                                SwiftMove. En
                                                                utilisant notre
                                                                site et nos
                                                                services, vous
                                                                acceptez de
                                                                respecter les
                                                                présentes
                                                                conditions
                                                                générales
                                                                d'utilisation
                                                                (les
                                                                "Conditions").
                                                                Veuillez les
                                                                lire
                                                                attentivement
                                                                avant d'utiliser
                                                                nos services.
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col border-b gap-2 pb-3">
                                                            <h3 className="font-semibold text-lg">
                                                                1. Acceptation
                                                                des Conditions
                                                            </h3>
                                                            <p className="text-pretty text-justify">
                                                                Bienvenue sur
                                                                SwiftMove. En
                                                                utilisant notre
                                                                site et nos
                                                                services, vous
                                                                acceptez de
                                                                respecter les
                                                                présentes
                                                                conditions
                                                                générales
                                                                d'utilisation
                                                                (les
                                                                "Conditions").
                                                                Veuillez les
                                                                lire
                                                                attentivement
                                                                avant d'utiliser
                                                                nos services.
                                                            </p>
                                                        </div>
                                                    </DialogDescription>
                                                </ScrollArea>
                                            </div>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-semibold">{t("col3.title")}</h3>
                            <div className="flex flex-col gap-2">
                                <p>{t("col3.link1")}</p>
                                <p>{t("col3.link2")}</p>
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

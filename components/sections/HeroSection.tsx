import React from "react";
import { Button } from "../ui/button";
import { Wallet } from "lucide-react";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";

const HeroSection = () => {
    const t = useTranslations("SwiftMovePage.HeroSection");

    return (
        <section className="w-full h-[fit] bg-hero-image bg-no-repeat bg-center bg-cover">
            <div className="bg-black bg-opacity-60 backdrop-blur-sm flex justify-center w-full h-full">
                <div className="container flex flex-col justify-center items-center w-full h-full lg:gap-3 px-5 sm:px-14 py-20">
                    <Badge
                        className="text-white text-sm lg:text-base font-extralight whitespace-nowrap border-white/30"
                        variant="outline"
                    >
                        {t("tag")}
                    </Badge>
                    <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl text-center text-pretty font-bold mt-5">
                        {t("heading")}
                    </h1>
                    <p className="text-white text-center text-sm lg:text-base text-pretty mt-5">
                        {t("subheading")}
                    </p>
                    <Button className="flex items-center font-semibold capitalize bg-white hover:bg-white hover:bg-opacity-80 text-black gap-2 mt-10 px-10 py-6">
                        <Wallet size={20} color="black" strokeWidth={1.5} />
                        {t("button text")}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

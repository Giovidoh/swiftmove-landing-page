import React from "react";
import { Button } from "../ui/button";
import { Wallet } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="w-full h-[fit] bg-hero-image bg-no-repeat bg-center bg-cover">
            <div className="bg-black bg-opacity-60 backdrop-blur-sm flex justify-center w-full h-full">
                <div className="flex flex-col justify-center items-center w-full h-full lg:gap-3 px-5 sm:px-14 py-20">
                    <span className="text-white text-center text-sm lg:text-base text-pretty font-extralight">
                        Rapide sur la route, rentable dans vos poches
                    </span>
                    <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl text-center text-pretty font-bold mt-5">
                        Investissez dans le futur de la livraison écoresponsable
                        et regardez vos gains croître.
                    </h1>
                    <p className="text-white text-center text-sm lg:text-base text-pretty mt-5">
                        Devenez partie prenante d'un projet innovant et rentable
                        dans le secteur de la logistique moderne.
                    </p>
                    <Button className="flex items-center font-semibold bg-white hover:bg-white hover:bg-opacity-80 text-black gap-2 mt-10 px-10 py-6">
                        <Wallet size={20} color="black" strokeWidth={1.5} />
                        Investir Maintenant
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

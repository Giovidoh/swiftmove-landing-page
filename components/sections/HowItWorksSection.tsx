import React from "react";
import StepsCard from "../cards/StepsCard";
import { Bike, Truck, Wallet, HandCoins } from "lucide-react";

const HowItWorksSection = () => {
    return (
        <section className="container px-5 sm:px-14 py-5 md:py-14">
            <div className="flex flex-col items-center gap-16">
                <div className="flex flex-col items-center gap-3">
                    <h2 className="font-semibold text-center text-xl sm:text-2xl lg:text-4xl">
                        Comment ça fonctionne
                    </h2>
                    <p className="text-gray-500 text-center text-sm lg:text-base">
                        Suivez ces étapes simples.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 min-[1080px]:grid-cols-3 gap-10">
                    <StepsCard
                        stepNumber={1}
                        // eslint-disable-next-line react/jsx-key
                        icons={[<Bike />, <Truck />]}
                        title="Choisissez votre véhicule"
                        text="Sélectionnez le mode de livraison dans lequel vous souhaitez investir."
                    />
                    <StepsCard
                        stepNumber={2}
                        // eslint-disable-next-line react/jsx-key
                        icons={[<Wallet />]}
                        title="Investissez en quelques clics"
                        text="Processus simple et rapide, sécurisé par nos partenaires de paiement."
                    />
                    <StepsCard
                        stepNumber={3}
                        // eslint-disable-next-line react/jsx-key
                        icons={[<HandCoins />]}
                        title="Générez des profits"
                        text="Voyez vos gains augmenter grâce à notre réseau de livraison performant."
                        className="sm:col-span-2 min-[1080px]:col-span-1"
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;

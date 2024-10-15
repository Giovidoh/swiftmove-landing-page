import React from "react";
import InvestmentCard from "../cards/InvestmentCard";
import { Bike, Truck } from "lucide-react";

const OpportunitiesSection = () => {
    return (
        <section className="flex justify-center w-full px-5 sm:px-14 py-5 md:py-14">
            <div className="container flex flex-col items-center gap-16">
                <div className="flex flex-col items-center w-full gap-5">
                    <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl text-center">
                        Choisissez votre plan d'investissement
                    </h2>
                    <h3 className="text-gray-500 text-sm lg:text-base text-center">
                        Des options d'investissement flexibles pour maximiser
                        vos profits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 min-[1080px]:grid-cols-3 gap-4 mt-5">
                        <InvestmentCard
                            icon={<Bike height={24} />}
                            title="Vélo"
                            description="Investissez dans la livraison rapide et verte. ROI de 250% en 6 mois."
                            price="5000"
                        >
                            <div>Avantages</div>
                        </InvestmentCard>
                        <InvestmentCard
                            icon={<Bike height={24} />}
                            title="Moto"
                            description="Boostez vos profits avec la mobilité urbaine. Rendement annuel de 7%."
                            price="7000"
                        >
                            <div>Avantages</div>
                        </InvestmentCard>
                        <InvestmentCard
                            icon={<Truck height={24} />}
                            title="Camion"
                            description="Des gains solides avec nos camions éco. Rendement annuel de 12%."
                            price="15000"
                        >
                            <div>Avantages</div>
                        </InvestmentCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpportunitiesSection;

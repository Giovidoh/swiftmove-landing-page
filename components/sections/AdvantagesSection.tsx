import React from "react";
import IconTextCard from "../cards/IconTextCard";
import { RefreshCw, ShieldCheck, Sprout, TrendingUp } from "lucide-react";
import AdvantagesSectionChart from "../charts/AdvantagesSectionChart";

const AdvantagesSection = () => {
    return (
        <section
            id="advantages"
            className="flex justify-center w-full px-5 sm:px-14 py-20"
        >
            <div className="container flex flex-col items-center w-full gap-10">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl text-center">
                        Les avantages de SwiftMove
                    </h2>
                    <p className="text-gray-500 text-sm lg:text-base text-center">
                        Voici ce que nous vous offrons.
                    </p>
                </div>
                <div className="flex items-center w-full gap-5">
                    <div className="flex flex-col gap-4 w-full lg:w-1/2">
                        <IconTextCard
                            icon={<TrendingUp />}
                            title="Croissance rapide des investissements"
                            hasBody={false}
                        />
                        <IconTextCard
                            icon={<RefreshCw />}
                            title="Retours sur investissement flexibles"
                            hasBody={false}
                        />
                        <IconTextCard
                            icon={<Sprout />}
                            title="Livraison écoresponsable et technologie verte"
                            hasBody={false}
                        />
                        <IconTextCard
                            icon={<ShieldCheck />}
                            title="Sécurité et transparence des fonds"
                            hasBody={false}
                        />
                    </div>
                    <div className="hidden lg:block w-1/2">
                        <AdvantagesSectionChart />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;

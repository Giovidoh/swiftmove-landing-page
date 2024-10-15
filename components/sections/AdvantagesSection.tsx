import React from "react";
import IconTextCard from "../cards/IconTextCard";
import { Wallpaper } from "lucide-react";
import AdvantagesSectionChart from "../charts/AdvantagesSectionChart";

const AdvantagesSection = () => {
    return (
        <section className="flex justify-center w-full px-5 sm:px-14 py-10 md:py-20">
            <div className="container flex flex-col items-center w-full gap-20">
                <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl text-center">
                    Les avantages de SwiftMove
                </h2>
                <div className="flex items-center w-full gap-5">
                    <div className="flex flex-col gap-4 w-full lg:w-1/2">
                        <IconTextCard
                            icon={<Wallpaper />}
                            title="Croissance rapide des investissements"
                            hasBody={false}
                        />
                        <IconTextCard
                            icon={<Wallpaper />}
                            title="Retours sur investissement flexibles"
                            hasBody={false}
                        />
                        <IconTextCard
                            icon={<Wallpaper />}
                            title="Livraison écoresponsable et technologie verte"
                            hasBody={false}
                        />
                        <IconTextCard
                            icon={<Wallpaper />}
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

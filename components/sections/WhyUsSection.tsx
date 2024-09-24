import React from "react";
import IconTextCard from "../cards/IconTextCard";
import { Leaf, DollarSign, Globe } from "lucide-react";
import { Badge } from "../ui/badge";
import WhyUsSectionChart from "../charts/WhyUsSectionChart";

const WhyUsSection = () => {
    return (
        <section className="px-5 sm:px-14 py-20">
            <div className="flex flex-col items-center gap-16">
                <div className="flex flex-col items-center w-full gap-5">
                    <Badge
                        className="text-sm lg:text-base font-extralight whitespace-nowrap"
                        variant="outline"
                    >
                        Pourquoi investir dans SwiftMove
                    </Badge>
                    <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl text-center">
                        Pourquoi SwiftMove est le meilleur choix pour vos
                        investissements ?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 min-[1080px]:grid-cols-3 gap-4 mt-5">
                        <IconTextCard
                            className="flex-col items-center text-center gap-2"
                            icon={<Leaf />}
                            title="Croissance durable"
                            body="SwiftMove réduit son empreinte carbone grâce à des véhicules éco-responsables et des trajets optimisés."
                        />
                        <IconTextCard
                            className="flex-col items-center text-center gap-2"
                            icon={<DollarSign />}
                            title="Retour sur investissement rapide"
                            body="Maximisez la rentabilité dès le début avec des coûts réduits et une efficacité optimale."
                        />
                        <IconTextCard
                            className="flex-col items-center text-center gap-2 sm:col-span-2 min-[1080px]:col-span-1"
                            icon={<Globe />}
                            title="Impact environnemental"
                            body="SwiftMove minimise son impact écologique en adoptant des solutions de transport propres et efficaces."
                        />
                    </div>
                </div>
                <div className="w-full lg:w-3/4">
                    <WhyUsSectionChart />
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;

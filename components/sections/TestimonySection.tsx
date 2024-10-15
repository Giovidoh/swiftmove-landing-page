import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonySection = () => {
    const testimonies = [
        {
            name: "John Doe",
            testimony:
                "Grâce à SwiftMove, j'ai vu mon investissement croître de 10% en seulement 6 mois ! Le modèle de livraison durable est l'avenir.",
        },
        {
            name: "Jane Smith",
            testimony:
                "SwiftMove m'a permis d'économiser du temps et de l'argent. Leur service est rapide et écoresponsable, je suis impressionnée par leur efficacité !",
        },
        {
            name: "Lucas Martin",
            testimony:
                "Je n'ai jamais vu une entreprise aussi engagée pour l'environnement et ses clients. Avec SwiftMove, j'ai optimisé ma logistique tout en réduisant mon empreinte carbone.",
        },
        {
            name: "Emma Durand",
            testimony:
                "Le service est irréprochable ! En à peine quelques mois, j'ai vu une amélioration significative de mon chiffre d'affaires grâce à leur modèle de livraison innovant.",
        },
        {
            name: "Noah Lefebvre",
            testimony:
                "SwiftMove a totalement transformé la façon dont je gère mes envois. Non seulement c'est rapide, mais c'est aussi bon pour la planète. Un service gagnant à tous les niveaux !",
        },
        {
            name: "Sophia Laurent",
            testimony:
                "J'étais sceptique au début, mais SwiftMove m'a prouvé que durabilité et performance peuvent aller de pair. Mon entreprise en bénéficie chaque jour !",
        },
        {
            name: "Alexandre Dupuis",
            testimony:
                "La simplicité et l'efficacité de SwiftMove sont impressionnantes. Leur approche durable m'a convaincu, et j'ai vu une nette amélioration de mes résultats.",
        },
    ];
    return (
        <section className="flex justify-center w-full px-5 sm:px-14 py-20">
            <div className="container flex flex-col w-full gap-5">
                <div className="flex flex-col gap-5">
                    <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl text-center">
                        Écoutez leurs avis
                    </h2>
                    <p className="text-gray-500 text-sm lg:text-base text-center">
                        Ils témoignent de ce que SwiftMove a pu leur offrir.
                    </p>
                </div>
                <div className="flex justify-center w-full">
                    <Carousel
                        opts={{ loop: true }}
                        className="w-full max-w-[80%]"
                    >
                        <CarouselContent className="py-5">
                            {testimonies.map((testimony, index) => (
                                <CarouselItem
                                    key={index}
                                    className="flex justify-center xl:basis-3/4 2xl:basis-1/2"
                                >
                                    <div className="flex flex-col min-[900px]:flex-row items-center min-[900px]:items-start w-fit border border-primary p-5 gap-4 shadow-lg rounded-2xl">
                                        <div className="bg-gray-400 w-20 min-[900px]:w-32 h-20 min-[900px]:h-32 rounded-xl"></div>
                                        <div className="flex flex-col items-center min-[900px]:items-start gap-3">
                                            <h2 className="font-semibold text-xl">
                                                {testimony.name}
                                            </h2>
                                            <p className="tracking-wide text-center min-[900px]:text-start text-pretty max-w-[300px]">
                                                {testimony.testimony}
                                            </p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="w-14 h-14 hover:scale-[1.2] transition" />
                        <CarouselNext className="w-14 h-14 hover:scale-[1.2] transition" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default TestimonySection;

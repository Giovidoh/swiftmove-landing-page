import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

const TestimonySection = () => {
    const t = useTranslations("SwiftMovePage.TestimonySection");

    const testimonies = [
        {
            name: t("card1.name"),
            testimony: t("card1.testimony"),
        },
        {
            name: t("card2.name"),
            testimony: t("card2.testimony"),
        },
        {
            name: t("card3.name"),
            testimony: t("card3.testimony"),
        },
        {
            name: t("card4.name"),
            testimony: t("card4.testimony"),
        },
        {
            name: t("card5.name"),
            testimony: t("card5.testimony"),
        },
    ];

    return (
        <section className="flex justify-center w-full px-5 sm:px-14 py-20">
            <div className="container flex flex-col w-full gap-5">
                <div className="flex flex-col gap-5">
                    <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl text-center">
                        {t("heading")}
                    </h2>
                    <p className="text-gray-500 text-sm lg:text-base text-center">
                        {t("subheading")}
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

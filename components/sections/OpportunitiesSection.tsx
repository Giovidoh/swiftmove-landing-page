import React from "react";
import InvestmentCard from "../cards/InvestmentCard";
import { Bike, Car } from "lucide-react";
import { useTranslations } from "next-intl";

const OpportunitiesSection = () => {
    const t = useTranslations("SwiftMovePage.OpportunitiesSection");

    return (
        <section
            id="opportunities"
            className="flex justify-center w-full px-5 sm:px-14 py-20"
        >
            <div className="container flex flex-col items-center w-full gap-16">
                <div className="flex flex-col items-center w-full gap-5">
                    <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl text-center">
                        {t("heading")}
                    </h2>
                    <p className="text-gray-500 text-sm lg:text-base text-center">
                        {t("subheading")}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 min-[1080px]:grid-cols-3 w-full gap-4 mt-5">
                        <InvestmentCard
                            icon={<Bike height={24} />}
                            title={t("card1.title")}
                            description={t("card1.description")}
                            investmentSentence={t.rich(
                                "card1.investmentSentence",
                                {
                                    price: t("card1.price"),
                                    duration: t("card1.duration"),
                                    span: (chunks) => (
                                        <span className="font-bold text-xl">
                                            {chunks}
                                        </span>
                                    ),
                                    br: () => <br />,
                                }
                            )}
                            returnOnInvestment={t.rich(
                                "card1.advantages.return on investment",
                                {
                                    incomePercentage: t(
                                        "card1.advantages.incomePercentage"
                                    ),
                                    span: (chunks) => (
                                        <span className="font-bold text-xl">
                                            {chunks}
                                        </span>
                                    ),
                                }
                            )}
                        />
                        <InvestmentCard
                            icon={<Bike height={24} />}
                            title={t("card2.title")}
                            description={t("card2.description")}
                            investmentSentence={t.rich(
                                "card2.investmentSentence",
                                {
                                    price: t("card2.price"),
                                    duration: t("card2.duration"),
                                    span: (chunks) => (
                                        <span className="font-bold text-xl">
                                            {chunks}
                                        </span>
                                    ),
                                    br: () => <br />,
                                }
                            )}
                            returnOnInvestment={t.rich(
                                "card2.advantages.return on investment",
                                {
                                    incomePercentage: t(
                                        "card2.advantages.incomePercentage"
                                    ),
                                    span: (chunks) => (
                                        <span className="font-bold text-xl">
                                            {chunks}
                                        </span>
                                    ),
                                }
                            )}
                        />
                        <InvestmentCard
                            icon={<Car height={24} />}
                            title={t("card3.title")}
                            description={t("card3.description")}
                            investmentSentence={t.rich(
                                "card3.investmentSentence",
                                {
                                    price: t("card3.price"),
                                    duration: t("card3.duration"),
                                    span: (chunks) => (
                                        <span className="font-bold text-xl">
                                            {chunks}
                                        </span>
                                    ),
                                    br: () => <br />,
                                }
                            )}
                            returnOnInvestment={t.rich(
                                "card3.advantages.return on investment",
                                {
                                    incomePercentage: t(
                                        "card3.advantages.incomePercentage"
                                    ),
                                    span: (chunks) => (
                                        <span className="font-bold text-xl">
                                            {chunks}
                                        </span>
                                    ),
                                }
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpportunitiesSection;

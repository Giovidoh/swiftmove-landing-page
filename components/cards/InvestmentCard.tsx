/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactNode } from "react";
import { Button } from "../ui/button";

interface InvestmentCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    investmentSentence: ReactNode;
    returnOnInvestment: ReactNode;
}

const InvestmentCard: FC<InvestmentCardProps> = ({
    icon,
    title,
    description,
    investmentSentence,
    returnOnInvestment,
}) => {
    return (
        <div className="bg-white border rounded-md shadow-md">
            <div className="flex flex-col justify-between items-center w-full h-full gap-4 px-5 py-10 text-center">
                <h3 className="font-semibold text-lg">{title}</h3>
                <div className="flex items-center gap-1 border p-3 rounded-full shadow-md">
                    {icon}
                </div>
                <p className="text-gray-500 text-sm text-pretty">
                    {description}
                </p>
                <div>{investmentSentence}</div>
                <div className="flex flex-col w-full gap-3 py-4">
                    <div className="border-b">Avantages</div>
                    <div>{returnOnInvestment}</div>
                </div>
                <div className="w-full">
                    <Button className="w-full">Découvrir</Button>
                </div>
            </div>
        </div>
    );
};

export default InvestmentCard;

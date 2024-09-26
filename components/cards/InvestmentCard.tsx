/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactNode } from "react";
import { Button } from "../ui/button";

interface InvestmentCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    price: string;
    children?: any;
}

const InvestmentCard: FC<InvestmentCardProps> = ({
    icon,
    title,
    description,
    price,
    children,
}) => {
    return (
        <div className="bg-white border rounded-md shadow-md">
            <div className="flex flex-col items-center gap-4 px-5 py-10 text-center">
                <h3 className="font-semibold text-lg">{title}</h3>
                <div className="flex items-center gap-1 border p-3 rounded-full shadow-md">
                    {icon}
                </div>
                <p className="text-gray-500 text-sm text-pretty">
                    {description}
                </p>
                <div>
                    À partir de{" "}
                    <span className="font-bold text-xl">{price}</span> FCFA/mois
                </div>
                <div className="border-t w-full py-4">{children}</div>
                <div className="w-full">
                    <Button className="w-full">Découvrir</Button>
                </div>
            </div>
        </div>
    );
};

export default InvestmentCard;

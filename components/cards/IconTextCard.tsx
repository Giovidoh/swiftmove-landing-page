import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface IconTextCardProps {
    className?: string;
    icon: ReactNode;
    iconBgColor?: string;
    title: string;
    body: string;
}

const IconTextCard: FC<IconTextCardProps> = ({
    className,
    icon,
    iconBgColor = "bg-secondary",
    title,
    body,
}) => {
    return (
        <div
            className={cn(
                `flex items-center bg-white border gap-4 p-5 shadow-md rounded-md`,
                className
            )}
        >
            <div className={`${iconBgColor} p-4 rounded-full`}>{icon}</div>
            <div className="flex flex-col gap-2">
                <h3 className="font-bold md:text-lg">{title}</h3>
                <p className="text-pretty text-sm md:text-base">{body}</p>
            </div>
        </div>
    );
};

export default IconTextCard;

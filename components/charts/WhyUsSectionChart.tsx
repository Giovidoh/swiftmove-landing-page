/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export const description = "A multiple bar chart";

const chartData = [
    { month: "Janvier", motos: 186, vélos: 80 },
    { month: "Février", motos: 305, vélos: 200 },
    { month: "Mars", motos: 237, vélos: 120 },
    { month: "Avril", motos: 73, vélos: 190 },
    { month: "Mai", motos: 209, vélos: 130 },
    { month: "Juin", motos: 214, vélos: 140 },
    { month: "Juillet", motos: 214, vélos: 140 },
    { month: "Août", motos: 214, vélos: 140 },
    { month: "Septembre", motos: 214, vélos: 140 },
    { month: "Octobre", motos: 214, vélos: 140 },
    { month: "Novembre", motos: 214, vélos: 140 },
    { month: "Décembre", motos: 214, vélos: 140 },
];

const chartConfig = {
    motos: {
        label: "Motos",
        color: "hsl(var(--chart-1))",
    },
    vélos: {
        label: "Vélos",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

const WhyUsSectionChart = () => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader className="text-center">
                <CardTitle>Croissance potentielle des profits</CardTitle>
                <CardDescription>2024</CardDescription>
            </CardHeader>
            <CardContent className="h-1/2">
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={true} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar
                            dataKey="motos"
                            className="fill-secondary"
                            radius={4}
                        />
                        <Bar
                            dataKey="vélos"
                            className="fill-primary"
                            radius={4}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month{" "}
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter> */}
        </Card>
    );
};

export default WhyUsSectionChart;

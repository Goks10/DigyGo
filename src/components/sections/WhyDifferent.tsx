"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Rocket, Zap, Sliders, TrendingUp } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function WhyDifferent() {
    const points = [
        { icon: Sliders, title: "Systems, Not Just Campaigns", text: "We build sustainable engines, not one-off blasts." },
        { icon: TrendingUp, title: "ROI-Driven Approach", text: "Focus on revenue and profit, not vanity metrics." },
        { icon: Zap, title: "Automation First Mindset", text: "Efficiency through smart workflows." },
        { icon: Lightbulb, title: "Custom Strategy", text: "Tailored solutions for your specific business." },
        { icon: Rocket, title: "Built for Scale", text: "Infrastructure that grows with you." },
    ];

    return (
        <section className="py-24 bg-black/95">
            <div className="container px-4 md:px-6 mx-auto">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Why DigyGo is Different</h2>
                </ScrollAnimation>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                    {points.map((point, i) => (
                        <ScrollAnimation
                            key={i}
                            delay={i * 0.1}
                        >
                            <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-colors">
                                <CardHeader>
                                    <CardTitle className="flex flex-col items-center text-center gap-4 text-white">
                                        <div className="p-3 rounded-full bg-primary/20 text-primary">
                                            <point.icon className="h-8 w-8" />
                                        </div>
                                        {point.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-muted-foreground">{point.text}</p>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}

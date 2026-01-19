"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ProblemSolution() {
    const problems = [
        "Leads are inconsistent",
        "Follow-ups are manual and delayed",
        "Sales teams miss opportunities",
        "Marketing feels unpredictable",
    ];

    const solutions = [
        {
            title: "Lead Generation",
            description: "High-quality leads using paid ads, landing pages, and funnels.",
        },
        {
            title: "Lead Management",
            description: "All leads in one CRM with proper tracking and pipelines.",
        },
        {
            title: "Lead Automation",
            description: "Instant follow-ups via WhatsApp, email & SMS. No manual chasing.",
        },
        {
            title: "Lead Nurturing",
            description: "Turn cold leads into paying customers with smart sequences.",
        },
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container px-4 md:px-6 mx-auto">

                {/* The Problem */}
                <div className="mb-24">
                    <ScrollAnimation className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">The Problem</h2>
                        <p className="text-muted-foreground mt-4 text-lg">Most businesses struggle because...</p>
                    </ScrollAnimation>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {problems.map((prob, i) => (
                            <ScrollAnimation
                                key={i}
                                delay={i * 0.1}
                            >
                                <Card className="bg-destructive/10 border-destructive/20 h-full">
                                    <CardContent className="flex flex-col items-center justify-center p-6 text-center pt-8">
                                        <XCircle className="h-12 w-12 text-destructive mb-4" />
                                        <p className="font-medium text-white">{prob}</p>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        ))}
                    </div>
                    <ScrollAnimation className="mt-8 text-center text-xl font-semibold text-destructive">
                        Running ads alone doesn’t fix this. You need a system.
                    </ScrollAnimation>
                </div>

                {/* The Solution */}
                <div>
                    <ScrollAnimation className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Solution – The DigyGo Growth System</h2>
                        <p className="text-muted-foreground mt-4 text-lg">We build complete customer acquisition systems that work 24/7.</p>
                    </ScrollAnimation>

                    <div className="grid gap-8 md:grid-cols-2">
                        {solutions.map((sol, i) => (
                            <ScrollAnimation
                                key={i}
                                delay={i * 0.1}
                            >
                                <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3 text-xl text-white">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-black text-sm font-bold">
                                                {i + 1}
                                            </span>
                                            {sol.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-lg">{sol.description}</p>
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

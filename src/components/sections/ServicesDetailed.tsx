"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ServicesDetailed() {
    const services = [
        {
            title: "Lead Generation Systems",
            description: "Consistent high-intent leads.",
            features: [
                "Facebook & Instagram Ads",
                "Google Ads",
                "Funnel strategy",
                "Landing page design",
                "Offer creation",
                "Conversion optimization",
            ],
        },
        {
            title: "Lead Management (CRM Setup)",
            description: "Zero lead loss.",
            features: [
                "Custom CRM setup",
                "Sales pipeline design",
                "Lead tagging & segmentation",
                "Team access control",
                "Activity tracking",
                "Performance dashboards",
            ],
        },
        {
            title: "Lead Automation",
            description: "Instant response & faster conversions.",
            features: [
                "WhatsApp automation",
                "Email automation",
                "SMS automation",
                "AI chat workflows",
                "Auto reminders for sales team",
                "Lead scoring",
            ],
        },
        {
            title: "Lead Nurturing Systems",
            description: "Convert more with the same leads.",
            features: [
                "Follow-up sequences",
                "Trust-building content flows",
                "Retargeting strategy",
                "Re-activation campaigns",
            ],
        },
        {
            title: "Analytics & Optimization",
            description: "Scale what works.",
            features: [
                "Funnel tracking",
                "Cost per lead analysis",
                "Conversion rate optimization",
                "Monthly performance reports",
            ],
        },
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container px-4 md:px-6 mx-auto">
                <ScrollAnimation className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white mb-4">Our Services</h1>
                    <p className="text-xl text-muted-foreground">We don’t sell marketing. We build revenue systems.</p>
                </ScrollAnimation>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <ScrollAnimation key={i} delay={i * 0.1} className="h-full">
                            <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors h-full">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                                    <p className="text-primary font-medium">{service.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, j) => (
                                            <li key={j} className="flex items-start gap-2 text-muted-foreground">
                                                <Check className="h-5 w-5 text-primary shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <ScrollAnimation className="mb-12">
                        <h2 className="text-3xl font-bold text-white">How We Work</h2>
                    </ScrollAnimation>
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                        {["Business audit", "Funnel & system design", "Automation setup", "Launch", "Optimization", "Scaling"].map((step, k) => (
                            <ScrollAnimation key={k} delay={k * 0.1} className="relative flex flex-col items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black font-bold text-lg mb-4 z-10">
                                    {k + 1}
                                </div>
                                <p className="text-white font-medium">{step}</p>
                                {/* Connector line (not for last item) */}
                                {k < 5 && (
                                    <div className="hidden lg:block absolute top-6 left-1/2 w-full h-[2px] bg-white/10 -z-0" />
                                )}
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

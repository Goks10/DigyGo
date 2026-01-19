"use client";

import { CheckCircle } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function WhoWeWorkWith() {
    const industries = [
        "Real Estate Companies",
        "Education & Training Institutes",
        "Local Businesses",
        "Coaches & Consultants",
        "E-commerce Brands",
        "B2B Service Companies",
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <ScrollAnimation className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Who We Work With</h2>
                </ScrollAnimation>

                <div className="flex flex-wrap justify-center gap-4">
                    {industries.map((ind, i) => (
                        <ScrollAnimation key={i} delay={i * 0.05} className="inline-block">
                            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-primary/50 transition-colors">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span className="font-medium">{ind}</span>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}

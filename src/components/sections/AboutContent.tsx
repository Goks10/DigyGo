"use client";

import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function AboutContent() {
    return (
        <section className="py-24 bg-black">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* About DigyGo */}
                    <ScrollAnimation className="text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white mb-6">About DigyGo</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            DigyGo is a growth automation agency helping businesses scale using smart systems, not manual marketing.
                            <br />
                            We combine Performance marketing, CRM architecture, Automation, AI workflows, and Sales system design to create predictable growth engines.
                        </p>
                    </ScrollAnimation>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Mission */}
                        <ScrollAnimation>
                            <Card className="bg-zinc-900/50 border-white/10 h-full">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                                    <p className="text-gray-300 mb-4">
                                        To help businesses grow without depending on luck, manual follow-ups, or unstable marketing.
                                    </p>
                                    <p className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Every business deserves:</p>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                                        <li>Consistent leads</li>
                                        <li>Clear sales visibility</li>
                                        <li>Automated processes</li>
                                        <li>Predictable revenue</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>

                        {/* Vision */}
                        <ScrollAnimation delay={0.2}>
                            <Card className="bg-zinc-900/50 border-white/10 h-full">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                                    <p className="text-gray-300">
                                        To become the most trusted growth-system partner for small and mid-sized businesses in India.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </div>

                    {/* Values */}
                    <div>
                        <ScrollAnimation className="mb-8">
                            <h2 className="text-3xl font-bold text-white text-center">Our Values</h2>
                        </ScrollAnimation>
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center">
                            {["Results over vanity metrics", "Systems over shortcuts", "Long-term partnerships", "Transparency", "Continuous improvement"].map((val, i) => (
                                <ScrollAnimation key={i} delay={i * 0.1}>
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 h-full flex items-center justify-center">
                                        <p className="font-medium text-white">{val}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>

                    {/* Who We Are Not */}
                    <ScrollAnimation className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-destructive mb-4">Who We Are Not</h2>
                        <p className="text-xl text-white">We are not a typical “run ads and disappear” agency.</p>
                        <p className="text-lg text-white mt-2 font-semibold">We stay until your system works.</p>
                    </ScrollAnimation>

                </div>
            </div>
        </section>
    );
}

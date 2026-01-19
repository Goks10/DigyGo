"use client";

import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function Proof() {
    return (
        <section className="py-24 bg-primary text-black">
            <div className="container px-4 md:px-6 mx-auto">
                <ScrollAnimation className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">Proof of Results</h2>
                </ScrollAnimation>

                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    <ScrollAnimation className="flex flex-col items-center justify-center p-8 bg-black/10 rounded-2xl backdrop-blur-sm">
                        <span className="text-6xl font-black mb-2">₹94L</span>
                        <p className="text-xl font-semibold text-center">Deal closed in 38 days by a Real Estate client</p>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.2} className="flex flex-col items-center justify-center p-8 bg-black/10 rounded-2xl backdrop-blur-sm">
                        <span className="text-6xl font-black mb-2">40%</span>
                        <p className="text-xl font-semibold text-center">Increase in conversion rates for service businesses</p>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}

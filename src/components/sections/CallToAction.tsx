"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function CallToAction() {
    return (
        <section className="py-24 bg-gradient-to-t from-black to-zinc-900 border-t border-white/10 text-center">
            <div className="container px-4 md:px-6 mx-auto">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                        Ready to build your growth system?
                    </h2>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="h-14 px-8 text-xl rounded-full bg-primary text-black hover:bg-primary/90">
                            Book a Free Strategy Call
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}

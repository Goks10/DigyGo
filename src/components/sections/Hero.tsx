"use client";

import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/visuals/ParticleBackground";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function Hero() {
    return (
        <section className="relative flex h-screen min-h-[800px] w-full items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Particles */}
            <ParticleBackground />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
                <ScrollAnimation className="mx-auto max-w-4xl">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        Stop Chasing Customers. <br className="hidden md:block" />
                        <span className="text-primary">Build a System That Attracts Them Automatically.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                        We help businesses generate, manage, and convert leads using AI-powered automation systems — not just ads.
                        <br className="hidden sm:block" />
                        Predictable growth. Automated follow-ups. Real sales.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="h-12 rounded-full px-8 text-lg font-semibold bg-primary text-black hover:bg-primary/90">
                            Book Free Growth Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 rounded-full px-8 text-lg border-white/20 hover:bg-white/10 text-white">
                            Learn More
                        </Button>
                    </div>
                </ScrollAnimation>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
                    <div className="h-10 w-[1px] bg-gradient-to-b from-primary to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}

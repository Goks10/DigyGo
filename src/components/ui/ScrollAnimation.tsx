"use client";

import { motion } from "framer-motion";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string; // Allow passing custom classes like layout grid properties
    delay?: number; // Optional delay
}

export default function ScrollAnimation({ children, className = "", delay = 0 }: ScrollAnimationProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }} // Trigger slightly before element is fully in view
            className={className}
        >
            {children}
        </motion.div>
    );
}

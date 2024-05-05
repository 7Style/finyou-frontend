"use client"
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedProps {
    children: React.ReactNode;
}

export default function Animated({ children }: AnimatedProps) {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1 1']
    });
    const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    
    return (
        <motion.div ref={ref} style={{ scale: scrollProgress, opacity: opacityProgress }}>
            {children}
        </motion.div>
    )
}

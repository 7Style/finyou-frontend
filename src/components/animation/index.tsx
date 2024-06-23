'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface IAnimated {
    children: React.ReactNode;
}

const Animated: React.FC<IAnimated> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1 1'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

    return (
        <motion.div ref={ref} style={{ scale, opacity }}>
            {children}
        </motion.div>
    );
};

export default Animated;

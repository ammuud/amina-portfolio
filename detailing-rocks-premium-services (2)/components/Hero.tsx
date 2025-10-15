import React from 'react';
// FIX: Import the `Variants` type from framer-motion to explicitly type the animation variants.
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    // FIX: Explicitly typing `textVariants` with `Variants` solves the TypeScript error.
    // Without it, the `ease` property is inferred as a generic `string` instead of the required `Easing` type.
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(https://picsum.photos/seed/carhero/1920/1080)`,
                    y
                }}
            />
            <div className="absolute inset-0 bg-black/60"></div>
            
            <motion.div 
                className="relative z-10 text-center text-white p-6"
                style={{ opacity }}
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >
                <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                    Premium Car Services
                </motion.h1>
                <motion.p variants={textVariants} className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300">
                    Experience unparalleled quality and craftsmanship for your vehicle.
                </motion.p>
                <motion.a 
                    href="#contact"
                    variants={textVariants}
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:from-brand-purple hover:to-brand-purple transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20"
                >
                    Book a Detailing Service
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
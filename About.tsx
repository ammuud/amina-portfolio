import React from 'react';
import { motion } from 'framer-motion';

const StatItem: React.FC<{ value: string; label: string, index: number }> = ({ value, label, index }) => (
    <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
    >
        <p className="text-4xl md:text-5xl font-bold text-brand-purple">{value}</p>
        <p className="text-gray-400 mt-1">{label}</p>
    </motion.div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-[#121212]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                            With over 13 years of dedicated experience, we have established ourselves as a leader in premium automotive services. Our commitment to excellence is unwavering, and our passion for cars drives everything we do.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Every vehicle that passes through our salon undergoes a rigorous inspection to ensure it meets our exacting standards. We believe in transparency, quality, and building lasting relationships with our clients.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                       <img 
                         src="https://images.unsplash.com/photo-1635032992822-a989d4a13242?q=80&w=800&auto=format&fit=crop" 
                         alt="Technician applying paint protection film to a car" 
                         className="rounded-lg shadow-2xl shadow-black/50 object-cover w-full h-full"
                       />
                    </motion.div>
                </div>
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <StatItem value="13+" label="Years of Experience" index={0} />
                    <StatItem value="100%" label="Inspected Vehicles" index={1} />
                    <StatItem value="5000+" label="Satisfied Clients" index={2} />
                </div>
            </div>
        </section>
    );
};

export default About;
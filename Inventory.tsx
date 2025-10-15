
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Car } from '../types';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

const cars: Car[] = [
    { image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop', name: 'Mercedes-Benz AMG GT', year: 2023, price: '$135,000' },
    { image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop', name: 'BMW M4 Competition', year: 2024, price: '$98,000' },
    { image: 'https://images.unsplash.com/photo-1615906655525-46781a782a2e?q=80&w=800&auto=format&fit=crop', name: 'Jaguar F-Type R', year: 2023, price: '$110,000' },
    { image: 'https://images.unsplash.com/photo-1617083273181-137c8a329c3a?q=80&w=800&auto=format&fit=crop', name: 'BMW 8 Series Gran Coupe', year: 2024, price: '$125,000' },
    { image: 'https://images.unsplash.com/photo-1616422285855-b9b39a3b6e8f?q=80&w=800&auto=format&fit=crop', name: 'Mercedes-Benz S-Class', year: 2023, price: '$140,000' },
    { image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop', name: 'Porsche 911 Carrera', year: 2023, price: '$155,000' },
];

const CarCard: React.FC<{ car: Car }> = ({ car }) => (
    <div className="flex-shrink-0 w-80 md:w-96 mr-8 bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800/50 shadow-lg">
        <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-bold text-white">{car.name}</h3>
            <p className="text-gray-400">{car.year}</p>
            <p className="text-2xl font-semibold text-brand-purple mt-2">{car.price}</p>
        </div>
    </div>
);


const Inventory: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    
    return (
        <section id="inventory" className="py-20 bg-black overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-white">Latest Arrivals</h2>
                    <p className="text-lg text-gray-400 mt-2">Discover our newest additions to the collection.</p>
                </motion.div>

                <div className="relative">
                    <motion.div
                        ref={scrollRef}
                        className="flex overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
                        drag="x"
                        dragConstraints={{ left: -2000, right: 0 }}
                    >
                        {cars.map((car, index) => (
                            <CarCard key={index} car={car} />
                        ))}
                    </motion.div>
                    
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
                        <button onClick={() => scroll('left')} className="pointer-events-auto bg-black/50 text-white p-3 rounded-full hover:bg-brand-purple transition-colors duration-300 -ml-4">
                            <ArrowLeftIcon className="w-6 h-6"/>
                        </button>
                        <button onClick={() => scroll('right')} className="pointer-events-auto bg-black/50 text-white p-3 rounded-full hover:bg-brand-purple transition-colors duration-300 -mr-4">
                            <ArrowRightIcon className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inventory;
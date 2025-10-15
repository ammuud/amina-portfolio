
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { CarSaleIcon, DiagnosticsIcon, PPFIcon, CeramicIcon, CustomizationIcon, DetailingIcon, TuningIcon, InsuranceIcon, TradeInIcon, RegistrationIcon } from './icons';

const servicesList: Service[] = [
  { icon: CarSaleIcon, title: 'Car Sales (New & Used)', description: 'Explore our curated selection of premium new and pre-owned vehicles.' },
  { icon: DiagnosticsIcon, title: 'Car Diagnostics & Inspection', description: 'Comprehensive health checks to ensure your vehicle is in peak condition.' },
  { icon: PPFIcon, title: 'PPF Application', description: 'Protect your paint from scratches and chips with our high-quality protection films.' },
  { icon: CeramicIcon, title: 'Ceramic Coating', description: 'Give your car a durable, high-gloss finish that repels dirt and water.' },
  { icon: CustomizationIcon, title: 'Customization', description: 'Personalize your vehicle with our interior and exterior modification services.' },
  { icon: DetailingIcon, title: 'Detailing & Valeting', description: 'Meticulous cleaning, polishing, and interior care for a showroom finish.' },
  { icon: TuningIcon, title: 'Performance Tuning', description: 'Unlock your car\'s true potential with our expert performance enhancements.' },
  { icon: InsuranceIcon, title: 'Insurance & Financing', description: 'We assist with finding the best insurance and financing options for you.' },
  { icon: TradeInIcon, title: 'Trade-in Options', description: 'Seamlessly trade in your current vehicle towards your next purchase.' },
  { icon: RegistrationIcon, title: 'Vehicle Registration', description: 'We handle all the necessary documentation and registration processes for you.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <motion.div
    className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800/50 flex flex-col items-center text-center"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 30px rgba(179, 136, 235, 0.1)" }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
  >
    <div className="mb-4 text-brand-purple">
      <service.icon className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
    <p className="text-gray-400">{service.description}</p>
  </motion.div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white">Our Services</h2>
          <p className="text-lg text-gray-400 mt-2">Comprehensive solutions for every automotive need.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesList.slice(0, 8).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
          <div className="lg:col-span-2 xl:col-start-2 xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
             {servicesList.slice(8).map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index + 8} />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

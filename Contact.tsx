
import React from 'react';
import { motion } from 'framer-motion';
import { TelegramIcon, AvitoIcon } from './icons';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-white">Contact Us</h2>
                    <p className="text-lg text-gray-400 mt-2">Ready to give your car the treatment it deserves? Get in touch.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-[#1a1a1a] p-8 rounded-lg border border-gray-800/50">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-white">Book Your Service</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-[#2a2a2a] text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            <input type="email" placeholder="Your Email" className="w-full bg-[#2a2a2a] text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            <input type="tel" placeholder="Your Phone Number" className="w-full bg-[#2a2a2a] text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            <textarea placeholder="Your Message (e.g., car model, desired services)" rows={4} className="w-full bg-[#2a2a2a] text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-purple"></textarea>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-md text-lg hover:from-brand-purple hover:to-brand-purple transition-all duration-300 transform hover:scale-105"
                            >
                                Book My Detailing Service
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="flex flex-col justify-between"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Our Details</h3>
                            <p className="text-gray-300 mb-2">Phone: <a href="tel:+1234567890" className="hover:text-brand-purple">+1 (234) 567-890</a></p>
                            <p className="text-gray-300 mb-2">Email: <a href="mailto:contact@detailingrocks.com" className="hover:text-brand-purple">contact@detailingrocks.com</a></p>
                            <p className="text-gray-300">Address: 123 Luxury Drive, Metropolis, 12345</p>

                            <div className="mt-6">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.219356608528!2d-73.988242684593!3d40.75713497932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6459523%3A0x472175483483988!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1678886483123!5m2!1sen!2sus" 
                                    width="100%" 
                                    height="200" 
                                    style={{border:0}} 
                                    allowFullScreen={true}
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-md"
                                ></iframe>
                            </div>
                        </div>
                        <div className="mt-6 flex space-x-4">
                           <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors duration-300"><TelegramIcon className="w-8 h-8" /></a>
                           <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors duration-300"><AvitoIcon className="w-8 h-8" /></a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
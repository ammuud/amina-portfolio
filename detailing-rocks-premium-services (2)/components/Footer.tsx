
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0a0a0a] py-8 text-center text-gray-500">
            <div className="container mx-auto px-6">
                <p className="text-lg mb-2">Thank You for Viewing!</p>
                <p>Designed & Developed by a World-Class React Engineer</p>
                <p>
                    <a href="#" className="hover:text-brand-purple transition-colors duration-300">Portfolio</a> | <a href="#" className="hover:text-brand-purple transition-colors duration-300">Instagram</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
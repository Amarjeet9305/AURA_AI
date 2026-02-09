import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary/50 relative border-t border-white/5 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <img src="/aura.png" alt="Aura AI" className="h-50 w-auto" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Empowering businesses with next-generation artificial intelligence solutions.
                            Efficiency, Innovation, and Growth defined by the future of tech.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-semibold text-lg tracking-wide">Platform</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#about" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />About Us</a></li>
                            <li><a href="#services" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />Services</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />Contact</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-semibold text-lg tracking-wide">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-accent mt-0.5" />
                                <span>aura.ai@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-accent mt-0.5" />
                                <span>+91 6391988856</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent mt-0.5" />
                                <span>One Innovation Way,<br />Tech City, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h4 className="text-white font-semibold text-lg tracking-wide">Connect</h4>
                        <p className="text-sm text-gray-400 mb-4">Follow us for real-time updates.</p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/uraai/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BrhrEQUgnRouDfcOkgXHcIQ%3D%3D" className="w-10 h-10 rounded-full bg-surface hover:bg-surface-hover flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:border-accent/30 group">
                                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.instagram.com/the__aura__ai?igsh=NXh1cG02YzJpMDVr" className="w-10 h-10 rounded-full bg-surface hover:bg-surface-hover flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:border-accent/30 group">
                                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Aura AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

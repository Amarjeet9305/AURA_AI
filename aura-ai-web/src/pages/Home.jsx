import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Globe } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import NeuralBackground from '../components/NeuralBackground';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <NeuralBackground />
                <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-accent to-purple-400">
                            Future of Intelligence
                        </span>
                        <br />
                        <span className="text-white">Is Here</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
                        Aura AI delivers cutting-edge artificial intelligence solutions that transform businesses.
                        Automate, optimize, and innovate with our next-gen platform.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-accent hover:bg-sky-500 transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started
                            <ArrowRight className="ml-2 -mr-1" size={20} />
                        </a>
                        <a
                            href="#about"
                            className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-primary to-transparent" />
        </section>
    );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:border-accent/30 transition-all duration-300"
    >
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
            <Icon className="text-accent" size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />

            {/* About Section */}
            <section id="about" className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Aura AI?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We combine advanced algorithms with intuitive design to create software that thinks as fast as you do.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Brain}
                            title="Advanced ML Models"
                            desc="Deploy state-of-the-art machine learning models tailored to your specific industry needs."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Real-time Processing"
                            desc="Experience lightning-fast data processing and decision-making capabilities."
                        />
                        <FeatureCard
                            icon={Globe}
                            title="Global Scalability"
                            desc="Built on a robust infrastructure designed to scale with your business globally."
                        />
                    </div>
                </div>
            </section>



            {/* Testimonials Section */}
            <Testimonials />

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-secondary/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Join hundreds of companies leveraging Aura AI to drive growth and efficiency.
                    </p>
                    <a
                        href="mailto:info@aura-ai.com"
                        className="inline-block bg-white text-slate-900 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                        Contact Sales
                    </a>
                </div>
            </section>
        </div >
    );
};

export default Home;

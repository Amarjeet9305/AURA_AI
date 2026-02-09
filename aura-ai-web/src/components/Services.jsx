import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Globe, Cpu, Lock, Zap } from 'lucide-react';
import Button from './ui/Button';

const ServiceCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        whileHover={{ y: -5 }}
        className="p-6 sm:p-8 rounded-2xl glass-card relative group overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="w-12 h-12 bg-surface text-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 relative z-10">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed relative z-10 mb-6">{desc}</p>

        <a href="#" className="inline-flex items-center text-accent text-sm font-medium hover:text-white transition-colors relative z-10">
            Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </a>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            icon: Code,
            title: "Custom AI Development",
            desc: "Tailored AI solutions built for your specific business needs. From NLP to Computer Vision, we engineer the future."
        },
        {
            icon: Server,
            title: "Enterprise Integration",
            desc: "Seamlessly integrate AI capabilities into your existing infrastructure with zero downtime and maximum security."
        },
        {
            icon: Globe,
            title: "Global Scalability",
            desc: "Cloud-native architectures that grow with you. deploy anywhere, scale everywhere with our distributed systems."
        },
        {
            icon: Cpu,
            title: "Predictive Analytics",
            desc: "Turn data into foresight. Our advanced algorithms help you anticipate market trends and user behaviors."
        },
        {
            icon: Lock,
            title: "Secure Intelligence",
            desc: "Enterprise-grade security standards ensuring your data remains protected while delivering powerful insights."
        },
        {
            icon: Zap,
            title: "Real-Time Processing",
            desc: "Lightning-fast data processing for instant decision making. Don't wait for answers—get them now."
        }
    ];

    return (
        <section id="services" className="py-16 sm:py-24 md:py-32 relative bg-primary/30">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6"
                    >
                        Intelligence as a Service
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
                    >
                        Comprehensive AI solutions designed to modernize your operations and drive competitive advantage.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="secondary" size="lg">
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Services;

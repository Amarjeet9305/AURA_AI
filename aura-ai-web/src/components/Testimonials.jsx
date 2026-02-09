import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ name, role, content, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        className="p-6 sm:p-8 rounded-2xl glass-card relative"
    >
        <Quote className="absolute top-8 right-8 text-white/5" size={48} />

        <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
            ))}
        </div>

        <p className="text-gray-300 mb-8 italic relative z-10 leading-relaxed">"{content}"</p>

        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                {name.charAt(0)}
            </div>
            <div>
                <h4 className="text-white font-bold">{name}</h4>
                <p className="text-accent text-sm">{role}</p>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO, TechFlow",
            content: "Aura AI transformed our data analysis process. What used to take days now takes minutes. The insights are incredibly accurate."
        },
        {
            name: "Michael Chen",
            role: "Product Lead, InnovateCorp",
            content: "The real-time processing capabilities are unmatched. We've seen a 40% increase in operational efficiency since integration."
        },
        {
            name: "Emily Davis",
            role: "Founder, StartUpX",
            content: "Implementation was smooth and the support team is world-class. Highly recommend for any business looking to scale with AI."
        }
    ];

    return (
        <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6"
                    >
                        Trusted by Industry Leaders
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
                        Don't just take our word for it. See what our partners rely on Aura AI for.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

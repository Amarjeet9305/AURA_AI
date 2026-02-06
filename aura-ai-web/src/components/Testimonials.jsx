import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Code, PenTool } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Amarjeet",
        role: "Company Founder",
        image: User, // Placeholder icon
        content: "Aura AI was born from a vision to democratize artificial intelligence. We believe in building technology that empowers businesses to achieve their full potential.",
        rating: 5,
        color: "text-blue-400"
    },
    {
        id: 2,
        name: "Dev Team",
        role: "Lead Developers",
        image: Code,
        content: "Our code is crafted with precision and passion. We push the boundaries of what's possible, ensuring scalable and robust solutions for every client.",
        rating: 5,
        color: "text-purple-400"
    },
    {
        id: 3,
        name: "Content Team",
        role: "Creative Minds",
        image: PenTool,
        content: "Storytelling is at the heart of connection. We weave narratives that resonate, making complex technology accessible and engaging for everyone.",
        rating: 5,
        color: "text-pink-400"
    }
];

const TestimonialCard = ({ name, role, content, rating, image: Icon, color }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-secondary/20 p-8 rounded-2xl border border-white/10 relative backdrop-blur-sm"
    >
        <div className="absolute top-6 right-8 opacity-20">
            <Quote size={40} className="text-white" />
        </div>

        <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 ${color}`}>
                <Icon size={24} />
            </div>
            <div>
                <h4 className="text-lg font-bold text-white">{name}</h4>
                <p className="text-sm text-gray-400">{role}</p>
            </div>
        </div>

        <div className="flex gap-1 mb-4">
            {[...Array(rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
            ))}
        </div>

        <p className="text-gray-300 leading-relaxed italic">
            "{content}"
        </p>
    </motion.div>
);

const Testimonials = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-primary to-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Voices of Aura AI
                    </motion.h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Meet the visionaries and creators driving the future of intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <TestimonialCard {...testimonial} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

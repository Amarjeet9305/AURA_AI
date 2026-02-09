import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Users, Activity, Map, Shield, TrendingUp } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import NeuralBackground from '../components/NeuralBackground';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Button from '../components/ui/Button';
import TypeWriter from '../components/TypeWriter';

const Hero = () => {
    return (
        <section className="relative min-h-screen md:min-h-[110vh] flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <NeuralBackground />
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center pt-24 sm:pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >

                    <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold tracking-tight mb-2 sm:mb-8 leading-tight">
                        <TypeWriter
                            text="Future of Intelligence Is Here"
                            delay={300}
                            speed={80}
                            className="bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-500"
                        />
                    </h1>

                    <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
                        Aura AI delivers cutting-edge artificial intelligence solutions that transform businesses.
                        Automate, optimize, and innovate with our next-gen platform.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            variant="primary"
                            size="lg"
                            icon={ArrowRight}
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get Started
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Learn More
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
        </section>
    );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        whileHover={{ y: -5 }}
        className="group relative p-8 rounded-2xl glass-card overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -mr-8 -mt-8 transition-all duration-300 group-hover:bg-accent/10" />

        <div className="w-14 h-14 bg-surface-active rounded-xl flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:ring-accent/50 transition-all duration-300 shadow-lg shadow-black/20">
            <Icon className="text-accent group-hover:text-white transition-colors duration-300" size={28} />
        </div>

        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />

            {/* Why Choose Aura AI Section */}
            <section id="about" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-[150px] mix-blend-screen" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 sm:mb-16 md:mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold text-white mb-6 sm:mb-8 tracking-tight"
                        >
                            Master Your Future. <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                                Before It Even Begins.
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0"
                        >
                            Experience the world’s first hyper-realistic AI interview ecosystem.
                            Build confidence, crush anxiety, and walk into your dream job ready.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <FeatureCard
                            icon={Brain}
                            title="Hyper-Realistic AI Interviewers"
                            desc="Practice with AI that adapts to your responses, tone, and technical depth in real-time. It’s not a script—it’s a conversation."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={Users}
                            title="Multi-Domain Mastery"
                            desc="From CSE & Core Engineering to Government Exams & HR rounds—access specialized AI experts for every career path."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={Activity}
                            title="Real-Time Intelligence Analysis"
                            desc="Get instant feedback on your fluency, confidence, and answer quality. We don’t just grade you; we coach you."
                            delay={0.3}
                        />
                        <FeatureCard
                            icon={Map}
                            title="Personalized Success Roadmap"
                            desc="Your growth is unique. Our AI builds a custom improvement plan that targets your weak spots and amplifies your strengths."
                            delay={0.4}
                        />
                        <FeatureCard
                            icon={Shield}
                            title="Zero-Bias, Zero-Stress Zone"
                            desc="Make mistakes here, not in the boardroom. A judgment-free environment designed to turn anxiety into unstoppable confidence."
                            delay={0.5}
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Future-Ready Architecture"
                            desc="Built for students, scalable for institutions. The standard for interview preparation in the AI era."
                            delay={0.6}
                        />
                    </div>
                </div>
            </section>




            {/* Services Section */}
            <Services />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Contact Section */}
            <Contact />
        </div >
    );
};

export default Home;

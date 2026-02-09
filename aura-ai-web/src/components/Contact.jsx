import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) return "Name is required";
        if (!formData.email.trim()) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email format";
        if (!formData.message.trim()) return "Message is required";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            setStatus('error');
            setErrorMessage(error);
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            let data;
            const contentType = response.headers.get('content-type');
            try {
                data = contentType?.includes('application/json')
                    ? await response.json()
                    : { message: 'Invalid server response.' };
            } catch {
                data = { message: 'Could not read server response.' };
            }

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message. Please try again.');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setStatus('error');
            setErrorMessage(err.message || 'Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/50 to-primary/80" />

            <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 md:p-12 rounded-3xl border border-white/10"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 sm:mb-4">Ready to Transform Your Business?</h2>
                        <p className="text-gray-400">
                            Get in touch with our expert team and discover how Aura AI can elevate your operations.
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="text-center py-8 space-y-4"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                <p className="text-gray-400">Thank you! Your message has been received. We'll get back to you soon.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-accent hover:text-accent/80 font-medium transition-colors"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-white/10 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-500 disabled:opacity-50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={status === 'submitting'}
                                            className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-white/10 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-500 disabled:opacity-50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={status === 'submitting'}
                                        className="w-full px-4 py-3 rounded-lg bg-surface/50 border border-white/10 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-500 resize-none disabled:opacity-50"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
                                    >
                                        <AlertCircle size={18} />
                                        {errorMessage}
                                    </motion.div>
                                )}

                                <div className="text-center">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        disabled={status === 'submitting'}
                                        className="w-full md:w-auto"
                                    >
                                        {status === 'submitting' ? (
                                            <span className="flex items-center gap-2">
                                                <Loader2 className="animate-spin" size={20} />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                <Send size={20} />
                                                Send Message
                                            </span>
                                        )}
                                    </Button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    primary: "bg-accent text-white hover:bg-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] border border-transparent",
    secondary: "bg-surface text-gray-300 hover:text-white hover:bg-surface-hover border border-border-subtle hover:border-border-highlight",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
    danger: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20",
};

const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
};

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon: Icon,
    isLoading = false,
    ...props
}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        relative inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
                <>
                    {children}
                    {Icon && <Icon size={18} className="ml-1" />}
                </>
            )}
        </motion.button>
    );
};

export default Button;

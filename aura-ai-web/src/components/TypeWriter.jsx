import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypeWriter = ({ text, delay = 0, className = '', speed = 50 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (currentIndex === 0 && !isDeleting) {
            // Initial delay before typing starts
            const startTimeout = setTimeout(() => {
                setCurrentIndex(1);
            }, delay);
            return () => clearTimeout(startTimeout);
        }

        const timeout = setTimeout(() => {
            if (!isDeleting && currentIndex <= text.length) {
                setDisplayText(text.substring(0, currentIndex));
                setCurrentIndex(currentIndex + 1);

                // Pause after typing complete
                if (currentIndex === text.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else if (isDeleting && currentIndex > 0) {
                setDisplayText(text.substring(0, currentIndex - 1));
                setCurrentIndex(currentIndex - 1);

                // Start over after erasing
                if (currentIndex === 1) {
                    setTimeout(() => {
                        setIsDeleting(false);
                        setCurrentIndex(0);
                    }, 500);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, delay, text, speed]);

    return (
        <span className={className}>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-1 h-[1em] bg-accent ml-1 align-middle"
            />
        </span>
    );
};

export default TypeWriter;

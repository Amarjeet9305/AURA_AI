import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatusIndicator = () => {
    const [status, setStatus] = useState('online'); // online, offline, reconnecting

    useEffect(() => {
        const handleOnline = () => setStatus('online');
        const handleOffline = () => setStatus('offline');

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const getStatusColor = () => {
        switch (status) {
            case 'online': return 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]';
            case 'offline': return 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]';
            case 'reconnecting': return 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]';
            default: return 'bg-gray-500';
        }
    };

    const getStatusText = () => {
        switch (status) {
            case 'online': return 'System Operational';
            case 'offline': return 'Offline';
            case 'reconnecting': return 'Reconnecting...';
            default: return 'Unknown';
        }
    };

    return (
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface/50 border border-border-subtle backdrop-blur-sm">
            <div className="relative flex h-2.5 w-2.5">
                {status === 'online' && (
                    <motion.span
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                    />
                )}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${getStatusColor()}`} />
            </div>
            <span className="text-xs font-medium text-gray-400">
                {getStatusText()}
            </span>
        </div>
    );
};

export default StatusIndicator;

import React, { useState, useEffect } from 'react';

// Loading Screen Component
const LoadingScreen = ({onLoadingComplete}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onLoadingComplete(), 300); // Small delay after 100%
                    return 100;
                }
                return prev + 2; // Increment by 2% every 100ms (5 seconds total)
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <div className="min-h-screen bg-white text-black font-bold flex flex-col items-center justify-center">
            {/* Main loading content */}
            <div className="text-center">
                <div className="text-xl mb-8 tracking-wider font-black">LOADING...</div>

                {/* Loading bar container */}
                <div className="flex items-center space-x-4">

                    {/* Left 10 segments */}
                    <div className="flex space-x-1">
                        {[...Array(10)].map((_, i) => {
                            // segment index 0-9 → thresholds 5%, 10%, … 50%
                            const filled = progress >= (i + 1) * 5;
                            return (
                                <div
                                    key={i}
                                    className={`w-8 h-8 border-2 ${
                                        filled ? 'bg-gray-300 border-gray-500' : 'border-gray-300 bg-transparent'
                                    }`}
                                />
                            );
                        })}
                    </div>

                    {/* Center logo */}
                    <div className="w-12 h-12 flex items-center justify-center">
                        <img
                            src="/gemi-logo.png"
                            alt="Gemi Logo"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'grid';
                            }}
                        />
                        {/* fallback pattern */}
                        <div className="hidden w-full h-full grid grid-cols-2 gap-0.5">
                            <div className="bg-gray-100 rounded-tl"></div>
                            <div className="bg-cyan-400 rounded-tr"></div>
                            <div className="bg-cyan-400 rounded-bl"></div>
                            <div className="bg-gray-100 rounded-br"></div>
                        </div>
                    </div>

                    {/* Right 10 segments */}
                    <div className="flex space-x-1">
                        {[...Array(10)].map((_, i) => {
                            // segment index 10-19 → thresholds 55%, 60%, … 100%
                            const globalIndex = i + 10;          // 10-19
                            const filled = progress >= (globalIndex + 1) * 5;
                            return (
                                <div
                                    key={globalIndex}
                                    className={`w-8 h-8 border-2 ${
                                        filled ? 'bg-gray-300 border-gray-500' : 'border-gray-300 bg-transparent'
                                    }`}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Progress percentage */}
                <div className="mt-6 text-cyan-600 text-sm">{Math.round(progress)}%</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
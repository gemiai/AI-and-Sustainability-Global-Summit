import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  const colors = [
  '#00FF99',  // bright green
  '#00F2A2',
  '#00E6AC',
  '#00D9B7',
  '#00CCC1',
  '#00BFCC',
  '#00B3D6',
  '#00A6E0',
  '#0099EB',
  '#008CE6'   // teal-blue
];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 10) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 10;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black font-mono relative">
      <div className="mb-2 md:mb-4 text-xs md:text-sm tracking-widest">LOADING ...</div>
      <div className="flex border border-black p-0.5">
        {Array.from({ length: 10 }).map((_, i) => {
          const filled = progress > i;
          return (
            <div
              key={i}
              className="w-2 h-4 md:w-3 md:h-5 mx-0.5 rounded"
              style={{
                backgroundColor: filled ? colors[i % colors.length] : '#D1D5DB' // Tailwind gray-300 equivalent
              }}
            ></div>
            
          );
        })}
      </div>

      {/* Globe background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-10 md:mt-20">
        <img 
          src="/earth.png" 
          alt="Globe background"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover z-0 transition-opacity duration-500"
          style={{
            opacity: progress / 10
          }}
        />
      </div>

      {/* Left vertical line moving left off-screen */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-black"
        style={{
          left: `calc(50% - 80px - ${progress * 70}px)`,
          transition: 'left 100ms linear'
        }}
      ></div>

      {/* Right vertical line moving right off-screen */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-black"
        style={{
          left: `calc(50% + 80px + ${progress * 70}px)`,
          transition: 'left 100ms linear'
        }}
      ></div>
    </div>

  );
};

export default LoadingScreen;
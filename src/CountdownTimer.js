import React, { useState, useEffect } from 'react';

// Countdown Timer Component
const CountdownTimer = ({targetDate}) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">{timeLeft.days}</div>
                <div className="text-xs text-gray-600 uppercase">Days</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">{timeLeft.hours}</div>
                <div className="text-xs text-gray-600 uppercase">Hours</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-600 uppercase">Min</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-600 uppercase">Sec</div>
            </div>
        </div>
    );
};

export default CountdownTimer;
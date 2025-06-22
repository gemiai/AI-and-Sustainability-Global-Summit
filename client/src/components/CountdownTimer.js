import React, { useState, useEffect } from 'react';

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="text-center bg-gray-100/80 p-2.5 rounded-lg shadow-md">
                <span className="text-3xl font-bold text-teal-400">{String(timeLeft[interval]).padStart(2, '0')}</span>
                <div className="text-xs text-gray-800 font-semibold tracking-wider">
                    {interval.charAt(0).toUpperCase() + interval.slice(1)}
                </div>
            </div>
        );
    });

    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-6 max-w-[288px]">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default CountdownTimer;
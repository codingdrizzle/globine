import React, { useState, useEffect } from 'react';

function DigitalTimeClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = (value) => {
        return value < 10 ? `0${value}` : `${value}`;
    };

    const hours = formatTime(time.getHours());
    const minutes = formatTime(time.getMinutes());
    const seconds = formatTime(time.getSeconds());

    return (
        <div className="flex items-center justify-center text-4xl">
            <div className="flip-digit">
                <div className="flip-digit-inner">
                    <div className="flip-digit-top">{hours[0]}</div>
                    <div className="flip-digit-bottom">{hours[1]}</div>
                </div>
            </div>
            <div className="flip-digit">
                <div className="flip-digit-inner">
                    <div className="flip-digit-top">{minutes[0]}</div>
                    <div className="flip-digit-bottom">{minutes[1]}</div>
                </div>
            </div>
            <div className="flip-digit">
                <div className="flip-digit-inner">
                    <div className="flip-digit-top">{seconds[0]}</div>
                    <div className="flip-digit-bottom">{seconds[1]}</div>
                </div>
            </div>
        </div>
    );
}

export default DigitalTimeClock;
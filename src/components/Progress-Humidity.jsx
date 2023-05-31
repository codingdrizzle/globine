import React from 'react';

const CircleProgressBar = ({ progress }) => {
    const circumference = 2 * Math.PI * 50; // assuming the radius of the circle is 50
    const offset = circumference - (progress / 100) * circumference;

    return (
        <svg className="w-16 h-16">
            <circle
                className="text-blue-500"
                strokeWidth="4"
                fill="transparent"
                r="50"
                cx="50"
                cy="50"
            />
            <circle
                className="text-blue-700"
                strokeWidth="4"
                fill="transparent"
                r="50"
                cx="50"
                cy="50"
                style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: offset,
                }}
            />
            <text className="text-xl font-bold text-center" x="50%" y="50%" dy=".3em">
                {progress}%
            </text>
        </svg>
    );
};

export default CircleProgressBar;

import React, { useState, useEffect } from 'react';


const words = ["Engineer", "Programmer", "Full Stack Developer"];
const wordInterval = 3000; // Change word every 3 seconds

const WordFlicker = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }, wordInterval);

        return () => clearInterval(interval);
    }, [currentWordIndex]);

    return (
        <div className="word-container">
            {words.map((word, index) => (
                <div
                    key={index}
                    className={`word ${index === currentWordIndex ? 'activeTxt' : ''}`}
                >
                    {word}
                </div>
            ))}
        </div>
    )
}

export default WordFlicker;


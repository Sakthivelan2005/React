import React, { useState } from 'react';

export const ExpensiveCalculation = () => {
    const [val, setVal] = useState(0);

    const calculation = () => {
        let value5 = 1;
        console.log("caluculating..!")
        // Initialize i to 1 and run until i reaches 10,000,000
        for (let i = 1; i <= 10000000; i++) {
            value5 += i;
        }

        return value5;
    };

    return (
        <div>
            <button onClick={() => setVal(val + 1)}>Counting: {val}</button>
            <h1>{calculation()}</h1>
        </div>
    );
};
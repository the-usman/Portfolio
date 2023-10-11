// src/Chart.js

import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({data}) => {
    

    const options = {
        scales: {
            x: {
                type: 'category', 
            },
            y: {
                type: 'linear', 
            },
        },
        elements: {
            line: {
                tension: 0.4,
            },
        },
    };

    return (
        <div className='chart'>
            <Line data={data} options={options} />
        </div>
    )
};

export default Chart;

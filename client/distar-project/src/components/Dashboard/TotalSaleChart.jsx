import React from 'react';
import { Container } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement
)


const TotalSaleChart = () => {

    const totalSaleData = {
        // Total Sale Data
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
            {
                label: 'ยอดขายทั้งหมด',
                data: [250, 285, 760, 300, 485, 750, 730, 389, 150, 850, 0, 285, 386],
                fill: false,
                borderColor: '#175BE9',
                tension: 0.1,
            },
        ],
    };

    const options = {
        // setting chart.
        maintainAspectRatio: false, // responsive chart
        responsive: true, // responsive chart
        scales: {
            x: {
                type: 'category',
                labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 250,
                    min: 0,
                    max: 1000
                }
            }
        },
        plugins: {
            legend: {
                display: false, // disable legend 
            },
            title: {
                display: true,
                text: 'Custom Responsive Line Chart',
            },
        },
    };


    return (
        // to Dashboard.jsx
        <Container>
            {/* Line Chart */}
            <Line data={totalSaleData} options={options} height={300} />
        </Container>
    );
};

export default TotalSaleChart;

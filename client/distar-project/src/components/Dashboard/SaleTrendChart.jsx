
import React from 'react';
import { Container } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
} from 'chart.js';
ChartJS.register(
    BarElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
)

const SaleTrendChart = () => {
    /* Sale Trend Data */
    const saleTrendData = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
            {
                label: 'ลูกค้าประจำ',
                data: ['850', '300', '1000', '600', '592', '25', '10', '300', '600', '850', '845', '250'],
                backgroundColor: '#2B6F36',
            },
            {
                label: 'ลูกค้าใหม่',
                data: ['520', '475', '450', '245', '30', '565', '100', '50', '950', '20', '745', '30'],
                backgroundColor: '#AAB794',
            }
        ],
    };
    /* setting chart */
    const options = {
        maintainAspectRatio: false,
        responsive: true,
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
                position: 'top',
                align: 'end', // set legend to position right.
                labels: {
                    boxWidth: 20, // box legend width.
                    boxHeight: 20, // box legend height.
                    fontSize: 14 // font size box legend.
                }

            },
            title: {
                display: true,
                text: 'Custom Responsive Line Chart',
            },
        },
    };
    return (
        // to Dashboard.jsx and Customrt.jsx
        <Container>
            {/* Bar Chart */}
            <Bar data={saleTrendData} options={options} height={300} />
        </Container>
    )
}
export default SaleTrendChart;
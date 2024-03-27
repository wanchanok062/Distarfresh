import React from 'react';
import { Container } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const CustomerChart = () => {
    // Type Customer Data 
    const typeCustomer = {
        labels: ['ลูกค้าใหม่', 'ลูกค้าประจำ'],
        datasets: [
            {
                label: '# of Votes',
                data: [30, 70],
                backgroundColor: [
                    '#A7BBEE',
                    '#4170E8'
                ],
                borderColor: [
                    '#A7BBEE',
                    '#4170E8'
                ],
                borderWidth: 1,
            },
        ],
    };
    // setting chart.
    const options = {
        plugins: {
            legend: {
                position: 'right', // set position box legend to right.
                labels: {
                    boxWidth: 20, // box width legend.
                    boxHeight: 20, // box height legend.
                    fontSize: 14, // font size box legend.
                },
            },
        },
        maintainAspectRatio: false, // Responsive Pie Chart
        responsive: true, // Responsive Pie Chart
    };
    return (
        // to Dashboard.jsx and Customrt.jsx
        <Container>
            <div style={{ width: '100%', height: '250px' }}>
                {/* Pie Chart */}
                <Pie data={typeCustomer} options={options} />
            </div>
        </Container>
    )
}
export default CustomerChart;
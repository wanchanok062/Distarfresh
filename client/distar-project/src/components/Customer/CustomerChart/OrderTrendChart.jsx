
import React from 'react';
import { Container } from 'react-bootstrap';
import { Pie } from "react-chartjs-2";

const OrderTrendChart = () => {
    // Order Trend Data
    const orderTrend = {
        labels: ['ผักชนิดที่ 1', 'ผักชนิดที่ 2'],
        datasets: [
            {
                label: '# of Votes',
                data: [20, 80],
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
    // setting chart
    const options = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    fontSize: 12,
                },
            },
        },
        maintainAspectRatio: false, // Responsive Pie Chart
        responsive: true, // Responsive Pie Chart
    };
    return (
        // to DetailCustomer.jsx
        <Container>
            <div style={{width: '100%', height: '250px'}}>
                {/* Pie Chart */}
                <Pie data={orderTrend} options={options} />
            </div>
        </Container>
    )
}
export default OrderTrendChart;
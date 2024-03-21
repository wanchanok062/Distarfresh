import React from 'react';
import { Pie } from "react-chartjs-2";
import { Container } from 'react-bootstrap';

const MemberChart = () => {
    // Member data
    const member = {
        labels: ['1 เดือน', '2 เดือน'],
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
                    boxHeight: 20,
                    fontSize: 14,
                },
            },
        },
        maintainAspectRatio: false, // Responsive Pie Chart
        responsive: true, // Responsive Pie Chart
    };

    return (
        //to Dashboard.jsx
        <Container>
            <div style={{width: '100%', height: '250px'}}>
                {/* Pie Chart */}
                <Pie data={member} options={options} />
            </div>
        </Container>
    )
}
export default MemberChart;

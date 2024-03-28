import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Pie } from "react-chartjs-2";
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const CustomerChart = () => {
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}customers`);
                setCustomerData(response.data);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };

        fetchData();
    }, []);

    const prepareDataForChart = () => {
        const customerTypes = {};
        customerData.forEach(customer => {
            const { customer_type_name } = customer;
            if (customerTypes[customer_type_name]) {
                customerTypes[customer_type_name]++;
            } else {
                customerTypes[customer_type_name] = 1;
            }
        });

        const labels = Object.keys(customerTypes);
        const data = Object.values(customerTypes);
        const backgroundColors = ['#A7BBEE', '#4170E8', '#4CAF50', '#FFC107', '#FF5722']; // Add more colors as needed

        return {
            labels: labels,
            datasets: [
                {
                    label: '# of Customers',
                    data: data,
                    backgroundColor: backgroundColors.slice(0, labels.length), // Use colors for each label
                    borderColor: backgroundColors.slice(0, labels.length),
                    borderWidth: 1,
                },
            ],
        };
    };

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
        <Container>
            <div style={{ width: '100%', height: '250px' }}>
                {/* Pie Chart */}
                <Pie data={prepareDataForChart()} options={options} />
            </div>
        </Container>
    );
}

export default CustomerChart;

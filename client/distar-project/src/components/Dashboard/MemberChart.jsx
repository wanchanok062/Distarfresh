import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const MemberChart = () => {
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}customers`);
                setCustomerData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Calculate data for the Pie Chart
    const calculateData = () => {
        // Initialize an object to store the count of each member type
        const memberCounts = {};

        // Loop through the customer data and count each member type
        customerData.forEach(customer => {
            const memberType = customer.member_type_name;
            if (memberCounts[memberType]) {
                memberCounts[memberType]++;
            } else {
                memberCounts[memberType] = 1;
            }
        });

        // Convert the memberCounts object to an array of counts
        const data = Object.values(memberCounts);
        // Extract the member types to use as labels
        const labels = Object.keys(memberCounts);

        return { data, labels };
    };

    // Member data
    const { data, labels } = calculateData();

    const member = {
        labels: labels,
        datasets: [
            {
                label: '# of Members',
                data: data,
                backgroundColor: [
                    '#A7BBEE',
                    '#4170E8',
                    '#FFC0CB',
                    // Add more colors as needed
                ],
                borderColor: [
                    '#A7BBEE',
                    '#4170E8',
                    '#FFC0CB',
                    // Add more colors as needed
                ],
                borderWidth: 1,
            },
        ],
    };

    // Chart options
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
        maintainAspectRatio: false,
        responsive: true,
    };

    return (
        <Container>
            <div style={{ width: '100%', height: '250px' }}>
                <Pie data={member} options={options} />
            </div>
        </Container>
    );
};

export default MemberChart;

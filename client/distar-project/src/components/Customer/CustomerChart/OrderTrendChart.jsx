import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Pie } from "react-chartjs-2";

import axios from 'axios';

const OrderTrendChart = (data) => {
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}order_details/${data.customer_id}`);
                setOrderDetails(response.data);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchData();
    }, [data.customer_id]);

    // Prepare data for Pie Chart
    const prepareDataForChart = () => {
        const products = {};
        orderDetails.forEach(orderDetail => {
            const { product_name, quantity } = orderDetail;
            if (products[product_name]) {
                products[product_name] += quantity;
            } else {
                products[product_name] = quantity;
            }
        });

        const labels = Object.keys(products);
        const data = Object.values(products);
        const backgroundColors = ['#36A2EB', '#FF6384', '#4BC0C0', '#FF9F40', '#9966FF','#FFCD56','#C9CBCF']; // Add more colors as needed

        return {
            labels: labels,
            datasets: [
                {
                    label: '# of Orders',
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
        <Container>
            <div style={{ width: '100%', height: '250px' }}>
                <Pie data={prepareDataForChart()} options={options} />
            </div>
        </Container>
    );
};

export default OrderTrendChart;

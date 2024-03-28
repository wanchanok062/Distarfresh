import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';

const AllCustomerCard = () => {
    const [totalCustomers, setTotalCustomers] = useState(0);

    useEffect(() => {
        const fetchTotalCustomers = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}customers`);
                // นับจำนวนลูกค้าทั้งหมด
                const totalCustomersCount = response.data.length;
                setTotalCustomers(totalCustomersCount);
            } catch (error) {
                console.error('Error fetching total customers:', error);
            }
        };
        fetchTotalCustomers();
    }, []);

    return (
        <Card className='card-total-customer mb-3'>
            <div className='color-3'></div>
            <Row className='m-3'>
                <Col className='m' md={8} xs={8}>
                    <div>ลูกค้าทั้งหมด</div> {/* Title */}
                    <div className='text-data'>{totalCustomers}</div> {/* Data */}
                </Col>
                <Col md={4} xs={4}>
                    <div className='icon d-flex justify-content-end'>
                        <div className='icon-3'>
                            {/* Icon */}
                            <SupervisedUserCircleOutlinedIcon sx={{ fontSize: 40 }} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default AllCustomerCard;

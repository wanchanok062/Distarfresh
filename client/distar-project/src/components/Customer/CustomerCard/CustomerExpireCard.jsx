import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';

const CustomerExpireCard = () => {
    const [expiringCustomers, setExpiringCustomers] = useState([]);

    useEffect(() => {
        const fetchExpiringCustomers = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}customers`);
                // กรองข้อมูลเฉพาะลูกค้าที่ใกล้หมดอายุ
                const expiringCustomersData = response.data.filter(customer => customer.customer_type_name === 'ลูกค้าใกล้หมดอายุ');
                setExpiringCustomers(expiringCustomersData);
            } catch (error) {
                console.error('Error fetching expiring customers:', error);
            }
        };
        fetchExpiringCustomers();
    }, []);

    return (
        <Card className='card-total-customer mb-3'>
            <div className='color-4'></div>
            <Row className='m-3'>
                <Col className='m' md={8} xs={8}>
                    <div>ลูกค้าใกล้หมดอายุ</div> {/* Title */}
                    <div className='text-data'>{expiringCustomers.length}</div> {/* Data */}
                </Col>
                <Col md={4} xs={4}>
                    <div className='icon d-flex justify-content-end'>
                        <div className='icon-4'>
                            {/* Icon */}
                            <StarsOutlinedIcon sx={{ fontSize: 40 }} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default CustomerExpireCard;

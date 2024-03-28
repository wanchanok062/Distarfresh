import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './detail-customer-card.css';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import { useParams } from 'react-router-dom';

const DetailCustomerCard = () => {
    //get customer_id from url
    const { customer_id } = useParams();
    //base API
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const [customer_data, setCustomer_data] = useState([]);

    //get customer data from API
    useEffect(() => {
        fetch(`${API_url}/customer/${customer_id}`)
            .then((response) => response.json())
            .then((data) => setCustomer_data(data))
            .catch((err) => console.log(err));
    }, []);


    //fetch customer data api with axios

    return (
        /* to DetailCustomer.jsx */
        <Row>
            {/* Total Order Card */}
            {
                customer_data.map((data) => (
                    <Col md={4}>
                        <Card className='card-detail-customer mb-3'>
                            <div className='color-1'></div>
                            <Row className='m-3'>
                                <Col className='m' md={8} xs={8}>
                                    <div>สถานะการชำระเงิน</div> {/* Title */}
                                    <div className='text-data'>{data.paymentstatus_name}</div> {/* Data */}
                                </Col>
                                <Col md={4} xs={4}>
                                    <div className='icon d-flex justify-content-end'>
                                        <div className='icon-1'>
                                            {/* Icon */}
                                            <MonetizationOnOutlinedIcon sx={{ fontSize: 40 }} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))
            }
            {/* Member Card */}
            {
                customer_data.map((data) => (
                    <Col md={4}>
                        <Card className='card-detail-customer mb-3'>
                            <div className='color-2'></div>
                            <Row className='m-3'>
                                <Col md={8} xs={8}>
                                    <div>รูปแบบสมาชิก</div> {/* Title */}
                                    <div className='text-data'>{data.member_type_name}</div> {/* Data */}
                                </Col>
                                <Col md={4} xs={4}>
                                    <div className='icon d-flex justify-content-end'>
                                        <div className='icon-2'>
                                            {/* Icon */}
                                            <BadgeOutlinedIcon sx={{ fontSize: 40 }} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))
            }
            {/* Total Point Card */}
            {
                customer_data.map((data) => (
                    <Col md={4}>
                        <Card className='card-detail-customer mb-3'>
                            <div className='color-3'></div>
                            <Row className='m-3'>
                                <Col md={8} xs={8}>
                                    <div>สถานะสมาชิก</div> {/* Title */}
                                    <div className='text-data'>{data.member_status_name}</div> {/* Data */}
                                </Col>
                                <Col md={4} xs={4}>
                                    <div className='icon d-flex justify-content-end'>
                                        <div className='icon-3'>
                                            {/* Icon */}
                                            <StarsOutlinedIcon sx={{ fontSize: 40 }} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))
            }
            
        
        </Row >
    )
}
export default DetailCustomerCard;
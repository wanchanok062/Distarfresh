import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './detail-customer-card.css';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';

const DetailCustomerCard = () => {
    return (
        /* to DetailCustomer.jsx */
        <Row>
            {/* Total Order Card */}
            <Col md={4}>
                <Card className='card-detail-customer mb-3'>
                    <div className='color-1'></div>
                    <Row className='m-3'>
                        <Col className='m' md={8} xs={8}>
                            <div>ยอดคำสั่งซื้อทั้งหมด</div> {/* Title */}
                            <div className='text-data'>1000000</div> {/* Data */}
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
            {/* Member Card */}
            <Col md={4}>
                <Card className='card-detail-customer mb-3'>
                    <div className='color-2'></div>
                    <Row className='m-3'>
                        <Col md={8} xs={8}>
                            <div>รูปแบบสมาชิก</div> {/* Title */}
                            <div className='text-data'>3 เดือน</div> {/* Data */}
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
            {/* Status Member Card */}
            <Col md={4}>
                <Card className='card-detail-customer mb-3'>
                    <div className='color-3'></div>
                    <Row className='m-3'>
                        <Col md={8}>
                            <div>สถานะสมาชิก</div> {/* Title */}
                            <div className='text-data'>ต่ออายุ</div> {/* Data */}
                        </Col>
                        <Col md={4}>
                            <div className='icon d-flex justify-content-end'>
                                <div className='icon-3'>
                                    {/* Icon */}
                                    <StarsOutlinedIcon sx={{ fontSize: 40 }}  />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}
export default DetailCustomerCard;
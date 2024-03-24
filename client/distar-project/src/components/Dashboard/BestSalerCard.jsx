
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
const BestSalerCard = () => {
    return (
        <Card className='card-total-customer mb-3'>
        <div className='color-2'></div>
        <Row className='m-3'>
            <Col className='m' md={8} xs={8}>
                <div>สินค้าที่ขายดีที่สุด</div> {/* Title */}
                <div className='text-data'>ผักชนิดที่ 1</div> {/* Data */}
            </Col>
            <Col md={4} xs={4}>
                <div className='icon d-flex justify-content-end'>
                    <div className='icon-2'>
                        {/* Icon */}
                        <StorefrontOutlinedIcon sx={{ fontSize: 40 }} />
                    </div>
                </div>
            </Col>
        </Row>
    </Card>
    )
}
export default BestSalerCard;
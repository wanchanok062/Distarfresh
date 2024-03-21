import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
const CustomerExpireCard = () => {
    return (
        // to Customrt.jsx
        <Card className='card-total-customer mb-3'>
            <div className='color-4'></div>
            <Row className='m-3'>
                <Col className='m' md={8} xs={8}>
                    <div>ลูกค้าใกล้หมดอายุ</div> {/* Title */}
                    <div className='text-data'>1000000</div> {/* Data */}
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
    )
}
export default CustomerExpireCard;
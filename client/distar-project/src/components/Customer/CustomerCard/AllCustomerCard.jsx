
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
const AllCustomerCard = () => {
    return (
        // to Customrt.jsx and Dashboard.jsx
        <div>
            <Card className='card-total-customer mb-3'>
                <div className='color-3'></div>
                <Row className='m-3'>
                    <Col className='m' md={8} xs={8}>
                        <div>ลูกค้าทั้งหมด</div> {/* Title */}
                        <div className='text-data'>252</div> {/* Data */}
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
        </div>
    )
}
export default AllCustomerCard;
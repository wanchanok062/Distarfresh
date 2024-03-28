
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
const TotalSaleCard = () => {
    return (
        // to Customrt.jsx and Dashboard.jsx
        <div>
            {/*Total Customer Card */}
            <Card className='card-total-customer mb-3'>
                <div className='color-1'></div>
                <Row className='m-3'>
                    <Col className='m' md={8} xs={8}>
                        <div>ยอดขายทั้งหมด</div> {/* Title */}
                        <div className='text-data'>-</div> {/* Data */}
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
        </div>
    )

}
export default TotalSaleCard;
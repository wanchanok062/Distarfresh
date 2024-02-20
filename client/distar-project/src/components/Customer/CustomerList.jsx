import './customer-list-style.css';
import { Card, Col, Row } from 'react-bootstrap'; // Import Button from react-bootstrap
import { Link } from 'react-router-dom';
function CustomerList() {
    return (
        <div>
            <div>
            </div>
            <Card id='customer-card' className='mt-3'>
                <Row className='m-3'>
                    <Col>
                        ลูกค้า
                    </Col>
                </Row>
                {/* Filter */}
                <Row className=' ms-auto mx-3 mb-3'>
                    <Col md={3} className='mb-2 mb-md-0'>
                        <select id='filter' className='form-select'>
                            <option value="" disabled selected>สถานะสมาชิก</option>
                        </select>
                    </Col>
                    <Col md={3} className='mb-2 mb-md-0'>
                        <select id='filter' className='form-select'>
                            <option value="" disabled selected>ประเภทลูกค้า</option>
                        </select>
                    </Col>
                    <Col md={3} className='mb-2 mb-md-0'>
                        <select id='filter' className='form-select'>
                            <option value="" disabled selected>รูปแบบสมาชิก</option>
                        </select>
                    </Col>
                    <Col md={3} className='mb-2 mb-md-0'>
                        <input id='filter' className='form-control' type='text' placeholder='ค้นหา' />
                    </Col>
                </Row>
                {/* This is Header */}
                <Row className='mx-3'>
                    <Col md={1} className='text-center'>
                        รหัส
                    </Col>
                    <Col md={2} className='text-center'>
                        ชื่อ-สกุล
                    </Col>
                    <Col md={2} className='text-center'>
                        เบอร์โทร
                    </Col>
                    <Col md={2} className='text-center'>
                        ประเภท
                    </Col>
                    <Col md={2} className='text-center'>
                        รูปแบบ
                    </Col>
                    <Col md={1} className='text-center'>
                        สถานะ
                    </Col>
                    <Col md={2}>
                        {/* button */}
                    </Col>
                    <hr className='mt-3 w-100' />
                </Row>
                {/* This is data. */}
                <Row className='mx-3 mb-2'>
                    <Col md={1} className='text-center'>
                        SW0001
                    </Col>
                    <Col md={2} className='text-center'>
                        มารุ ชิซุโอกะ
                    </Col>
                    <Col md={2} className='text-center'>
                        06222222222
                    </Col>
                    <Col md={2} className='text-center'>
                        ลูกค้าใหม่
                    </Col>
                    <Col md={2} className='text-center'>
                        1 เดือน
                    </Col>
                    <Col md={1} className='text-center'>
                        ต่ออายุ
                    </Col>
                    <Col md={2} className='d-flex justify-content-end'>
                        {/* button */}
                        <Link to='/customer/detailcustomer'>
                            <button id='btn-detail' className='btn-sm'>รายละเอียด</button>
                        </Link>
                    </Col>
                </Row>
                <div className='mb-3'></div>
            </Card>
        </div>
    );
}

export default CustomerList;

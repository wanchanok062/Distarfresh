import './customer-list-style.css';
import { Card, Col, Row, Form, FormControl } from 'react-bootstrap'; // Import Button from react-bootstrap
import { Link } from 'react-router-dom';
import { useEffect ,useState } from 'react';



function CustomerList() {


    
    const [customers , setCustomers] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_API_KEY}customers`)
            .then(res => res.json())
            .then(data => {
                setCustomers(data);
            });
    }, []);

    return (
        <div>
            <div>
            </div>
            <Card id='customer-card' className='mt-3'>
                <Row className='m-3'>
                    <Col>
                        <div className='title'>ลูกค้า</div>
                    </Col>
                </Row>
                {/* Filter */}
                <Row className=' ms-auto mx-3 mb-3'>
                    <Col md={3} className='mb-2 mb-md-0'>
                        <Form.Select id='statusMemberFilter' size='sm' className='form-select'>
                            <option value="" disabled selected>สถานะสมาชิก</option>
                        </Form.Select>
                    </Col>
                    <Col md={3} className='mb-2 mb-md-0'>
                        <Form.Select id='typeCustomerFilter' size='sm' className='form-select'>
                            <option value="" disabled selected>ประเภทลูกค้า</option>
                        </Form.Select>
                    </Col>
                    <Col md={3} className='mb-2 mb-md-0'>
                        <Form.Select id='typeMemberFilter' size='sm' className='form-select'>
                            <option value="" disabled selected>รูปแบบสมาชิก</option>
                        </Form.Select>
                    </Col>
                    <Col md={3} className='mb-2 mb-md-0'>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="ค้นหาลูกค้า"
                                className="mr-sm-2"
                                size="sm"
                            />
                        </Form>
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
                {
                    customers && customers.map((customer) => (
                        <Row className='mx-3 mb-2' key={customer._id}>
                            <Col md={1} className='text-center'>
                                {customer.customer_id}
                            </Col>
                            <Col md={2} className='text-center'>
                                {customer.full_name}
                            </Col>
                            <Col md={2} className='text-center'>
                                {customer.tel}
                            </Col>
                            <Col md={2} className='text-center'>
                                {customer.customer_type_name}
                            </Col>
                            <Col md={2} className='text-center'>
                                {customer.member_type_name}
                            </Col>
                            <Col md={1} className='text-center'>
                                {customer.member_status_name}
                            </Col>
                            <Col md={2} className='d-flex justify-content-end'>
                                {/* Link to DetailCustomer.jsx*/}
                                <Link to={`/customer/detailcustomer/${customer.customer_id}`}>
                                    <button id='btn-detail' className='btn-sm'>รายละเอียด</button>
                                </Link>
                            </Col>
                        </Row>
                    ))
                }

                <div className='mb-3'></div>
            </Card>
        </div>
    );
}

export default CustomerList;

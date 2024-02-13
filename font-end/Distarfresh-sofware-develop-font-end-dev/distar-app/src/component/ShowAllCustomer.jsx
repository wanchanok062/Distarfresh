import React from 'react';
import { Card, Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ShowAllCustomer = ({ data }) => {
  const [membershipStatus, setMembershipStatus] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [membershipType, setMembershipType] = useState("");
  
  return (
    <Container>
      <Card className='w-100' style={{ border: 'none', height: '513px' }}>
        <Card.Title className='mt-3'
          style={{
            fontSize: '24px',
            marginLeft: '20px',
            fontFamily: 'Kanit',
            fontWeight: '400',
            lineHeight: '29px',
            letterSpacing: '0em'
          }}>
          ลูกค้า
        </Card.Title>
        <Row className="d-flex justify-content-end">
          <Col xs={12} sm={6} md={4} lg={2}>
            {/* Adjust col sizes based on your design */}
            <Form.Group className="mb-3" controlId="membershipStatus">
              <Form.Select
                value={membershipStatus}
                onChange={(e) => setMembershipStatus(e.target.value)}
                required
              >
                <option value="">สถานะสมาชิก</option>
                {/* add customer type options */}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            {/* Adjust col sizes based on your design */}
            <Form.Group className="mb-3" controlId="customerType">
              <Form.Select
                value={customerType}
                onChange={(e) => setCustomerType(e.target.value)}
                required
              >
                <option value="">ประเภทลูกค้า</option>
                {/* add customer type options */}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            {/* Adjust col sizes based on your design */}
            <Form.Group className="mb-3" controlId="membershipType">
              <Form.Select
                value={membershipType}
                onChange={(e) => setMembershipType(e.target.value)}
                required

              >
                <option value="">รูปแบบสมาชิก</option>
                {/* add customer type options */}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} style={{ marginRight: '20px' }}>
            {/* Adjust col sizes based on your design */}
            <Form.Group controlId="search" style={{ height: '30px' }}>
              <FormControl style={{ fontSize: '16px' }} type="text" placeholder="ค้นหาลูกค้า" />
            </Form.Group>
          </Col>
        </Row>
        <Card.Body>
          <Row className='text-center mb-3'>
            <Col>รหัส</Col>
            <Col>ชื่อ-สกุล</Col>
            <Col>เบอร์โทร</Col>
            <Col>ประเภท</Col>
            <Col>รูปแบบ</Col>
            <Col>สถานะ</Col>
            <Col></Col>
          </Row>
          <hr className='mx-4' />
          {data.map((items)=>{
            return(
              <Row className='text-center mt-2' key={items.id}>
                <Col>{items.attributes.customer_id}</Col>
                <Col>{items.attributes.full_name}</Col>
                <Col>{items.attributes.tel}</Col>
                <Col>{items.customerType}</Col>
                <Col>{items.membershipType}</Col>
                <Col>{items.membershipStatus}</Col>
                <Col>
                  <Link to={`/detail-customer/${items.id}`} >
                    <Button className='btn-detail btn-sm'
                      style={{ color: ' #4D639B', background: '#E5EAF9', border: 'none' }}
                    >รายละเอียด</Button>
                  </Link>
                </Col>
              </Row>
            )
          })}
        </Card.Body>
      </Card>
    </Container>
  );
}
export default ShowAllCustomer;
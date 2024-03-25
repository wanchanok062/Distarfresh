
import React, { useEffect } from 'react';
import { Card, Col, Container, Row, Form, FormControl, Button, ButtonGroup } from 'react-bootstrap';
import './dashboard-style.css';
import CustomerChart from '../Customer/CustomerChart/CustomerChart';
import MemberChart from './MemberChart';
import TotalSaleChart from './TotalSaleChart';
import SaleTrendChart from './SaleTrendChart';
import TotalSaleCard from '../Customer/CustomerCard/TotalSaleCard';
import AllCustomerCard from '../Customer/CustomerCard/AllCustomerCard';
import BestSalerCard from './BestSalerCard';


const Dashboard = () => {
    return (
        <Container>
            <Row className='mb-3'>
                <Col>
                    <div style={{ fontSize: '24px' }}>ภาพรวม</div> {/* Title */}
                </Col>
            </Row>
            {/* 3 Card. */}
            <Row>
                <Col md={4}>
                    {/* from folder Customer/CustomerCard */}
                    <TotalSaleCard />
                </Col>
                <Col md={4}>
                    {/* from folder Dashboard */}
                    <BestSalerCard />
                </Col>
                <Col md={4}>
                    {/* from folder Customer/CustomerCard */}
                    <AllCustomerCard />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    {/* Type Customer Card. */}
                    <Card className='card mb-3'>
                        <Row className='m-3'>
                            <Col md={6} className='mb-3'>
                                <div className='title'>ประเภทลูกค้า</div>
                            </Col>
                            {/* Filter */}
                            <Col md={6} className="d-flex justify-content-end gap-2 mb-3">
                                <Form.Select size="sm" style={{ width: '200px' }}>
                                    <option>เดือน</option>
                                </Form.Select>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="ระบุปี"
                                        className="mr-sm-2"
                                        size="sm"
                                    />
                                </Form>
                            </Col>
                            {/* Type Customer Chart */}
                            <Col className='chart-container d-flex justify-content-center align-content-center'>
                                <div style={{ width: '100%', height: '250px' }}>
                                    {/* Pie Chart from folder Customer/CustomerChart */}
                                    <CustomerChart />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                {/* Member Card. */}
                <Col md={6}>
                    <Card className='card mb-3'>
                        <Row className='m-3'>
                            <Col md={6} className='mb-3'>
                                <div className='title'>รูปแบบสมาชิก</div>
                            </Col>
                            {/* Filter */}
                            <Col md={6} className="d-flex justify-content-end gap-2 mb-3">
                                <Form.Select size="sm" style={{ width: '200px' }}>
                                    <option>เดือน</option>
                                </Form.Select>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="ระบุปี"
                                        className="mr-sm-2"
                                        size="sm"
                                    />
                                </Form>
                            </Col>
                            {/* Member Chart */}
                            <Col className='chart-container'>
                                {/* Folder Dashboard */}
                                <MemberChart /> {/* Pie Chart */}
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* Total Sale Card. */}
                    <Card className='card mb-3'>
                        <Row className='m-3'>
                            <Col md={6} className='mb-3'>
                                <div className='title'>ยอดขายทั้งหมด</div>
                            </Col>
                            {/* Filter */}
                            <Col md={6} className='d-flex justify-content-end mb-3'>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="ระบุปี"
                                        className="mr-sm-2"
                                        size="sm"
                                    />
                                </Form>
                            </Col>
                            {/* Total Sale Chart */}
                            <Col className='chart-container d-flex justify-content-center align-content-center'>
                                <div style={{ width: '100%', height: '300px' }}>
                                    {/* Folder Dashboard */}
                                    <TotalSaleChart /> {/* Line Chart */}
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* Sale Trend Card */}
                    <Card className='card mb-3'>
                        <Row className='m-3'>
                            <Col md={6}>
                                <div className='title'>แนวโน้มการซื้อสินค้า</div>
                            </Col>
                            {/* Filter Button */}
                            <Col md={6}>
                                <div className="d-flex justify-content-end">
                                    <ButtonGroup aria-label="Basic example">
                                        <Button className="btn-sm" variant="outline-secondary">วัน</Button>
                                        <Button className="btn-sm" variant="outline-secondary">เดือน</Button>
                                        <Button className="btn-sm" variant="outline-secondary">ปี</Button>
                                    </ButtonGroup>
                                </div>
                            </Col>
                            {/* Sale Trend Chart */}
                            <Col md={12} className='chart-container d-flex justify-content-center align-content-center'>
                                <div style={{ width: '100%', height: '300px' }}>
                                    {/* Folder Dashboard */}
                                    <SaleTrendChart /> {/* Bar Chart */}
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Dashboard;
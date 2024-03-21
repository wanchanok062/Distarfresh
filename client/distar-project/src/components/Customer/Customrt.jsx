import { Container, Col, Row, Form, Card, Button, ButtonGroup } from "react-bootstrap";
import CustomerList from "./CustomerList";
import './customer-style.css';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddCustomer from "./AddCustomer";
import { Link } from "react-router-dom";
import CustomerChart from "./CustomerChart/CustomerChart";
import SaleTrendChart from "../Dashboard/SaleTrendChart";
import TotalSaleCard from "./CustomerCard/TotalSaleCard";
import AllCustomerCard from "./CustomerCard/AllCustomerCard";
import CustomerExpireCard from "./CustomerCard/CustomerExpireCard";


const Customrt = () => {

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
                    {/* from folder CustomerCard */}
                    <TotalSaleCard />
                </Col>
                <Col md={4}>
                    {/* from folder CustomerCard */}
                    <CustomerExpireCard />
                </Col>
                <Col md={4}>
                    {/* from folder CustomerCard */}
                    <AllCustomerCard />
                </Col>
            </Row>
            <Row>
                {/* Type Customer Card */}
                <Col md={5}>
                    <Card className="mb-3">
                        <Row className="m-3">
                            <Col md={12} className="d-flex justify-content-end">
                                <Form.Select size="sm" style={{ width: '200px' }}>
                                    <option>ประเภทลูกค้า</option>
                                </Form.Select>
                            </Col>
                            {/* Type Customer Chart */}
                            <Col md={12} className="d-flex justify-content-center align-content-center">
                                <div style={{ width: '100%', height: '330px' }}>
                                    {/* Pie Chart from folder CustomerChart */}
                                    <CustomerChart />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                {/* Sale Trend Card */}
                <Col md={7}>
                    <Card className="mb-3">
                        <Row className="m-3">
                            <Col md={12} className="mb-1">
                                <div className="title">แนวโน้มการซื้อสินค้า</div>
                            </Col>
                            {/* Sale Trend Chart */}
                            <Col md={12}>
                                {/* Bar Chart from folder Dashboard */}
                                <SaleTrendChart />
                                {/* Filter Button */}
                                <div className="d-flex justify-content-end">
                                    <ButtonGroup aria-label="Basic example">
                                        <Button className="btn-sm" variant="outline-primary">วัน</Button>
                                        <Button className="btn-sm" variant="outline-primary">เดือน</Button>
                                        <Button className="btn-sm" variant="outline-primary">ปี</Button>
                                    </ButtonGroup>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            {/* Button */}
            <Row>
                <Col className="d-flex justify-content-end">
                    <button id="btn-customer" className='mx-3' data-bs-toggle="modal" data-bs-target="#addCustomer">
                        <div style={{ display: 'flex', alignItems: 'center', color: '#4D639B' }}>
                            <div className='bg-icon mx-1' style={{ background: '#DEE3F0' }}>
                                <PersonAddAltOutlinedIcon />
                            </div>
                            <div>
                                เพิ่มรายชื่อลูกค้า
                            </div>
                        </div>
                    </button>
                    {/* Link to AllCustomer.jsx */}
                    <Link to="/customer/allcustomer">
                        <button id="btn-customer">
                            <div style={{ display: 'flex', alignItems: 'center', color: '#CE9525' }}>
                                <div className="bg-icon" style={{ background: '#F6D79A' }}>
                                    <PeopleAltOutlinedIcon />
                                </div>
                                <div>
                                    ลูกค้าทั้งหมด
                                </div>
                            </div>
                        </button>
                    </Link>
                </Col>
                {/* Modal */}
                <AddCustomer />
            </Row>
            {/* End Button. */}
            <Row>
                <Col>
                    <CustomerList />
                </Col>
            </Row>
        </Container>
    );
}

export default Customrt;

import './detail-customer-style.css';
import { Container, Card, Row, Col } from "react-bootstrap"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EditCustomer from './EditCustomer';
import DeleteCustomer from './DeleteCustomer';
import AddOrder from './AddOrder';
import DeleteOrder from './DeleteOrder';
import EditOrder from './EditOrder';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DetailCustomerCard from './CustomerCard/DetailCustomerCard'; // from folder CustomerCard.
import axios from 'axios';
import OrderTrendChart from './CustomerChart/OrderTrendChart'; // from folder CustomerChart.


function DetailCustomer() {
    const { customer_id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        //useFetch data
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}customer/${customer_id}`);
                setData(response.data);
            } catch (error) {
            }
        };
        fetchData();
    }, [customer_id]);

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2 className='mt-3'> รายละเอียดลูกค้า (รหัส: {customer_id}) </h2>
                </Col>
            </Row>
            <Row>
                {/* 3 Card */}
                <Col>
                    {/* from folder CustomerCard */}
                    <DetailCustomerCard />
                </Col>
            </Row>
            <Row>
                <Col md={12} className="d-flex justify-content-end ">
                    <button className="d-flex justify-content-center align-items-center btn-edit mx-3"
                        data-bs-toggle="modal" data-bs-target="#editCustomer"
                    >
                        <div>
                            <EditOutlinedIcon className='edit-icon' />
                        </div>
                        <div className='mx-1'>
                            แก้ไขข้อมูล
                        </div>
                    </button>
                    <button className="d-flex justify-content-center align-items-center btn-del"
                        data-bs-toggle="modal" data-bs-target="#deleteCustomer"
                    >
                        <div>
                            <CloseOutlinedIcon className='del-icon' />
                        </div>
                        <div className='mx-1'>
                            ลบ
                        </div>
                    </button>
                </Col>
                {/* Modal Customer */}
                <EditCustomer data={data} />
                <DeleteCustomer delete_id={customer_id} />
            </Row>
            <Row>
                <Col md={5} className='mt-3'>
                    <Card id='card-detail'>
                        <Card.Body id='card-body' className="m-4 d-flex justify-content-center align-content-center">
                            {data && data.map((customer) => (
                                <Row key={customer.customer_id}>
                                    <Col md={4} className='text-right'>
                                        รหัสลูกค้า
                                    </Col>
                                    <Col md={8}>
                                        <span className="bg-warning" style={{ padding: "0.1px 10px", borderRadius: "20px" }}> {customer.customer_id}</span>
                                    </Col>
                                    <Col md={4} className='text-right'>
                                        ชื่อ-สกุล
                                    </Col>
                                    <Col md={8}>
                                        {customer.full_name}
                                    </Col>
                                    <Col md={4} className='text-right'>
                                        เบอร์โทร
                                    </Col>
                                    <Col md={8}>
                                        {customer.tel}
                                    </Col>
                                    <Col md={4} className='text-right'>
                                        ที่อยู่
                                    </Col>
                                    <Col md={8}>
                                        {customer.address}
                                    </Col>
                                    <Col md={4} className='text-right'>
                                        ประเภทลูกค้า
                                    </Col>
                                    <Col md={8}>
                                        {customer.customer_type_name}
                                    </Col>
                                    <Col md={4} className='text-right'>
                                        รูปแบบ
                                    </Col>
                                    <Col md={8}>
                                        {customer.member_type_name}
                                    </Col>
                                    <Col md={4} className='text-right'>
                                        สถานะสมาชิก
                                    </Col>
                                    <Col md={8}>
                                        {customer.member_status_name}
                                    </Col>
                                    <Col md={4} className='text-right'>
                                        การชำระเงิน
                                    </Col>
                                    <Col md={8}>
                                        {customer.paymentstatus_name}
                                    </Col>
                                </Row>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                {/* Order Trend Card */}
                <Col md={7} className='mt-3'>
                    <Card className='card-piechart'>
                        <Row className='m-3'>
                            <Col md={12} className='d-flex justify-content-center mb-3'>
                                <div className='title'>รายการสินค้าที่นิยม</div>
                            </Col>
                            {/* Order Trend Chart */}
                            <Col md={12} className='d-flex justify-content-center'>
                                {/* Pie Chart from folder CustomerChart */}
                                <OrderTrendChart />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Card className='card-order mt-3'>
                <Card.Title className='mx-3 my-3'>คำสั่งซื้อ</Card.Title>
                <Row>
                    <Col className='d-flex justify-content-end mx-3'>
                        <button id='add-order' className='btn btn-sm'
                            data-bs-toggle="modal" data-bs-target="#addOrder">
                            เพิ่มคำสั่งซื้อ
                        </button>
                    </Col>
                </Row>
                <Card.Body className='mx-3'>
                    <Row>
                        <Col className='text-center' md={1}>
                            ลำดับ
                        </Col>
                        <Col className='text-center' md={2}>
                            รายการ
                        </Col>
                        <Col className='text-center' md={2}>
                            รอบคำสั่งซื้อ
                        </Col>
                        <Col className='text-center' md={2}>
                            วันที่จัดส่ง
                        </Col>
                        <Col className='text-center' md={2}>
                            สถานะ
                        </Col>
                        <Col md={3}>
                            {/* Button */}
                        </Col>
                    </Row>
                    <hr />
                    {/* Data */}
                    <Row>
                        <Col md={1}>
                            <div className='text-center'>
                                1
                            </div>
                        </Col>
                        <Col className='text-center' md={2}>
                            <Col>
                                ผักชนิดที่1 : 5 หน่วย
                            </Col>
                            <Col>
                                ผักชนิดที่2 : 5 หน่วย
                            </Col>
                        </Col>
                        <Col md={2}>
                            <div className='text-center'>
                                1
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='text-center'>
                                1/1/2024
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='text-center'>
                                จัดส่งแล้ว
                            </div>
                        </Col>
                        <Col md={3} className='d-flex justify-content-end'>
                            <Col md={3}>
                                <button id='edit-order' className='btn btn-sm'
                                    data-bs-toggle="modal" data-bs-target="#editOrder">
                                    แก้ไข
                                </button>
                            </Col>
                            <Col md={2}>
                                <button id='del-order' className='btn btn-sm'
                                    data-bs-toggle="modal" data-bs-target="#deleteOrder"
                                >ลบ</button>
                            </Col>
                        </Col>
                        {/* Modal Order */}
                        <AddOrder />
                        <EditOrder />
                        <DeleteOrder />
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default DetailCustomer

import './detail-customer-style.css';
import { Container, Card, Row, Col } from "react-bootstrap"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EditCustomer from './EditCustomer';
import DeleteCustomer from './DeleteCustomer';
import AddOrder from './AddOrder';
import DeleteOrder from './DeleteOrder';
import EditOrder from './EditOrder';
function DetailCustomer() {
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2> รายละเอียดลูกค้า(รหัส:{/* ID Customer */}) </h2>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="d-flex justify-content-end mb-3">
                    <button className="d-flex justify-content-center align-items-center btn-edit mx-3"
                        data-bs-toggle="modal" data-bs-target="#edit"
                    >
                        <div>
                            <EditOutlinedIcon className='edit-icon' />
                        </div>
                        <div className='mx-1'>
                            แก้ไขข้อมูล
                        </div>
                    </button>
                    <button className="d-flex justify-content-center align-items-center btn-del"
                        data-bs-toggle="modal" data-bs-target="#delete"
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
                <EditCustomer />
                <DeleteCustomer />
            </Row>
            <Row className='mb-3'>
                <Col md={6}>
                    <Card className='card-detail'>
                        <Card.Body className="mx-3">
                            <Row className="mb-2">
                                <Col md={5}>
                                    รหัสสมาชิก
                                </Col>
                                <Col md={1}>
                                    :
                                </Col>
                                <Col md={6}>
                                    {/* Data */}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md={5}>
                                    วันที่สมัคร
                                </Col>
                                <Col md={1}>
                                    :
                                </Col>
                                <Col md={6}>
                                    {/* Data */}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md={5}>
                                    วันที่สิ้นสุด
                                </Col>
                                <Col md={1}>
                                    :
                                </Col>
                                <Col md={6}>
                                    {/* Data */}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md={5}>
                                    ประเภทลูกค้า
                                </Col>
                                <Col md={1}>
                                    :
                                </Col>
                                <Col md={6}>
                                    {/* Data */}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md={5}>
                                    ชื่อ-นามสกุล
                                </Col>
                                <Col md={1}>
                                    :
                                </Col>
                                <Col md={6}>
                                    {/* Data */}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md={5}>
                                    เบอร์โทร
                                </Col>
                                <Col md={1}>
                                    :
                                </Col>
                                <Col md={6}>
                                    {/* Data */}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md={5}>
                                    ที่อยู่ในการจัดส่ง
                                </Col>
                                <Col md={1}>
                                    :
                                </Col>
                                <Col md={6}>
                                    {/* Data */}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md={5}>
                                    สถานะการชำระเงิน
                                </Col>
                                <Col md={1}>
                                    :
                                </Col>
                                <Col md={6}>
                                    {/* Data */}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md={5}>
                                    ผู้จัดหา
                                </Col>
                                <Col md={1}>
                                    :
                                </Col>
                                <Col md={6}>
                                    {/* Data */}
                                </Col>
                            </Row>
                        </Card.Body>

                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='card-piechart'>
                        <Row className=''>
                            <Col className='d-flex justify-content-center'>
                                Piechart
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Card className='card-order'>
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

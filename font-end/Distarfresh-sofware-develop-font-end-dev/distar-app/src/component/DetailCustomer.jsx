import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import EditCustomer from "./modal/EditCustomer";
import { useState } from "react";
import DeleteDetail from "./modal/DeleteDetail";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from 'react-router-dom';

const DetailCustomer = () => {
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { id } = useParams();
    
    const handleModalOpen = () => {
        setShowModal(true);
    };
    const handleModalClose = () => {
        setShowModal(false);
    };
    const handleDeleteModalOpen = () => {
        setShowDeleteModal(true);
    };

    const handleDeleteModalClose = () => {
        setShowDeleteModal(false);
    };

    const handleDelete = () => {
        // Handle your delete logic here
        console.log('Item deleted!');
        setShowDeleteModal(false);
    };
    return (
        <Container>
            <Row>
                <Col>
                    <div className="title mt-3">
                        รายละเอียดลูกค้า
                    </div>
                </Col>
            </Row>
            <div className="d-flex justify-content-end">
                <Row>
                    <Col md={12} className='my-3'>
                        <button className='btn-customer' style={{
                            color: '#4D639B',
                            width: "125px"
                        }} onClick={handleModalOpen}>
                            <DriveFileRenameOutlineIcon
                                style={{
                                    background: 'rgba(222, 227, 240, 1)',
                                    borderRadius: "5px",
                                    width: "25px",
                                    height: "25px"
                                }}
                                sx={{ mr: 1 }} /> {/* Add the icon here */}
                            แก้ไขข้อมูล
                        </button>
                        <button className='btn-customer' style={{ color: '#AF2F2F', width: "89px" }} onClick={handleDeleteModalOpen}>
                            <CloseIcon
                                style={{background: 'rgba(226, 174, 174, 1)',
                                borderRadius: "5px",
                                width: "25px",
                                height: "25px"
                                }}
                                sx={{ mr: 1 }} /> {/* Add the icon here */}
                            ลบ
                        </button>
                    </Col>
                </Row>

            </div>
            {showModal && <EditCustomer showModal={showModal} handleModalClose={handleModalClose} />}
            {showDeleteModal && (
                <DeleteDetail
                    showDeleteModal={showDeleteModal}
                    handleDeleteModalClose={handleDeleteModalClose}
                    handleDelete={handleDelete}
                />
            )}
            <Row>
                <Col md={5}>
                    <Card style={{ border: "none", height: "455px" }}>
                        <Card.Body className="mt-4 mx-4"
                            style={{
                                fontSize: '20px',
                                fontWeight: '400',
                                lineHeight: '30px',
                                letterSpacing: '0em',
                                textAlign: 'left'
                            }}
                        >
                            <Row className="mb-3">
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
                <Col md={7} className="">
                    <Card style={{ border: "none", height: "455px" }}>
                        <Card.Title className="mx-auto my-auto">Pie Chart</Card.Title>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Card className='w-100' style={{ border: 'none', height: '513px' }}>
                        <Row>
                            <Col>
                                <Card.Title className='mt-3'
                                    style={{
                                        fontSize: '24px',
                                        marginLeft: '20px',
                                        fontFamily: 'Kanit',
                                        fontWeight: '400',
                                        lineHeight: '29px',
                                        letterSpacing: '0em'
                                    }}>
                                    คำสั่งซื้อ
                                </Card.Title>
                            </Col>
                            <Col className="mt-3 mx-5 d-flex justify-content-end">
                                <Button className='btn-detail btn-sm'
                                    style={{ color: ' #4D639B', background: '#E5EAF9', border: 'none' }}
                                >เพิ่มคำสั่งซื้อ</Button>
                            </Col>

                        </Row>
                        <Card.Body>
                            <Row className='text-center mb-3'>
                                <Col>ลำดับ</Col>
                                <Col>รายการ</Col>
                                <Col>รอบคำสั่งซื้อ</Col>
                                <Col>วันที่จัดส่ง</Col>
                                <Col>สถานะ</Col>
                                <Col></Col>
                            </Row>
                            <hr className='mx-4' />
                            <Row className="mt-2">
                                <Col>

                                </Col>
                                <Col>

                                </Col>
                                <Col>

                                </Col>
                                <Col>

                                </Col>
                                <Col>

                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <div>
                                        <Button className='btn-detail btn-sm'
                                            style={{ color: '#CD9507', background: '#FBE6BD', border: 'none' }}
                                        >แก้ไข</Button>
                                    </div>
                                    <div className="mx-4">
                                        <Button className='btn-detail btn-sm'
                                            style={{ color: '#B84A4A', background: '#E2AEAE', border: 'none' }}
                                        >ลบ</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default DetailCustomer;
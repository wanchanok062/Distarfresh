import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import ModalCustomer from "../ModalCustomer";

const CustomerManagement = () => {
    return (
        // ประเภทลูกค้า
        <div>
            <Row className="d-flex mb-3">
                <Col style={{ fontSize: '20px' }}>
                    ประเภทลูกค้า
                </Col>
                <Col className="d-flex justify-content-end">
                    <button data-bs-toggle="modal" data-bs-target="#addTypeCustomer" className="add">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='bg-icon mx-1' style={{ background: '#DEE3F0' }}>
                                <AddIcon />
                            </div>
                            <div>
                                เพิ่มข้อมูล
                            </div>
                        </div>
                    </button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card id="card-list">
                        <Row className="mx-3 mt-3">
                            <Col className="text-center" md={2}>
                                <div>ลำดับ</div>
                            </Col>
                            <Col className="text-center" md={2}>
                                <div>ประเภทลูกค้า</div>
                            </Col>
                            <Col md={8}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        <Row className="mx-3 mb-3">
                            <Col className="text-center" md={2}>
                                <div>1</div>
                            </Col>
                            <Col md={2} className="text-center">
                                <div>ลูกค้าใหม่</div>
                            </Col>
                            <Col md={8} className="d-flex justify-content-end gap-2">
                                <button data-bs-toggle="modal" data-bs-target="#editTypeCustomer" className="edit btn btn-sm">
                                    แก้ไข
                                </button>
                                <button data-bs-toggle="modal" data-bs-target="#deleteTypeCustomer" className="del btn btn-sm">
                                    ลบ
                                </button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            {/* Modal */}
            <ModalCustomer />
        </div>
    )
}
export default CustomerManagement;
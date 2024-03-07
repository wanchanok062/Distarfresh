import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ModalStatusOperation from "../ModalStatusOperation";
import AddIcon from '@mui/icons-material/Add';

const StatusOperationManagement = () => {
    return (
        // การดำเนินงาน
        <div>
            <Row className="d-flex mb-3">
                <Col style={{ fontSize: '20px' }}>
                    สถานะการดำเนินงาน
                </Col>
                <Col className="d-flex justify-content-end">
                    <button data-bs-toggle="modal" data-bs-target="#addOperation" className="add">
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
                                <div>สถานะการดำเนินงาน</div>
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
                                <div>Salad</div>
                            </Col>
                            <Col md={8} className="d-flex justify-content-end gap-2">
                                <button data-bs-toggle="modal" data-bs-target="#editOperation" className="edit btn btn-sm">
                                    แก้ไข
                                </button>
                                <button data-bs-toggle="modal" data-bs-target="#deleteOperation" className="del btn btn-sm">
                                    ลบ
                                </button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            {/* Modal */}
            <ModalStatusOperation />
        </div>
    )
}
export default StatusOperationManagement;
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ModalPayment from "../ModalPayment";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import useFetch from "../../hook/useFetch";

const PaymentManagement = () => {
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const { data: payment_status } = useFetch(`${API_url}/payment_status`);
    const [paymentstatus_id, setPaymentstatus_id] = useState(null);
    const [paymentstatus_name, setPaymentstatus_name] = useState(null);
    return (
        // การชำระเงิน
        <div>
            <Row className="d-flex mb-3">
                <Col style={{ fontSize: '20px' }}>
                    สถานะการชำระเงิน
                </Col>
                <Col className="d-flex justify-content-end">
                    <button data-bs-toggle="modal" data-bs-target="#addPayment" className="add">
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
                                <div>สถานะการชำระเงิน</div>
                            </Col>
                            <Col md={8}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        { payment_status && payment_status.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Row className="mx-3 mb-3">
                                        <Col className="text-center" md={2}>
                                            <div>{index + 1}</div>
                                        </Col>
                                        <Col md={2} className="text-center">
                                            <div>{item.paymentstatus_name}</div>
                                        </Col>
                                        <Col md={8} className="d-flex justify-content-end gap-2">
                                            <button onClick={() => { setPaymentstatus_id(item.paymentstatus_id); setPaymentstatus_name(item.paymentstatus_name); }} data-bs-toggle="modal" data-bs-target="#editPayment" className="edit btn btn-sm">
                                                แก้ไข
                                            </button>
                                            <button onClick={() => { setPaymentstatus_id(item.paymentstatus_id); setPaymentstatus_name(item.paymentstatus_name); }} data-bs-toggle="modal" data-bs-target="#deletePayment" className="del btn btn-sm">
                                                ลบ
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }) }
                    </Card>
                </Col>
            </Row>
            {/* Modal */}
            <ModalPayment paymentstatus_id={paymentstatus_id} paymentstatus_name={paymentstatus_name}  />
        </div>
    )
}
export default PaymentManagement;
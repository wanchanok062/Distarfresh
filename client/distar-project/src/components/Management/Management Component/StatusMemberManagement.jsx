import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ModalStatusMember from "../ModalStatusMember";
import AddIcon from '@mui/icons-material/Add';
import useFetch from "../../hook/useFetch";

const StatusMemberManagement = () => {
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const { data: memberStatus } = useFetch(`${API_url}member_status`);
    // console.log(memberStatus);
    return (
        // สถานะสมาชิก
        <div>
            <Row className="d-flex mb-3">
                <Col style={{ fontSize: '20px' }}>
                    สถานะสมาชิก
                </Col>
                <Col className="d-flex justify-content-end">
                    <button data-bs-toggle="modal" data-bs-target="#addStatusMember" className="add">
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
                            <Col className="text-left" md={2}>
                                <div>สถานะสมาชิก</div>
                            </Col>
                            <Col md={8}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        {
                            memberStatus && memberStatus.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Row className="mx-3 mb-3">
                                            <Col className="text-center" md={2}>
                                                <div>{index+1}</div>
                                            </Col>
                                            <Col md={3} className="text-left">
                                                <div>{item.member_status_name}</div>
                                            </Col>
                                            <Col md={7} className="d-flex justify-content-end gap-2">
                                                <button data-bs-toggle="modal" data-bs-target="#editStatusMember" className="edit btn btn-sm">
                                                    แก้ไข
                                                </button>
                                                <button data-bs-toggle="modal" data-bs-target="#deleteStatusMember" className="del btn btn-sm">
                                                    ลบ
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })
                        }
                    </Card>
                </Col>
            </Row>
            {/* Modal */}
            <ModalStatusMember />
        </div>
    )
}
export default StatusMemberManagement;
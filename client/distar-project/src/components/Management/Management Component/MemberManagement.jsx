import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ModalMember from "../ModalMember";
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from "react";

const MemberManagement = () => {
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const [member_type_id, setMember_type_id] = useState(null);
    const [member_type_name, setMember_type_name] = useState(null);
    const [member_type , setMember_type] = useState(null)

    
    //get member type data from API 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_url}/member_type`);
                const data = await response.json();
                setMember_type(data)
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, [API_url]);

    return (
        // รูปแบบสมาชิก
        <div>
            <Row className="d-flex mb-3">
                <Col style={{ fontSize: '20px' }}>
                    รูปแบบสมาชิก
                </Col>
                <Col className="d-flex justify-content-end">
                    <button data-bs-toggle="modal" data-bs-target="#addTypeMember" className="add">
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
                                <div>รูปแบบสมาชิก</div>
                            </Col>
                            <Col md={8}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        {
                            member_type && member_type.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Row className="mx-3 mb-3">
                                            <Col className="text-center" md={2}>
                                                <div>{index + 1}</div>
                                            </Col>
                                            <Col md={2} className="text-center">
                                                <div>{item.member_type_name}</div>
                                            </Col>
                                            <Col md={8} className="d-flex justify-content-end gap-2">
                                                <button onClick={() => { setMember_type_id(item.member_type_id); setMember_type_name(item.member_type_name); }} data-bs-toggle="modal" data-bs-target="#editTypeMember" className="edit btn btn-sm">
                                                    แก้ไข
                                                </button>
                                                <button onClick={() => { setMember_type_id(item.member_type_id); setMember_type_name(item.member_type_name) }} data-bs-toggle="modal" data-bs-target="#deleteTypeMember" className="del btn btn-sm">
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
            <ModalMember member_type_id={member_type_id} member_type_name={member_type_name} />
        </div>
    )
}
export default MemberManagement;
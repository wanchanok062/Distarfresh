import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ModalUserRole from "../ModalUserRole";
import useFecth from "../../hook/useFetch";
import { useState } from "react";

const UserRoleManagement = () => {
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const [employee_role , setEmployee_role] = useState(null)

    //get memner status data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_url}/employee_role`);
                const data = await response.json();
                setEmployee_role(data) 
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, [API_url]);

    return (
        // บทบาทผู้ใช้งาน
        <div>
            <Row className="d-flex mb-3">
                <Col style={{ fontSize: '20px' }}>
                    บทบาทผู้ใช้งาน
                </Col>
                <Col className="d-flex justify-content-end">
                    {/* <button data-bs-toggle="modal" data-bs-target="#addUserRole" className="add">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='bg-icon mx-1' style={{ background: '#DEE3F0' }}>
                                <AddIcon />
                            </div>
                            <div>
                                เพิ่มข้อมูล
                            </div>
                        </div>
                    </button> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card id="card-list">
                        <Row className="mx-3 mt-3">
                            <Col className="text-center" md={2}>
                                <div>รหัส</div>
                            </Col>
                            <Col className="text-center" md={2}>
                                <div>บทบาทผู้ใช้งาน</div>
                            </Col>
                            <Col md={8}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        {
                            employee_role && employee_role.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Row className="mx-3 mb-3">
                                            <Col className="text-center" md={2}>
                                                <div>{item.role_id}</div>
                                            </Col>
                                            <Col md={2} className="text-center">
                                                <div>{item.role_name}</div>
                                            </Col>
                                            <Col md={8} className="d-flex justify-content-end gap-2">
                                                {/* <button onClick={() => { setEmployee_role_id(item.role_id); setEmployee_role_name(item.role_name);}} data-bs-toggle="modal" data-bs-target="#editUserRole" className="edit btn btn-sm">
                                                    แก้ไข
                                                </button> */}
                                                {/* <button onClick={() => { setEmployee_role_id(item.role_id); setEmployee_role_name(item.role_name);}} data-bs-toggle="modal" data-bs-target="#deleteUserRole" className="del btn btn-sm">
                                                    ลบ
                                                </button> */}
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
            <ModalUserRole/>
        </div>
    )
}
export default UserRoleManagement;
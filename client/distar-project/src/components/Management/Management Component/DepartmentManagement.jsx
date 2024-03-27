import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ModalDepartment from "../ModalDepartment";
import AddIcon from '@mui/icons-material/Add';
import useFecth from "../../hook/useFetch";
import { useState } from "react";

const DepartmentManagement = () => {
    //bese API entpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const { data: department } = useFecth(`${API_url}/department`);

    //set state for department data
    const [department_id, setDepartment_id] = useState(null);
    const [department_name, setDepartment_name] = useState(null);


    return (
        // แผนกงาน
        <div>
            <Row className="d-flex mb-3">
                <Col style={{ fontSize: '20px' }}>
                    แผนกงาน
                </Col>
                <Col className="d-flex justify-content-end">
                    <button data-bs-toggle="modal" data-bs-target="#addDepartment" className="add">
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
                                <div>แผนกงาน</div>
                            </Col>
                            <Col md={8}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        {
                            department && department.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Row className="mx-3 mb-3">
                                            <Col className="text-center" md={2}>
                                                <div>{item.department_id}</div>
                                            </Col>
                                            <Col md={2} className="text-center">
                                                <div>{item.department_name}</div>
                                            </Col>
                                            <Col md={8} className="d-flex justify-content-end gap-2">
                                                <button onClick={()=>{setDepartment_id(item.department_id);setDepartment_name(item.department_name)}} data-bs-toggle="modal" data-bs-target="#editDepartment" className="edit btn btn-sm">
                                                    แก้ไข
                                                </button>
                                                <button onClick={()=>{setDepartment_id(item.department_id);setDepartment_name(item.department_name)}} data-bs-toggle="modal" data-bs-target="#deleteDepartment" className="del btn btn-sm">
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
            <ModalDepartment department_id={department_id} department_name={department_name} />
        </div>
    )
}
export default DepartmentManagement;
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ModalStatusOperation from "../ModalStatusOperation";
import AddIcon from '@mui/icons-material/Add';
import { useState , useEffect } from "react";

const StatusOperationManagement = () => {
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const [operation_id, setOperation_id] = useState(null);
    const [operation_name, setOperation_name] = useState(null);
    const [operation , setOperation] = useState(null)


    //get memner status data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_url}/operation`);
                const data = await response.json();
                setOperation(data)
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, [API_url]);


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
                        {
                            operation && operation.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Row className="mx-3 mb-3">
                                            <Col className="text-center" md={2}>
                                                <div>{index + 1}</div>
                                            </Col>
                                            <Col md={2} className="text-center">
                                                <div>{item.operation_name}</div>
                                            </Col>
                                            <Col md={8} className="d-flex justify-content-end gap-2">
                                                <button onClick={() => { setOperation_id(item.operation_id); setOperation_name(item.operation_name) }} data-bs-toggle="modal" data-bs-target="#editOperation" className="edit btn btn-sm">
                                                    แก้ไข
                                                </button>
                                                <button onClick={() => { setOperation_id(item.operation_id); setOperation_name(item.operation_name) }} data-bs-toggle="modal" data-bs-target="#deleteOperation" className="del btn btn-sm">
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
            <ModalStatusOperation operation_id={operation_id} operation_name={operation_name} />
        </div>
    )
}
export default StatusOperationManagement;
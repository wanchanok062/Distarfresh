import React, { useEffect, useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import ModalCustomer from "../ModalCustomer";



const CustomerManagement = () => {
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const [customer_type , setcustomer_type] = useState(null);
    const [customer_type_id, setcustomer_type_id] = useState(null);
    const [customer_type_name, setcustomer_type_name] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_url}/customer_type`);
                const data = await response.json();
                setcustomer_type(data)
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, [API_url]);


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
                            <Col className="text-left" md={2}>
                                <div>ประเภทลูกค้า</div>
                            </Col>
                            <Col md={8}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        {
                            customer_type && customer_type.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Row className="mx-3 mb-3">
                                            <Col className="text-center" md={2}>
                                                <div>{index + 1}</div>
                                            </Col>
                                            <Col md={4} className="text-left">
                                                <div>{item.customer_type_name}</div>
                                            </Col>
                                            <Col md={6} className="d-flex justify-content-end gap-2">
                                                <button data-bs-toggle="modal" data-bs-target="#editTypeCustomer" onClick={() => { setcustomer_type_id(item.customer_type_id); setcustomer_type_name(item.customer_type_name); }} className="edit btn btn-sm">
                                                    แก้ไข
                                                </button>
                                                <button data-bs-toggle="modal" onClick={() => { setcustomer_type_id(item.customer_type_id); setcustomer_type_name(item.customer_type_name); }} data-bs-target="#deleteTypeCustomer" className="del btn btn-sm">
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
            <ModalCustomer customer_type_id={customer_type_id} customer_type_name={customer_type_name} />
        </div>
    )
}
export default CustomerManagement;
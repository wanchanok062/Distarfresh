import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ModalCategory from "../ModalCategory";
import AddIcon from '@mui/icons-material/Add';
import useFecth from "../../hook/useFetch";
import { useState } from "react";


const CategoryManagement = () => {
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const { data: product_category } = useFecth(`${API_url}/product_category`);

    const [product_category_id, setProduct_category_id] = useState(null);
    const [product_category_name, setProduct_category_name] = useState(null);

    return (
        // หมวดหมู่สินค้า
        <div>
            <Row className="d-flex mb-3">
                <Col style={{ fontSize: '20px' }}>
                    หมวดหมู่สินค้า
                </Col>
                <Col className="d-flex justify-content-end">
                    <button data-bs-toggle="modal" data-bs-target="#addCategory" className="add">
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
                                <div>หมวดหมู่สินค้า</div>
                            </Col>
                            <Col md={8}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        {
                            product_category && product_category.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Row className="mx-3 mb-3">
                                            <Col className="text-center" md={2}>
                                                <div>{index + 1}</div>
                                            </Col>
                                            <Col md={2} className="text-center">
                                                <div>{item.product_category_name}</div>
                                            </Col>
                                            <Col md={8} className="d-flex justify-content-end gap-2">
                                                <button onClick={()=>{setProduct_category_id(item.product_category_id);setProduct_category_name(item.product_category_name)}} data-bs-toggle="modal" data-bs-target="#editCategory" className="edit btn btn-sm">
                                                    แก้ไข
                                                </button>
                                                <button onClick={()=>{setProduct_category_id(item.product_category_id);setProduct_category_name(item.product_category_name)}} data-bs-toggle="modal" data-bs-target="#deleteCategory" className="del btn btn-sm">
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
            <ModalCategory product_category_id={product_category_id} product_category_name={product_category_name} />
        </div>
    )
}
export default CategoryManagement;
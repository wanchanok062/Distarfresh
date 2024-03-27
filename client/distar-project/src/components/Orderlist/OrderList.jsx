import { Col, Container, Row, Card, Form, FormControl, FormSelect } from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import './order-list-style.css';
import ModalOrder from "./ModalOrder";
import { useState ,useEffect } from "react";

const OrderList = () => {
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const [product_id, setProduct_id] = useState(null)
    const [product_name, setProduct_name] = useState(null)
    const [product_category, setProduct_category] = useState(null)
    const [products , setProducts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_API_KEY}products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);


    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{ fontSize: '24px' }}>รายการสินค้าทั้งหมด</div>
                </Col>
                <Col className="d-flex justify-content-end">
                    <button
                        data-bs-toggle="modal" data-bs-target="#addOrderList"
                        className="btn-add add-order">
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
                    <Card className="card-order">
                        {/* Filter */}
                        <Row className="my-3 mx-3">
                            <Col className="d-flex justify-content-end gap-2">
                                <Form.Select size="sm" style={{ width: '200px' }}>
                                    <option>หมวดหมู่</option>
                                </Form.Select>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="ค้นหา"
                                        className="mr-sm-2"
                                        size="sm"
                                    />
                                </Form>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <div>ลำดับ</div>
                            </Col>
                            <Col>
                                <div>ชื่อสินค้า</div>
                            </Col>
                            <Col>
                                <div>หมวดหมู่</div>
                            </Col>
                            <Col>
                                <div>จำนวนที่ขายทั้งหมด</div>
                            </Col>
                            <Col>
                                <div></div>
                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        {
                            products && products.map((item, index) => {
                                return (
                                    <Row key={index} className="text-center mb-3">
                                        <Col>
                                            <div>{index + 1}</div>
                                        </Col>
                                        <Col>
                                            <div>{item.product_name}</div>
                                        </Col>
                                        <Col>
                                            <div>{item.product_category}</div>
                                        </Col>
                                        <Col>
                                            <div>{item.amounts}</div>
                                        </Col>
                                        <Col className="d-flex justify-content-center gap-2">
                                            <button onClick={() => { setProduct_id(item.id); setProduct_name(item.product_name); setProduct_category(item.product_category) }} data-bs-toggle="modal" data-bs-target="#editOrderList" className="btn btn-sm edit-order">แก้ไข</button>
                                            <button onClick={() => { setProduct_id(item.id); setProduct_name(item.product_name) }} data-bs-toggle="modal" data-bs-target="#deleteOrderList" className="btn btn-sm del-order">ลบ</button>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    </Card>
                </Col>
            </Row>
            <ModalOrder product_id={product_id} product_name={product_name} product_category={product_category} />
        </Container>
    )
}
export default OrderList;
import { Container, Row, Col, Card, Form, FormControl, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
import './schedule-style.css';
const Schedule = () => {
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{ fontSize: "24px" }}>ตารางจัดส่งสินค้า</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="card-schedule">
                        <Row className="my-3 mx-3">
                            <Col className="d-flex justify-content-end gap-2">
                                <Form.Select size="sm" style={{ width: '200px' }}>
                                    <option>รอบวันที่จัดส่ง</option>
                                </Form.Select>
                                <Form.Select size="sm" style={{ width: '200px' }}>
                                    <option>ประเภทสมาชิก</option>
                                </Form.Select>
                                <Form.Select size="sm" style={{ width: '200px' }}>
                                    <option>สถานะการจัดส่ง</option>
                                </Form.Select>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="ค้นหาลูกค้า"
                                        className="mr-sm-2"
                                        size="sm"
                                    />
                                </Form>
                            </Col>
                        </Row>
                        <Row className="mx-3 text-center">
                            <Col md={1}>
                                <div>รหัส</div>
                            </Col>
                            <Col md={2}>
                                <div>ชื่อ-สกุล</div>
                            </Col>
                            <Col md={1}>
                                <div>วัน</div>
                            </Col>
                            <Col md={1}>
                                <div>วันที่</div>
                            </Col>
                            <Col md={1}>
                                <div>ประเภท</div>
                            </Col>
                            <Col md={1}>
                                <div>สถานะ</div>
                            </Col>
                            <Col md={2}>
                                <div>หมายเหตุ</div>
                            </Col>
                            <Col md={3}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        <Row className="mx-3 mb-3 text-center">
                            <Col md={1}>
                                <div>SW0001</div>
                            </Col>
                            <Col md={2}>
                                <div>มารุ ชิซุโอกะ</div>
                            </Col>
                            <Col md={1}>
                                <div>จันทร์</div>
                            </Col>
                            <Col md={1}>
                                <div>1/1/2023</div>
                            </Col>
                            <Col md={1}>
                                <div>3 เดือน</div>
                            </Col>
                            <Col md={1}>
                                <div>จัดส่งแล้ว</div>
                            </Col>
                            <Col md={2}>
                                <div>-</div>
                            </Col>
                            <Col md={3}>
                                {/* to DetailCustomer.jsx id */}
                                <Link to="./customer/detailcustomer/">
                                    <button className="btn btn-sm detail">รายละเอียด</button>
                                </Link>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Schedule;
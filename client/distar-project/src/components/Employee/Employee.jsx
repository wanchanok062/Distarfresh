import { SupportAgentOutlined } from "@mui/icons-material";
import { Col, Container, Row, Card, Form, FormControl } from "react-bootstrap";
import './employee-style.css';
import ModalEmployee from "./ModalEmployee";
const Employee = () => {
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{ fontSize: '24px' }}>พนักงานทั้งหมด</div>
                </Col>
                <Col className="d-flex justify-content-end">
                    <button
                        data-bs-toggle="modal" data-bs-target="#addEmployee"
                        className="btn-add add-employee">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='bg-icon mx-1' style={{ background: '#DEE3F0' }}>
                                <SupportAgentOutlined />
                            </div>
                            <div>
                                เพิ่มพนักงาน
                            </div>
                        </div>
                    </button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="card-employee">
                        <Row className="mt-3 mx-3">
                            <Col className="d-flex justify-content-end">
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
                        <Row className="mx-3 mt-3">
                            <Col md={1}>
                                <div>ลำดับ</div>
                            </Col>
                            <Col md={2}>
                                <div>ชื่อพนักงาน</div>
                            </Col>
                            <Col md={2}>
                                <div>แผนก</div>
                            </Col>
                            <Col md={2}>
                                <div>บทบาทผู้ใช้งาน</div>
                            </Col>
                            <Col md={2}>
                                <div>Username</div>
                            </Col>
                            <Col md={2}>
                                <div>Password</div>
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        <Row className="mx-3 mb-3">
                            <Col md={1}>
                                1
                            </Col>
                            <Col md={2}>
                                แอดมิน
                            </Col>
                            <Col md={2}>
                                ฝ่ายขาย
                            </Col>
                            <Col md={2}>
                                แอดมิน
                            </Col>
                            <Col md={2}>
                                Admin
                            </Col>
                            <Col md={2}>
                                Adminja
                            </Col>
                            <Col md={1} className="d-flex justify-content-end gap-2">
                                <button data-bs-toggle="modal" data-bs-target="#editEmployee" className="btn btn-sm edit-employee">แก้ไข</button>
                                <button data-bs-toggle="modal" data-bs-target="#deleteEmployee" className="btn btn-sm del-employee">ลบ</button>
                            </Col>
                        </Row>
                        <ModalEmployee />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Employee;
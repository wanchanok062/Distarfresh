
import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

function AddOrder() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }
    return (
        /* to DetailCustomer.jsx */
        <div className="modal fade" id="addOrder" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">เพิ่มคำสั่งซื้อ</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className='mb-2'>
                                <Form.Label>รอบคำสั่งซื้อ</Form.Label>
                                <Form.Control disabled type="text" placeholder="" />
                            </Form.Group>
                            <Row  className='mb-3'>
                                <Col>
                                    <Form.Label>รายการ</Form.Label>
                                    <Form.Control required type='text' placeholder='' />
                                    <Form.Control.Feedback type='invalid'>โปรดระบุรายการ.</Form.Control.Feedback>
                                </Col>
                                <Col>
                                    <Form.Label>จำนวน</Form.Label>
                                    <Form.Control required type='text' placeholder='' />
                                    <Form.Control.Feedback type='invalid'>โปรดระบุจำนวน.</Form.Control.Feedback>
                                </Col>
                            </Row>
                            <Form.Group className='mb-3'>
                                <Form.Label>รอบวันจัดส่ง</Form.Label>
                                <Form.Select aria-label="Default select example" required >
                                    <option value="">...</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>วันที่จัดส่ง</Form.Label>
                                <Form.Control type="date" required />
                                <Form.Control.Feedback type="invalid">
                                    โปรดระบุวันที่จัดส่ง.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>สถานะ</Form.Label>
                                <Form.Select aria-label="Default select example" required >
                                    <option value="">...</option>
                                </Form.Select>
                            </Form.Group>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                                <button type="submit" onClick={handleSubmit} className="btn btn-primary">ยืนยัน</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddOrder;

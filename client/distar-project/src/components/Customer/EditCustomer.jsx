import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function EditCustomer() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    /* to DetailCustomer.jsx*/
    <div className="modal fade" id="editCustomer" aria-labelledby="editCustomerModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขข้อมูลลูกค้า</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>รหัสสมาชิก</Form.Label>
                  <Form.Control required type="text" placeholder="" readOnly />
                </Form.Group>
                <Form.Group>
                  <Form.Label>ชื่อ-นามสกุล</Form.Label>
                  <Form.Control required type="text" placeholder="" />
                  <Form.Control.Feedback type="invalid">โปรดระบุชื่อนามสกุล.</Form.Control.Feedback>
                </Form.Group>
              <Row className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Label>วันที่สมัคร</Form.Label>
                    <Form.Control type="date" required />
                    <Form.Control.Feedback type="invalid">
                      โปรดระบุวันที่สมัคร.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>วันที่สิ้นสุด</Form.Label>
                    <Form.Control type="date" required />
                    <Form.Control.Feedback type="invalid">
                      โปรดระบุวันที่สิ้นสุด.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" >
                <Form.Label>ประเภทลูกค้า</Form.Label>
                <Form.Select aria-label="Default select example" required >
                  <option value="">...</option>
                  <option value="">ลูกค้าใหม่</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  โปรดเลือกประเภทลูกค้า.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>รูปแบบสมาชิก</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="">...</option>
                  <option value="">1 เดือน</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>สถานะสมาชิก</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="">...</option>
                  <option value="">สมาชิก</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>ที่อยู่</Form.Label>
                <Form.Control as="textarea" required />
                <Form.Control.Feedback type="invalid">
                  โปรดระบุที่อยู่.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>เบอร์โทร</Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback type="invalid">
                  โปรดระบุเบอร์โทร.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>สถานะการชำระเงิน</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="">...</option>
                  <option value="">รอตรวจสอบ</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>ผู้จัดหา</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option></option>
                  <option value="">คุณ พีระพฤติพิศ</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  โปรดระบุผู้จัดหา.
                </Form.Control.Feedback>
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

export default EditCustomer;
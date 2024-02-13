import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
const CustomerForm = ({ showModal, handleModalClose }) => {
  const [memberId, setMemberId] = useState("");
  const [name, setName] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [membershipStatus, setMembershipStatus] = useState("");
  const [address, setAddress] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [agent, setAgent] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cancel, setCancel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <Modal show={showModal} onHide={handleModalClose} size="md" style={{ fontFamily: 'Kanit' }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>เพิ่มรายชื่อลูกค้า</Modal.Title>
        <Close style={{color: '#464646', cursor: 'pointer'}} onClick={handleModalClose} />
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="memberId">
            <Form.Label>รหัสสมาชิก</Form.Label>
            <Form.Control
              type="text"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>ชื่อ-สกุล</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="joinDate">
                <Form.Label>วันที่สมัคร</Form.Label>
                <Form.Control
                  type="date"
                  value={joinDate}
                  onChange={(e) => setJoinDate(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="expiryDate">
                <Form.Label>วันที่สิ้นสุด</Form.Label>
                <Form.Control
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="customerType">
            <Form.Label>ประเภทลูกค้า</Form.Label>
            <Form.Select
              value={customerType}
              onChange={(e) => setCustomerType(e.target.value)}
              required
            >
              <option value=""></option>
              {/* add customer type options */}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="membershipType">
            <Form.Label>รูปแบบสมาชิก</Form.Label>
            <Form.Select
              value={membershipType}
              onChange={(e) => setMembershipType(e.target.value)}
              required
            >
              <option value=""></option>
              {/* add customer type options */}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="membershipStatus">
            <Form.Label>สถานะสมาชิก</Form.Label>
            <Form.Select
              value={membershipStatus}
              onChange={(e) => setMembershipStatus(e.target.value)}
              required
            >
              <option value=""></option>
              {/* add customer type options */}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>ที่อยู่</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              style={{ height: "90px" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="paymentStatus">
            <Form.Label>สถานะการชำระเงิน</Form.Label>
            <Form.Select
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              required
            >
              <option value=""></option>
              {/* add customer type options */}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="agent">
            <Form.Label>ผู้จัดหา</Form.Label>
            <Form.Select
              value={agent}
              onChange={(e) => setAgent(e.target.value)}
              required
            >
              <option value=""></option>
              {/* add customer type options */}
            </Form.Select>
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-none" variant="" onClick={handleModalClose}>
          ยกเลิก
        </Button>
        <Button className="bg-primary" variant="primary" type="submit" onClick={handleSubmit}>
          ยืนยัน
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomerForm;

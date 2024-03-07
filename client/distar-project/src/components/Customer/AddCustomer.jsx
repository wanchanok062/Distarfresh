import { useState, useEffect } from "react";
import usePost from '../hook/usePost'; // Import the custom hook
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";


function AddCustomer() {
  // State variables to hold form data
  const [fullName, setFullName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [membership, setMembership] = useState('');
  const [statusMember, setStatusMember] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [provider, setProvider] = useState('');
  const [customerId, setCustomerId] = useState('');
  const { post } = usePost(); // Use the custom hook

  useEffect(() => {
    generateUniqueId()
  }, []);


  // Function to generate a unique customer ID
  const generateUniqueId = async () => {
    let customerId;
    let attempts = 0;

    while (attempts < 3) { // Limit the number of attempts to prevent infinite loop
      const randomNumber = Math.floor(Math.random() * 10000);
      customerId = `cu-${randomNumber.toString().padStart(4, '0')}`;
      const exists = await checkCustomerIdExists(customerId);
      if (!exists) {
        await setCustomerId(customerId);

      }
      attempts++;
    }

    throw new Error('Failed to generate a unique customer ID after multiple attempts');
  };


  const checkCustomerIdExists = async (customerId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}customer/${customerId}`);
      return response.data.length > 0; // Return true if customer ID exists, false otherwise
    } catch (error) {
      console.error('Error checking customer ID existence:', error);
      return false; // Assume customer ID doesn't exist in case of error
    }
  };

  // const [customerId, setcustomerId] = useState(generateUniqueId);
  const [validated, setValidated] = useState(false);



  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      event.preventDefault();
      const formData = {
        customer_id: customerId,
        full_name: fullName,
        tel: tel,
        address: address,
        start_date: startDate,
        exp_date: endDate,
        customer_type_id: customerType,
        member_type_id: membership,
        member_status_id: statusMember,
        employee_id: provider,
        paymentStatus_id: paymentStatus,
      };
      await post(`${import.meta.env.VITE_APP_API_KEY}customer`, formData);
      // Handle success response
      console.log('Data posted successfully:', response.data);
      // console.log(formData);
    } catch (error) {
      console.log(error);
    }
    setValidated(true);
  };

  return (
    /* to Customer.jsx and AllCustomer.jsx */
    <div className="modal fade" id="addCustomer" aria-labelledby="addCustomerModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addCustomerModalLabel">เพิ่มรายชื่อลูกค้า</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" >
                <Form.Label>รหัสสมาชิก</Form.Label>
                <Form.Control type="text" value={customerId} readOnly />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>ชื่อ-นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                <Form.Control.Feedback type="invalid">
                  โปรดระบุชื่อนามสกุล.
                </Form.Control.Feedback>
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3" >
                    <Form.Label>วันที่สมัคร</Form.Label>
                    <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                    <Form.Control.Feedback type="invalid">
                      โปรดระบุวันที่สมัคร.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" >
                    <Form.Label>วันที่สิ้นสุด</Form.Label>
                    <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                    <Form.Control.Feedback type="invalid">
                      โปรดระบุวันที่สิ้นสุด.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" >
                <Form.Label>ประเภทลูกค้า</Form.Label>
                <Form.Select aria-label="Default select example" value={customerType} onChange={(e) => setCustomerType(e.target.value)} required >
                  <option value={""}>...</option>
                  <option value={"t-01"}>ลูกค้าใหม่</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  โปรดเลือกประเภทลูกค้า.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>รูปแบบสมาชิก</Form.Label>
                <Form.Select aria-label="Default select example" value={membership} onChange={(e) => setMembership(e.target.value)}>
                  <option value="">...</option>
                  <option value={"m-01"}>1 เดือน</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>สถานะสมาชิก</Form.Label>
                <Form.Select aria-label="Default select example" value={statusMember} onChange={(e) => setStatusMember(e.target.value)}>
                  <option value="">...</option>
                  <option value={"ms-01"}>สมาชิก</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>ที่อยู่</Form.Label>
                <Form.Control as="textarea" value={address} onChange={(e) => setAddress(e.target.value)} required />
                <Form.Control.Feedback type="invalid">
                  โปรดระบุที่อยู่.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>เบอร์โทร</Form.Label>
                <Form.Control type="text" value={tel} onChange={e => setTel(e.target.value)} required />
                <Form.Control.Feedback type="invalid">
                  โปรดระบุเบอร์โทร.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>สถานะการชำระเงิน</Form.Label>
                <Form.Select aria-label="Default select example" value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                  <option value="">...</option>
                  <option value={"ps-1"}>รอตรวจสอบ</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>ผู้จัดหา</Form.Label>
                <Form.Select aria-label="Default select example" value={provider} onChange={(e) => setProvider(e.target.value)} required>
                  <option></option>
                  <option value={"em-0001"}>คุณ พีระพฤติพิศ</option>
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
      </div >
    </div >
  );
}

export default AddCustomer;
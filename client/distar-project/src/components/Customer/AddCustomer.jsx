import { useState, useEffect } from "react";
import usePost from '../hook/usePost'; // Import the custom hook
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import useFetch from '../hook/useFetch';



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
  const navigate = useNavigate();
  //Call customer_type form database
  const { data: customer_type } = useFetch(`${import.meta.env.VITE_APP_API_KEY}customer_type`);
  //Call member_type form database
  const { data: member_type } = useFetch(`${import.meta.env.VITE_APP_API_KEY}member_type`);
  //Call member_status form database
  const { data: member_status } = useFetch(`${import.meta.env.VITE_APP_API_KEY}member_status`);
  //Call payment_status form database
  const { data: payment_status } = useFetch(`${import.meta.env.VITE_APP_API_KEY}payment_status`);
  //Call employee form database
  // const { data: employee } = useFetch(`${import.meta.env.VITE_APP_API_KEY}employee`);


  useEffect(() => {
    generateUniqueId()
  }, []);

  useEffect(() => {
    if (startDate && membership) {
      const calculateEndDate = () => {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(startDateObj.getTime());
        endDateObj.setMonth(startDateObj.getMonth() + parseInt(membership.split('-')[1]));
        const formattedEndDate = endDateObj.toLocaleDateString();
        setEndDate(formattedEndDate);
      };
      calculateEndDate();
    }
  }, [startDate, membership])


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


  // handle submit form data 
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {

      return; // ไม่ต้องทำอะไรเพิ่มเติมถ้าฟอร์มไม่ถูกต้อง
    }

    try {
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
        paymentstatus_id: paymentStatus,
      };

      await post(`${import.meta.env.VITE_APP_API_KEY}customer`, formData);

      // ตรวจสอบเงื่อนไขว่า formData ไม่เป็นค่าว่าง
      if (Object.values(formData).every(value => value !== '')) {
        navigate(`/customer/detailcustomer/${customerId}`);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
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
            <Form Validate validated={validated}>
              <Form.Group className="mb-3" >
                <Form.Label>รหัสสมาชิก</Form.Label>
                <Form.Control type="text" value={customerId} readOnly />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>ชื่อ-นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="" onChange={(e) => setFullName(e.target.value)} required />
                <Form.Control.Feedback type="invalid">
                  โปรดระบุชื่อนามสกุล.
                </Form.Control.Feedback>
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3" >
                    <Form.Label>วันที่สมัคร</Form.Label>
                    <Form.Control type="date" onChange={(e) => setStartDate(e.target.value)} required />
                    <Form.Control.Feedback type="invalid">
                      โปรดระบุวันที่สมัคร.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" >
                    <Form.Label>วันที่สิ้นสุด</Form.Label>
                    <Form.Control type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} required disabled />
                    <Form.Control.Feedback type="invalid">
                      โปรดระบุวันที่สิ้นสุด.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              {/* // ประเภทลูกค้า */}
              <Form.Group className="mb-3" >
                <Form.Label>ประเภทลูกค้า</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setCustomerType(e.target.value)} required >
                  <option value=""></option>
                  {
                    customer_type && customer_type.map((item) => {
                      return (
                        <option key={item.customer_type_id} value={item.customer_type_id}>{item.customer_type_name}</option>
                      )
                    })
                  }
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  โปรดเลือกประเภทลูกค้า.
                </Form.Control.Feedback>
                {/* รูปแบบสมาชิก */}
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>รูปแบบสมาชิก</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setMembership(e.target.value)} required>
                  <option value=""></option>
                  {
                    member_type && member_type.map((item) => {
                      return (
                        <option key={item.member_type_id} value={item.member_type_id}>{item.member_type_name}</option>
                      )
                    })
                  }
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  โปรดเลือกรูปแบบสมาชิก
                </Form.Control.Feedback>
              </Form.Group>
              {/* สถานะสมาชิก */}
              <Form.Group className="mb-3" >
                <Form.Label>สถานะสมาชิก</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setStatusMember(e.target.value)} required>
                  <option value=""></option>
                  {
                    member_status && member_status.map((item) => {
                      return (
                        <option key={item.member_status_id} value={item.member_status_id}>{item.member_status_name}</option>
                      )
                    })
                  }
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  โปรดเลือกสถานะสมาชิก.
                </Form.Control.Feedback>
              </Form.Group>
              {/* ที่อยู่ */}
              <Form.Group className="mb-3" >
                <Form.Label>ที่อยู่</Form.Label>
                <Form.Control as="textarea" onChange={(e) => setAddress(e.target.value)} required />
                <Form.Control.Feedback type="invalid">
                  โปรดระบุที่อยู่.
                </Form.Control.Feedback>
              </Form.Group>
              {/* เบอร์โทร */}
              <Form.Group className="mb-3" >
                <Form.Label>เบอร์โทร</Form.Label>
                <Form.Control type="text" onChange={e => setTel(e.target.value)} required />
                <Form.Control.Feedback type="invalid">
                  โปรดระบุเบอร์โทร.
                </Form.Control.Feedback>
              </Form.Group>
              {/* สถานะการชำระเงิน */}
              <Form.Group className="mb-3" >
                <Form.Label>สถานะการชำระเงิน</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setPaymentStatus(e.target.value)} required >
                  <option value=""></option>
                  {
                    payment_status && payment_status.map((item) => {
                      return (
                        <option key={item.paymentstatus_id} value={item.paymentstatus_id}>{item.paymentstatus_name}</option>
                      )
                    })
                  }
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  โปรดเลือกสถานะการชำระเงิน.
                </Form.Control.Feedback>
              </Form.Group>
              {/* ผู้จัดหา */}
              <Form.Group className="mb-3" >
                <Form.Label>ผู้จัดหา</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setProvider(e.target.value)} required>
                  <option value=""></option>
                  <option value={"em-0001"}>คุณ พีระพฤติพิศ</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  โปรดระบุผู้จัดหา.
                </Form.Control.Feedback>
              </Form.Group>
              <div className="modal-footer">
                <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                <button type="button" onClick={handleSubmit} className="btn btn-primary">ยืนยัน</button>
              </div>
            </Form>
          </div>
        </div>
      </div >
    </div >
  );
}

export default AddCustomer;
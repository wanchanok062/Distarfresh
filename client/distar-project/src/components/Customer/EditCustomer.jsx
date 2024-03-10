import { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useUpdateData from '../hook/useUpdateData';
//
function EditCustomer(data) {
  const { customer_id } = useParams();
  const { patchData } = useUpdateData();
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
  // const [customerId, setCustomerId] = useState('');
  const [validated, setValidated] = useState(false);


  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      // event.preventDefault();
      const formData = {
        // customer_id: customerId,
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
      // await post(`${import.meta.env.VITE_APP_API_KEY}customer`, formData);
      await patchData(`${import.meta.env.VITE_APP_API_KEY}customer/${customer_id}`, formData);

    } catch (error) {
      console.log(error);
    }
    setValidated(true);
  };
  

  useEffect(() => {
    if (data.data) {
      data.data.map((customer) => {
        setFullName(customer.full_name);
        setStartDate(customer.start_date.split('T')[0]);
        setEndDate(customer.exp_date.split('T')[0]);
        setAddress(customer.address);
        setTel(customer.tel);
        setCustomerType(customer.customer_type_id);
        setMembership(customer.member_type_id);
        setStatusMember(customer.member_status_id);
        setPaymentStatus(customer.paymentstatus_id);
        setProvider(customer.employee_id);
      })
    }
  }, [data.data])

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
            {data.data && data.data.map((customer) => (
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                  <Form.Label>รหัสสมาชิก</Form.Label>
                  <Form.Control type="text" value={customer.customer_id} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>ชื่อ-นามสกุล</Form.Label>
                  <Form.Control type="text" placeholder={customer.full_name} value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                  <Form.Control.Feedback type="invalid">
                    โปรดระบุชื่อนามสกุล.
                  </Form.Control.Feedback>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" >
                      <Form.Label>วันที่สมัคร <span className="bg-warning" style={{ padding: "0.1px 10px", borderRadius: "20px" }}>{customer.start_date.split('T')[0]}</span></Form.Label>
                      <Form.Control disabled type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        โปรดระบุวันที่สมัคร.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" >
                      <Form.Label>วันที่สิ้นสุด <span className="bg-warning" style={{ padding: "0.1px 10px", borderRadius: "20px" }}>{customer.start_date.split('T')[0]}</span></Form.Label>
                      <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        โปรดระบุวันที่สิ้นสุด.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" >
                  <Form.Label>ประเภทลูกค้า<span className="bg-warning" style={{ padding: "0.1px 10px", borderRadius: "20px" }}>{customer.customer_type_name.split('T')[0]}</span></Form.Label>
                  <Form.Select  aria-label="Default select example" value={customerType} onChange={(e) => setCustomerType(e.target.value)} required >
                    <option value={customer.customer_type_id}>{customer.customer_type_name}</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    โปรดเลือกประเภทลูกค้า.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>รูปแบบสมาชิก <span className="bg-warning" style={{ padding: "0.1px 10px", borderRadius: "20px" }}>{customer.member_type_name}</span></Form.Label>
                  <Form.Select aria-label="Default select example" value={membership} onChange={(e) => setMembership(e.target.value)}>
                    <option value={customer.member_type_id} >{customer.member_type_name}</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>สถานะสมาชิก <span className="bg-warning" style={{ padding: "0.1px 10px", borderRadius: "20px" }}>{customer.member_status_name}</span></Form.Label>
                  <Form.Select aria-label="Default select example" value={statusMember} onChange={(e) => setStatusMember(e.target.value)}>
                    <option value={customer.member_status_id} >{customer.member_status_name}</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>ที่อยู่</Form.Label>
                  <Form.Control as="textarea" placeholder={customer.address} value={address} onChange={(e) => setAddress(e.target.value)} required />
                  <Form.Control.Feedback type="invalid">
                    โปรดระบุที่อยู่.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>เบอร์โทร</Form.Label>
                  <Form.Control type="text" value={tel} placeholder={customer.tel} onChange={e => setTel(e.target.value)} required />
                  <Form.Control.Feedback type="invalid">
                    โปรดระบุเบอร์โทร.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>สถานะการชำระเงิน <span className="bg-warning" style={{ padding: "0.1px 10px", borderRadius: "20px" }}>{customer.paymentstatus_name}</span></Form.Label>
                  <Form.Select aria-label="Default select example" value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)} required>
                    <option value={customer.paymentstatus_id} >{customer.paymentstatus_name}</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>ผู้จัดหา <span className="bg-warning" style={{ padding: "0.1px 10px", borderRadius: "20px" }}>{customer.employee_name}</span></Form.Label>
                  <Form.Select aria-label="Default select example" value={provider} onChange={(e) => setProvider(e.target.value)} required>
                    <option value={customer.employee_id} >{customer.employee_name}</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    โปรดระบุผู้จัดหา.
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="modal-footer">
                  <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                  <button type="submit" className="btn btn-primary">ยืนยัน</button>
                </div>
              </Form>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCustomer;

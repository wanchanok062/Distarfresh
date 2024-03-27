
import { useState, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';

const EditOrder = (order_id) => {
    const [validated, setValidated] = useState(false);
    const [Order_data, setOrder_data] = useState([{}])
    const [operation_data, setOperation_data] = useState([{}])
    const [operation_name, setOperation_name] = useState('')

    //base API
    const API_url = import.meta.env.VITE_APP_API_KEY;

    //get order data from order_id with axios
    useEffect(() => {
        axios.get(`${API_url}orders/${order_id.order_id}`)
            .then((response) => {
                setOrder_data(response.data)
            })
        axios.get(`${API_url}operation`)
            .then((operation) => {
                setOperation_data(operation.data)
            })
    }, [order_id])


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
        <div className="modal fade" id="editOrder" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">แก้ไขคำสั่งซื้อ</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className='mb-2'>
                                <Form.Label>รอบคำสั่งซื้อ</Form.Label>
                                <Form.Control value={Order_data.map((item) => item.cycle_order)} disabled type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>รอบวันจัดส่ง</Form.Label>
                                <Form.Select value={Order_data.map((item) => item.cycle_date)} aria-label="Default select example" required >
                                    <option value=""></option>
                                    <option value="วันจันทร์">วันจันทร์</option>
                                    <option value="วันอังคาร">วันอังคาร</option>
                                    <option value="วันพุธ">วันพุธ</option>
                                    <option value="วันพฤหัสบดี">วันพฤหัสบดี</option>
                                    <option value="วันศุกร์">วันศุกร์</option>
                                    <option value="วันเสาร์">วันเสาร์</option>
                                    <option value="วันอาทิตย์">วันอาทิตย์</option>
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
                                <Form.Select value={Order_data.map((item) => item.operation_name)} aria-label="Default select example" required >
                                    <option value=""></option>
                                    {
                                        operation_data.map((item) => (
                                            <option value={item.operation_name}>{item.operation_name}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                                <button type="submit" className="btn btn-primary">ยืนยัน</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default EditOrder;

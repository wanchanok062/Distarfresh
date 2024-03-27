
import { useState ,useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import usePost from '../hook/usePost';

function AddOrder(dataCustomer) {
    const [validated, setValidated] = useState(false);

    //bese API entpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;

    //state for set data 
    const [cycle_order , setCycle_order] = useState('รอบที่ 1')
    const [delivery_day , setDelivery_day] = useState()
    const [cycle_date , setCycle_date] = useState('วันจันทร์')
    const [operation_data , setOperation_data] = useState([])
    const [operation_name , setOperation_name] = useState('')
    const [customer_id] = useState(dataCustomer.customer_id)

    //form data object
    const data = {
        customer_id : customer_id,
        cycle_order: cycle_order,
        delivery_date: delivery_day,
        cycle_date: cycle_date,
        operation_name: operation_name
    }


    const { post: postData } = usePost();


    // fetch operation data from API
    useEffect(() => {
        fetch(`${API_url}operation`)
            .then((response) => response.json())
            .then((data) => {
                setOperation_data(data)
            })
    }, []);


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        // console.log(delivery_day);
        // event.preventDefault(); 
        postData(`${API_url}order`, data);
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
                                <Form.Select onChange={(e)=>setCycle_order(e.target.value)}  aria-label="Default select example" required >
                                    <option value="รอบที่ 1">รอบที่ 1</option>
                                    <option value="รอบที่ 2">รอบที่ 2</option>
                                    <option value="รอบที่ 3">รอบที่ 3</option>
                                    <option value="รอบที่ 4">รอบที่ 4</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>รอบวันจัดส่ง</Form.Label>
                                <Form.Select onChange={(e)=>setCycle_date(e.target.value)} aria-label="Default select example" required >
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
                                <Form.Control onChange={(e) => setDelivery_day(e.target.value)} type="date" required />
                                <Form.Control.Feedback type="invalid">
                                    โปรดระบุวันที่จัดส่ง.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>สถานะ</Form.Label>
                                <Form.Select onChange={(e)=>{setOperation_name(e.target.value)}} aria-label="Default select example" required >
                                    <option value=""></option>
                                    {
                                        operation_data.map((operation) => {
                                            return <option value={operation.operation_name}>{operation.operation_name}</option>
                                        })
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
        </div>

    );
}

export default AddOrder;

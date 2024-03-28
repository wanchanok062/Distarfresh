import './detail-customer-style.css';
import { Container, Card, Row, Col } from "react-bootstrap"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EditCustomer from './EditCustomer';
import DeleteCustomer from './DeleteCustomer';
import AddOrder from './AddOrder';
import DeleteOrder from './DeleteOrder';
import EditOrder from './EditOrder';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DetailCustomerCard from './CustomerCard/DetailCustomerCard'; // from folder CustomerCard.
import axios from 'axios';
import OrderTrendChart from './CustomerChart/OrderTrendChart'; // from folder CustomerChart.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalDetailProducts from './ModalDetailProducts';


function DetailCustomer() {
    const { customer_id } = useParams();
    const [data, setData] = useState(null);
    const [order_data, setOrderData] = useState(null);


    //function convert date to thai date format (DD/MM/YYYY)
    function convertThaiDate(dateString) {
        const [day, month, year] = dateString.split('/');
        const thaiMonths = [
            'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
            'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
        ];
        const thaiMonth = thaiMonths[parseInt(month, 10) - 1];
        return `${parseInt(day, 10) + 1} ${thaiMonth} ${year}`;
    }

    function convertToThaiDate(isoDate) {
        const dateOnly = isoDate.split('T')[0];
        const [year, month, day] = dateOnly.split('-');
        //create date in format (DD/MM/YYYY)
        const thaiDate = `${day}/${month}/${year}`;
        return convertThaiDate(thaiDate);
    }
    useEffect(() => {
        // Use useEffect hook to fetch data
        const fetchData = async () => {
            try {
                // Fetch customer data
                const customerResponse = await axios.get(`${import.meta.env.VITE_APP_API_KEY}customer/${customer_id}`);
                setData(customerResponse.data);

                // Fetch order data
                const orderResponse = await axios.get(`${import.meta.env.VITE_APP_API_KEY}orders_customer/${customer_id}`);
                setOrderData(orderResponse.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const isFirstLogin = localStorage.getItem('isCreateCustomer');
        if (isFirstLogin === null || isFirstLogin === 'true') {
            notify().then(() => {
                localStorage.setItem('isCreateCustomer', 'false');
            }).catch(error => {
                console.error('Error displaying notification:', error);
            });
        }

        fetchData(); // Call fetchData function when component mounts
    }, [customer_id]); // Run useEffect when customer_id changes



    const notify = () => {
        return new Promise((resolve, reject) => {
            toast.success(`เพิ่มลูกค้าสำเร็จ`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                onClose: resolve // Resolve the promise when the notification is closed
            });
        });
    };




    //state for store data order
    const [order_id, setOrder_id] = useState('')
    const [cycle_order, setCycle_order] = useState('')



    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2 className='mt-3'> รายละเอียดลูกค้า (รหัส: {customer_id}) </h2>
                </Col>
            </Row>
            <Row>
                {/* 3 Card */}
                <Col>
                    {/* from folder CustomerCard */}
                    <DetailCustomerCard/>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="d-flex justify-content-end ">
                    <button className="d-flex justify-content-center align-items-center btn-edit mx-3"
                        data-bs-toggle="modal" data-bs-target="#editCustomer"
                    >
                        <div>
                            <EditOutlinedIcon className='edit-icon' />
                        </div>
                        <div className='mx-1'>
                            แก้ไขข้อมูล
                        </div>
                    </button>
                    <button className="d-flex justify-content-center align-items-center btn-del"
                        data-bs-toggle="modal" data-bs-target="#deleteCustomer"
                    >
                        <div>
                            <CloseOutlinedIcon className='del-icon' />
                        </div>
                        <div className='mx-1'>
                            ลบ
                        </div>
                    </button>
                </Col>
                {/* Modal Customer */}
                <EditCustomer data={data} />
                <DeleteCustomer delete_id={customer_id} />
            </Row>
            <Row>
                <Col md={5} className='mt-3'>
                    <Card id='card-detail'>
                        <Card.Body id='card-body' className="m-4 d-flex justify-content-center align-content-center">
                            {data && data.map((customer) => (
                                <Row key={customer.customer_id}>
                                    <Col md={5} className='text-right'>
                                        รหัสลูกค้า
                                    </Col>
                                    <Col md={6}>
                                        <span className="bg-warning" style={{ padding: "0.1px 10px", borderRadius: "20px" }}> {customer.customer_id}</span>
                                    </Col>
                                    <Col md={5} className='text-right'>
                                        วันที่สมัคร
                                    </Col>
                                    <Col md={6}>
                                        {convertToThaiDate(customer.start_date)}
                                    </Col>
                                    <Col md={5} className='text-right'>
                                        วันที่สิ้นสุด
                                    </Col>
                                    <Col md={6}>
                                        {convertToThaiDate(customer.exp_date)}
                                    </Col>

                                    <Col md={5} className='text-right'>
                                        ชื่อ-สกุล
                                    </Col>
                                    <Col md={6}>
                                        {customer.full_name}
                                    </Col>
                                    <Col md={5} className='text-right'>
                                        เบอร์โทร
                                    </Col>
                                    <Col md={6}>
                                        {customer.tel}
                                    </Col>
                                    <Col md={5} className='text-right'>
                                        ที่อยู่
                                    </Col>
                                    <Col md={6}>
                                        {customer.address}
                                    </Col>
                                    <Col md={5} className='text-right'>
                                        ประเภทลูกค้า
                                    </Col>
                                    <Col md={6}>
                                        {customer.customer_type_name}
                                    </Col>
                                    <Col md={5} className='text-right'>
                                        รูปแบบ
                                    </Col>
                                    <Col md={6}>
                                        {customer.member_type_name}
                                    </Col>
                                    <Col md={5} className='text-right'>
                                        สถานะสมาชิก
                                    </Col>
                                    <Col md={6}>
                                        {customer.member_status_name}
                                    </Col>
                                    <Col md={5} className='text-right'>
                                        การชำระเงิน
                                    </Col>
                                    <Col md={6}>
                                        {customer.paymentstatus_name}
                                    </Col>
                                </Row>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                {/* Order Trend Card */}
                <Col md={7} className='mt-3 '>
                    <Card className='card-piechart'>
                        <Row className='m-3'>
                            <Col md={12} className='d-flex justify-content-center mb-3'>
                                <div className='title'>รายการสินค้าที่นิยม</div>
                            </Col>
                            {/* Order Trend Chart */}
                            <Col md={12} className='d-flex justify-content-center'>
                                {/* Pie Chart from folder CustomerChart */}
                                <OrderTrendChart customer_id={customer_id} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Card className='card-order mt-3'>
                <Card.Title className='mx-3 my-3'>คำสั่งซื้อ</Card.Title>
                <Row>
                    <Col className=' d-flex justify-content-end mx-3'>
                        <button id='add-order' className='btn btn-sm'
                            data-bs-toggle="modal" data-bs-target="#addOrder">
                            เพิ่มคำสั่งซื้อ
                        </button>
                    </Col>
                </Row>
                <Card.Body className='mx-3 card-style'>
                    <Row>
                        <Col className='text-center' md={2}>
                            ID
                        </Col>
                        <Col className='text-center' md={2}>
                            รายการผัก
                        </Col>
                        <Col className='text-center' md={2}>
                            รอบคำสั่งซื้อ
                        </Col>
                        <Col className='text-center' md={2}>
                            วันที่จัดส่ง
                        </Col>
                        <Col className='text-center' md={2}>
                            สถานะ
                        </Col>
                        <Col md={3}>
                            {/* Button */}
                        </Col>
                    </Row>
                    <hr />
                    {/* Data */}
                    <Row>
                        {
                            order_data && order_data.map((order) => (
                                <Row key={order.order_id} className='order-style'>
                                    <Col md={2}>
                                        <div className='text-center'>
                                            {order.order_id}
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='text-center'>
                                            <button onClick={() => setOrder_id(order.order_id)} id='detail-order' className='btn mx-2 btn-sm '
                                                data-bs-toggle="modal" data-bs-target="#ModalDetailProducts" >
                                                ดูรายละเอียด
                                            </button>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='text-center'>
                                            {order.cycle_order}
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className={`text-center ${order.operation_name === 'เลื่อนจัดส่ง' ? 'colorwarn' : ''}`}>
                                            {convertToThaiDate(order.delivery_date)}
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='text-center'>
                                            {order.operation_name}
                                        </div>
                                    </Col>
                                    <Col md={2} className='d-flex justify-content-end'>
                                        {/* <Col md={1}> */}
                                        <button id='edit-order' className='btn mx-2 btn-sm '
                                            data-bs-toggle="modal" data-bs-target="#editOrder" onClick={() => { setOrder_id(order.order_id); setCycle_order(order.cycle_order) }}>
                                            แก้ไข
                                        </button>
                                        {/* </Col> */}
                                        {/* <Col md={1}> */}
                                        <button id='del-order' className='btn btn-sm'
                                            data-bs-toggle="modal" data-bs-target="#deleteOrder" onClick={() => setOrder_id(order.order_id)}
                                        >ลบ</button>
                                        {/* </Col> */}
                                    </Col>
                                    {/* Modal Order */}
                                    {/* <EditOrder data={order} /> */}

                                </Row>
                            ))
                        }
                        {/* Modal Order */}
                        <AddOrder customer_id={customer_id} />
                        <EditOrder order_id={order_id} cycle_order={cycle_order} />
                        <DeleteOrder delete_id={order_id} />
                        <ModalDetailProducts order_id={order_id} customer_id={customer_id} />
                    </Row>
                </Card.Body>
            </Card>
            <ToastContainer />
        </Container>
    )
}

export default DetailCustomer

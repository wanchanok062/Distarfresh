import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import useDeleteData from '../hook/useDeleteData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ModalDetailProducts = (order_id) => {
    const [validated, setValidated] = useState(false);

    //base API
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const [order_detail_data, setOrder_detail_data] = useState([]);
    const [product_data, setProduct_data] = useState([{}]);
    //set data for store new order
    const [product_id, setProduct_id] = useState('');
    const [quantity, setQuantity] = useState();

    //delete data from API
    const { deleteData } = useDeleteData();
    //set data object
    const data = {
        product_id: product_id,
        quantity: quantity,
        order_id: order_id.order_id
    }
    //alert
    const notify = (message) => {
        return new Promise((resolve, reject) => {
            toast.error(`${message}`, {
                position: "top-right",
                autoClose: 1500,
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


    //get order data from order_id with axios
    useEffect(() => {
        axios.get(`${API_url}order_detail/${order_id.order_id}`)
            .then((response) => {
                setOrder_detail_data(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        //get product form API
        axios.get(`${API_url}products`)
            .then((response) => {
                setProduct_data(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [order_id.order_id])


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            return
        }

        if (totalQuantity >= 10) {
            return new Promise((resolve, reject) => {
                notify(`จำนวนสินค้าต้องไม่เกิน 10 หน่วย`);
                resolve(); // ต้องเรียก resolve() เพื่อให้ Promise ทำงานเสร็จสิ้น
            });
        }
        //post data to API with axios
        axios.post(`${API_url}order_detail`, data)
            .then((response) => {
                // console.log(response.data);
                fetchDataFromApi();
            })
            .catch((error) => {
                notify(`ข้อมูลไม่ถูกต้อง`);
                console.log(data);
            })
    }

    const fetchDataFromApi = async () => {
        try {
            const response = await axios.get(`${API_url}order_detail/${order_id.order_id}`);
            setOrder_detail_data(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    //handel delete order detail 
    const deleteOrder = async (order_detail_id) => {
        try {
            deleteData(`${API_url}order_detail/${order_detail_id}`);
            await fetchDataFromApi();
        } catch (error) {
            console.log(error);
        }
    };

    const totalQuantity = order_detail_data.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
    // console.log(totalQuantity);


    return (
        /* to DetailCustomer.jsx */
        <div className="modal fade" id="ModalDetailProducts" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">รายละเอียดสินค้า</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <div className="">
                            <div className="container">
                                {
                                    order_detail_data.map((order_detail, index) => {
                                        return (

                                            <div className="row p-1 order_detail" key={order_detail.order_detail_id}>
                                                <div className="col-md-6"><span className='order_detail_index'>รายการที่ {index + 1}</span> {order_detail.product_name}</div>
                                                <div className="col-md-5"><span className='order_detail_index'>จำนวน </span> {order_detail.quantity} หน่วย</div>
                                                <div className="col-md-1">
                                                    <button id='del-order' className='btn btn-sm' onClick={() => deleteOrder(order_detail.order_detail_id)} >ลบ</button>
                                                </div>
                                            </div>
                                            // <div key={order_detail.order_detail_id}>{order_detail.product_name}{order_detail.quantity}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Form noValidate validated={validated}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="m-3" controlId="">
                                            <Form.Select onChange={(e) => setProduct_id(e.target.value)} required aria-label="Default select example" style={{ width: '100%' }}>
                                                <option value="">เลือกชนิดผัก</option>
                                                {
                                                    product_data.map((product) => {
                                                        return (
                                                            <option key={product.id} value={product.id}>{product.product_name}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                โปรดเลือกชนิดผัก
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Group className="m-3" controlId="">
                                            <Form.Control
                                                style={{ width: '100%' }}
                                                type="number"
                                                min={0}
                                                max={10}
                                                onChange={(e) => { e.target.value > 10 ? setQuantity(10) : setQuantity(e.target.value) }}
                                                aria-describedby="quantity"
                                                placeholder='จำนวน'
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                โปรดระบุจำนวน
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-2">
                                        <Button className='mt-3' id='add-order' onClick={handleSubmit}>เพิ่ม</Button>
                                    </div>
                                    {/* <div className="col p-2">
                                        <Button type='button' className='mt-3' style={{ width: '100%' }} id='add-order' onClick={handleSubmit}>บันทึก</Button>
                                    </div> */}
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
}

export default ModalDetailProducts;

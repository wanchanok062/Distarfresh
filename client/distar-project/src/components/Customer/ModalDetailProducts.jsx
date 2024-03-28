
import { useState, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';

const ModalDetailProducts = (order_id) => {
    const [validated, setValidated] = useState(false);

    //base API
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const [order_detail_data, setOrder_detail_data] = useState([]);

    //get order data from order_id with axios
    useEffect(() => {
        axios.get(`${API_url}order_detail/${order_id.order_id}`)
            .then((response) => {
                setOrder_detail_data(response.data);
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
    }

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
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        </Form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ModalDetailProducts;

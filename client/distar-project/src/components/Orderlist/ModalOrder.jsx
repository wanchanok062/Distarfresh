import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import usePost from "../hook/usePost";
import useDeleteData from "../hook/useDeleteData";
import useUpdateData from "../hook/useUpdateData";


const ModalOrder = (products) => {
    const [validated, setValidated] = useState(false);
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const [product_name, setProduct_name] = useState('')
    const [product_category, setProduct_category] = useState('')
    const { post } = usePost(`${API_url}product`);
    const { deleteData } = useDeleteData();
    const { patchData } = useUpdateData();
    const [category , setCategory ] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_API_KEY}product_category`)
            .then(res => res.json())
            .then(data => {
                setCategory(data);
            });
    }, []);

    useEffect(() => {
        setProduct_name(products.product_name)
        setProduct_category(products.product_category)
    }, [products.product_name])

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (form.checkValidity() === false) {
            return;
        }
        try {
            const formData = {
                product_name: product_name,
                amounts: 0,
                product_category: product_category
            };
            // ตรวจสอบเงื่อนไขว่า formData ไม่เป็นค่าว่าง
            if (Object.values(formData).every(value => value !== '') && Object.values(formData).every(value => value !== null)) {
                event.preventDefault();
                await post(`${API_url}product`, formData);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleEdit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (form.checkValidity() === false) {
            return;
        }
        try {
            const formData = {
                product_name: product_name,
                amounts: 0,
                product_category: product_category
            };
            // ตรวจสอบเงื่อนไขว่า formData ไม่เป็นค่าว่าง
            if (Object.values(formData).every(value => value !== '')) {
                await patchData(`${API_url}product/${products.product_id}`, formData);
                console.log(formData);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        /* Add Order List */
        <div>
            <div className="modal fade" id="addOrderList" aria-labelledby="addOrderListModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">เพิ่มรายการสินค้า</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} >
                                <Form.Group>
                                    <Form.Label>ชื่อสินค้า</Form.Label>
                                    <Form.Control onChange={(e) => setProduct_name(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุชื่อสินค้า.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>หมวดหมู่</Form.Label>
                                    <Form.Select onChange={(e) => setProduct_category(e.target.value)} aria-label="Default select example" required >
                                        <option value=""></option>
                                        {category && category.map((item, index) => {
                                            return (
                                                <option key={index} value={item.product_category_name}>{item.product_category_name}</option>
                                            )
                                        })
                                        }
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">โปรดระบุหมวดหมู่สินค้า</Form.Control.Feedback>
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
            {/* Edit Order List */}
            <div className="modal fade" id="editOrderList" aria-labelledby="editOrderListModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขรายการสินค้า</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated}>
                                {/* form name product */}
                                <Form.Group>
                                    <Form.Label>ชื่อสินค้า</Form.Label>
                                    <Form.Control defaultValue={products.product_name} onChange={(e) => setProduct_name(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุชื่อสินค้า.</Form.Control.Feedback>
                                </Form.Group>
                                {/* form product category */}
                                <Form.Group>
                                    <Form.Label className="my-3">หมวดหมู่ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{products.product_category}</span></Form.Label>
                                    <Form.Select value={product_category} onChange={(e) => setProduct_category(e.target.value)} aria-label="Default select example" required >
                                        {
                                            category && category.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.product_category_name}>{item.product_category_name}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                                    <button type="submit" onClick={handleEdit} className="btn btn-primary">ยืนยัน</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Delete Order List */}
            <div className="modal fade" id="deleteOrderList" aria-labelledby="deleteOrderList" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            คุณต้องการลบ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{products.product_name}</span> ใช่หรือไม่?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button onClick={() => {deleteData(`${API_url}product/${products.product_id}`);window.location.reload()}} type="button" className="btn btn-danger">
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalOrder;
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import useDeleteData from "../hook/useDeleteData";
import useUpdateData from "../hook/useUpdateData";
import usePost from "../hook/usePost";


const ModalCustomer = (customer_type) => {
    const [validated, setValidated] = useState(false);
    const API_url = import.meta.env.VITE_APP_API_KEY;
    //state for delete customer_type
    const customerTypeID = customer_type.customer_type_id
    const customerTypeName = customer_type.customer_type_name
    const { deleteData } = useDeleteData();
    //state for store data customer
    const [customer_name_data, setCustomer_name_data] = useState(null)
    //get customer_type when click edit
    useEffect(() => {
        setCustomer_name_data(customerTypeName)
    }, [customerTypeName])
    // import useUpdate for Update Data
    const { patchData } = useUpdateData();
    //import usePost fir Post Data
    const { post : postData } = usePost();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        patchData(`${API_url}customer_type/${customerTypeID}`, { customer_type_id: customerTypeID ,customer_type_name: customer_name_data  });
        setValidated(true);
    };
    const handlePost = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        postData(`${API_url}customer_type`, { customer_type_name: customer_name_data });
        setValidated(true);
    };
    return (
        /* ประเภทลูกค้า */
        <div>
            {/* Add Type Customer */}
            <div className="modal fade" id="addTypeCustomer" aria-labelledby="addTypeCustomerModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">เพิ่มประเภทลูกค้า</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handlePost}>
                                <Form.Group>
                                    <Form.Label>ประเภทลูกค้า</Form.Label>
                                    <Form.Control onChange={(e)=>setCustomer_name_data(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุประเภทลูกค้า.</Form.Control.Feedback>
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
            {/* Edit Type Customer */}
            <div className="modal fade" id="editTypeCustomer" aria-labelledby="editTypeCustomerModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขประเภทลูกค้า</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated}>
                                <Form.Group>
                                    <Form.Label>ประเภทลูกค้า</Form.Label>
                                    <Form.Control onChange={(e)=>setCustomer_name_data(e.target.value)} required type="text" defaultValue={customer_name_data} placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุประเภทลูกค้า.</Form.Control.Feedback>
                                </Form.Group>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                                    <button type="button" onClick={handleSubmit} data-bs-dismiss="modal" className="btn btn-primary">ยืนยัน</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Delete Type Customer */}
            <div className="modal fade" id={`deleteTypeCustomer`} aria-labelledby="deleteTypeCustomerModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            คุณต้องการลบ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{customerTypeName}</span> ใช่หรือไม่?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button type="button" className="btn btn-danger"  onClick={() => { deleteData(`${API_url}customer_type/${customerTypeID}`);window.location.reload()}}>
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalCustomer;
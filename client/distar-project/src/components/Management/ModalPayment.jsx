import { useState ,useEffect } from "react";
import { Form } from "react-bootstrap";
import useDeleteData from "../hook/useDeleteData";
import useUpdateData from "../hook/useUpdateData";
import usePost from "../hook/usePost";


const ModalPayment = (paymentstatus) => {
    const [validated, setValidated] = useState(false);
    const API_url = import.meta.env.VITE_APP_API_KEY;
    // console.log(paymentstatus);
    //import useDeleteData
    const { deleteData } = useDeleteData();
    
    //state for store data payment_status
    const [payment_status_data, setPayment_status_data] = useState(null)
    
    //get payment_status when click edit
    useEffect(() => {
        setPayment_status_data(paymentstatus.paymentstatus_name)
    }, [paymentstatus.paymentstatus_name])
    
    // import useUpdate for Update Data
    const { patchData } = useUpdateData();
    //import usePost fir Post Data
    const { post : postData } = usePost();


    const handleUpdate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        patchData( `${API_url}payment_status/${paymentstatus.paymentstatus_id}`, { paymentstatus_id: paymentstatus.paymentstatus_id, paymentstatus_name: payment_status_data });
        setValidated(true);
    };
    const handleCreate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        postData(`${API_url}payment_status`, { paymentstatus_name: payment_status_data });
        setValidated(true);
    };
    return (
        /* การชำระเงิน */
        <div>
            {/* Add Payment */}
            <div className="modal fade" id="addPayment" aria-labelledby="addPaymentModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">เพิ่มสถานะการชำระเงิน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleCreate} >
                                <Form.Group>
                                    <Form.Label>สถานะการชำระเงิน</Form.Label>
                                    <Form.Control onChange={(e)=>setPayment_status_data(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุสถานะการชำระเงิน.</Form.Control.Feedback>
                                </Form.Group>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                                    <button type="submit"  className="btn btn-primary">ยืนยัน</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Payment */}
            <div className="modal fade" id="editPayment" aria-labelledby="editPaymentModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขสถานะการชำระเงิน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleUpdate}>
                                <Form.Group>
                                    <Form.Label>สถานะการชำระเงิน</Form.Label>
                                    <Form.Control defaultValue={payment_status_data} onChange={(e)=>setPayment_status_data(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุสถานะการชำระเงิน.</Form.Control.Feedback>
                                </Form.Group>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                                    <button type="submit"  className="btn btn-primary">ยืนยัน</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Delete Payment */}
            <div className="modal fade" id="deletePayment" aria-labelledby="deletePaymentModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            คุณต้องการลบ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{paymentstatus.paymentstatus_name}</span> ใช่หรือไม่?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button onClick={() => {deleteData(`${API_url}payment_status/${paymentstatus.paymentstatus_id}`); window.location.reload() }} type="button" className="btn btn-danger">
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalPayment;
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import useDeleteData from "../hook/useDeleteData";
import useUpdateData from "../hook/useUpdateData";
import usePost from "../hook/usePost";


const ModalStatusOperation = (operation) => {
    const [validated, setValidated] = useState(false);
    //bese API entpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;
    //import useDelete for Delete Data and useUpdate for Update Data
    const { deleteData } = useDeleteData();
    const { patchData } = useUpdateData();
    const { post : postData } = usePost();
    //set data when open modal by use Effect
    const [operation_name, setOperation_name] = useState(null)

    useEffect(() => {
        setOperation_name(operation.operation_name)
    },[operation.operation_name])

    const handleUpdate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        patchData(`${API_url}operation/${operation.operation_id}`, { operation_id: operation.operation_id, operation_name: operation_name });
        setValidated(true);
    };
    const handleCreate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        postData(`${API_url}operation`, { operation_name: operation_name});
        setValidated(true);
    };
    return (
        /* การดำเนินงาน */
        <div>
            {/* Add Operation */}
            <div className="modal fade" id="addOperation" aria-labelledby="addOperationModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">เพิ่มสถานะการดำเนินงาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleCreate}>
                                <Form.Group>
                                    <Form.Label>สถานะการดำเนินงาน</Form.Label>
                                    <Form.Control onChange={(e)=>setOperation_name(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุสถานะการดำเนินงาน.</Form.Control.Feedback>
                                </Form.Group>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                                    <button type="submit"className="btn btn-primary">ยืนยัน</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Operation */}
            <div className="modal fade" id="editOperation" aria-labelledby="editOperationModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขสถานะการดำเนินงาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleUpdate}>
                                <Form.Group>
                                    <Form.Label>สถานะการดำเนินงาน</Form.Label>
                                    <Form.Control onChange={(e)=>setOperation_name(e.target.value)} defaultValue={operation.operation_name}  required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุสถานะการดำเนินงาน</Form.Control.Feedback>
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
            {/* Delete Operation */}
            <div className="modal fade" id="deleteOperation" aria-labelledby="deleteOperationModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        คุณต้องการลบ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{operation.operation_name}</span> ใช่หรือไม่?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button onClick={()=>{deleteData(`${API_url}operation/${operation.operation_id}`);window.location.reload()}}  type="button" className="btn btn-danger" >
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalStatusOperation;
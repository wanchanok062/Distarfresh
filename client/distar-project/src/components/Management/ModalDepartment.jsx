import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import useDeleteData from "../hook/useDeleteData";
import useUpdateData from "../hook/useUpdateData";
import usePost from "../hook/usePost";


const ModalDepartment = (department) => {
    const [validated, setValidated] = useState(false);
    //bese API entpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;
    //state for department data 
    const [department_name, setDepartment_name] = useState(null)
    //import useDelete for Delete Data
    const { deleteData } = useDeleteData();
    const { patchData } = useUpdateData();
    const { post : postData } = usePost();

    //set data when open modal
    useEffect(() => {setDepartment_name(department.department_name)}, [department.department_name])

    const handleUpdate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        patchData(`${API_url}department/${department.department_id}`, { department_id: department.department_id, department_name: department_name });
        setValidated(true);
    };
    const handleCreate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        postData(`${API_url}department`, { department_name: department_name });
        setValidated(true);
    };
    return (
        /* แผนกงาน */
        <div>
            {/* Add Department */}
            <div className="modal fade" id="addDepartment" aria-labelledby="addDepartmentModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">เพิ่มแผนกงาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleCreate} >
                                <Form.Group>
                                    <Form.Label>แผนกงาน</Form.Label>
                                    <Form.Control onChange={(e)=>setDepartment_name(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุแผนกงาน.</Form.Control.Feedback>
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
            {/* Edit Department */}
            <div className="modal fade" id="editDepartment" aria-labelledby="editDepartmentModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขแผนกงาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleUpdate}>
                                <Form.Group>
                                    <Form.Label>แผนกงาน</Form.Label>
                                    <Form.Control onChange={(e)=>setDepartment_name(e.target.value)} defaultValue={department.department_name} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุแผนกงาน.</Form.Control.Feedback>
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
            {/* Delete Department*/}
            <div className="modal fade" id="deleteDepartment" aria-labelledby="deleteDepartmentModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            คุณต้องการลบ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{department.department_name}</span> ใช่หรือไม่?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button onClick={()=>{deleteData(`${API_url}department/${department.department_id}`);window.location.reload()}} type="button" className="btn btn-danger">
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalDepartment;
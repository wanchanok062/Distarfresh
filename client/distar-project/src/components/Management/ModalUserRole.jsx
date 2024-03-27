import { useState,useEffect } from "react";
import { Form } from "react-bootstrap";
import useDeleteData from "../hook/useDeleteData";
import useUpdateData from "../hook/useUpdateData";
import usePost from "../hook/usePost";



const ModalUserRole = (employee_role) => {
    const [validated, setValidated] = useState(false);
    //bese API entpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;
    //import useDelete for Delete Data
    const [role_name,setRrole_name] = useState(null)
    //import useUpdate for Update Data and useDelete for Delete Data
    const { deleteData } = useDeleteData();
    const { patchData } = useUpdateData();
    const { post : postData } = usePost();

    //set data when open modal 
    useEffect(() => {
        setRrole_name(employee_role.employee_role_name)
    },[employee_role.employee_role_name])

    const handleEdit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        patchData( `${API_url}employee_role/${employee_role.employee_role_id}`, {role_id: employee_role.employee_role_id, role_name: role_name });
        setValidated(true);
    };
    const handleCreate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        postData(`${API_url}employee_role`, { role_name: role_name});
        setValidated(true);
    };
    return (
        /* บทบาทผู้ใช้งาน */
        <div>
            {/* Add User Role */}
            <div className="modal fade" id="addUserRole" aria-labelledby="addUserRoleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">เพิ่มบทบาทผู้ใช้งาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleCreate} >
                                <Form.Group>
                                    <Form.Label>บทบาทผู้ใช้งาน</Form.Label>
                                    <Form.Control onChange={(e)=>setRrole_name(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุบทบาทผู้ใช้งาน.</Form.Control.Feedback>
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
            {/* Edit User Role */}
            <div className="modal fade" id="editUserRole" aria-labelledby="editUserRoleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขบทบาทผู้ใช้งาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleEdit}>
                                <Form.Group>
                                    <Form.Label>บทบาทผู้ใช้งาน</Form.Label>
                                    <Form.Control onChange={(e)=>setRrole_name(e.target.value)} defaultValue={employee_role.employee_role_name} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุบทบาทผู้ใช้งาน.</Form.Control.Feedback>
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
            {/* Delete User Role */}
            <div className="modal fade" id="deleteUserRole" aria-labelledby="deleteUserRoleModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            คุณต้องการลบ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{employee_role.employee_role_name}</span> ใช่หรือไม่?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button onClick={() => {deleteData(`${API_url}employee_role/${employee_role.employee_role_id}`);window.location.reload()}} type="button" className="btn btn-danger">
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalUserRole;
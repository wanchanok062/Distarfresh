import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import useFecth from "../hook/useFetch";
import usePost from "../hook/usePost";
import useDeleteData from "../hook/useDeleteData";
import useUpdateData from "../hook/useUpdateData";
const ModalEmployee = (employee) => {
    const [validated, setValidated] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    //bese API entpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const { data: department } = useFecth(API_url + '/department');
    const { data: employee_role } = useFecth(API_url + '/employee_role');

    //define patch
    const { patchData } = useUpdateData();

    useEffect(() => {
        setEmployee_name(employee.employee_name)
        setRole_id(employee.role_id)
        setDepartment_id(employee.department_id)
    }, [employee.employee_name])


    //define post
    const { post } = usePost();

    //define delete
    const { deleteData } = useDeleteData();

    //state for store employee data
    const [employee_name, setEmployee_name] = useState('')
    const [role_id, setRole_id] = useState('')
    const [department_id, setDepartment_id] = useState('')


    //handleCreate function for post data to API
    const handleCreate = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        try {
            const formData = {
                employee_name: employee_name,
                role_id: role_id,
                department_id: department_id
            };

            await post(`${import.meta.env.VITE_APP_API_KEY}employee`, formData);

        } catch (error) {
            console.log(error);
        }
        setValidated(true);
    };

    //handleCreate function for patch data to API
    const handleEdit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        try {
            const formData = {
                employee_name: employee_name,
                role_id: role_id,
                department_id: department_id
            };

            await patchData(`${import.meta.env.VITE_APP_API_KEY}employee/${employee.employee_id}`, formData);

        } catch (error) {
            console.log(error);
        }
        setValidated(true);
    };



    const toggleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword); // เปลี่ยนสถานะการแสดงรหัสผ่านเมื่อคลิกที่ปุ่ม
    };

    return (
        // Add Employee 
        <div>
            <div className="modal fade" id="addEmployee" aria-labelledby="addEmployeeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">เพิ่มพนักงาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleCreate}>
                                <Form.Group>
                                    <Form.Label>ชื่อพนักงาน</Form.Label>
                                    <Form.Control onChange={(e) => setEmployee_name(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุชื่อพนักงาน.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>แผนก</Form.Label>
                                    <Form.Select onChange={(e) => setDepartment_id(e.target.value)} aria-label="Default select example" required >
                                        <option value=""></option>
                                        {department?.map((item, index) => (
                                            <option key={index} value={item.department_id}>{item.department_name}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>บทบาทผู้ใช้งาน</Form.Label>
                                    <Form.Select onChange={(e) => setRole_id(e.target.value)} aria-label="Default select example" required >
                                        <option value=""></option>
                                        {employee_role?.map((item, index) => (
                                            <option key={index} value={item.role_id}>{item.role_name}</option>
                                        ))}
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
            {/* Edit Employee */}
            <div className="modal fade" id="editEmployee" aria-labelledby="editEmployeeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขพนักงาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleEdit}>
                                <Form.Group>
                                    <Form.Label>ชื่อพนักงาน</Form.Label>
                                    <Form.Control onChange={(e) => setEmployee_name(e.target.value)} defaultValue={employee_name} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุชื่อพนักงาน.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="my-2">แผนก </Form.Label>
                                    <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{employee.department_name}</span>
                                    <Form.Select onChange={(e) => setDepartment_id(e.target.value)} aria-label="Default select example" required >
                                        <option value={department_id}>{employee.department_name}</option>
                                        {
                                            department && department.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.department_id}>{item.department_name}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="my-2">บทบาทผู้ใช้งาน</Form.Label>
                                    <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{employee.role_name}</span>
                                    <Form.Select onChange={(e) => setRole_id(e.target.value)} aria-label="Default select example" required >
                                        <option value={role_id}>{employee.role_name}</option>
                                        {employee_role?.map((item, index) => (
                                            <option key={index} value={item.role_id}>{item.role_name}</option>
                                        ))}
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
            {/* Edit Password Employee */}
            <div className="modal fade" id="editPasswordEmployee" aria-labelledby="editEmployeeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขพนักงาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated}>
                                <Form.Group>
                                    <Form.Label>รหัสผ่าน</Form.Label>
                                    <Form.Control required type={showPassword ? "text" : "password"} placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุชื่อพนักงาน.</Form.Control.Feedback>
                                </Form.Group>
                                <div className="modal-footer">
                                    <button onClick={(e) => toggleShowPassword(e)} className="btn btn-primary">{showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}</button>
                                    <button type="submit" className="btn btn-primary">ยืนยัน</button>
                                    <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Delete Employee */}
            <div className="modal fade" id="deleteEmployee" aria-labelledby="deleteEmployee" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            คุณต้องการลบคุณ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{employee.employee_name}</span> จากการเป็นพนักงานใช่หรือไม่?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button onClick={() => deleteData(`${API_url}employee/${employee.employee_id}`)} type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalEmployee;
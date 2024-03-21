import { useState } from "react";
import { Form } from "react-bootstrap";
const ModalEmployee = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
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
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>ชื่อพนักงาน</Form.Label>
                                    <Form.Control required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุชื่อพนักงาน.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>แผนก</Form.Label>
                                    <Form.Select aria-label="Default select example" required >
                                        <option value="">...</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>บทบาทผู้ใช้งาน</Form.Label>
                                    <Form.Select aria-label="Default select example" required >
                                        <option value="">...</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุชื่อผู้ใช้งาน.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุรหัสผ่าน.</Form.Control.Feedback>
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
            {/* Edit Employee */}
            <div className="modal fade" id="editEmployee" aria-labelledby="editEmployeeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขพนักงาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>ชื่อพนักงาน</Form.Label>
                                    <Form.Control required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุชื่อพนักงาน.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>แผนก</Form.Label>
                                    <Form.Select aria-label="Default select example" required >
                                        <option value="">...</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>บทบาทผู้ใช้งาน</Form.Label>
                                    <Form.Select aria-label="Default select example" required >
                                        <option value="">...</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุชื่อผู้ใช้งาน.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุรหัสผ่าน.</Form.Control.Feedback>
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
            {/* Delete Employee */}
            <div className="modal fade" id="deleteEmployee" aria-labelledby="deleteEmployee" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            เมื่อคุณทำการลบข้อมูลผู้ใช้งาน ข้อมูลทั้งหมดจะหายไปจากระบบทันทีและไม่สามารถกู้คืนได้กด "ลบ" หากคุณยืนยันลบข้อมูลนี้
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button type="button" className="btn btn-danger">
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
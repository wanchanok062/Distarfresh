import { useState } from "react";
import { Form } from "react-bootstrap";


const ModalStatusOperation = () => {
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
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>สถานะการดำเนินงาน</Form.Label>
                                    <Form.Control required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุสถานะการดำเนินงาน.</Form.Control.Feedback>
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
            {/* Edit Operation */}
            <div className="modal fade" id="editOperation" aria-labelledby="editOperationModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขสถานะการดำเนินงาน</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>สถานะการดำเนินงาน</Form.Label>
                                    <Form.Control required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุสถานะการดำเนินงาน</Form.Control.Feedback>
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
            {/* Delete Operation */}
            <div className="modal fade" id="deleteOperation" aria-labelledby="deleteOperationModal" aria-hidden="true">
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
export default ModalStatusOperation;
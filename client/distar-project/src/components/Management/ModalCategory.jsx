import { useState } from "react";
import { Form } from "react-bootstrap";

const ModalCategory = () => {
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
        /* หมวดหมู่สินค้า */
        <div>
            {/* Add Category */}
            <div className="modal fade" id="addCategory" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">เพิ่มหมวดหมู่สินค้า</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>หมวดหมู่สินค้า</Form.Label>
                                    <Form.Control required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุหมวดหมู่สินค้า.</Form.Control.Feedback>
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
            {/* Edit Category */}
            <div className="modal fade" id="editCategory" aria-labelledby="editCategoryModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขหมวดหมู่สินค้า</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>หมวดหมู่สินค้า</Form.Label>
                                    <Form.Control required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุหมวดหมู่สินค้า.</Form.Control.Feedback>
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
            {/* Delete Category */}
            <div className="modal fade" id="deleteCategory" aria-labelledby="deleteCategoryModal" aria-hidden="true">
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
export default ModalCategory;
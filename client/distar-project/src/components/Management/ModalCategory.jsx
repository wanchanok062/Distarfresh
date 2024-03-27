import { useState,useEffect } from "react";
import { Form } from "react-bootstrap";
import useDeleteData from "../hook/useDeleteData";
import useUpdateData from "../hook/useUpdateData";
import usePost from "../hook/usePost";


const ModalCategory = (product_category) => {
    const [validated, setValidated] = useState(false);
    //bese API entpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;
    //state for set data when open modal
    const [product_category_name, setProduct_category_name] = useState(null);

    //import useDelete for Delete Data and useUpdate for Update Data
    const { deleteData } = useDeleteData();
    const { patchData } = useUpdateData();
    const { post : postData } = usePost();

    //set data when open modal by use Effect
    useEffect(() => {
        setProduct_category_name(product_category.product_category_name)
    },[product_category.product_category_name])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        patchData( `${API_url}product_category/${product_category.product_category_id}`, {product_category_id: product_category.product_category_id, product_category_name: product_category_name });
        setValidated(true);
    };
    const handleCreate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        postData(`${API_url}product_category`, { product_category_name: product_category_name});
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
                            <Form noValidate validated={validated} onSubmit={handleCreate}>
                                <Form.Group>
                                    <Form.Label>หมวดหมู่สินค้า</Form.Label>
                                    <Form.Control onChange={(e) => setProduct_category_name(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุหมวดหมู่สินค้า.</Form.Control.Feedback>
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
                                    <Form.Control onChange={(e) => setProduct_category_name(e.target.value)} defaultValue={product_category.product_category_name} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุหมวดหมู่สินค้า.</Form.Control.Feedback>
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
            {/* Delete Category */}
            <div className="modal fade" id="deleteCategory" aria-labelledby="deleteCategoryModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        คุณต้องการลบ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{product_category.product_category_name}</span> ใช่หรือไม่?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button onClick={()=>{deleteData(`${API_url}product_category/${product_category.product_category_id}`);window.location.reload()}} type="button" className="btn btn-danger" >
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
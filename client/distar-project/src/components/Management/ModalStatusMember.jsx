import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import useDeleteData from "../hook/useDeleteData";
import useUpdateData from "../hook/useUpdateData";
import usePost from "../hook/usePost";



const ModalStatusMember = (props) => {
    const [validated, setValidated] = useState(false);
    const [member_status_name, setMember_status_name] = useState(null)
    //bese API entpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;
    //get data form props StatusMemberManagement.jsx
    const data = props
    //import useDelete for Delete Data
    const { deleteData } = useDeleteData();
    //import useUpdate for Update Data
    const { patchData } = useUpdateData();
    //import usePost fir Post Data
    const { post: postData } = usePost();


    //set data when open modal 
    useEffect(() => {
        setMember_status_name(data.member_status_name)
    }, [data.member_status_name])


    //handle even Edit items
    const handleEditSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        patchData(`${API_url}member_status/${data.member_status_id}`, { member_status_id: data.member_status_id, member_status_name: member_status_name });
        setValidated(true);
    };
    //handle even Create items
    const handleCreateSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        postData(`${API_url}member_status`, { member_status_name: member_status_name });
        setValidated(true);
    };
    return (
        /* สถานะสมาชิก */
        <div>
            {/* Add Status Member */}
            <div className="modal fade" id="addStatusMember" aria-labelledby="addStatusMemberModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">เพิ่มสถานะสมาชิก</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleCreateSubmit}>
                                <Form.Group>
                                    <Form.Label>สถานะสมาชิก</Form.Label>
                                    <Form.Control onChange={(e) => setMember_status_name(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุสถานะสมาชิก.</Form.Control.Feedback>
                                </Form.Group>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">ยืนยัน</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Status Member */}
            <div className="modal fade" id="editStatusMember" aria-labelledby="editStatusMemberModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขสถานะสมาชิก</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleEditSubmit}>
                                <Form.Group>
                                    <Form.Label>สถานะสมาชิก</Form.Label>
                                    <Form.Control defaultValue={data.member_status_name} onChange={(e) => setMember_status_name(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุสถานะสมาชิก.</Form.Control.Feedback>
                                </Form.Group>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                                    <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">ยืนยัน</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Delete Status Member */}
            <div className="modal fade" id="deleteStatusMember" aria-labelledby="deleteStatusMemberModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            คุณต้องการลบ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{data.member_status_name}</span> ใช่หรือไม่?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { deleteData(`${API_url}member_status/${data.member_status_id}`); window.location.reload() }}>
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalStatusMember;
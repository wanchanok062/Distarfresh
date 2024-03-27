import { useState,useEffect } from "react";
import { Form } from "react-bootstrap";
import useDeleteData from "../hook/useDeleteData";
import useUpdateData from "../hook/useUpdateData";
import usePost from "../hook/usePost";

const ModalMember = (member_type) => {
    const [validated, setValidated] = useState(false);
    //state for store data member_type
    const [member_type_name,setMember_type_name] = useState('');
    const API_url = import.meta.env.VITE_APP_API_KEY;

    //import useUpdate for Update Data and useDelete for Delete Data 
    const { patchData } = useUpdateData();
    const { deleteData } = useDeleteData();
    const { post : postData } = usePost();

    //get member_type when click edit
    useEffect(() => {
        setMember_type_name(member_type.member_type_name)
    } ,[member_type.member_type_name])


    const handleEdit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        patchData( `${API_url}member_type/${member_type.member_type_id}`, { member_type_id: member_type.member_type_id, member_type_name: member_type_name });
        setValidated(true);
    };
    const handleCreate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        postData(`${API_url}member_type`, { member_type_name: member_type_name });
        setValidated(true);
    };
    return (
        /* รูปแบบสมาชิก */
        <div>
            {/* Add Type Member */}
            <div className="modal fade" id="addTypeMember" aria-labelledby="addTypeMemberModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">เพิ่มรูปแบบสมาชิก</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleCreate} >
                                <Form.Group>
                                    <Form.Label>รูปแบบสมาชิก</Form.Label>
                                    <Form.Control onChange={(e)=>setMember_type_name(e.target.value)} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุรูปแบบสมาชิก.</Form.Control.Feedback>
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
            {/* Edit Type Member */}
            <div className="modal fade" id="editTypeMember" aria-labelledby="editTypeMemberModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขรูปแบบสมาชิก</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form noValidate validated={validated} onSubmit={handleEdit}>
                                <Form.Group>
                                    <Form.Label>รูปแบบสมาชิก</Form.Label>
                                    <Form.Control onChange={(e)=>{setMember_type_name(e.target.value)}} defaultValue={member_type.member_type_name} required type="text" placeholder="" />
                                    <Form.Control.Feedback type="invalid">โปรดระบุรูปแบบสมาชิก.</Form.Control.Feedback>
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
            {/* Delete Type Member */}
            <div className="modal fade" id="deleteTypeMember" aria-labelledby="deleteTypeMemberModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        คุณต้องการลบ <span style={{ backgroundColor: '#ffc404', padding: '0.1rem', borderRadius: '10px' }}>{member_type_name}</span> ใช่หรือไม่?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                            <button onClick={()=>{deleteData(`${API_url}member_type/${member_type.member_type_id}`);window.location.reload()}}  className="btn btn-danger" type="button">
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalMember;
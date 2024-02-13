import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteDetail = ({ showDeleteModal, handleDeleteModalClose, handleDelete }) => {
    return (
        <Modal show={showDeleteModal} onHide={handleDeleteModalClose}
            style={{fontFamily: 'Kanit'}}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>ยืนยันการลบ!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={{fontSize: '16px', color: '#464646'}}>
                    เมื่อคุณทำการลบข้อมูลผู้ใช้งาน ข้อมูลทั้งหมดจะหายไปจากระบบทันทีและไม่สามารถกู้คืนได้กด "ลบ" หากคุณยืนยันลบข้อมูลนี้
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn bg-none" variant="none" onClick={handleDeleteModalClose}>
                    ยกเลิก
                </Button>
                <Button className="btn bg-danger" variant="danger" onClick={handleDelete}>
                    ลบ
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteDetail;

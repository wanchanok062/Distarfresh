
function DeleteCustomer() {
    return (
        /* to DetailCustomer.jsx */
        <div className="modal fade" id="delete" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">ยืนยันการลบ!</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        เมื่อคุณทำการลบข้อมูลผู้ใช้งาน ข้อมูลทั้งหมดจะหายไปจากระบบทันทีและไม่สามารถกู้คืนได้กด "ลบ" หากคุณยืนยันลบข้อมูลนี้
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                        <button type="button" className="btn btn-danger">ลบ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteCustomer



function EditCustomer() {
    return (
        /* to DetailCustomer.jsx */
        <div className="modal fade" id="edit" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">แก้ไขข้อมูลลูกค้า</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">รหัสสมาชิก</label>
                            <input type="email" className="form-control" placeholder="SW0008" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">ชื่อ-สกุล</label>
                            <input type="email" className="form-control" required />
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">วันที่สมัคร</label>
                                    <input type="date" className="form-control" id="startDate" required />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">วันที่สิ้นสุด</label>
                                    <input type="date" className="form-control" id="endDate" required />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">ประเภทลูกค้า</label>
                            <select className="form-select">
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">รูปแบบสมาชิก</label>
                            <select className="form-select">
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">สถานะสมาชิก</label>
                            <select className="form-select">
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">ที่อยู่</label>
                            <input type="text" className="form-control" id="address" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">สถานะการชำระเงิน</label>
                            <select className="form-select">
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">ผู้จัดหา</label>
                            <select className="form-select">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                        <button type="button" className="btn btn-primary" id="submitBtn">ยืนยัน</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCustomer

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function EditOrder() {
    return (
        /* to DetailCustomer.jsx */
        <div className="modal fade" id="editOrder" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">แก้ไขคำสั่งซื้อ</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">รอบคำสั่งซื้อ</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <label className="form-label">รายการ</label>
                            </div>
                            <div className='col-md-5'>
                                <label className="form-label">จำนวน</label>
                            </div>
                            <div className='col-md-2'>

                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-md-5'>
                                <input type="text" className="form-control" />
                            </div>
                            <div className='col-md-5'>
                                <input type="text" className="form-control" />
                            </div>
                            <div className='col-md-2'>
                                <button className='btn btn-primary'><AddOutlinedIcon /></button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">รอบวันจัดส่ง</label>
                            <select className="form-select">
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">วันที่จัดส่ง</label>
                            <input type="date" className="form-control" id="startDate" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">สถานะ</label>
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
        </div >
    )
}

export default EditOrder

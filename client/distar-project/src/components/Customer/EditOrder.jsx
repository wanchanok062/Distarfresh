
import { useState } from 'react';

function EditOrder() {
    const [listOrder, setListOrder] = useState('');
    const [listOrderError, setListOrderError] = useState(false);

    const [quantity, setQuantity] = useState('');
    const [quantityError, setQuantityError] = useState('');

    const [delivery, setDelivery] = useState('');
    const [deliveryError, setDeliveryError] = useState(false);

    const [orderDate, setOrderDate] = useState('');
    const [orderDateError, setOrderDateError] = useState(false);

    const [status, setStatus] = useState('');
    const [statusError, setStatusError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();


        if (listOrder.trim() === '') {
            setListOrderError(true);
        } else {
            console.log(listOrder);
        }
        if (quantity.trim() === '') {
            setQuantityError(true);
        } else {
            console.log(quantity);
        }
        if (delivery.trim() === '') {
            setDeliveryError(true);
        } else {
            console.log(delivery);
        }
        if (orderDate.trim() === '') {
            setOrderDateError(true);
        } else {
            console.log(orderDate);
        }
        if (status.trim() === '') {
            setStatusError(true);
        } else {
            console.log(status);
        }
    };

    return (
        /* to DetailCustomer.jsx */
        <div className="modal fade" id="editOrder" aria-labelledby="editOrderCustomer" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editOrderCustomer">แก้ไขคำสั่งซื้อ</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">รอบคำสั่งซื้อ</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="form-label">รายการ</label>
                                    <input type="text" name='listOrder'
                                        onChange={e => setListOrder(e.target.value)}
                                        className='form-control' required />
                                    {/* Required. */}
                                    {listOrderError && <div style={{ color: 'red' }}>ระบุรายการ</div>}
                                </div>
                                <div className='col-md-6'>
                                    <label className="form-label">จำนวน</label>
                                    <input type="text" name='quantity'
                                        onChange={e => setQuantity(e.target.value)}
                                        className="form-control" />
                                    {/* Required. */}
                                    {quantityError && <div style={{ color: 'red' }}>ระบุจำนวน</div>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">รอบวันจัดส่ง</label>
                                <select className="form-select" name='delivery'
                                    onChange={e => setDelivery(e.target.value)} required>
                                    <option value=""></option>
                                </select>
                                {/* Required. */}
                                {deliveryError && <div style={{ color: 'red' }}>ระบุรอบวันจัดส่ง</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">วันที่จัดส่ง</label>
                                <input type="date" name='orderdate'
                                    onChange={e => setOrderDate(e.target.value)}
                                    className="form-control" id="orderDate" required />
                                {/* Required. */}
                                {orderDateError && <div style={{ color: 'red' }}>ระบุวันที่จัดส่ง</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">สถานะ</label>
                                <select className="form-select" id='status'
                                    onChange={e => setStatus(e.target.value)} required>
                                    <option value=""></option>
                                </select>
                                {/* Required. */}
                                {statusError && <div style={{ color: 'red' }}>ระบุสถานะ</div>}
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                        <button onClick={handleSubmit} className="btn btn-primary">ยืนยัน</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditOrder;

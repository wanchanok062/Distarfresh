import { useState } from "react";

function EditCustomer() {
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [startDateError, setStartDateError] = useState(false);

  const [endDate, setEndDate] = useState('');
  const [endDateError, setEndDateError] = useState(false);

  const [customerType, setCustomerType] = useState('');
  const [customerTypeError, setCustomerTypeError] = useState(false);

  const [membership, setMembership] = useState('');
  const [membershipError, setMembershipError] = useState(false);

  const [statusMember, setStatusMember] = useState('');
  const [statusMemberError, setStatusMemberError] = useState(false);

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);

  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentStatusError, setPaymentStatusError] = useState(false);

  const [provider, setProvider] = useState('');
  const [providerError, setProviderError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.trim() === '') {
      setFullNameError(true);
    } else {
      console.log(fullName);
    }
    if (startDate.trim() === '') {
      setStartDateError(true);
    } else {
      console.log(startDate);
    }
    if (endDate.trim() === '') {
      setEndDateError(true);
    } else {
      console.log(endDate);
    }
    if (customerType.trim() === '') {
      setCustomerTypeError(true);
    } else {
      console.log(customerType);
    }
    if (membership.trim() === '') {
      setMembershipError(true);
    } else {
      console.log(membership);
    }
    if (statusMember.trim() === '') {
      setStatusMemberError(true);
    } else {
      console.log(statusMember);
    }
    if (address.trim() === '') {
      setAddressError(true);
    } else {
      console.log(address);
    }
    if (paymentStatus.trim() === '') {
      setPaymentStatusError(true);
    } else {
      console.log(paymentStatus);
    }
    if (provider.trim() === '') {
      setProviderError(true);
    } else {
      console.log(provider);
    }
  }
  return (
    /* to DetailCustomer.jsx*/
    <div className="modal fade" id="editCustomer" aria-labelledby="editCustomerModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editCustomerModalLabel">แก้ไขข้อมูลลูกค้า</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label">รหัสสมาชิก</label>
                <input type="text" className="form-control" placeholder="SW0008" />
              </div>
              <div className="mb-3">
                <label className="form-label">ชื่อ-สกุล</label>
                <input type="text" name="fullName"
                  onChange={e => setFullName(e.target.value)}
                  className="form-control" required />
                {/* Required. */}
                {fullNameError && <div className="text-danger">ระบุชื่อ-สกุล</div>}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">วันที่สมัคร</label>
                    <input type="date" name="startDate"
                      onChange={e => setStartDate(e.target.value)}
                      className="form-control" required />
                    {/* Required. */}
                    {startDateError && <div className="text-danger">ระบุวันที่สมัคร</div>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">วันที่สิ้นสุด</label>
                    <input type="date" name="endDate"
                      onChange={e => setEndDate(e.target.value)}
                      className="form-control" required />
                    {/* Required. */}
                    {endDateError && <div className="text-danger">ระบุวันที่สิ้นสุด</div>}
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">ประเภทลูกค้า</label>
                <select className="form-select" name="customerType"
                  onChange={e => setCustomerType(e.target.value)}
                  required>
                  <option value=""></option>
                </select>
                {/* Required. */}
                {customerTypeError && <div className="text-danger">ระบุประเภทลูกค้า</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">รูปแบบสมาชิก</label>
                <select className="form-select" name="membership"
                  onChange={e => setMembership(e.target.value)}
                  required>
                  <option value=""></option>
                </select>
                {/* Required. */}
                {membershipError && <div className="text-danger">ระบุสมาชิก</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">สถานะสมาชิก</label>
                <select className="form-select" name="statusMember"
                  onChange={e => setStatusMember(e.target.value)}
                  required>
                  <option value=""></option>
                </select>
                {/* Required. */}
                {statusMemberError && <div className="text-danger">ระบุสถานะสมาชิก</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">ที่อยู่</label>
                <input type="text" name="address"
                  onChange={e => setAddress(e.target.value)}
                  className="form-control" required />
                {/* Required. */}
                {addressError && <div className="text-danger">ระบุที่อยู่</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">สถานะการชำระเงิน</label>
                <select className="form-select"
                  onChange={e => setPaymentStatus(e.target.value)}
                  required>
                  <option value=""></option>
                </select>
                {/* Required. */}
                {paymentStatusError && <div className="text-danger">ระบุสถานะการชำระเงิน</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">ผู้จัดหา</label>
                <select className="form-select"
                  onChange={e => setProvider(e.target.value)}
                  required>
                  <option value=""></option>
                </select>
                {/* Required. */}
                {providerError && <div className="text-danger">ระบุผู้จัดหา</div>}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">ยืนยัน</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCustomer;

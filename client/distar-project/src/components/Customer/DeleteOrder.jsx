import useDeleteData from "../hook/useDeleteData";

function DeleteOrder(order_id) {
    //base API entpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;
    //import useDeleteData
    const { deleteData } = useDeleteData();

    return (
        <div className="modal fade" id="deleteOrder" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">ยืนยันการลบ!</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        คุณต้องการลบรายการนี้หรือไม่?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-none" data-bs-dismiss="modal" >ยกเลิก</button>
                        <button type="button" onClick={()=> {deleteData(`${API_url}order/${order_id.delete_id}`);window.location.reload()}} className="btn btn-danger" > ลบ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteOrder;

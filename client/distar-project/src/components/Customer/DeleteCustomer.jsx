import axios from 'axios';
import { useState } from 'react'; // Import useState hook

function DeleteCustomer({delete_id}) {
   
    const [isLoading, setIsLoading] = useState(false); // State to manage loading state

    const deleteOrder = async () => {
     
        setIsLoading(true); // Set loading state to true when deletion starts
        try {
            console.log(delete_id);
            // Make a DELETE request to the server to delete the order
            const response = await axios.delete(`${import.meta.env.VITE_APP_API_KEY}customer/${delete_id}`);
            // Handle success response
            window.location.href = '/customer';
        } catch (error) {
            // Handle error
            console.error('Error deleting order:', error);
            // You can display an error message or perform other error handling actions here
        } finally {
            setIsLoading(false); // Set loading state to false after deletion (whether success or failure)
        }
    };
    return (
        /* to DetailCustomer.jsx */
        <div className="modal fade" id="deleteCustomer" aria-labelledby="delete" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="delete">ยืนยันการลบ!</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        เมื่อคุณทำการลบข้อมูลผู้ใช้งาน ข้อมูลทั้งหมดจะหายไปจากระบบทันทีและไม่สามารถกู้คืนได้กด "ลบ" หากคุณยืนยันลบข้อมูลนี้
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-none" data-bs-dismiss="modal">ยกเลิก</button>
                        <button type="button" className="btn btn-danger" onClick={deleteOrder} disabled={isLoading}>
                            {isLoading ? 'กำลังลบ...' : 'ลบ'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteCustomer

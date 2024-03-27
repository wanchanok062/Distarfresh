import Customrt from "../Customer/Customrt"
import { Routes, Route } from "react-router-dom";
import DetailCustomer from "../Customer/DetailCustomer";
import AllCustomer from "../Customer/AllCustomer";
import Management from "../Management/Management";
import useFetch from "../hook/useFetch";
import { createContext, useState } from "react";
import OrderList from "../Orderlist/OrderList";
import Employee from "../Employee/Employee";
import Schedule from "../Schedule/Schedule";
import Dashboard from "../Dashboard/Dashboard";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
export const CustomersContext = createContext();



const Home = () => {
    // Assuming customer data is fetched using useFetch hook
    const [customers, setCustomers] = useState([]);
    // Fetch customers data here using useFetch hook and set it using setCustomers
    return (
        <div>
            {/* Routes from router */}
            <CustomersContext.Provider value={{ customers, setCustomers }}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/customer" element={<Customrt />} />
                    <Route path="/customer/allcustomer" element={<AllCustomer />} />
                    <Route path="/customer/detailcustomer/:customer_id" element={<DetailCustomer />} />
                    {localStorage.getItem('user_role') === 'แอดมิน' && (
                        <>
                            <Route path="/employee" element={<Employee />} />
                            <Route path="/management/:component" element={<Management />} />
                        </>
                    )}
                    <Route path="/orderlist" element={<OrderList />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </CustomersContext.Provider>
        </div>
    );
}

export default Home;

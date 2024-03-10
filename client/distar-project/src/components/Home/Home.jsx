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
export const CustomersContext = createContext();

const Home = () => {
    // Assuming customer data is fetched using useFetch hook
    const [customers, setCustomers] = useState([]);

    // Fetch customers data here using useFetch hook and set it using setCustomers

    return (
        <div>
            {/* Routes from router */}
            <CustomersContext.Provider>
            <Routes>
                <Route path="/customer/*" element={<Customrt/>} />
                <Route path="/customer/allcustomer" element={<AllCustomer />} />
                <Route path="/customer/detailcustomer/:customer_id" element={<DetailCustomer />} />
            </Routes>
            <CustomersContext.Provider value={{ customers, setCustomers }}>
                <Routes>
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/customer" element={<Customrt />} />
                    <Route path="/customer/allcustomer" element={<AllCustomer />} />
                    <Route path="/customer/detailcustomer/:customer_id" element={<DetailCustomer />} />
                    <Route path="/orderlist" element={<OrderList />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/management" element={<Management />} />
                </Routes>
            </CustomersContext.Provider>
        </div>
    );
}

export default Home;

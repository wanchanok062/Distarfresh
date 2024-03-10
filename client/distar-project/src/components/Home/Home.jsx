import Customrt from "../Customer/Customrt" 
import { Routes, Route } from "react-router-dom";
import DetailCustomer from "../Customer/DetailCustomer";
import AllCustomer from "../Customer/AllCustomer";
import useFetch from "../hook/useFetch";
import { createContext } from "react";
export const CustomersContext = createContext();

const Home = () => {
    
    
    return (
        <div>
            {/* Routes from router */}
            <CustomersContext.Provider>
            <Routes>
                <Route path="/customer/*" element={<Customrt/>} />
                <Route path="/customer/allcustomer" element={<AllCustomer />} />
                <Route path="/customer/detailcustomer/:customer_id" element={<DetailCustomer />} />
            </Routes>
            </CustomersContext.Provider>
        </div>
    );
}

export default Home;

import Customrt from "../Customer/Customer";
import { Routes, Route } from "react-router-dom";
import DetailCustomer from "../Customer/DetailCustomer";
import AllCustomer from "../Customer/AllCustomer";
const Home = () => {

    return (
        <div>
            {/* Routes from router */}
            <Routes>
                <Route path="/customer" element={<Customrt />} />
                <Route path="/customer/allcustomer" element={<AllCustomer />} />
                <Route path="/customer/detailcustomer" element={<DetailCustomer />} />
            </Routes>
        </div>
    );
}

export default Home;

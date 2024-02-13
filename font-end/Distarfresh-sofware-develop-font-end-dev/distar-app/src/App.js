import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { CssBaseline, Box } from "@mui/material";
import SideBar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Navbar";
import Management from './component/Management';
import Customer from './component/Customer';
import AllCustomer from "./component/AllCustomer";
import DetailCustomer from "./component/DetailCustomer";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <CssBaseline />
      <div className="app">
        <SideBar isOpen={isSidebarOpen} />
        <main className="content">
        <Navbar onToggleSidebar={toggleSidebar} />
          <div className="content_body">

            <Box>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/management" element={<Management />} />
                <Route path="/AllCustomer" element={<AllCustomer />} />
                <Route path={`/detail-customer/:id`} element={<DetailCustomer />} />
              </Routes>
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
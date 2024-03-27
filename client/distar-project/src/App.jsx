
import Appbar from "./components/Appbar/Appbar";
import Header from "./components/Header/Header";
import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login";
import useProtectedRoute from "./components/hook/useProtectedRoute";


function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  //check if user is authenticated
  const authCheck = useProtectedRoute();

  if (!localStorage.getItem('accessToken') && !authCheck) {
    return (
      <div className="d-flex justify-content-center align-items-center " style={{ width: "100%", height: "100vh" }}>
        <Login />
      </div>
    )
  }
  return (
    <>
      <CssBaseline />
      <div className="app">
        <Appbar isSidebar={isSidebar} />
        <main className="content">
          <Header setIsSidebar={setIsSidebar} />
          <div className="content_body">
            <Box m="20px">
              <Home />
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
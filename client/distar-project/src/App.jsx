
import Appbar from "./components/Appbar/Appbar";
import Header from "./components/Header/Header";
import { Box, CssBaseline } from "@mui/material";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  //use navigate
  const navigate = useNavigate();
  //base API endpoint
  const API_url = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      navigate('/login');
      return
    }
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };

    axios.get(API_url + '/protected', { headers })
      .then(response => {
        if (response.data.message === 'ok') {

        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [])

  if (!localStorage.getItem('accessToken')) {
    return (
      <div className="d-flex justify-content-center align-items-center " style={{width:"100%", height:"100vh"}}>
        <Login />;
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
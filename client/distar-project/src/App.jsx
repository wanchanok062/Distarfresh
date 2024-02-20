
import Appbar from "./components/Appbar/Appbar";
import Header from "./components/Header/Header";
import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import Home from "./components/Home/Home"
function App() {
  const [isSidebar, setIsSidebar] = useState(true);
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
import { Box } from "@mui/material";
import "./header-style.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <Box className="header" display="flex" justifyContent="space-between" p={2}>
      {/* headerbar left */}
      <Box display="flex" borderRadius="3px" backgroundColor="#F5EFE7">
        <Link to="./" className="btn">Back</Link>
      </Box>

      {/* headerbar right */}
      <Box display="flex">
        <Card id="card" className="p-2">
          <div id="card-text">Admin</div>
        </Card>
      </Box>
    </Box>
  );
};

export default Header;
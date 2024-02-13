import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'; // Import the icon you want to use
import { Nav, Col, Row } from 'react-bootstrap';
import '../css/sidebar.css';
import logo from '../img/logo.png';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img className='sidebar-logo' src={logo} alt='logo' />
      <div className='sidebar-link'>
        <Link className='d-flex' to="/">
          <AutoAwesomeMosaicOutlinedIcon className='mx-2 my-1' />
          ภาพรวม
        </Link>
        <Link className='d-flex' to="/schedule">
          <LocalShippingOutlinedIcon className='mx-2 my-1' />
          ตารางจัดส่งสินค้า
        </Link>
        <Link className='d-flex' to="/customer">
          <PeopleAltOutlinedIcon className='mx-2 my-1' />
          ลูกค้า
        </Link>
        <Link className='d-flex' to="/oderlist">
          <StorefrontOutlinedIcon className='mx-2 my-1' />
          รายการสินค้า
        </Link>
        <Link className='d-flex' to="/employee">
          <SupportAgentOutlinedIcon className='mx-2 my-1' />
          พนักงาน
        </Link>
        <Link className='d-flex' to="/management">
          <SettingsOutlinedIcon className='mx-2 my-1' />
          จัดการข้อมูล
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

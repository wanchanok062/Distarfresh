import { Container, Row, Col, } from 'react-bootstrap';
import '../css/customer.css';
import CustomerForm from './modal/CustomerForm';
import { useState,useEffect } from 'react';
import ShowAllCustomer from './ShowAllCustomer';
import { Link } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import axios from 'axios';



const Customer = () => {
  const url = 'http://localhost:1337/api/customers?populate=employee';
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.data);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
    return () => {}; // Cleanup function if needed
  }, [data]);



  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <div className='d-flex justify-content-end'>
        <Row className='my-3'>
          <Col md={12} className='mx-3'>
            <button className='btn-customer' onClick={handleModalOpen}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='mx-2' style={{
                  background: "rgba(222, 227, 240, 1)",
                  width: '25px',
                  height: '25px',
                  borderRadius: '5px',
                  marginRight: '2px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <PersonAddAltIcon style={{ color: '#4D639B' }} />
                </div>
                <div style={{
                  color: 'rgba(77, 99, 155, 1)'
                }}>
                  เพิ่มรายชื่อลูกค้า
                </div>
              </div>
            </button>
            <Link to="/AllCustomer">
              <button className='btn-customer' style={{ color: '#CE9525' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div className='mx-2' style={{
                    background: "rgba(246, 215, 154, 1)",
                    width: '25px',
                    height: '25px',
                    borderRadius: '5px',
                    marginRight: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <PeopleOutlineIcon style={{ color: '#CE9525' }} />
                  </div>
                  <div>
                    ลูกค้าทั้งหมด
                  </div>
                </div>
              </button>
            </Link>
          </Col>
        </Row>
      </div>
      <ShowAllCustomer data={data} />
      {/* Conditionally render CustomerForm based on showModal state */}
      {showModal && <CustomerForm showModal={showModal} handleModalClose={handleModalClose} />}
    </Container>
  );
};

export default Customer;

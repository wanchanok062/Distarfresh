import { Container, Col, Row } from "react-bootstrap";
import CustomerList from "./CustomerList";
import './customer-style.css';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddCustomer from "./AddCustomer";
import { Link } from "react-router-dom";
const Customrt = () => {
    return (
        <Container>
            {/* Button */}
            <Row>
                <Col className="d-flex justify-content-end">
                    <button id="btn-customer" className='mx-3' data-bs-toggle="modal" data-bs-target="#addCustomer">
                        <div style={{ display: 'flex', alignItems: 'center', color: '#4D639B' }}>
                            <div className='bg-icon mx-1' style={{ background: '#DEE3F0' }}>
                                <PersonAddAltOutlinedIcon />
                            </div>
                            <div>
                                เพิ่มรายชื่อลูกค้า
                            </div>
                        </div>
                    </button>
                    <Link to="/customer/allcustomer">
                        <button id="btn-customer">
                            <div style={{ display: 'flex', alignItems: 'center', color: '#CE9525' }}>
                                <div className="bg-icon" style={{ background: '#F6D79A' }}>
                                    <PeopleAltOutlinedIcon />
                                </div>
                                <div>
                                    ลูกค้าทั้งหมด
                                </div>
                            </div>
                        </button>
                    </Link>
                </Col>
                {/* Modal */}
                <AddCustomer />
            </Row>
            {/* End Button. */}
            <Row>
                <Col>
                    <CustomerList />
                </Col>
            </Row>

        </Container>
    );
}

export default Customrt;

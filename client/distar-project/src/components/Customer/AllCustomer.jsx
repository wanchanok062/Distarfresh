import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddCustomer from "./AddCustomer";
import { Col, Container, Row } from 'react-bootstrap';
import CustomerList from './CustomerList';

function AllCustomer() {
    return (
        <Container>
            <Row>
                <Col>
                    <div style={{fontSize: '24px'}}>รายชื่อลูกค้าทั้งหมด</div>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <button id="btn-customer" data-bs-toggle="modal" data-bs-target="#addCustomer">
                        <div style={{ display: 'flex', alignItems: 'center', color: '#4D639B' }}>
                            <div className='bg-icon mx-1' style={{ background: '#DEE3F0' }}>
                                <PersonAddAltOutlinedIcon />
                            </div>
                            <div>
                                เพิ่มรายชื่อลูกค้า
                            </div>
                        </div>
                    </button>
                    {/* Modal */}
                    <AddCustomer />
                </Col>
            </Row>
            <Row>
                <Col>
                {/* Show CustomerList.jsx */}
                    <CustomerList />
                </Col>
            </Row>
        </Container>
    )
}

export default AllCustomer

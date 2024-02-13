import ShowAllCustomer from "./ShowAllCustomer";
import { Row, Col, Container } from "react-bootstrap";
import { useState} from "react";
import CustomerForm from "./modal/CustomerForm";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import useFetch from "../customHook/useFetch";
// import axios from 'axios';

const AllCustomer = () => {
    const [showModal, setShowModal] = useState(false);
    const url = 'http://localhost:1337/api/customers?populate=employee';

    const { data} = useFetch(url);


    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };
    return (
        <Container>
            <Row>
                <Col>
                    <div className="title my-3">
                        รายชื่อลูกค้าทั้งหมด
                    </div>
                </Col>
                <Col className="d-flex justify-content-end my-3 mx-3">
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
                </Col>
            </Row>
            <ShowAllCustomer data={data} />
            {showModal && <CustomerForm showModal={showModal} handleModalClose={handleModalClose} />}
        </Container>
    )
}
export default AllCustomer;
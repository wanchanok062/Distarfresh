import { SupportAgentOutlined } from "@mui/icons-material";
import { Col, Container, Row, Card, Form, FormControl } from "react-bootstrap";
import { useState,useEffect} from "react";
import './employee-style.css';
import ModalEmployee from "./ModalEmployee";
import useFetch from '../hook/useFetch'

const Employee = () => {
    //bese API entpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;
    const [employees, setEmployees] = useState([]);

    const [employee_id, setEmployId] = useState('');
    const [employee_name, setEmployName] = useState('');
    const [department_name, setDepartmentName] = useState('');
    const [role_name, setRole_name] = useState('');
    const [role_id, setRole_id] = useState('');
    const [department_id, setDepartmentId] = useState('');

    useEffect(()=>{
        const fetchEmployee = async() =>{
            try{
                const response = await fetch(`${API_url}employees`);
                const data = await response.json();
                setEmployees(data);
            }
            catch(err){
                console.log(err);
            }
        }
        
        fetchEmployee();
    },[])



    // send data to modal
    const sendDataModal = (employee_id,employee_name,department_name,role_name,role_id,department_id) => { 
        setEmployId(employee_id); 
        setEmployName(employee_name); 
        setDepartmentName(department_name); 
        setRole_name(role_name);
        setRole_id(role_id);
        setDepartmentId(department_id);
    }


    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{ fontSize: '24px' }}>พนักงานทั้งหมด</div>
                </Col>
                <Col className="d-flex justify-content-end">
                    <button
                        data-bs-toggle="modal" data-bs-target="#addEmployee"
                        className="btn-add add-employee">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='bg-icon mx-1' style={{ background: '#DEE3F0' }}>
                                <SupportAgentOutlined />
                            </div>
                            <div>
                                เพิ่มพนักงาน
                            </div>
                        </div>
                    </button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="card-employee">
                        <Row className="mt-3 mx-3">
                            <Col className="d-flex justify-content-end">
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="ค้นหา"
                                        className="mr-sm-2"
                                        size="sm"
                                    />
                                </Form>
                            </Col>
                        </Row>
                        <Row className="mx-3 mt-3">
                            <Col md={1}>
                                <div>ลำดับ</div>
                            </Col>
                            <Col md={2}>
                                <div>ชื่อพนักงาน</div>
                            </Col>
                            <Col md={2}>
                                <div>แผนก</div>
                            </Col>
                            <Col md={2}>
                                <div>บทบาทผู้ใช้งาน</div>
                            </Col>
                            <Col md={2}>
                                <div>Username</div>
                            </Col>
                            <Col md={2}>
                                <div>Password</div>
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        {
                            employees && employees.map((employee, index) => (
                                <Row className="mx-3 mb-3" key={employee.employee_id}>
                                    <Col md={1}>
                                        {index + 1}
                                    </Col>
                                    <Col md={2}>
                                        {employee.employee_name}
                                    </Col>
                                    <Col md={2}>
                                        {employee.department_name}
                                    </Col>
                                    <Col md={2}>
                                        {employee.role_name}
                                    </Col>
                                    <Col md={2}>
                                        {employee.username}
                                    </Col>
                                    <Col md={2}>
                                        <button data-bs-toggle="modal" data-bs-target="#editPasswordEmployee" className="btn btn-sm edit-employee">จัดการรหัสผ่าน</button>
                                    </Col>
                                    <Col md={1} className="d-flex justify-content-end gap-2">
                                        <button onClick={() =>sendDataModal(employee.employee_id,employee.employee_name,employee.department_name,employee.role_name,employee.role_id,employee.department_id) } data-bs-toggle="modal" data-bs-target="#editEmployee" className="btn btn-sm edit-employee">แก้ไข</button>
                                        <button onClick={() => { setEmployId(employee.employee_id); setEmployName(employee.employee_name) }} data-bs-toggle="modal" data-bs-target="#deleteEmployee" className="btn btn-sm del-employee">ลบ</button>
                                    </Col>
                                </Row>
                            ))
                        }
                        <ModalEmployee employee_id={employee_id} employee_name={employee_name} department_name={department_name} role_name={role_name} role_id={role_id} department_id={department_id}/>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Employee;
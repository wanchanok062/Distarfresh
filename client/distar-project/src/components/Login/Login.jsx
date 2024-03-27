
import React, { useState,useEffect } from 'react'
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../Appbar/logo.png';
import './login-style.css';
import axios from 'axios';
//import use navgate
import { useNavigate } from "react-router-dom";

const Login = () => {
    //use navigate
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    //base API endpoint
    const API_url = import.meta.env.VITE_APP_API_KEY;
    //set username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

 

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        try {
            const response = await axios.post(API_url+'login', { username, password });
            const accessToken = response.data.accessToken;
            const user_role = response.data.role_name;
            const employee_id  = response.data.employee_id;
            const employee_name  = response.data.employee_name;
            //set token to local storage
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('user_role', user_role);
            localStorage.setItem('employee_id', employee_id);
            localStorage.setItem('employee_name', employee_name);

        } catch (error) {
            // console.error('Login failed:', error);
            alert('Login failed. Please try again.')
        }
        navigate('/');
        // setValidated(true);
    };
    return (
        <Container className='mt-5 d-flex  justify-content-center align-content-center'>
            <Row>
                <Col className='d-flex  justify-content-center align-content-center'>
                    <Card className='login-card'>
                        <Row className=' my-5'>
                            {/* Logo */}
                            <Col className='mb-3 text-center'>
                                <div>
                                    <img className='img-logo' src={logo} alt="logo" />
                                </div>
                            </Col>
                            <Col md={12} className='text-center'>
                                <Card.Title className='login-title'>Login</Card.Title>
                            </Col>
                            <Col md={12} className='mb-3 text-center'>
                                <div style={{ fontSize: '16px', color: '#777777', fontWeight: 'normal' }}>sign in to your account</div>
                            </Col>
                            <Col md={12} className='d-flex justify-content-center align-content-center'>
                                <div style={{ width: '60%', fontWeight: 'normal' }}>
                                    {/* Form */}
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="username">
                                            <Form.Control
                                                type="username"
                                                placeholder="Username"
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">โปรดระบุชื่อผู้ใช้งาน.</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">โปรดระบุรหัสผ่าน.</Form.Control.Feedback>
                                        </Form.Group>
                                        {/* Button */}
                                        <Button onClick={handleSubmit} variant="primary" className='w-100' type="submit">
                                            Login
                                        </Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Login;
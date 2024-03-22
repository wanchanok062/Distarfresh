
import React, { useState } from 'react'
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../Appbar/logo.png';
import './login-style.css';

const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Container style={{padding: '100px'}} className='mt-5 d-flex justify-content-center align-content-center'>
            <Row>
                <Col>
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
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">โปรดระบุชื่อผู้ใช้งาน.</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
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
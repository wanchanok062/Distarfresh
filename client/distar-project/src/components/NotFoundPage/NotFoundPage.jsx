import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './not-found-style.css';
const NotFoundPage = () => {
    return (
        <Container className='page-container d-flex align-items-center justify-content-center'>
            <div className='content-card my-5 p-0'>
                <Row>
                    <Col className='title-header'>
                        <div>
                            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXg1YTRiaGlwZjAza3Z4c2EwZW5rOHZyZ2VkMGU5czg2ZTQ5dHVtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H54feNXf6i4eAQubud/giphy.gif" alt="My GIF" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='topic'>
                            404 Page Not Found
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='caption mb-3'>
                            Sorry, the page you are looking for could not be found.
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default NotFoundPage
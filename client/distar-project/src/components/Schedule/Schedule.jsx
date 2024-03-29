import { Container, Row, Col, Card, Form, FormControl, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { map, filter } from "lodash";
import './schedule-style.css';
const Schedule = () => {

    //function convert date to thai date format (DD/MM/YYYY)
    function convertThaiDate(dateString) {
        const [day, month, year] = dateString.split('/');
        const thaiMonths = [
            'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
            'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
        ];
        const thaiMonth = thaiMonths[parseInt(month, 10) - 1];
        return `${parseInt(day, 10) + 1} ${thaiMonth} ${year}`;
    }

    function convertToThaiDate(isoDate) {
        const dateOnly = isoDate.split('T')[0];
        const [year, month, day] = dateOnly.split('-');
        //create date in format (DD/MM/YYYY)
        const thaiDate = `${day}/${month}/${year}`;
        return convertThaiDate(thaiDate);
    }

    const [orders, setOrders] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_API_KEY}schedules`)
            .then(response => {
                let filteredOrders = response.data;
                if (searchText) {
                    filteredOrders = filter(filteredOrders, order =>
                        order.full_name.includes(searchText) ||
                        order.order_id.includes(searchText)
                    );
                }
             
                filteredOrders = filter(filteredOrders, { operation_name: "กำลังดำเนินการ" });
                setOrders(filteredOrders);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [searchText]);

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{ fontSize: "24px" }}>ตารางจัดส่งสินค้า</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="card-schedule">
                        <Row className="my-3 mx-3">
                            <Col className="d-flex justify-content-end gap-2">
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="ค้นหาลูกค้า"
                                        className="mr-sm-2"
                                        size="sm"
                                        value={searchText} // ใช้ค่า searchText เป็นค่าของ input
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                </Form>
                            </Col>
                        </Row>
                        <Row className="mx-3 text-center">
                            <Col md={2}>
                                <div>รหัส</div>
                            </Col>
                            <Col md={2}>
                                <div>ชื่อ-สกุล</div>
                            </Col>
                            <Col md={2}>
                                <div>วัน</div>
                            </Col>
                            <Col md={2}>
                                <div>วันที่</div>
                            </Col>
                            <Col md={2}>
                                <div>สถานะ</div>
                            </Col>
                        </Row>
                        <hr className="mx-4" />
                        {/* Loop through the orders array */}
                        {map(orders, (order) => (
                            <Row className="mx-3 mb-3 text-center" key={order.order_id}>
                                <Col md={2}>
                                    <div>{order.order_id}</div>
                                </Col>
                                <Col md={2}>
                                    <div>{order.full_name}</div>
                                </Col>
                                <Col md={2}>
                                    <div>{order.cycle_date}</div>
                                </Col>
                                <Col md={2}>
                                    <div>{convertToThaiDate(order.delivery_date)}</div>
                                </Col>
                                <Col md={2}>
                                    <div>{order.operation_name}</div>
                                </Col>
                                <Col md={2}>
                                    {/* to DetailCustomer.jsx id */}
                                    <Link to="./customer/detailcustomer/">
                                        <button className="btn btn-sm detail">รายละเอียด</button>
                                    </Link>
                                </Col>
                            </Row>
                        ))}
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Schedule;
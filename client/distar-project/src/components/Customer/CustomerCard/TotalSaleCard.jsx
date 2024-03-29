
import { Card, Row, Col } from 'react-bootstrap';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const TotalSaleCard = () => {

    const [customers, setCustomers] = useState([]);

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}customers`);
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Get current month
    const today = new Date();
    const options = {
        month: "long",
    };

    const currentMonth = new Intl.DateTimeFormat("th-TH", options).format(today);

    // Get the number of customers whose start_date is in the current month
    const getCurrentMonthCustomers = () => {
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();

        // Filter customers whose start_date is in the current month
        const currentMonthCustomers = _.filter(customers, (customer) => {
            const startDate = new Date(customer.start_date);
            return startDate.getMonth() + 1 === currentMonth && startDate.getFullYear() === currentYear;
        });
        return currentMonthCustomers.length;
    };


    return (
        // to Customrt.jsx and Dashboard.jsx
        <div>
            {/*Total Customer Card */}
            <Card className='card-total-customer mb-3'>
                <div className='color-1'></div>
                <Row className='m-3'>
                    <Col className='m' md={8} xs={8}>
                        <div>ยอดขายเดือน <span className="bg-warning" style={{ padding: "0.1px 10px", borderRadius: "20px" }}>{currentMonth}</span> </div> {/* Title */}
                        <div className='text-data'>{getCurrentMonthCustomers()}</div> {/* Data */}
                    </Col>
                    <Col md={4} xs={4}>
                        <div className='icon d-flex justify-content-end'>
                            <div className='icon-1'>
                                {/* Icon */}
                                <MonetizationOnOutlinedIcon sx={{ fontSize: 40 }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )

}
export default TotalSaleCard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const BestSellerCard = () => {
    const [bestSeller, setBestSeller] = useState('');

    useEffect(() => {
        const fetchBestSeller = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}order_details`);
                const products = response.data;

                // สร้างออบเจ็กต์เพื่อเก็บจำนวนสินค้าแต่ละชนิด
                const productCounts = {};

                // วนลูปผ่านข้อมูลเพื่อนับจำนวนสินค้าแต่ละชนิด
                products.forEach(product => {
                    const productName = product.product_name;
                    if (productCounts[productName]) {
                        productCounts[productName] += product.quantity;
                    } else {
                        productCounts[productName] = product.quantity;
                    }
                });

                // หาชื่อสินค้าที่มีจำนวนการขายมากที่สุด
                let maxQuantity = 0;
                let bestSellerName = '';
                for (const productName in productCounts) {
                    if (productCounts[productName] > maxQuantity) {
                        maxQuantity = productCounts[productName];
                        bestSellerName = productName;
                    }
                }

                setBestSeller(bestSellerName);
            } catch (error) {
                console.error('Error fetching best seller:', error);
            }
        };
        fetchBestSeller();
    }, []);

    return (
        <Card className='card-total-customer mb-3'>
            <div className='color-2'></div>
            <Row className='m-3'>
                <Col className='m' md={8} xs={8}>
                    <div>สินค้าที่ขายดีที่สุด</div> {/* Title */}
                    <div className='' style={{fontSize:'30px'}}>{bestSeller}</div> {/* Data */}
                </Col>
                <Col md={4} xs={4}>
                    <div className='icon d-flex justify-content-end'>
                        <div className='icon-2'>
                            {/* Icon */}
                            <StorefrontOutlinedIcon sx={{ fontSize: 40 }} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default BestSellerCard;

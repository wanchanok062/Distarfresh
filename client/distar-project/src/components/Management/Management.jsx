import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './management-style.css';
import CustomerManagement from "./Management Component/CustomerManagement";
import StatusMemberManagement from "./Management Component/StatusMemberManagement";
import MemberManagement from "./Management Component/MemberManagement";
import CategoryManagement from "./Management Component/CategoryManagement";
import UserRoleManagement from "./Management Component/UserRoleManagement";
import PaymentManagement from "./Management Component/PaymentManagement";
import StatusOperationManagement from "./Management Component/StatusOperationManagement";
import DepartmentManagement from "./Management Component/DepartmentManagement";
const Management = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{ fontSize: "24px" }}>การจัดการข้อมูล</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{
                                borderBottom: 1,
                                borderColor: 'divider',
                                overflowX: 'auto'
                            }}>
                                <TabList onChange={handleChange}
                                    aria-label="lab API tabs example"
                                    sx={{ display: 'flex' }}
                                    variant="scrollable"
                                    scrollButtons
                                    allowScrollButtonsMobile
                                >
                                    {/* Tab */}
                                    <Tab sx={{ fontFamily: 'Kanit', fontSize: '18px' }} label="ประเภทลูกค้า" value="1" />
                                    <Tab sx={{ fontFamily: 'Kanit', fontSize: '18px' }} label="สถานะสมาชิก" value="2" />
                                    <Tab sx={{ fontFamily: 'Kanit', fontSize: '18px' }} label="รูปแบบสมาชิก" value="3" />
                                    <Tab sx={{ fontFamily: 'Kanit', fontSize: '18px' }} label="หมวดหมู่สินค้า" value="4" />
                                    <Tab sx={{ fontFamily: 'Kanit', fontSize: '18px' }} label="การชำระเงิน" value="5" />
                                    <Tab sx={{ fontFamily: 'Kanit', fontSize: '18px' }} label="การดำเนินงาน" value="6" />
                                    <Tab sx={{ fontFamily: 'Kanit', fontSize: '18px' }} label="บทบาทผู้ใช้งาน" value="7" />
                                    <Tab sx={{ fontFamily: 'Kanit', fontSize: '18px' }} label="แผนกงาน" value="8" />
                                </TabList>
                            </Box>
                            {/* !!! Tab Content !!! */}
                            {/* ประเภทลูกค้า */}
                            <TabPanel value="1" sx={{ fontFamily: 'Kanit', marginLeft: '10px' }}>
                                <CustomerManagement />
                            </TabPanel>
                            {/* สถานะสมาชิก */}
                            <TabPanel value="2" sx={{ fontFamily: 'Kanit', marginLeft: '10px' }}>
                                <StatusMemberManagement />
                            </TabPanel>
                            {/* รูปแบบสมาชิก */}
                            <TabPanel value="3" sx={{ fontFamily: 'Kanit', marginLeft: '10px' }}>
                                <MemberManagement />
                            </TabPanel>
                            {/* หมวดหมู่สินค้า */}
                            <TabPanel value="4" sx={{ fontFamily: 'Kanit', marginLeft: '10px' }}>
                                <CategoryManagement />
                            </TabPanel>
                            {/* สถานะการชำระเงิน */}
                            <TabPanel value="5" sx={{ fontFamily: 'Kanit', marginLeft: '10px' }}>
                                <PaymentManagement />
                            </TabPanel>
                            {/* สถานะการดำเนินงาน */}
                            <TabPanel value="6" sx={{ fontFamily: 'Kanit', marginLeft: '10px' }}>
                                <StatusOperationManagement />
                            </TabPanel>
                            {/* บทบาทผู้ใช้งาน */}
                            <TabPanel value="7" sx={{ fontFamily: 'Kanit', marginLeft: '10px' }}>
                                <UserRoleManagement />
                            </TabPanel>
                            {/* แผนกงาน */}
                            <TabPanel value="8" sx={{ fontFamily: 'Kanit', marginLeft: '10px' }}>
                                <DepartmentManagement />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Col>
            </Row>
        </Container >
    )
}

export default Management;

import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {MdLocationOn} from 'react-icons/md'
import {SocialIcon} from 'react-social-icons'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <>
        <Container className="enquiry-location">
            <Row className="operating-row">
                <Col md={6} xs={12} className="location-title">            
                    <Row>
                        <Col className="operating-hour">
                            <h1>Operating Hours :</h1>
                            <p className="operating-hour-text">Monday - Friday : 9a.m. - 5p.m.</p>
                            <p className="operating-hour-text">Saturday & Sunday : Closed</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xs={12} className="enquiry-col">
                    <h1 className="enquiry">Enquiry</h1>
                    <p className="enquiry-text">If you have any questions regarding our products, feel free to drop us a message through whatsapp or email & our representative will get in touch with you within 24 hours.</p>
                    <Row>
                        <Col xs={12} className="p-0">
                            <div className="d-flex enquiry-contact">
                                <SocialIcon network="whatsapp" bgColor="transparent" fgColor="black" url="https://wa.link/9b010m" style={{height:"70px", width:"70px"}}></SocialIcon>
                                <p className="contact-number">+60 16-528 3678</p>
                            </div>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="p-0">
                            <div className="d-flex enquiry-contact">
                                <SocialIcon url="mailto:aroindustrialparts@gmail.com" bgColor="transparent" fgColor="black" style={{height:"70px", width:"70px"}}></SocialIcon>
                                <p className="contact-number">aroindustrialparts@gmail.com</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ContactUs
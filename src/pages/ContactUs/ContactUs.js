import React from 'react'
import GoogleMap from '../../components/Google/GoogleMap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {MdLocationOn} from 'react-icons/md'
import {SocialIcon} from 'react-social-icons'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <>
        <Container className="google-map-div">
                <iframe
                width="100%"
                height="100%"
                frameborder="0" style={{border:0}}
                src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBdJwfGeMP5LstjHpTtlEFeFHWLoN5HhOE&q=Puspakom,Ipoh" allowfullscreen>
                </iframe>
        </Container>
        <Container className="pt-5 pb-5 enquiry-location">
            <Row>
                <Col md={6} xs={12} className="location-title">
                    <h5 className="mb-4">Our Location</h5>
                    <Row className="mb-4">
                        <Col xs={1}>
                            <MdLocationOn size={25} className="location"/>
                        </Col>
                        <Col xs={10}>
                            <p>Laluan Perusahaan Menglembu 10, Kawasan Perusahaan Menglembu, 31450 Ipoh, Perak (Opposite Puspakom)</p> 
                        </Col>      
                    </Row>
                    
                    <Row>
                        <Col className="operating-hour">
                            <p><b>Operating Hours :</b></p>
                            <p className="mb-0">Monday - Friday : 9a.m. - 5p.m.</p>
                            <p>Saturday & Sunday : Closed</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xs={12} className="enquiry-col">
                    <p className="enquiry"><b>Enquiry</b></p>
                    <p>If you have any questions regarding our products, feel free to drop us a message through whatsapp or email & our representative will get in touch with you within 24 hours.</p>
                    <Row>
                        <Col xs={12} className="p-0">
                            <div className="d-flex enquiry-contact">
                                <SocialIcon network="whatsapp" bgColor="transparent" fgColor="black" url="https://wa.link/9b010m"></SocialIcon>
                                <p className="contact-number">+60 16-528 3678</p>
                            </div>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="p-0">
                            <div className="d-flex enquiry-contact">
                                <SocialIcon url="mailto:aroindustrialparts@gmail.com" bgColor="transparent" fgColor="black"></SocialIcon>
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
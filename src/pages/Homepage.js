import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import logo from '../images/spare_parts.jpg'
import {HandThumbsUp} from 'react-bootstrap-icons'
import spareparts from '../images/spareparts.jpg'
import ImageFadeIn from 'react-image-fade-in'
import {FcBiomass} from 'react-icons/fc'
import {FcElectronics} from 'react-icons/fc'
import {GiWaterDrop} from 'react-icons/gi'
import {FaPhoneAlt} from 'react-icons/fa'
import {SocialIcon} from 'react-social-icons'
import {FiMail} from 'react-icons/fi'
import {FaSolarPanel} from 'react-icons/fa'
import {GiGears} from 'react-icons/gi'
import {GrDeliver} from 'react-icons/gr'
import lazada from '../images/lazada1.png'
import shopee from '../images/shopee2.png'
import hydraulic from '../images/hydraulic.png'
import gauge from '../images/gauge.png'
import pneumatic from '../images/solenoid.png'
import sommy from '../images/sommy.png'
import solar from '../images/solar.png'
import biomass from '../images/biomass.png'
import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {Link as HashLink} from 'react-scroll'
import {BiMouse} from 'react-icons/bi'
import {animateScroll as scroll} from 'react-scroll'
import './Homepage.css'


const Homepage = () => {
    return (
        <>
        <Container fluid className="big-image">
            <Row className="image-row">
                <ImageFadeIn src={logo} opacityTransition={1} className="image"/>
                <div className="slogan">
                    <h5 className="mt-1">Your best industrial spare parts buddy in Malaysia</h5>
                </div>
            </Row>
            
        </Container>
            
        <Container className="services">
            <Row className="justify-content-center">
                <h1>We Provide</h1>
            </Row>
            <Row className="justify-content-center mt-">
                <Col md={6} xs={12} className="text-center">
                    <GiGears size={200}></GiGears>
                    <h3>Industrial Auto Parts</h3>
                </Col>
                <Col md={6} xs={12}  className="text-center">
                    <GrDeliver size={200}></GrDeliver>
                    <h3>Delivery Services</h3>
                </Col>
            </Row>
        </Container>

        <Container fluid className="about-us">
            <Row className="justify-content-center">
               <Col md={6} xs={8} className="text-center about-us-row pt-3 pb-3">
                    <h1>Aroparts Products</h1>
                    <h5>Bringing health to your machine</h5>
                    <HashLink to="category" smooth={true} duration={1000}><button className="btn-dark about-button">Learn More</button></HashLink>
               </Col>
            </Row>
        </Container>

        <Container className="categories" id="category">
            <h1>Our Best Seller</h1>
            <Row className="justify-content-center">
                <Col lg={3} md={6} xs={12} className="text-center category-col">
                    <Link to="/category/sub-category/8" className="category-link"><img src={sommy}  width="100%" className="icon"></img></Link>
                    <Link to="/category/sub-category/8" className="category-link"><h2>Timer & Digital Meter</h2></Link>
                </Col>
                <Col lg={3} md={6} xs={12} className="text-center category-col2">
                    <Link to="/category/sub-category/21" className="category-link"><img src={solar} width="100%" className="icon"></img></Link>
                    <Link to="/category/sub-category/21" className="category-link"><h2>Solar Spotlight</h2></Link>
                </Col>
                <Col lg={3} md={6} xs={12} className="text-center category-col3">
                    <Link to="/category/sub-category/17" className="category-link"><img src={pneumatic} width="100%" className="icon"></img></Link>
                    <Link to="/category/sub-category/17" className="category-link"><h2>Air Solenoid Valve</h2></Link>
                </Col>
                <Col lg={3} md={6} xs={12} className="text-center category-col4">
                    <Link to="/category/sub-category/24" className="category-link"><img src={gauge} width="100%" className="icon"></img></Link>
                    <Link to="/category/sub-category/24" className="category-link"><h2>Pressure Gauge</h2></Link>
                </Col>
            </Row>
        </Container>

        <Container fluid className="footer">
            <Row className="justify-content-around">
                <Col lg={5} xs={12} className="mb-5">
                    <h1 className="text">Want to know more about us?</h1>
                    <p className="text">Contact us at :</p>
                    <div>
                        <Row>
                            <Col xs={1} className="p-0">
                                <SocialIcon network="whatsapp" bgColor="black" fgColor="white" url="https://wa.link/9b010m"></SocialIcon>
                            </Col>
                            <Col xs={10} className="pl-4">
                                <p className="number">+60 16-528 3678</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={1} className="p-0">
                                <SocialIcon url="mailto:aroindustrialparts@gmail.com" bgColor="black" fgColor="white"></SocialIcon>
                            </Col>
                            <Col xs={10} className="pl-4">
                                <p className="number">aroindustrialparts@gmail.com</p>
                            </Col>
                            
                        </Row>
                    </div>
                </Col>
                <Col lg={3} xs={12} className="mb-5 pt-4">
                    <p className="product-text">Aroparts' Products</p>
                    <div className="contact">
                        <Link className="link" to="/category/1/products"><p>Boiler System & Boiler Accessories</p></Link>
                        <Link className="link" to="/category/2/products"><p>Electronic & Electrical Accessories</p></Link>
                        <Link className="link" to="/category/3/products"><p>Hydraulic System & Accessories</p></Link>
                        <Link className="link" to="/category/4/products"><p>Solar System</p></Link>
                        <Link className="link" to="/category/5/products"><p>Pneumatic System & Accessories</p></Link>
                        <Link className="link" to="/category/6/products"><p>Gauge</p></Link>
                    </div>
                </Col>
                <Col lg={3} xs={12} className="mb-5 pt-4">
                    <Row className="mb-5">
                        <Col>
                            <p className="product-text">Visit Us At :</p>
                            <div>
                                <a href="https://www.lazada.com.my/shop/aro-industrial-parts/?spm=a2o4k.pdp.seller.1.5a20383aJe1XNh&itemId=1725962070&channelSource=pdp" target="blank"><img src={lazada} width="55" height="55"></img></a>
                                <a href="https://shopee.com.my/aroindustrialparts" target="blank"><img src={shopee} width="55" height="55"></img></a>
                                
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <p className="product-text">Connect with us :</p>
                            <div>
                                <SocialIcon network="instagram" url="https://www.instagram.com" fgColor="white" bgColor="black" />
                                <SocialIcon url="https://www.facebook.com" network="facebook" fgColor="white" bgColor="black"/>
                                
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="text-center justify-content-center">
                <div onClick={() => scroll.scrollToTop(0)} className="scroll-top">
                    <p className="m-0">Back to Top</p>
                    <BiMouse size={20}></BiMouse>
                </div>
            </Row>
        </Container>

        </>
    )
}

export default Homepage
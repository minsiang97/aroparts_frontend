import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container';
import Spinner from 'react-bootstrap/Spinner'
import Carousel from 'react-bootstrap/Carousel'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi'
import {BiMouse} from 'react-icons/bi'
import {animateScroll as scroll} from 'react-scroll'
import {SocialIcon} from 'react-social-icons'
import lazada from '../../images/lazada1.png'
import shopee from '../../images/shopee2.png'
import {MdLocationOn} from 'react-icons/md'
import "./Products.css"

const Product = () => {
    const [products, setProducts] = useState([])
    
    let {id} = useParams()
    useEffect(() => {
        axios.get(`https://aroparts.herokuapp.com/api/v1/products/category/${id}`)
        .then(function(response){
            setProducts(response.data)
            
        })
    },[])

    

    return (
        <>
        {products.length ?
        <>
        <Container className="card-container pb-5">
        <Row>
            {products.map((product) => {
                return (
                    <Col lg={3} sm={6} xs={12}>
                    <Card className="card-content">
                        <Link to={`/products/${product.id}`} className="product-link"><div className="card-image">
                            <img src={product.url} className="product-image"/> 
                        </div></Link>                                               
                        <Card.Body className="text-center">
                        <Link to={`/products/${product.id}`} className="product-link"><Card.Title className="product-name">{product.product_name}</Card.Title></Link>
                        <Link to={`/products/${product.id}`} className="product-link"><Card.Title>{product.product_chinese_name}</Card.Title></Link>
                        </Card.Body>
                    </Card>
                    </Col>
                )
            })}
            
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
                        <Row>
                            <Col xs={1} className="pl-2 pt-2">
                                <MdLocationOn size={35} color="white" className="location"/>
                            </Col>
                            <Col xs={10} className="pl-4">
                                <p className="number">2A, Laluan Perusahaan Menglembu 10, Kawasan Perusahaan Menglembu, 31450 Ipoh, Perak (Opposite Puspakom)</p>
                            </Col>
                            
                        </Row>
                    </div>
                </Col>
                <Col lg={3} xs={12} className="mb-5 pt-4">
                    <p className="product-text">Aroparts' Products</p>
                    <div className="contact">
                        <a className="link" href="/category/1/products"><p>Boiler System & Boiler Accessories</p></a>
                        <a className="link" href="/category/2/products"><p>Electronic & Electrical Accessories</p></a>
                        <a className="link" href="/category/3/products"><p>Hydraulic System & Accessories</p></a>
                        <a className="link" href="/category/4/products"><p>Solar System</p></a>
                        <a className="link" href="/category/5/products"><p>Pneumatic System & Accessories</p></a>
                        <a className="link" href="/category/6/products"><p>Gauge</p></a>
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

        :
        <div className="d-flex justify-content-center loading-head">
            <Spinner animation="border" role="status" className="loading-div">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
        }
        
        </>
    )
}

export default Product
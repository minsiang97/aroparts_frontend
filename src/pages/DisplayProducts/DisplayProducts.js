import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from 'react-bootstrap/Spinner'
import {BiMouse} from 'react-icons/bi'
import {animateScroll as scroll} from 'react-scroll'
import {SocialIcon} from 'react-social-icons'
import lazada from '../../images/lazada1.png'
import shopee from '../../images/shopee2.png'
import {MdLocationOn} from 'react-icons/md'
import {Link} from 'react-router-dom'
import './DisplayProducts.css'


const DisplayProducts = () => {
    const [product, setProduct] = useState([])
    const [productImages, setProductImages] = useState([])
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    });

    let {id} = useParams()

    useEffect(() => {
        axios.get(`https://aroparts.herokuapp.com/api/v1/images/${id}`)
        .then(function(response) {
            setProductImages(response.data)
            console.log(response.data)
        })

        axios.get(`https://aroparts.herokuapp.com/api/v1/products/${id}`)
        .then(function(response){
            setProduct(response.data)
            console.log(response.data)
        })
    }, [])

      
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav'
    }

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };
      

    return (
        <>
        <Container className="product-container pb-5">
            <Row className="justify-content-around">
                <Col md={5} xs={11} className="product-image-slider">
                    <Slider {...settings} asNavFor={nav2} ref={slider => (setSlider1(slider))}>
                        {productImages.map((image) => {
                            return (
                                <img src={image.url} className="w-100"></img>
                            )
                        })}
                    </Slider>
                    <div className="thumbnail-slider-wrap">
                        <Slider
                            {...settingsThumbs}
                            asNavFor={nav1}
                            ref={slider => (setSlider2(slider))} className="slider">

                            {productImages.map((image) =>

                            <div className="slick-slide2">
                                <img className="product-images" src={image.url}/>
                            </div>

                            )}

                        </Slider>
                    </div>
                </Col>
                <Col md={6} xs={12}>
                    <div className="product-description">
                        <h2>{product.product_name}</h2>
                        <h2>{product.product_chinese_name}</h2>
                        <div className="product-description-line">
                            <h4 className="product-price">{product.price}</h4>
                            <p>{product.description_line_1}</p>
                            <p>{product.description_line_2}</p>
                            <p>{product.description_line_3}</p>
                            <p>{product.description_line_4}</p>
                            <p>{product.description_line_5}</p>
                            <p>{product.description_line_6}</p>
                            <p>{product.description_line_7}</p>
                            <p>{product.description_line_8}</p>
                            <p>{product.description_line_9}</p>
                            <h5>{product.description_line_10}</h5>
                        </div>
                    </div>
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
                        <Row>
                            <Col xs={1} className="pl-2 pt-2">
                                <MdLocationOn size={35} color="white" className="location"/>
                            </Col>
                            <Col xs={10} className="pl-4">
                                <p className="number">Laluan Perusahaan Menglembu 10, Kawasan Perusahaan Menglembu, 31450 Ipoh, Perak (Opposite Puspakom)</p>
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
    )
}

export default DisplayProducts
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
        <Container className="product-container">
            <Row className="justify-content-around">
                <Col md={5} xs={12} className="product-image-slider">
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
        </>
    )
}

export default DisplayProducts
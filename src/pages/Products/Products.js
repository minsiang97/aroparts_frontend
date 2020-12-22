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
        <Container className="card-container">
        <Row>
            {products.map((product) => {
                return (
                    <Col lg={3} sm={6} xs={12}>
                    <Card className="card-content">
                        <Link to={`/products/${product.id}`} className="product-link"><div className="card-image">
                            <img src={product.url} className="product-image"/> 
                        </div></Link>                                               
                        <Card.Body className="text-center">
                        <Link to={`/products/${product.id}`} className="product-link"><Card.Title>{product.product_name}</Card.Title></Link>
                        <Link to={`/products/${product.id}`} className="product-link"><Card.Title>{product.product_chinese_name}</Card.Title></Link>
                        </Card.Body>
                    </Card>
                    </Col>
                )
            })}
            
        </Row>
        </Container>
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
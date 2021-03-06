import React, {useEffect, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import logo from '../images/logo.png'
import {FaSearch} from 'react-icons/fa'
import lazada from '../images/lazada.png'
import shopee from '../images/shopee.png'
import Select from 'react-select'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Navbar.css'


const WebNavbar = () => {
    const [show, setShow] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const [products, updateProducts] = useState([])
    const [productId, setProductID] = useState("")

    useEffect(() => {
        axios.get(`https://aroparts.herokuapp.com/api/v1/products/`)
        .then(function(response){
            let temp = []
            for (const x of response.data){
                temp.push({label : x.product_name, value: x.product_name, id : x.id})
            }
            updateProducts(temp)
            console.log(temp)
        })
    },[])

    const showDropDown = () => {
        setShow(!show)
    }

    const hideDropDown = () => {
        setShow(false)
    }
    

    const changeBackground = () => {
        if (window.scrollY >= 80){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const onChange = (value) => {
        console.log(value.id)
        setProductID(value.id)
    }

    const handleInputChange = (inputValue, actionMeta) => {
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/products/${productId}`

    }

    return (
        <>
        {navbar? 
        <Navbar expand="lg" fixed="top" variant="light" className='navbar active'>
            <Navbar.Brand href="/">
                <img src={logo} width="180"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-button">
                <Nav.Link href="/products" id="basic-nav-dropdown" style={{color:"black"}}>Product</Nav.Link>
                <Nav.Link className="navbar-title-active" href="/contact-us" style={{color:"black"}}>Contact Us</Nav.Link>
                </Nav>
                <div className="ml-auto mr-3">
                <a href="https://www.lazada.com.my/shop/aro-industrial-parts/?spm=a2o4k.pdp.seller.1.5a20383aJe1XNh&itemId=1725962070&channelSource=pdp" target="blank"><img src={lazada} width="55" height="55" className="nav-icon"></img></a>
                <a href="https://shopee.com.my/aroindustrialparts" target="blank"><img src={shopee} width="55" height="55" className="nav-icon"></img></a>
                </div>
                <Form inline className="form-search" onSubmit={(e) => handleSubmit(e)} >
                    <Select className="bar mr-sm-2" placeholder="Search" options={products} onChange={onChange} isSearchable={true} onInputChange={handleInputChange}>
                        
                    </Select>
                    <FaSearch color="black" className="search" onClick={(e) => handleSubmit(e)}></FaSearch>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        :
        <Navbar expand="lg" fixed="top" variant="light" className='navbar'>
            <Navbar.Brand href="/">
                <img src={logo} width="180"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navbar-title">
                <Nav.Link href="/products" id="basic-nav-dropdown" style={{color:"black"}}>Product</Nav.Link>
                <Nav.Link className="navbar-title-not-active" href="/contact-us">Contact Us</Nav.Link>
                </Nav>
                <div className="ml-auto mr-3">
                <a href="https://www.lazada.com.my/shop/aro-industrial-parts/?spm=a2o4k.pdp.seller.1.5a20383aJe1XNh&itemId=1725962070&channelSource=pdp" target="blank"><img src={lazada} width="55" height="55" className="nav-icon"></img></a>
                <a href="https://shopee.com.my/aroindustrialparts" target="blank"><img src={shopee} width="55" height="55" className="nav-icon"></img></a>
                </div>
                <Form inline className="form-search" onSubmit={(e) => handleSubmit(e)}>
                    <Select className="bar mr-sm-2" placeholder="Search" options={products} onChange={onChange} isSearchable={true} onInputChange={handleInputChange}>
                    </Select>
                    <FaSearch color="white" className="search" onClick={(e) => handleSubmit(e)}></FaSearch>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        }
        </>
    )
} 

export default WebNavbar
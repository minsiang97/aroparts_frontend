import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebNavbar from './components/Navbar';
import Homepage from './pages/Homepage';
import {ParallaxProvider} from 'react-scroll-parallax'
import Product from './pages/Products/Products';
import {Switch, Route} from 'react-router-dom'
import DisplayProducts from './pages/DisplayProducts/DisplayProducts';
import ContactUs from './pages/ContactUs/ContactUs';
import SubCategoriesProducts from './pages/SubCategoriesProducts/SubCategoriesProducts';
import AllProducts from './pages/AllProducts/AllProducts';


function App() {
  return (
    <>
    <WebNavbar/>
    <Switch>
      <Route exact path="/"><Homepage/></Route>
      <Route path="/category/:id/products"><Product/></Route>
      <Route path="/products/:id"><DisplayProducts/></Route>
      <Route path ="/contact-us"><ContactUs/></Route>
      <Route path ="/category/sub-category/:id"><SubCategoriesProducts/></Route>
      <Route path ="/products"><AllProducts/></Route>
    </Switch>
    </>
  );
}

export default App;

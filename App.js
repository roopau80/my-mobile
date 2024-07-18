import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
// import {Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';



function App() {
  return (
    <>
      <HashRouter >
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path='/products' element={<Product />}>
          </Route>
          <Route exact path='/products/:id' element={<ProductDetails />}>
          </Route>
          <Route exact path="/cart" element={<Cart />} >
          </Route>
          <Route exact path="/checkout" element={<Checkout />} >
          </Route>
          <Route exact path="/about" element={<About />} >
          </Route>
          <Route exact path="/contact" element={<Contact />} >
          </Route>
        </Routes>
        <Footer />
      </HashRouter>

    </>

  );
}

export default App;

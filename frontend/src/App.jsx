import React from 'react'
import HomePage from './landing_page/Home/HomePage'
import { Routes,Route } from 'react-router'
import Pagenotfound from './landing_page/Pagenotfound'
import SignupPage from './landing_page/Signup/Signup'
import AboutPage from './landing_page/About/AboutPage'
import ProductsPage from './landing_page/Products/ProductPage'
import PricingPage from './landing_page/Pricing/PricingPage'
import SupportPage from './landing_page/Support/SupportPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'


const App = () => {
  return (
    <>
    <Navbar className="min-h-screen fixed"/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/products' element={<ProductsPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='*' element={<Pagenotfound/>}/>
   </Routes>
      <Footer/>
    </>
  )
}

export default App

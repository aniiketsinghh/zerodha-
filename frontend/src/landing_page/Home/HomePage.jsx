import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import Awards from './Awards'
import Footer from '../Footer'
import OpenAccount from '../OpenAccount'


const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount/>
      <Footer />
    </>
  )
}

export default HomePage

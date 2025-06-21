import React from 'react'
import  Experience  from './components/Experiences'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import SellingProduct from './components/SellingProduct'
import Experiences from './components/Experiences'
import Materials from './components/Materials'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
const App = () => (
  <div className='bg-black'>
    <Navbar/>
    <Hero/>
    <WhyChooseUs/>
    <SellingProduct/>
    <Experiences/>
    <Materials/>
    <Testimonials/>
    <Footer/>
  </div>
)
export default App

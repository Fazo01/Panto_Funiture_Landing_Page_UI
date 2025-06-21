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
  <div className='bg-gray-400 w-full overflow-hidden'>
    <div className='sm:px-24 px-10 flex justify-center items-center'>
      <div className='xl:max-w-[1440px] w-full'>
        <Navbar/>
      </div>
    </div>
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

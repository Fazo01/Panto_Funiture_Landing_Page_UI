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
import { LandingSection } from './assets'
const App = () => (
  <div className='bg-gray-400 w-full overflow-hidden'>
    <div className="relative max-w-[1440-px] h-[1084px] bg-cover bg-center" style={{ backgroundImage: `url(${LandingSection})` }}>
      <div className='sm:px-18 px-6'>
        <div className='w-full'>
          <Navbar/>
        </div>
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

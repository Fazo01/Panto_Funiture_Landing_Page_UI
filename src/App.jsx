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
  <div className='bg-white w-full overflow-hidden'>
    <div className="relative h-[1084px] bg-cover bg-center object-cover" style={{ backgroundImage: `url(${LandingSection})` }}>
      <div className='sm:px-18 px-6'>
        <div className=' w-full'>
          <Navbar/>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-start'>
      <div className=" w-full">
        <Hero/>
      </div>
    </div>
    <div className="sm:px-18 px-6 flex justify-center items-center">
      <div className="w-full">
      <WhyChooseUs/>
      </div>
    </div>
    <div className="sm:px-18 px-6 flex justify-center items-center">
      <div className="w-full">
      <SellingProduct/>
      </div>
    </div>
    <div className='sm:pr-18 pr-6 '>
      <div className="w-full ">
      <Experiences/>
      </div>
    </div>
    <div className='sm:pl-18 pl-6 '>
      <div className="w-full ">
        <Materials/>
      </div>
    </div>
    <div className="sm:px-18 px-6 flex justify-center items-center">
      <div className="w-full">
      <Testimonials/>
      </div>
    </div>
      
      <Footer/>
  </div>
)
export default App

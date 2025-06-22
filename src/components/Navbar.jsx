import React from 'react'
import { useState } from 'react';
import {PantoLogo,Bag,Menu,Close} from '../assets'
import { LandingSection } from '../assets'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (

    <nav>
      
      {/* <img src={LandingSection} alt="" className='absolute w-full'/> */}
      <div className='flex py-6 justify-between flex-1 z-10'>
        <img src={PantoLogo} alt="" className='w-[78px] h-[35px] cursor-pointer object-contain'/>
      <ul className='list-none  sm:flex hidden cursor-pointer font-medium text-[18px] text-white '>
        <li className='mr-[60px]'>Furniture</li>
        <li className='mr-[60px]'>Shop</li>
        <li className='mr-[60px]'>About Us</li>
        <li className=''>Contact</li>
        
      </ul>
      <div className='flex'>
        <img src={Bag} alt="" className='w-[25.5px] max-sm:hidden h-[28px] cursor-pointer object-contain' />
        <img src={toggle?Close:Menu} alt="" className='sm:hidden  w-[28px] h-[28px] object-contain' onClick={()=>setToggle(!toggle)}/>
        </div>
      </div>
      <div className={`${
            !toggle ? "hidden" : "flex"
          } sm:hidden cursor-pointer absolute right-0 w-[100%] min-w-[140px] bg-amber-200 sidebar`}>
            <div className='flex flex-col flex-1 '>
              <img src={Bag} alt="" className='w-[25.5px] sm:hidden h-[28px] cursor-pointer object-contain ' />
              <ul className='list-none flex flex-1 cursor-pointer flex-col  font-medium text-[18px] text-white '>
        
                <li className='p-5 border-b-2 flex justify-center'>Furniture</li>
                <li className='p-5 border-b-2 flex justify-center'>Shop</li>
                <li className='p-5 border-b-2 flex justify-center'>About Us</li>
                <li className='p-5 flex justify-center'>Contact</li>
                </ul>
            </div>
        
        
      
      </div>
  
    </nav>
    // </div>
  )
}

export default Navbar

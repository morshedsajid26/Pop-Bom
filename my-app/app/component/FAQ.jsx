"use client";
import React, { useState } from 'react'
import Container from './Container'
import { FaMinus, FaPlus } from 'react-icons/fa'

const FAQ = () => {
    let [dropdown1, setDropdown1]=useState(false);
    let [dropdown2, setDropdown2]=useState(false);
    let [dropdown3, setDropdown3]=useState(false);
    let [dropdown4, setDropdown4]=useState(false);
    let [dropdown5, setDropdown5]=useState(false);
  return (
    <div className='bg-black pt-8 pb-[64px]'>
      <Container className='w-[1120px]'>

        <h3 className='py-[13.5px] px-[24.5px] bg-white text-black text-[32px] font-roboto font-bold rounded-full w-[246px] mx-auto text-center '>FAQ</h3>

        <h3 className='font-roboto font-bold text-[36px] text-white text-center mt-8'>Frequently Asked Questions</h3>
        <p className='font-roboto text-[18px] text-[#D9D9D9] text-center mt-2'>Find answers to the most common questions about our platform and how it can help you succeed.</p>

        <div className="questions mt-[88px]">

            <div  onClick={()=>setDropdown1(!dropdown1)}  className="one  border-b border-white cursor-pointer">
                <div  className="up flex items-center justify-between py-[25.5px]">
                    <h4 className='text-white text-[18px] font-semibold font-inter'>What is PopBom?</h4>
                    {dropdown1? <FaMinus className='w-[14px] h-[14px] text-white' />: <FaPlus className='w-[14px] h-[14px] text-white' />}
                    
                </div>
                <p className={`text-white text-[16px] font-inter  ${dropdown1? "opacity-100 h-auto visible overflow-auto pb-4" : "opacity-0 h-0 invisible overflow-hidden"}`}>PopBom is aaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                
            </div>
            <div  onClick={()=>setDropdown2(!dropdown2)}  className="one  border-b border-white cursor-pointer">
                <div  className="up flex items-center justify-between py-[25.5px]">
                    <h4 className='text-white text-[18px] font-semibold font-inter'>How can I join PopBom??</h4>
                    {dropdown2? <FaMinus className='w-[14px] h-[14px] text-white' />: <FaPlus className='w-[14px] h-[14px] text-white' />}
                    
                </div>
                <p className={`text-white text-[16px] font-inter  ${dropdown2? "opacity-100 h-auto visible overflow-auto pb-4" : "opacity-0 h-0 invisible overflow-hidden"}`}>PopBom is aaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                
            </div>

            <div  onClick={()=>setDropdown3(!dropdown3)}  className="one  border-b border-white cursor-pointer">
                <div  className="up flex items-center justify-between py-[25.5px]">
                    <h4 className='text-white text-[18px] font-semibold font-inter'> Can I upload my own videos?</h4>
                    {dropdown3? <FaMinus className='w-[14px] h-[14px] text-white' />: <FaPlus className='w-[14px] h-[14px] text-white' />}
                    
                </div>
                <p className={`text-white text-[16px] font-inter  ${dropdown3? "opacity-100 h-auto visible overflow-auto pb-4" : "opacity-0 h-0 invisible overflow-hidden"}`}>Yes, You can upload your own video.</p>
                
            </div>

            <div  onClick={()=>setDropdown4(!dropdown4)}  className="one  border-b border-white cursor-pointer">
                <div  className="up flex items-center justify-between py-[25.5px]">
                    <h4 className='text-white text-[18px] font-semibold font-inter'>Is PopBom free to use?</h4>
                    {dropdown4? <FaMinus className='w-[14px] h-[14px] text-white' />: <FaPlus className='w-[14px] h-[14px] text-white' />}
                    
                </div>
                <p className={`text-white text-[16px] font-inter  ${dropdown4? "opacity-100 h-auto visible overflow-auto pb-4" : "opacity-0 h-0 invisible overflow-hidden"}`}>PopBom is free to use.</p>
                
            </div>

            <div  onClick={()=>setDropdown5(!dropdown5)}  className="one  cursor-pointer">
                <div  className="up flex items-center justify-between py-[25.5px]">
                    <h4 className='text-white text-[18px] font-semibold font-inter'>Can I use PopBom on both mobile and web?</h4>
                    {dropdown5? <FaMinus className='w-[14px] h-[14px] text-white' />: <FaPlus className='w-[14px] h-[14px] text-white' />}
                    
                </div>
                <p className={`text-white text-[16px] font-inter  ${dropdown5? "opacity-100 h-auto visible overflow-auto pb-4" : "opacity-0 h-0 invisible overflow-hidden"}`}>PopBom works on mobile apps (iOS & Android) as well as the website.
</p>
                
            </div>


        </div>
      </Container>
    </div>
  )
}

export default FAQ

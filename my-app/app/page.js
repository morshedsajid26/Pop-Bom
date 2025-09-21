import React from 'react'
import Navbar from './component/Navbar'
import Image from 'next/image'
import logo from '../public/LOGO.png'

const page = () => {
  return (
    
      

      <div className='bg-[url(/banner.png)] bg-cover bg-center bg-no-repeat  relative after:absolute after:h-full after:top-0 after:left-0 after:w-full after:bg-black/57 pt-[149px] z-30 after:-z-30 '>
      <Navbar/>
     
     <div>
      <Image className='mx-auto' src={logo} alt='logo'/>
     </div>
      </div>
      
    
  )
}

export default page

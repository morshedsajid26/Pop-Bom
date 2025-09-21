import React from 'react'
import Container from './Container'
import Li from './Li'

const Navbar = () => {
  return (
    <div className=''>
        <Container className='w-[917px] '>
            <div className='flex justify-between'>
                <Li liText='Home'/>
                <Li liText='Our story'/>
                <Li liText='PopBom’s '/>
                <Li liText='In 5 Explosions'/>
                <Li liText='FAQ'/>
            </div>

        </Container>
      
    </div>
  )
}

export default Navbar

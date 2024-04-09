import React from 'react'
import Ck from '../assets/Ck.png'
import Hacken from '../assets/Hacken.png'
import Tech from '../assets/Tech.png'

function Audit() {
  return (
   <div className='bg-custom w-screen h-full '>
      <div className='flex justify-center '>
        <div className='bg-gradient-to-tr from-blue-900 via-blue-900 to-blue-500 mt-24 w-screen h-full md:mx-14 mx-8 md:py-32 py-20  rounded-lg'>
            <div className='md:mt-8'>
                <div className='text-white flex justify-center font-style md:text-6xl text-2xl 'data-aos='fade-top'>PROUDLY AUDITED BY</div>
                <div className=' space-x-8 mt-10 flex justify-center mx-2 '>
                <div className='flex justify-center'data-aos='fade-right'>
                <img className='border md:px-10' src={Ck} alt="" />
                </div>
                <div className='flex justify-center'data-aos='fade-top'>
                <img className='border md:px-10' src={Hacken} alt="" />
                </div>
                <div className='flex justify-center'data-aos='fade-left'>
                <img className='border md:px-10' src={Tech} alt="" />
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
  )
}

export default Audit

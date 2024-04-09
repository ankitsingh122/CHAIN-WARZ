import React from 'react'
import Pk from '../assets/Pk.png'
import Discord from '../assets/Discord.png'

function Join() {
  return (
    <div className='bg-custom w-screen h-full flex justify-center py-20'>
        <div className=' font-style'>
            <div className='text-white text-6xl mt-24 flex justify-center'data-aos='fade-top'>JOIN US</div>
            <div className='text-white text-center mt-10 uppercase'data-aos='fade-top'>Join our Chain Warz community <br /> to stay updated on the latest <br /> and greatest battles in <br /> blockchain and participate in <br /> the action.</div>
         <div className='flex justify-between mt-10 mx-2'>
            <img className='border px-10 py-10 rounded-lg'data-aos='fade-left' src={Pk} alt="" />
          <img className='border px-10 py-10 rounded-lg'data-aos='fade-right' src={Discord} alt="" />
            </div>
             </div>
        </div>
  )
}

export default Join;

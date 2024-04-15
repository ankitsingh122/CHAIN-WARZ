import React from 'react'
import NavBar from '../component/NavBar'
import Body from '../component/Body'
import Table from '../component/Table'
import Join from '../component/Join'


function Leaderboard() {
  return (
     
      <div className='w-screen h-full bg-[#070224] text-white font-style '>
        <div className='flex justify-center '>
         <div className='flex justify-center mt-10'><NavBar/></div>
        </div>
        <div className='flex justify-center mt-44'data-aos='zoom-in'><Body /></div>
        <div className='flex justify-center'data-aos='zoom-in'><Table /></div>
        <Join/>
      </div>
  )
}

export default Leaderboard

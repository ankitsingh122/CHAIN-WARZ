import React from 'react'
import { useState } from 'react'
import NavBar from '../component/NavBar'
import ETH from '../assets/ETH.png'
import AL from '../assets/AL.png'
import AR from '../assets/AR.png'
import Join from '../component/Join';
function Winner() {
     const [count, setCount] = useState(1);
      const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
     

  return (
    <div className='bg-custom w-screen h-full font-style'>
        
        <div className='flex justify-center '>
            <div className='flex justify-center mt-10'><NavBar/></div>
        </div>
    <div className='text-white text-5xl md:text-6xl flex justify-center mt-44'data-aos='fade-top'>WINNERS</div>
    <div className='text-white flex justify-end mx-5 mt-5 md:mx-44'>
    <div className='border px-2 rounded-md py-1'>NEWEST</div>
    </div>
    <div className='flex justify-between mx-9 mt-20 md:mx-52 md:mt-40'data-aos='fade-top'>
    <div className='text-white '>WINNER</div>
    <div className='text-white'>PRIZEPOOL</div>
    <div className='text-white hidden md:block'>FIGHTER</div>
    <div className='text-white hidden md:block'>BATTLE HASH</div>
    <div className='text-white hidden md:block'>DATE & TIME</div>

    
    </div>
    <div className='border-4  mt-5 mx-3 rounded-3xl md:mx-44 md:mt-8'data-aos='fade-top'>
    <div className='flex justify-between mx-9 mt-2'>
    <div className='text-white'>JERRY </div>
    <div className='text-white flex'> <img src={ETH} alt="" />0.0015 ETH</div>
     <div className='text-white hidden md:block'>2</div>
     <div className=' hidden md:block text-blue-400'>x23d2jeif2sdbkdv</div>
    <div className=' text-gray-400 hidden md:block'>March 07, 2024 <br />5:30 am</div>
    
    </div>

    <div className='flex justify-between mx-9 mt-5 md:hidden'data-aos='fade-top'>
    <div className='text-white '>FIGHTER </div>
    <div className='text-white'>2</div>
   </div>
       
     <div className='flex justify-between mx-9 mt-5  md:hidden'data-aos='fade-top'>
    <div className='text-white'>BATTLE HASH </div>
    <div className='text-blue-400'>x23d2jeif2..</div>
   </div>

  
    <div className='text-gray-400 flex justify-center mt-20 md:hidden'data-aos='fade-top'>March 07, 2024</div>
    <div className='text-gray-400 flex justify-center md:hidden'data-aos='fade-top'>5:30 am</div>
 </div>

   <div className='border-4 mt-5 mx-3 rounded-3xl md:mx-44 md:mt-8'data-aos='fade-top'>
    <div className='flex justify-between mx-9 mt-2'>
    <div className='text-white'>JERRY </div>
    <div className='text-white flex '> <img src={ETH} alt="" />0.0015 ETH</div>
     <div className='text-white hidden md:block'>2</div>
     <div className='text-blue-400 hidden md:block'>x23d2jeif2sdbkdv</div>
    <div className='text-gray-400 hidden md:block'>March 07, 2024 <br />5:30 am</div>
    
    </div>

    <div className='flex justify-between mx-9 mt-5 md:hidden'data-aos='fade-top'>
    <div className='text-white '>FIGHTER </div>
    <div className='text-white'>2</div>
   </div>
       
     <div className='flex justify-between mx-9 mt-5 md:hidden'data-aos='fade-top'>
    <div className='text-white'>BATTLE HASH </div>
    <div className='text-blue-400'>x23d2jeif2..</div>
   </div>

  
    <div className='text-gray-400 flex justify-center mt-20 md:hidden'data-aos='fade-top'>March 07, 2024</div>
    <div className='text-gray-400 flex justify-center md:hidden'data-aos='fade-top'>5:30 am</div>
 </div>

  <div className='border-4 mt-5 mx-3 rounded-3xl md:mx-44 md:mt-8'data-aos='fade-top'>
    <div className='flex justify-between mx-9 mt-2'>
    <div className='text-white'>JERRY </div>
    <div className='text-white flex'> <img src={ETH} alt="" />0.0015 ETH</div>
     <div className='text-white hidden md:block'>2</div>
     <div className='text-blue-400 hidden md:block'>x23d2jeif2sdbkdv</div>
    <div className='text-gray-400 hidden md:block'>March 07, 2024 <br />5:30 am</div>
    
    </div>

    <div className='flex justify-between mx-9 mt-5 md:hidden'data-aos='fade-top'>
    <div className='text-white '>FIGHTER </div>
    <div className='text-white'>2</div>
   </div>
       
     <div className='flex justify-between mx-9 mt-5 md:hidden'data-aos='fade-top'>
    <div className='text-white'>BATTLE HASH </div>
    <div className='text-white'>x23d2jeif2..</div>
   </div>

  
    <div className='text-gray-400 flex justify-center mt-20 md:hidden'data-aos='fade-top'>March 07, 2024</div>
    <div className='text-gray-400 flex justify-center md:hidden'data-aos='fade-top'>5:30 am</div>
 </div>
 <div className='flex justify-center space-x-7 mt-32'>
 <button onClick={decrementCount} ><img src={AL} alt="" /></button>
 <div className='px-10 py-7 rounded-3xl  bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500 text-white'>{count}</div>
  <button onClick={incrementCount}><img src={AR} alt="" /></button>
  </div>
 <Join/>
       
       </div>
  )
}

export default Winner;


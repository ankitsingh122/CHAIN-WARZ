import React from 'react';
import Pie from '../assets/Pie.png';

function Prizepool() {
  return (
    <div className='bg-custom w-screen h-full flex justify-center'>
      <div className='md:mt-20 mt-10'>
        <div className='text-white md:text-6xl text-4xl text-center font-azonix font-bold mt-10'data-aos='fade-top'>PRIZE POOL TOKENOMICS</div>
        <div className='relative mt-20 flex justify-center'>
          <img className='md:w-[600px] w-[200px]' src={Pie} alt="Pie Chart" />
          <div className='absolute top-1/2 left-1/2 md:ml-44 ml-20 mt-10 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-9xl  text-5xl font-bold font-azonix'>
            80%</div>
             <div className='absolute top-1/2 left-1/2 md:ml-32 ml-16 md:mt-32 mt-20 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-4xl font-bold font-azonix'>
            WINNER</div>
        </div>
      </div>
    </div>
  );
}

export default Prizepool;

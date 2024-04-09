import React from 'react';
import Pink from '../assets/Pink.png';
import R2 from '../assets/R2.png';
import R3 from '../assets/R3.png';
import R4 from '../assets/R4.png';
import C1 from '../assets/C1.png';
import C2 from '../assets/C2.png';
import C3 from '../assets/C3.png';
import C4 from '../assets/C4.png';
import Twitter from '../assets/Twitter.png';

function Team() {
  return (
    <div className='bg-custom w-screen h-full'>

      <div className='flex justify-center'>
        <div className='text-white text-6xl font-style mt-16 flex justify-center'>THE TEAM</div>
      </div>

      <div className='font-style lg:flex justify-center mt-20 ' data-aos='fade-right'>
        <div className=' border mx-[20px] py-10 mt-10 rounded-3xl px-20'>
          <div className='flex justify-center'>
            <img className='' src={Pink} alt="" />
          </div>
          <div className='text-white flex justify-center text-3xl mt-10'>DREAMER</div>
          <div className='text-white flex justify-center text-center mt-10'>CO FOUNDER &amp; <br />CEO</div>
          <div className='flex justify-center mt-10'>
            <img src={Twitter} alt="" />
          </div>
        </div>

        <div className='border mx-[20px] py-10 mt-10 rounded-3xl px-20'>
          <div className='flex justify-center'>
            <img className='' src={R2} alt="" />
          </div>
          <div className='text-white flex justify-center text-3xl mt-10'>DREAMER</div>
          <div className='text-white flex justify-center text-center mt-10'>CO FOUNDER &amp; <br />CEO</div>
          <div className='flex justify-center mt-10'>
            <img src={Twitter} alt="" />
          </div>
        </div>

        <div className='border mx-[20px] py-10 mt-10 rounded-3xl px-20'>
          <div className='flex justify-center'>
            <img className='' src={R3} alt="" />
          </div>
          <div className='text-white flex justify-center text-3xl mt-10'>DREAMER</div>
          <div className='text-white flex justify-center text-center mt-10'>CO FOUNDER &amp; <br />CEO</div>
          <div className='flex justify-center mt-10'>
            <img src={Twitter} alt="" />
          </div>
        </div>

         <div className='border mx-[20px] py-10 mt-10 rounded-3xl px-20'>
          <div className='flex justify-center'>
            <img className='' src={R4} alt="" />
          </div>
          <div className='text-white flex justify-center text-3xl mt-10'>DREAMER</div>
          <div className='text-white flex justify-center text-center mt-10'>CO FOUNDER &amp; <br />CEO</div>
          <div className='flex justify-center mt-10'>
            <img src={Twitter} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className='font-style lg:flex justify-center mt-20'data-aos='fade-left'>
        <div className='border mx-[20px] py-10 mt-10 rounded-3xl px-20'>
          <div className='flex justify-center'>
            <img className='' src={C1} alt="" />
          </div>
          <div className='text-white flex justify-center text-3xl mt-10'>DREAMER</div>
          <div className='text-white flex justify-center text-center mt-10'>CO FOUNDER &amp; <br />CEO</div>
          <div className='flex justify-center mt-10'>
            <img src={Twitter} alt="" />
          </div>
        </div>

        <div className='border mx-[20px] py-10 mt-10 rounded-3xl px-20'>
          <div className='flex justify-center'>
            <img className='' src={C2} alt="" />
          </div>
          <div className='text-white flex justify-center text-3xl mt-10'>DREAMER</div>
          <div className='text-white flex justify-center text-center mt-10'>CO FOUNDER &amp; <br />CEO</div>
          <div className='flex justify-center mt-10'>
            <img src={Twitter} alt="" />
          </div>
        </div>

        <div className='border mx-[20px] py-10 mt-10 rounded-3xl px-20'>
          <div className='flex justify-center'>
            <img className='' src={C3} alt="" />
          </div>
          <div className='text-white flex justify-center text-3xl mt-10'>DREAMER</div>
          <div className='text-white flex justify-center text-center mt-10'>CO FOUNDER &amp; <br />CEO</div>
          <div className='flex justify-center mt-10'>
            <img src={Twitter} alt="" />
          </div>
        </div>

         <div className='border mx-[20px] py-10 mt-10 rounded-3xl px-20'>
          <div className='flex justify-center'>
            <img className='' src={C4} alt="" />
          </div>
          <div className='text-white flex justify-center text-3xl mt-10'>DREAMER</div>
          <div className='text-white flex justify-center text-center mt-10'>CO FOUNDER &amp; <br />CEO</div>
          <div className='flex justify-center mt-10'>
            <img src={Twitter} alt="" />
          </div>
        </div>
      </div>
       </div>
    </div>
  );
}

export default Team;

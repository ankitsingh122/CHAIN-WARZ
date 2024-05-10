import React from 'react'
import Pk from '../assets/Pk.png'
import Discord from '../assets/Discord.png'

function Join() {
  return (
    <div className="bg-custom w-screen h-full flex justify-center py-20">
      <div className="font-azonix">
        <div
          className="text-white md:text-6xl text-4xl mt-24 flex justify-center"
          data-aos="fade-top"
        >
          JOIN US
        </div>
        <div
          className="text-white text-center mt-10 uppercase md:text-md text-sm"
          data-aos="fade-top"
        >
          Join our Chain Warz community <br /> to stay updated on the latest{" "}
          <br /> and greatest battles in <br /> blockchain and participate in{" "}
          <br /> the action.
        </div>
        <div className="flex justify-between mt-10 mx-10  md:mx-1 ">
          <img
            className="border md:px-10 px-5 md:py-10 py-5 rounded-lg"
            data-aos="fade-left"
            src={Pk}
            alt=" "
          />
          <img
            className="border md:px-10 px-5 md:py-10 py-5  rounded-lg"
            data-aos="fade-right"
            src={Discord}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Join;

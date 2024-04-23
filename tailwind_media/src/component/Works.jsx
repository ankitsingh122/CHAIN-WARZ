import React from "react";
import B1 from '../assets/B1.png'
import B2 from "../assets/B2.png";
import B3 from "../assets/B3.png";

function works() {
  return (
    <div className=" bg-custom w-screen h-full">
      <div className="flex justify-center">
        <div
          className=" text-white md:text-6xl text-4xl font-azonix font-bold mt-20 mx-64"
          data-aos="fade-up"
        >
          HOW IT WORKS
        </div>
      </div>
      <div>
        <div className=" flex justify-center items-center flex-col mt-28">
          <div className="flex justify center md:w-1/2 ">
            <img
              className="md:w-[300px] md:h-[300px] w-44 mx-10 object-cover"
              data-aos="slide-right"
              src={B1}
              alt=""
            />

            <div
              className="w-1/2  text-white md:text-4xl  font-azonix font-semibold flex flex-col items-center justify-center"
              data-aos="slide-left"
            >
              <span className=" border px-2 rounded-lg border-white">1</span>
              <br />
              JOIN BATTLE
            </div>
          </div>

          <div className="flex my-20 w-1/2 md:px-20">
            <img
              className="md:w-[300px] md:h-[300px] w-44 -mx-12 object-cover"
              data-aos="slide-right"
              src={B2}
              alt=""
            />
            <div
              className="w-1/2  justify-start text-white md:text-4xl  font-azonix font-semibold flex flex-col items-center mx-24 "
              data-aos="slide-left"
            >
              <span className=" border px-2 rounded-lg border-white">2</span>
              <br />
              PURCHASE <br /> FIGHTER
            </div>
          </div>

          <div className="flex  w-1/2 md:px-20">
            <img
              className="md:w-[300px] md:h-[300px] w-44 -mx-12 object-cover"
              data-aos="slide-right"
              src={B3}
              alt=""
            />
            <div
              className="w-1/2  text-white md:text-4xl font-azonix font-semibold flex flex-col items-center justify-center mx-24 "
              data-aos="slide-left"
            >
              <span className=" border px-2 rounded-lg border-white">3</span>
              <br />
              LAST ONE <br />
              STANDING TAKES <br /> ALL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default works;

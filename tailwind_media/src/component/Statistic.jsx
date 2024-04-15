import React from "react";
import Circle from "../assets/Circle.png";
import Cd from "../assets/Cd.png";
function statistic() {
  return (
    <div className="bg-custom w-screen h-full flex justify-center">
      <div className="mt-40 ">
        <div
          className=" text-6xl text-white flex justify-center font-bold font-style"
          data-aos="fade-top"
        >
          STATISTICS
        </div>
        <div className="text-white bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500 lg:py-32 lg:px-80 py-28 my-40 flex justify-center rounded-3xl ">
          <div className="relative w-56" data-aos="fade-top">
            <img className=" absolute w-56" src={Circle} alt="" />
            <img className="ml-12 mt-12 w-32 h-24" src={Cd} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default statistic;

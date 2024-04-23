import React from "react";
import Robot from "../assets/Robot.png";
import Circle from "../assets/Circle.png";
import { Link } from "react-router-dom";
import NavBar from './NavBar';

function Home() {

  return (
    <div className="bg-gradient-to-tr from-red-500 via-purple-600 to-blue-500 w-screen h-full py-10 ">
      <div className="flex justify-center">
        <NavBar />
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div
          className="md:text-3xl font-azonix font-semi-bold mt-24 text-white font-outline-2 "
          data-aos="zoom-in-up"
        >
          WELCOME TO
        </div>
        <div
          className="lg:text-9xl text-4xl md:text-7xl font-azonix mt-6  font-bold text-white  text-center  font-outline-2 "
          data-aos="zoom-in-up"
        >
          CHAIN WARZ
        </div>
      </div>
      <div>
        <div className="flex justify-center relative mt-24">
          <img className="absolute" data-aos="fade-top" src={Robot} alt="" />
          <img className="" src={Circle} alt="" />
        </div>
      </div>
      <div>
        <div className="lg:flex justify-center md:text-4xl md:font-azonix md:text-white md:-my-52 md:font-semibold  md:text-center hidden">
          THE ULTIMATE BLOCKCHAIN BATTLE <br />
          WHERE YOU HAVE A CHANCE TO WIN BIG!
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center lg:mt-20 lg:my-10">
            <div className="bg-white  w-max rounded-3xl lg:mt-36">
              <Link
                to="/Battle"
                className=" bg-gradient-to-br from-red-500 via-purple-600 to-blue-500 inline-block text-transparent bg-clip-text  text-4xl rounded-lg  py-3 px-4 font-azonix cursor-pointer"
              >
                JOIN BATTLE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

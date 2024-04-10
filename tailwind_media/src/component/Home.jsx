import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Robot from "../assets/Robot.png";
import Circle from "../assets/Circle.png";
import Cat from '../assets/Cat.png'
import Wallet from '../assets/Wallet.png'
import Coin from '../assets/Coin.png'
import { IoMdPerson } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isAllowed, setIsAllowed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleAllowed = () => {
    setIsAllowed(!isAllowed)
  }

  return (
    <div className="bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500 w-screen h-full py-10 ">
      <div className="flex justify-center">
        <nav className="fixed z-50 py-4 w-max bg-white text-black   rounded-3xl px-5 flex justify-between ">
          <Link to='/'><img src={Logo} alt="" /></Link> 
          <div className="hidden md:flex space-x-16 text-md mt-2 mx-14  py-2 font-mono font-semibold  text-lg">
            <button  onClick={toggleAllowed} className="cursor-pointer">AllowList</button>
            <div className="cursor-pointer">Winners</div>
            <Link to="/leaderboard" className="cursor-pointer">Leaderboard</Link>
            <div className="cursor-pointer">Battle Now</div>
          </div>

          <div className="md:flex space-x-4">
            <div className="hidden md:block md:bg-gradient-to-r from-blue-400 to-purple-500  md:px-3 md:py-3.5 md:rounded-md md:cursor-pointer md:text-center md:pr-5 md:pl-5 md:font-style md:text-lg text-white">
              Connect
            </div>

            <div className="hidden md:flex text-3xl md:p-2 py-2 px-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl text-gray-800 cursor-pointer md:pt-2 pt-1">
              <IoMdPerson className="text-white mt-1 w-6" />
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden text-3xl md:p-2 py-1 px-1 mt-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl text-gray-800 cursor-pointer md:pt-2 pt-1">
              <HiOutlineMenuAlt4 className="text-white w-6 " />
            </button>

            {isMenuOpen && (
              <div className="fixed top-0 left-0  w-full h-full  bg-transparent z-50 flex justify-center items-center ">
                <div className="bg-white rounded-lg px-10 mr-6 py-6 text-center shadow-lg">
                  <button  onClick={toggleAllowed} className="cursor-pointer">AllowList</button>
                  <div className="text-[#002e87] text-lg cursor-pointer mb-4">
                    Winners
                  </div>
                   <Link to="/leaderboard" className="cursor-pointer">Leaderboard</Link>
                  <div className="text-[#002e87] text-lg cursor-pointer mb-4">
                    Battle
                  </div>
                  <div className="flex justify-center mt-6">
                    <button className="text-lg border-2 border-[#002e87] px-7 py-2 rounded-3xl text-[#002e87] cursor-pointer mr-4">
                      Connect
                    </button>
                    <button className="text-lg bg-[#002e87] px-7 py-2 rounded-3xl text-white cursor-pointer">
                      Profile
                    </button>
                  </div>
                  <button
                    onClick={toggleMenu}
                    className=" text-red-500 text-lg cursor-pointer mt-4 focus:outline-none"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {isAllowed &&(
             <div className="fixed top-0 left-0  w-full h-full  bg-transparent z-50 flex justify-center items-center md:-my-28">
                <div className="  bg-[#002e87] rounded-lg px-5 md:mr-6 mr-8 py-10 text-center shadow-lg">
                  <div className="text-white text-lg mb-4">
                    CONNECT
                  </div>
                  <div className="text-white text-sm mb-4 text-center">
                    CHOOSE A WALLET <br /> CONNECTION METHOD
                  </div>
                 <div className=" bg-blue-700 rounded-lg flex justify-between space-x-20 " > <img src={Cat} alt="" />
                 <div className="text-xl mt-5 pr-3">METAMASK</div>
                  </div>
                  <div className=" bg-blue-700 rounded-lg flex justify-between space-x-20 mt-4 " > <img src={Coin} alt="" />
                 <div className="text-xl mt-5 pr-3">COINBASE</div>
                  </div>
                  <div className=" bg-blue-700 rounded-lg flex justify-between space-x-20 mt-4 " > <img src={Wallet} alt="" />
                 <div className="text-xl mt-5 pr-3">WALLETCONNECT</div>
                  </div>
                  
                  <button
                    onClick={toggleAllowed}
                    className=" text-red-500 text-lg cursor-pointer mt-4 focus:outline-none"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="md:text-3xl font-style font-semi-bold mt-24 text-white" data-aos="zoom-in-up">
          WELCOME TO
        </div>
        <div className="md:text-9xl text-5xl font-style  font-bold text-white tracking-widest text-center" data-aos="zoom-in-up">
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
        <div className="md:flex justify-center md:text-4xl md:font-style md:text-white md:-my-52 md:font-semibold md:tracking-wide md:text-center hidden">
          THE ULTIMATE BLOCKCHAIN BATTLE <br />
          WHERE YOU HAVE A CHANCE TO WIN BIG!
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center md:mt-20 my-10">
            <div className="bg-white  w-max rounded-3xl md:mt-36">
              <button className="bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text  text-4xl rounded-lg  py-3 px-4 font-style cursor-pointer">
                JOIN BATTLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

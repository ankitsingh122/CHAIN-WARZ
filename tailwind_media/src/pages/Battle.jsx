import React  from 'react';
import NavBar from '../component/NavBar';
import { Link } from "react-router-dom";
import A1 from '../assets/A1.png';
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import Join from '../component/Join';
import BattleCard from '../component/BattleCard';

function Battle() {
  

  return (
    <div className="bg-custom w-screen h-full font-azonix">
      <div className="flex justify-center">
        <div className="flex justify-center mt-10">
          <NavBar />
        </div>
      </div>
      <div
        className="text-4xl md:text-6xl text-white flex justify-center mt-44"
        data-aos="fade-top"
      >
        BATTLES
      </div>
      <div className="flex justify-between mx-5 md:mx-20 mt-10 md:text-2xl">
        <div className="flex space-x-6">
          <Link
            to="/Battle"
            className="text-white hover:text-cyan-500 cursor-pointer"
            data-aos="fade-top"
          >
            Arena
          </Link>

          <Link
            to="/BossFight"
            className="text-white hover:text-cyan-500 cursor-pointer"
            data-aos="fade-top"
          >
            Boss Fight
          </Link>
        </div>
        <Link
          to="/Winner"
          className="text-white flex justify-end bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500 px-2 py-1 rounded-lg cursor-pointer"
          data-aos="fade-top"
        >
          Winner
        </Link>
      </div>
      <div className="lg:flex justify-center  mx-2 lg:space-x-5 mt-20">
       <BattleCard img = {A1} />
       <BattleCard img ={A2} />
       <BattleCard img={A3}  />

      </div>
      <Join />
    </div>
  );
}

export default Battle

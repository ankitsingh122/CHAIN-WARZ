import React, { useState } from 'react'
import NavBar from '../component/NavBar'
import Join from '../component/Join';
import BattleCard from '../component/BattleCard';
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import { logout } from "../Store/Slice/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import Login from '../component/Login';
import Logs from '../assets/Logs.png';


function Profile() {



     const dispatch = useDispatch();
     const userData = useSelector((state) => state.users);
      const [isLogin, setLogin] = useState(false);

       const toggleLogin = () => {
         setLogin(!isLogin);
       };


    const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
    };
  return (
    <>
      <div className="bg-custom w-screen h-full font-azonix">
        <div className="flex justify-center">
          <div className="flex justify-center mt-10">
            <NavBar />
          </div>
        </div>
        <div className="flex mx-96 mt-44  ">
          <div
            onClick={toggleLogin}
            className="text-white bg-gradient-to-tr from-red-500 via-purple-600 to-blue-500 py-10 px-10  w-max   rounded-3xl cursor-pointer mt-10"
          >
            <span>{userData.user?.name || "REGISTER"}</span>
          </div>
          <div className="mt-16 mx-20">
            <div className=" text-white flex justify-center">
              {userData.user?.name || "USER"}
            </div>
            <div className="text-gray-400 flex justify-center text-xs mt-5">
              {userData.user?.email || "EMAIL"}
            </div>
          </div>
        </div>
        <div className="flex justify-end mx-96">
          <img
            className=" cursor-pointer"
            onClick={handleLogout}
            src={Logs}
            alt=""
          />
        </div>
        <div className='mx-96 mt-10 '>
          < hr />
        </div>

        <div className="lg:flex justify-center  mx-2 lg:space-x-5 mt-20">
          <BattleCard img={A1} />
          <BattleCard img={A2} />
          <BattleCard img={A3} />
        </div>
        <Join />
      </div>
      {isLogin && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-transparent z-50 flex justify-center items-center font-azonix"
          data-aos="zoom-in"
        >
          <div className="bg-purple-500 rounded-lg border border-stone-700 px-4 py-6 text-center shadow-lg text-md ">
            <Login />
            <button
              className="text-white font-bold text-lg cursor-pointer mt-4 focus:outline-none bg-black  rounded-2xl px-4 py-2 font-azonix"
              onClick={toggleLogin}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile

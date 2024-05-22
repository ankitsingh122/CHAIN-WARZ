import React from "react";
import { useSelector } from "react-redux";


function Table() {

const userData = useSelector((state) => state.users);
const player2 = useSelector((state) => state.player2);


  return (
    <div className="font-azonix">
      <div className="flex space-x-7 font-semibold mt-12">
        <div className="flex-1 ">Position</div>
        <div className="flex-1">Name</div>
        <div className="flex-1">Multiplier</div>
        <div className="flex-1">Streak</div>
        <div className="flex-1">Refreal Code</div>
        <div className="flex-1">24H Points</div>
        <div className="flex-1">Total Points</div>
      </div>
      <div className="py-5 w-[800px] bg-transparent border border-blue-600 text-white  mt-1 rounded-3xl px-5 hover:bg-violet-900 ">
        <div className="flex-justify-between">
          <div className="flex space-x-7">
            <div className="flex-1">23</div>
            <div className="flex-1">
              <span>{userData.user?.name || "USER"}</span>
            </div>
            <div className="flex-1 text-yellow-600">2.5x</div>
            <div className="flex-1 text-lime-600">100%</div>
            <div className="flex-1 text-cyan-500">x23d2jeif</div>
            <div className="flex-1">11</div>
            <div className="flex-1">324</div>
          </div>
        </div>
      </div>
      <div className="py-5 w-[800px] bg-transparent border border-blue-600 text-white  mt-5 rounded-3xl px-5  hover:bg-violet-900">
        <div className="flex-justify-between">
          <div className="flex space-x-7">
            <div className="flex-1">1</div>
            <div className="flex-1">{player2.player2?.name || "Player-2"}</div>
            <div className="flex-1 text-orange-700">2x</div>
            <div className="flex-1 text-lime-500">75%</div>
            <div className="flex-1 text-cyan-500">x23d2jeif</div>
            <div className="flex-1">11</div>
            <div className="flex-1">324</div>
          </div>
        </div>
      </div>
      <div className="py-5 w-[800px] bg-transparent border border-blue-600 text-white  mt-5 rounded-3xl px-5 hover:bg-violet-900">
        <div className="flex-justify-between">
          <div className="flex space-x-7">
            <div className="flex-1">2</div>
            <div className="flex-1">Shivam</div>
            <div className="flex-1 text-red-700">1.5x</div>
            <div className="flex-1 text-lime-300">25%</div>
            <div className="flex-1 text-cyan-500">x23d2jeif</div>
            <div className="flex-1">11</div>
            <div className="flex-1">324</div>
          </div>
        </div>
      </div>
      <div className="py-5 w-[800px] bg-transparent border border-blue-600 text-white  mt-5 rounded-3xl px-5 hover:bg-violet-900 ">
        <div className="flex-justify-between">
          <div className="flex space-x-7">
            <div className="flex-1">3</div>
            <div className="flex-1">Ayushi</div>
            <div className="flex-1 text-orange-700">2x</div>
            <div className="flex-1 text-lime-500">75%</div>
            <div className="flex-1 text-cyan-500">x23d2jeif</div>
            <div className="flex-1">11</div>
            <div className="flex-1">324</div>
          </div>
        </div>
      </div>
      <div className="py-5 w-[800px] bg-transparent border border-blue-600 text-white  mt-5 rounded-3xl px-5 hover:bg-violet-900">
        <div className="flex-justify-between">
          <div className="flex space-x-7">
            <div className="flex-1">4</div>
            <div className="flex-1">Divyanshi</div>
            <div className="flex-1 text-orange-700">2x</div>
            <div className="flex-1 text-lime-500">75%</div>
            <div className="flex-1 text-cyan-500">x23d2jeif</div>
            <div className="flex-1">11</div>
            <div className="flex-1">324</div>
          </div>
        </div>
      </div>
      <div className="py-5 w-[800px] bg-transparent border border-blue-600 text-white  mt-5 rounded-3xl px-5 hover:bg-violet-900 ">
        <div className="flex-justify-between">
          <div className="flex space-x-7">
            <div className="flex-1">5</div>
            <div className="flex-1">Tony</div>
            <div className="flex-1 text-orange-700">2x</div>
            <div className="flex-1 text-lime-500">75%</div>
            <div className="flex-1 text-cyan-500">x23d2jeif</div>
            <div className="flex-1">11</div>
            <div className="flex-1">324</div>
          </div>
        </div>
      </div>
      <div className="py-5 w-[800px] bg-transparent border border-blue-600 text-white  mt-5 rounded-3xl px-5 hover:bg-violet-900">
        <div className="flex-justify-between">
          <div className="flex space-x-7">
            <div className="flex-1">6</div>
            <div className="flex-1">Jerry</div>
            <div className="flex-1 text-orange-700">2x</div>
            <div className="flex-1 text-lime-500">75%</div>
            <div className="flex-1 text-cyan-500">x23d2jeif</div>
            <div className="flex-1">11</div>
            <div className="flex-1">324</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

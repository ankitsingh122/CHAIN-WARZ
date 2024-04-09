import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from "./component/Home";
import Works from './component/Works';
import Startbattle from './component/Startbattle';
import Statistic  from './component/Statistic';
import Prizepool from './component/Prizepool';
import About from './component/About';
import Team from './component/Team';
import Subscribe from './component/Subscribe';
import Faq from './component/Faq';
import Audit from './component/Audit'
import Join from './component/Join'



const App = () => {
   useEffect(() => {
 AOS.init({
 duration: 1000,
 
 });
 }, []);
  return (
    <div className="overflow-x-hidden">
    <Home/>
    <Works/>
    <Startbattle/>
    <Statistic/>
    <Prizepool/>
    <About/>
    <Team/>
    <Subscribe/>
    <Faq/>
    <Audit/>
    <Join/>



   </div>
  );
}

export default App

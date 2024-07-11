// src/components/Layout.js

import React, { useState } from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import Navigtion from '../config/Routes';

const Dashboard = () => {
  let [show,setShow]=useState(false);
  return (
    <div className="flex ">
      {/* Sidebar */}
    <div className='absolute lg:relative'>
    <div className={`bg-[#341d5c]  text-white w-64 ${show? 'relative left-[0px]' :'relative -left-[300px]'} duration-1000  lg:left-0 `}>
    <SideBar setShow={setShow}/>
      </div>
    </div>
      
      {/* Main content area */}
      <div className="   lg:flex-1 ">
        {/* Navbar */}
        <header className="bg-white  shadow">
          {/* Navbar content */}
          <Navbar setShow={setShow} show={show}/>
        </header>
        
        {/* Main content */}
        <main className="mb-0  ">
   {/* <MainContext/> */}
   <Navigtion/>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";

function Navbar({setShow,show}) {
  console.log(useParams())
  return <nav>
    <div className="flex  text-orange-400 justify-between  items-center bg-[#131e58] ">
        <div className="flex  items-center cursor-pointer" onClick={()=>setShow(!show)}>
            <IoMdMenu size={22}/>
            <span className="pl-1 border-b-4 border-orange-600 h-10 mt-3">Main Page</span>

        </div>
        <div className="flex w-[70%] sm:w-[60%] md:w-[50%] lg:w-[400px] justify-between">
            <button className="text-white bg-orange-400 flex p-1  rounded-full items-center">
            <FiRefreshCw size={20}/>
                <span className="pl-1">Refresh Start</span>
            </button>
           <div className="flex items-center text-white">
           <div className="rounded-full w-6 h-6 bg-slate-500">
           </div>
           <span>EN</span>
           <MdOutlineArrowDropDown size={22}/>

           </div>
           <div className="flex items-center text-white">
           <div className="rounded-full w-6 h-6 bg-slate-500 overflow-hidden">
            <IoPersonSharp size={22}/>
           </div>
           <span>121212121212</span>
           <MdOutlineArrowDropDown size={22}/>

           </div>


        </div>

    </div>
  </nav>;
}

export default Navbar;

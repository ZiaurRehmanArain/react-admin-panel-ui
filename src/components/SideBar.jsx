import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaShareSquare } from "react-icons/fa";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function SideBar({ setShow }) {
  return (
    <div className="bg-[#46008B] text-white w-64 fixed z-10">
      {/* Sidebar content */}
      <div className=" text-white">
        <div className=' '>
          <h2 className="text-xl font-bold  h-12 content-center ">Logo</h2>
          <div className='absolute right-2 top-2 lg:hidden cursor-pointer' onClick={() => setShow(false)}>
            close
          </div>
        </div>
        <ul className='text-left'>
          <li className=' flex bg-[#101a51]  items-center p-2 h-[50px] active:text-orange'>Main Menu</li>
          <li >

            <Link to='/' className=' flex  items-center p-2 h-[50px] focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51] '>  <FaHome size={22} /><span className='pl-2'>Main Home</span></Link>
          </li>
          <li>

            <Link to='/page1' className=' flex  items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]'>  <FaHome size={22} /><span className='pl-2'>Page 1</span></Link>

          </li>


          <li >
            <Link to='/page2' className=' flex items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]'><FaDollarSign size={22} /><span className='pl-2'>Page2</span></Link>
          </li>
          <li>

            <Link to='/page3' className=' flex items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]'>
              <FaCcMastercard size={22} /><span className='pl-2'>Page 3</span>
            </Link>
          </li>
          <li >
            <Link to='/page4' className=' flex items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]'>
              <IoPersonSharp size={22} /><span className='pl-2'>Page 4</span>
            </Link>
          </li>
          <li >
            <Link to='/' className=' flex items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]'>
              <FaEnvelope size={22} /><span className='pl-2'>Menu</span>
            </Link>
          </li>


          <li className=' flex bg-[#101a51]  items-center p-2 h-[50px]'><span className='pl-2'>Main Home</span></li>


          <li >
            <Link to='/page5' className=' flex items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]'>
            <FaShareSquare size={22} /><span className='pl-2'>Page 5</span>
            
            </Link>
            
            </li>
          <li >
            <Link to='/page6' className=' flex items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]'>
            <HiOutlineAdjustmentsVertical size={22} /><span className='pl-2'>Page 6</span>
            </Link>
            </li>
          <li>
            <Link to='/page7' className=' flex items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]'>
            <FaHome size={22} /><span className='pl-2'>Page 7</span>
            </Link>
            </li>


          <li className=' flex bg-[#101a51]   items-center p-2 h-[50px]'><FaHome size={22} /><span className='pl-2'>Main Home</span></li>

          <li >
            <Link to='/page8' className=' flex items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]'>
            <VscGraph size={22} /><span className='pl-2'>Page 8</span>
            
            </Link>
            
            </li>
          <li >
            <Link to='/page9' className=' flex items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]'>

            <VscGraph size={22} /><span className='pl-2'>Pge 9</span>
            </Link>
            </li>
            
            
          <li >
            <Link to='/' className=' flex items-center p-2 h-[50px]  focus:text-orange-300 focus:border-l-4 border-l-orange-300  focus:bg-[#101a51]' >
            <FaHome size={22} /><span className='pl-2'>Menu</span>
            </Link>
            </li>

        </ul>
      </div>
    </div>
  )
}

export default SideBar

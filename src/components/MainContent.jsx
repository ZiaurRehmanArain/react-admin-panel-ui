import React from "react";
import { FaDollarSign } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { FaCheck } from "react-icons/fa";
import TwoDropdowns from "./TwoDropDown";
import LineCharts from "./LineChart";
import Footer from "./Footer";
import Table from "./Table";
import TableComponent from "./Tables";



function MainContent() {

  const columns = React.useMemo(
    () => [
        {
            Header: 'Currency',
            accessor: 'Currency', // accessor is the "key" in the data
        },
        {
            Header: 'Date',
            accessor: 'Date',
        },
        {
            Header: 'Item1',
            accessor: 'Item1',
        },
        {
            Header: 'Item2',
            accessor: 'Item2',
        },
        {
            Header: 'Item3',
            accessor: 'Item3',
        },
        {
            Header: 'Status',
            accessor: 'Status',
        },
    ],
    []
);

const data = React.useMemo(
    () => [
       
      
    ],
    []
);
  return <>

    <section>
      <div className="flex flex-wrap justify-center pt-4 px-4">
        <div className="h-[150px] w-[200px] lg:w-[20%]   border-b-4 border-blue-900 border-x-2 border-t-2 border-t-slate-200 border-x-slate-200 flex items-center justify-center flex-col ">

          <div className="text-blue-900 flex items-center">
            <FaDollarSign size={30} />
            <span className="font-semibold text-4xl">0</span>

          </div>
          <div className="text-blue-900 flex items-center">
            <FaCcMastercard size={22} />
            <span className="font-semibold text-1xl pl-1 pr-1">ITEM</span>

          </div>


        </div>
        <div className="h-[150px] w-[200px] lg:w-[20%] border-b-4 border-green-900 border-x-2 border-t-2 border-t-slate-200 border-x-slate-200 flex items-center justify-center flex-col ">

          <div className="text-green-900 flex items-center">
            <FaDollarSign size={30} />
            <span className="font-semibold text-4xl">0</span>

          </div>
          <div className="text-green-900 flex items-center">
            <BsLightningFill size={22} />
            <span className="font-semibold text-1xl pl-1 pr-1">YESTERDAY</span>

          </div>


        </div>
        <div className="h-[150px]  w-[200px] lg:w-[20%] border-b-4 border-blue-200 border-x-2 border-t-2 border-t-slate-200 border-x-slate-200 flex items-center justify-center flex-col ">

          <div className="text-blue-200 flex items-center">
            <FaDollarSign size={30} />
            <span className="font-semibold text-4xl">0</span>

          </div>
          <div className="text-blue-200 flex items-center">
            <VscGraph size={22} />
            <span className="font-semibold text-1xl pl-1 pr-1">CURRENT MONTH</span>

          </div>


        </div>
        <div className="h-[150px] w-[200px] lg:w-[20%] border-b-4 border-green-900 border-x-2 border-t-2 border-t-slate-200 border-x-slate-200 flex items-center justify-center flex-col ">

          <div className="text-green-900 flex items-center">
            <FaDollarSign size={30} />
            <span className="font-semibold text-4xl">0</span>

          </div>
          <div className="text-green-900 flex items-center">
            <SlCalender size={22} />
            <span className="font-semibold text-1xl pl-1 pr-1">30 Days</span>

          </div>


        </div>
        <div className="h-[150px]  w-[200px] lg:w-[20%] border-b-4 border-blue-400 border-x-2 border-t-2 border-t-slate-200 border-x-slate-200 flex items-center justify-center flex-col ">

          <div className="text-blue-400  flex items-center">
            <FaDollarSign size={30} />
            <span className="font-semibold text-4xl">0</span>

          </div>
          <div className="text-blue-400  flex items-center">
            <FaCcMastercard size={22} />
            <span className="font-semibold text-1xl pl-1 pr-1">ITEM</span>

          </div>


        </div>


      </div>
    </section>

    <section>
      <div className="flex items-center  mt-4 pt-4 px-4 ">

        <TwoDropdowns />
        <button className="bg-orange-400 ml-2 px-4 py-2 rounded-full text-white">Apply</button>

      </div>
      {/* <LineCharts/> */}
      <div className="flex flex-col md:flex-row  lg:w-[900px] md:w-[700px] justify-between   border-l-2 border-l-slate-200 m-[10px]">
        <div className="flex flex-col overflow-x-scroll ">
          <labal className='text-2xl py-5 '>
            subheading
          </labal>
          <LineCharts />

        </div>
        <div className="flex flex-col     overflow-x-scroll ">
          <labal className='text-2xl py-5 '>
            subheading
          </labal>
          <LineCharts />

        </div>

      </div>

    </section>

    <section>


      <div className="border-l-2 border-l-slate-200 border-b-2 border-b-slate-200 m-[10px] p-2">
        <div className="flex justify-between  ">

          <span>
            Status Sumary
          </span>
          <div>
            <select id="dropdown1" name="dropdown1" className="mt-1 block w-48  border-r-2 border-r-black border-b-2 border-b-black  shadow-sm  h-10 focus:border-0 sm:text-sm ">
              <option>Yesterday</option>
              <option>2 month</option>
              <option>3 month</option>
            </select>
          </div>


        </div>

        <div className="mb-2">
          <select id="dropdown1" name="dropdown1" className="mt-1 block w-48  bg-slate-200  rounded-lg shadow-sm  h-10 focus:border-0 sm:text-sm ">
            <option unselectable>Item selected</option>
            <option>2 month</option>
            <option>3 month</option>
          </select>
        </div>

        {/* <Table /> */}
        <TableComponent columns={columns} data={data}/>
      </div>
    </section>

    <Footer />


  </>

}

export default MainContent;

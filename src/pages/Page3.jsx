import React,{useState} from "react";
import TableComponent from "../components/Tables";
import Select from 'react-select';
import DatepickerComponent from "../components/DatePicker";


function Page3() {


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
    const [activeSwitch, setActiveSwitch] = useState('switch1')


    const aquaticCreatures = [
        { label: 'Shark', value: 'Shark' },
        { label: 'Dolphin', value: 'Dolphin' },
        { label: 'Whale', value: 'Whale' },
        { label: 'Octopus', value: 'Octopus' },
        { label: 'Crab', value: 'Crab' },
        { label: 'Lobster', value: 'Lobster' },
    ];
    return <>
        {/* input  two drop down  */}


        <section>
            <div className="w-full mx-auto px-6 py-3 ">
                <div className="flex text-start items-center space-x-4">
                   

                    <div className="w-[20%] h-20">
                        <label className="block text-sm font-medium text-gray-700">Currency</label>
                        <Select
                            options={aquaticCreatures}
                            placeholder="USD"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>

                    {/* drop down  */}
                    <div className="w-[20%] h-20">
                        <label className="block text-sm font-medium text-gray-700">Time Interval</label>
                        <Select
                            options={aquaticCreatures}
                            placeholder="Exact period"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>
                    <div className="w-[15%] h-20">
                        <label className="block text-sm font-medium text-gray-700 ">Date</label>
                     <DatepickerComponent/>
                    </div>  

                    <div className="h-24 content-center">
                        <button onClick={()=>{console.log('hello')}}
                            
                            className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-md font-medium text-white bg-orange-400 rounded-full "
                        >
                            Generate Report
                        </button>
                    </div>
                </div>
            </div>
        </section>

    <section className="m-2  ">
    <div className="flex border   overflow-hidden w-[16%] m-2 bg-slate-200  ">
      <div
        className={`px-4 py-2 relative -left-2 cursor-pointer skew-x-[15deg] w-[100%] ${
          activeSwitch === 'switch1' ? 'bg-blue-900 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setActiveSwitch('switch1')}
      >
       <div className=" -skew-x-[15deg]">
       SWITCH
        <br/>
         1
       </div>
      </div>
      <div
        className={`px-4 py-2 relative -left-2  cursor-pointer skew-x-[15deg]  w-[50%]  ${
          activeSwitch === 'switch2' ? 'bg-blue-900 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setActiveSwitch('switch2')}
      >
       <div className=" -skew-x-[15deg]">
       SWITCH
        <br/>
         2
       </div>
      </div>
    </div>
    <div className="flex justify-between">

    <div className="w-[20%] h-20 px-2 my-2 ">
          <select id="dropdown1" name="dropdown1" className="mt-1 block w-48  bg-slate-200  shadow-sm  h-10 focus:border-0 sm:text-sm ">
            <option unselectable>Item selected</option>
            <option>2 month</option>
            <option>3 month</option>
          </select>
                    </div>
    <div className="w-[20%] h-20 px-2 my-2 text-white ">
          <select id="dropdown1" name="dropdown1" className="mt-1 block w-48 px-2 font-semibold bg-green-800  shadow-sm  h-10 focus:border-0 sm:text-sm ">
            <option unselectable>Export</option>
            <option>2 month</option>
            <option>3 month</option>
          </select>
                    </div>

    </div>
    
=
                    <TableComponent columns={columns} data={data} />
             
        </section>

        <section>
            <div className="flex mx-4 space-x-2 ">
                <div className="h-20 border-2 border-slate-200 p-5 w-[100%] text-left">Paragraph </div>
                <div className="h-20 border-2 border-slate-200 p-5 w-[100%] text-left">Help </div>

            </div>
        </section>

    </>

        ;
}

export default Page3;

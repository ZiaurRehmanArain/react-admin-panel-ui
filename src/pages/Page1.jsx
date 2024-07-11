import React,{useState} from "react";
import TableComponent from "../components/Tables";
import Select from 'react-select';


function Page1() {


    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'ID', // accessor is the "key" in the data
            },
            {
                Header: 'Item',
                accessor: 'Item',
            },
            {
                Header: 'Show_Hide',
                accessor: 'Show_Hide',
            },
        ],
        []
    );

    const data = React.useMemo(
        () => [
            {
                ID: 'John Doe',
                Item: 28,
                Show_Hide: 'data',
                
            },
          
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
                    <div className="w-[20%] h-[90px]">
                        <label className="block text-sm font-medium text-gray-700">item</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter text"
                        />
                    </div>  

                    <div className="w-[20%] h-20">
                        <label className="block text-sm font-medium text-gray-700">Dropdown 1</label>
                        <Select
                            options={aquaticCreatures}
                            placeholder="search"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>

                    {/* drop down  */}
                    <div className="w-[20%] h-20">
                        <label className="block text-sm font-medium text-gray-700">Dropdown 2</label>
                        <Select
                            options={aquaticCreatures}
                            placeholder="search"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>

                    <div className="h-24 content-center">
                        <button onClick={()=>{console.log('hello')}}
                            
                            className="w-full flex justify-center  py-2 px-4 border border-transparent  shadow-sm text-md text-white bg-orange-400 rounded-full "
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>

    <section className="m-2 border-2 border-slate-200 ">
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
    <div className="w-[20%] h-20 px-2 my-2 ">
          <select id="dropdown1" name="dropdown1" className="mt-1 block w-48  bg-slate-200  shadow-sm  h-10 focus:border-0 sm:text-sm ">
            <option unselectable>Item selected</option>
            <option>2 month</option>
            <option>3 month</option>
          </select>
                    </div>
    
=
                    <TableComponent columns={columns} data={data} />
             
        </section>

    </>

        ;
}

export default Page1;

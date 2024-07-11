
import React,{useState} from "react";
import TableComponent from "../components/Tables";
import Select from 'react-select';


function Page6() {

    const webDropDownData = [
        { label: 'Link', value: 'Link' },
       
    ];

    const currencyDropDownData = [
        { label: 'USA', value: 'USA' },
       
    ];

    const itemDropDownData = [
        { label: 'item 1', value: 'item 1' },
       
    ];
    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'ID', // accessor is the "key" in the data
            },
            {
                Header: 'Item',
                accessor: 'ITem',
            },
            {
                Header: 'Currency',
                accessor: 'Currency',
            },
            {
                Header: 'PromoCode',
                accessor: 'PromoCode',
            },
            {
                Header: 'TAG',
                accessor: 'TAG',
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



    return <>

<section>
            <div className="w-full mx-auto px-6 py-3 ">
                <div className="flex flex-wrap text-start items-center space-x-4">
                    <div className="w-[20%] h-16">
                        <label className="block text-sm font-medium text-gray-700">item</label>
                        <Select
                            options={webDropDownData}
                            placeholder="All"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>  

                    <div className="w-[20%] h-16">
                        <label className="block text-sm font-medium text-gray-700">Currency</label>
                        <Select
                            options={currencyDropDownData}
                            placeholder="currency"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>

                    {/* drop down  */}
                    <div className="w-[40%] h-16">
                        <label className="block text-sm font-medium text-gray-700">Campaingn</label>
                        <Select
                        className="w-[100%]"
                            options={itemDropDownData}
                            placeholder="Select ..."
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>
                 

                    <div className="h-20 content-center -mb-2">
                        <button onClick={()=>{console.log('hello')}}
                            
                            className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-md font-medium mb-2 text-white bg-orange-400 rounded-full "
                        >
                            Generate Link
                        </button>
                    </div>
                </div>
            </div>
        </section>
  

        <section className="mx-2 my-2 border-2 border-slate-200 ">
            <div className="flex border   overflow-hidden w-[16%] m-2 bg-slate-200  ">
                <div
                    className={`px-4 py-2 relative -left-2 cursor-pointer skew-x-[15deg] w-[100%] ${activeSwitch === 'switch1' ? 'bg-blue-900 text-white' : 'bg-gray-200'
                        }`}
                    onClick={() => setActiveSwitch('switch1')}
                >
                    <div className=" -skew-x-[15deg]">
                        SWITCH
                        <br />
                        1
                    </div>
                </div>
                <div
                    className={`px-4 py-2 relative -left-2  cursor-pointer skew-x-[15deg]  w-[50%]  ${activeSwitch === 'switch2' ? 'bg-blue-900 text-white' : 'bg-gray-200'
                        }`}
                    onClick={() => setActiveSwitch('switch2')}
                >
                    <div className=" -skew-x-[15deg]">
                        SWITCH
                        <br />
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

            <div className="mt-4">
                
            <TableComponent columns={columns} data={data} />
            </div>

        </section>

        <section>
            <div className="flex mx-2 space-x-2  text-slate-500">
                <div className=" border-2 border-slate-200 p-5 w-[100%] text-left py-4">
                    <h1 className="text-xl font-semibold">Paragraph heading</h1>
                    <p  className="text-ld">Paragraph</p>
                     </div>
                <div className=" border-2 border-slate-200 p-5 w-[100%] text-left py-4">
                <h1 className="text-xl font-semibold">Paragraph heading</h1>
                <p  className="text-ld">Paragraph</p>
                     </div>

            </div>
        </section>
    </>;
}

export default Page6;

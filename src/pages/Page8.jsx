import React from "react";
import Select from 'react-select';
import DatepickerComponent from "../components/DatePicker";

function Page8() {
  const currencyDropDownData = [
    { label: 'Link', value: 'Link' },
   
];

const item1DropDownData = [
    { label: 'USA', value: 'USA' },
   
];

const item2DropDownData = [
    { label: 'item 1', value: 'item 1' },
   
];
const item3DropDownData = [
    { label: 'item 1', value: 'item 1' },
   
];
const langaugeDropDownData = [
    { label: 'item 1', value: 'item 1' },
   
];
  return <>
  <section>
            <div className="w-full mx-auto px-6 py-3 ">
                <div className="flex flex-wrap text-start items-center space-x-4">
                    <div className="w-[15%] h-16">
                        <label className="block text-sm font-medium text-gray-700">Currency</label>
                        <Select
                            options={currencyDropDownData}
                            placeholder="search"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>  

                    <div className="w-[15%] h-16">
                        <label className="block text-sm font-medium text-gray-700">Item</label>
                        <Select
                            options={item1DropDownData}
                            placeholder="search"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>

       
                    
                    <div className="w-[15%] h-[70px]">
                        <label className="block text-sm font-medium text-gray-700">ID</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Name"
                        />
                    </div>  
                    <div className="w-[30%] h-16">
                        <label className="block text-sm font-medium text-gray-700">Internal Time</label>
                        <Select
                        className="w-[100%]"
                            options={langaugeDropDownData}
                            placeholder="All"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>
                 


                    <div className="flex w-[600px]  md:w-[800px] space-x-2  relative -left-4">
                     

                        <div className="w-[50%] mt-6">
                      <DatepickerComponent/>
                    </div>
                        <div className="mt-6 content-center ">
                        <button onClick={()=>{console.log('hello')}}
                            
                            className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-md font-medium mb-2 text-white bg-orange-400 rounded-full "
                        >
                            Generate Link
                        </button>
                    </div>
                    </div>

                    
                </div>
            </div>
        </section>


        <section className="mx-4">
          <div>
            <ul className="text-left">
              <li className="bg-orange-100 p-2">Table Row 1</li>
              <li className="p-2"> Table Row 2 </li>
              <li className="bg-orange-100 p-2">Table Row 3</li>
            </ul>
          </div>
        </section>
  
  
  </>;
}

export default Page8;

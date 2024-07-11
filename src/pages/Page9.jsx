import React from "react";
import TableComponent from "../components/Tables";
import Select from 'react-select';
import DatepickerComponent from "../components/DatePicker";

function Page9() {

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



  return <>
  


  <section className="mx-2 my-2 border-2 border-slate-200 ">

  <section>
            <div className="w-full mx-auto px-6 py-3 ">
                <div className="flex flex-wrap text-start items-center space-x-4">
                    <div className="w-[25%] h-16">
                        <label className="block text-sm font-medium text-gray-700">Currency</label>
                        <Select
                            options={currencyDropDownData}
                            placeholder="search"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>  

                    <div className="w-[25%] h-16">
                        <label className="block text-sm font-medium text-gray-700">Item</label>
                        <Select
                            options={item1DropDownData}
                            placeholder="search"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>

                    {/* drop down  */}
                   
                    <div className="w-[20%] h-[70px]">
                        <label className="block text-sm font-medium text-gray-700">ID</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Name"
                        />
                    </div>  
                    <div className="w-[15%] h-16">
                        <label className="block text-sm font-medium text-gray-700">Interval Time</label>
                        <Select
                        className="w-[100%]"
                            options={langaugeDropDownData}
                            placeholder="All"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>
                 


                    <div className="flex  w-[90%] space-x-2  relative -left-4">
                        <div className="mt-6">
                         <DatepickerComponent/>
                        </div>
                       
                        <div className="w-[20%] mt-[5px]">
                        <label className="block text-sm font-medium text-gray-700">item</label>
                        <Select
                        className="w-[100%]"
                            options={langaugeDropDownData}
                            placeholder="All"
                            onChange={opt => console.log(opt.label, opt.value)}
                        />
                    </div>
                        <div className="mt-6 content-center ">
                        <button onClick={()=>{console.log('hello')}}
                            
                            className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-md font-medium mb-2 text-white bg-orange-400 rounded-full "
                        >
                            Create Report
                        </button>
                    </div>
                    </div>

                    
                </div>
            </div>
        </section>
  


          <section className="mx-4">

          
            <div className="flex -mt-4 ">

                <div className="w-[20%] h-20 px-2 mb-4 ">
                    <select id="dropdown1" name="dropdown1" className="mt-1 block w-48  bg-slate-200  shadow-sm  h-10 focus:border-0 sm:text-sm ">
                        <option unselectable>Item selected</option>
                        <option>2 month</option>
                        <option>3 month</option>
                    </select>
                </div>
              
            </div>

            <div className="mt-2">
            <TableComponent columns={columns} data={data} />

            </div>
</section>
        </section>
  
  
  </>;
}

export default Page9;

import React,{useState} from "react";
import TableComponent from "../components/Tables";

function Page2() {
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
                Show_Hidden: '123 Main St',
            },
          
        ],
        []
    );
    // const [activeSwitch, setActiveSwitch] = useState('switch1')
  return <>
     <section className="m-2 border-2 border-slate-200 ">
   
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
  
  </>;
}

export default Page2;

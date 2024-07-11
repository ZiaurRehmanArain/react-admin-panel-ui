import React from 'react';
import { HiArrowsUpDown } from "react-icons/hi2";

const Table = () => {
  const data = [
    { currency: 'USD', views: 1000, clicks: 500 },
    { currency: 'EUR', views: 800, clicks: 400 },
    { currency: 'GBP', views: 1200, clicks: 600 },
    { currency: 'CAD', views: 700, clicks: 300 },
  ];

  return (
    <div className="container mx-auto">
      
      <div className="overflow-x-auto">
        <table className="min-w-full text-white bg-black border border-gray-200 ">
          <thead>
            <tr className="bg-black-100 border-b border-gray-200">
              <th className="text-center py-2 px-4 border-2  border-gray-200 relative"><span className=''>Currency</span> <HiArrowsUpDown size={22} className='absolute right-0 top-2'/> </th>
              <th className="text-center py-2 px-4 border-2 border-gray-200 relative">Views <HiArrowsUpDown size={22} className='absolute right-0 top-2'/></th>
              <th className="text-center py-2 px-4 border-2 border-gray-200 relative">
               <span>
                Clicks
                
                </span> 
                <HiArrowsUpDown size={22} className='absolute right-0 top-2'/>


              </th>
            </tr>
          </thead>
          {/* <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 bg-slate-500">
                <td className="text-left py-2 px-4">{row.currency}</td>
                <td className="text-left py-2 px-4">{row.views}</td>
                <td className="text-left py-2 px-4">{row.clicks}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
        <div className='bg-slate-200 h-[100px] min-w-full content-center mt-1'>
No information
        </div>
      </div>
    </div>
  );
};

export default Table;

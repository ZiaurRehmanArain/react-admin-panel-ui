import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { SlCalender } from "react-icons/sl";
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerComponent = () => {
  const [startDate, setStartDate] = useState();

  return (
    <div className=" relative ">
      <DatePicker 
      placeholderText='DD/MM/YYYY'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy    dd/MM/yyyy"
        className="form-input block w-[300px] md:w-[400px] pl-10 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
<SlCalender size={30} className='absolute border-r-2 border-r-slate-200 top-0 left-0 p-1 h-full'/>
      </div >
  );
};

export default DatepickerComponent;

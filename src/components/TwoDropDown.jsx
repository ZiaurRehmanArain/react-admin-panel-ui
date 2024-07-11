import React from 'react';

const TwoDropdowns = () => {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <label htmlFor="dropdown1" className="block text-sm font-medium text-gray-700">Time interval :</label>
        <select id="dropdown1" name="dropdown1" className="mt-1 block w-48  border-l-2 border-l-black border-b-2 border-b-black  shadow-sm  h-10 focus:border-0 sm:text-sm ">
          <option>1 month</option>
          <option>2 month</option>
          <option>3 month</option>
        </select>
      </div>
      <div>
        <label htmlFor="dropdown2" className="block text-sm font-medium text-gray-700">Currency</label>
        <select id="dropdown2" name="dropdown2" className="mt-1 block w-48 border-gray-300  shadow-sm  border-l-2 border-l-black border-b-2 border-b-black  h-10">
          <option>Option A</option>
          <option>Option B</option>
          <option>Option C</option>
        </select>
      </div>
    </div>
  );
};

export default TwoDropdowns;

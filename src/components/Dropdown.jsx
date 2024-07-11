import React, { useState } from 'react';

const SearchableDropdown = ({ options }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="w-64 relative">
      <div className="relative">
        <input
          type="text"
          value={selectedOption || searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Search..."
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center px-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;

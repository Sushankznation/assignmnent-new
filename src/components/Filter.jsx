import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [minAverage, setMinAverage] = useState('');
  const [maxAverage, setMaxAverage] = useState('');

  const handleFilter = () => {
    onFilter({
      name: nameFilter,
      minAverage: parseFloat(minAverage) || 0,
      maxAverage: parseFloat(maxAverage) || Infinity,
    });
  };

  return (
    <div className=" mx-auto p-4 bg-gray-200 rounded-md shadow-md flex items-center content-center justify-center">
      <div className="flex flex-col sm:flex-row sm:space-x-2">
        <input
          type="text"
          placeholder="Search by Name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="p-2 border rounded-md mb-2 sm:mb-0"
        />
        <input
          type="number"
          placeholder="Min Batting Average"
          value={minAverage}
          onChange={(e) => setMinAverage(e.target.value)}
          className="p-2 border rounded-md mb-2 sm:mb-0"
        />
        <input
          type="number"
          placeholder="Max Batting Average"
          value={maxAverage}
          onChange={(e) => setMaxAverage(e.target.value)}
          className="p-2 border rounded-md mb-2 sm:mb-0"
        />
        <button onClick={handleFilter} className="bg-blue-500 text-white p-2 rounded-md">
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;

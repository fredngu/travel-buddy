import React from 'react';

function InputBox({ value, onInputChange }) {
  const handleInput = (event) => {
    const newValue = event.target.value;
    onInputChange(newValue);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mt-4">Comparison Name</h2>
      <div className="mb-4">
        <label htmlFor="comparisonName" className="block text-gray-700 text-sm font-bold mb-2">
        </label>
        <input
          type="text"
          id="comparisonName"
          value={value}
          onChange={handleInput}
          className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-gray-100"
          placeholder="Enter Comparison Name"
        />
      </div>
    </div>

  );
}

export default InputBox;

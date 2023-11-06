import React from 'react';

function InputBox({ value, onInputChange }) {
  const handleInput = (event) => {
    const newValue = event.target.value;
    onInputChange(newValue);
  };

  return (
    <div>
      <h1>Comparison Name</h1>
      <label>
        Comparison Name:
        <input
          type="text"
          value={value}
          onChange={handleInput}
        />
      </label>
    </div>
  );
}

export default InputBox;

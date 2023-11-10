import React from 'react';

const Dropdown = ({ handleChange }) => {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    handleChange(selectedValue);
  };

  return (
    <select onChange={handleSelectChange}>
      <option value="">Select an option</option>
      <option value="Master">Master</option>
      <option value="Manager">Manager</option>
    </select>
  );
};

export default Dropdown;

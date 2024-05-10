import React from "react";

const SelectField = ({ name, options }) => {
  return (
    <div className="relative">
      <select
        name={name}
        className="w-full border-2 placeholder:black  px-3 py-3 border-gray-800"
      >
        <option value="" disabled selected hidden>
          {name}
        </option>
        {options.map((option, index) => (
          <option className="text-lg" key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

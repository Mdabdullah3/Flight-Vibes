import React from "react";

const InputField = ({ value, type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="w-full border-2 placeholder:black border-gray-700 px-3 py-2"
      />
    </div>
  );
};

export default InputField;

import React from "react";

const Radio = ({ label }) => {
  return (
    <div className="flex items-center gap-3">
      <input
        id={label}
        type="radio"
        name="radio-3"
        className="radio radio-primary radio-sm"
        checked
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Radio;

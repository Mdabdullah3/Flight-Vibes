import React from "react";

const CheckBox = ({ label }) => {
  return (
    <div className="flex items-center gap-4">
      <input
        id="label"
        type="checkbox"
        defaultChecked
        className="checkbox checkbox-primary"
      />
      <label htmlFor="label" className="font-bold">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;

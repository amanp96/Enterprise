import React, { useState } from "react";

const FloatLabelInput = ({ label, type, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="relative mb-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        // onBlur={handleBlur}
        className="w-full px-3 py-3 border-2 rounded-md border-gray-500  focus:outline-none focus:border-indigo-500"
      />
      <label
        className={`absolute left-3 transition-all duration-300 ${
          isFocused || value
            ? "-top-2 -left-1 text-xs text-gray-500"
            : "top-3 text-sm"
        } ${(isFocused || value) && "transform -translate-y-3 -translate-x-2"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatLabelInput;

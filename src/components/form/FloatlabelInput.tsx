import { useState } from "react";

const FloatLabelInput = ({ label, type, value, onChange, className }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className={`relative w-96 ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        // onBlur={handleBlur}
        className=" w-full py-2 px-3 border-2 rounded-md border-gray-300 focus:outline-none focus:border-sky-400"
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

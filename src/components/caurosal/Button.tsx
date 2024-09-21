import React from "react";

const Button: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <button onClick={onPress} className=" ">
      <div className="bg-white shadow-md p-5  rounded-full top-0   hover:bg-violet-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#0000FF"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </button>
  );
};

export default Button;

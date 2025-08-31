import React from "react";

const PageDividerOne = ({ color = "#F92029", className = "" }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-[100px]"
      >
        <g fill={color}>
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
            opacity=".5"
          />
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
            opacity=".5"
          />
          <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z" />
        </g>
      </svg>
    </div>
  );
};

export default PageDividerOne;

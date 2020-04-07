import React from "react";
import "./customInput.styles.scss";

const CustomInput = ({ type, value, onClick, children, ...otherProps }) => {
  return (
    <div>
      <button
        type={type}
        value={value}
        onClick={onClick}
        className="btn"
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomInput;

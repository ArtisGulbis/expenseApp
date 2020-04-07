import React from "react";
import "./customInput.styles.scss";

const CustomInput = ({
  type,
  value,
  onClick,
  children,
  name,
  ...otherProps
}) => {
  return (
    <div>
      <button
        type={type}
        value={value}
        onClick={onClick}
        className="btn"
        name={name}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomInput;

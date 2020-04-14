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
    <div className="btn-filter">
      <div
        className={"btn " + (value === "Income" ? "inc" : "exp")}
        type={type}
        value={value}
        onClick={onClick}
        name={name}
        {...otherProps}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomInput;

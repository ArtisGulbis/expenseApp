import React from "react";
import "./customButton.styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <button className="btn" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;

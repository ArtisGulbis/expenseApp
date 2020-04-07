import React from "react";
import "./customField.styles.scss";

const CustomField = ({
  handleChange,
  placeholder,
  type,
  name,
  ...otherProps
}) => {
  return (
    <div className="input-container">
      <input
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className="input"
        {...otherProps}
      />
    </div>
  );
};

export default CustomField;

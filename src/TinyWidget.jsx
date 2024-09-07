import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaTextWidth,
  FaClock,
} from "react-icons/fa";
import "./styles.css";

const TinyWidget = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("text"); // Default type is text

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
    setInputValue(""); // Reset input value when changing type
  };

  const validateInput = () => {
    if (inputType === "amount" && isNaN(Number(inputValue))) {
      alert("Please enter a valid amount.");
      setInputValue("");
    }
    if (
      inputType === "days" &&
      (isNaN(Number(inputValue)) || Number(inputValue) < 0)
    ) {
      alert("Please enter a valid number of days.");
      setInputValue("");
    }
  };

  // Function to dynamically render the correct icon
  const renderIcon = () => {
    switch (inputType) {
      case "date":
        return <FaCalendarAlt className="input-icon" />;
      case "amount":
        return <FaDollarSign className="input-icon" />;
      case "days":
        return <FaClock className="input-icon" />;
      default:
        return <FaTextWidth className="input-icon" />;
    }
  };

  return (
    <div className="tiny-widget">
      <select
        className="input-type-selector"
        value={inputType}
        onChange={handleTypeChange}
      >
        <option value="text">Text</option>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
        <option value="days">Days</option>
      </select>
      {renderIcon()}
      <input
        type={
          inputType === "amount" || inputType === "days" ? "number" : inputType
        }
        value={inputValue}
        onChange={handleInputChange}
        onBlur={validateInput}
        placeholder={`Enter ${inputType}`}
        className="input-field"
      />
    </div>
  );
};

export default TinyWidget;

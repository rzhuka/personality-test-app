import React from "react";
import "./index.css";

export const Cart = ({ data, handleCheck, selectedValues }) => {
  const { question, options } = data;
  const optionsList = options.map((option) => {
    const { id, text, points } = option;
    return (
      <div className="row" key={id}>
        <input
          type="radio"
          id={id}
          value={text}
          onChange={() => handleCheck(id, points)}
          checked={selectedValues !== undefined && selectedValues == id}
        />
        <label>{text}</label>
      </div>
    );
  });
  return (
    <div className="cart-container">
      <div className="questions">
        <span>{question}</span>
      </div>
      <div className="options-container">{optionsList}</div>
    </div>
  );
};

import React from "react";
import { result } from "../../data/index.js";
import "./index.css";

export const Result = ({ totalPoints, handleChangeView }) => {
  const yourType = totalPoints > 30 ? "extrovert" : "introvert";

  return (
    <div className="result-container">
      <div className="tittle">{`You are more a ${yourType}`}</div>
      <div className="description">{result[yourType]}</div>
      <div className="footer">
        <button onClick={() => handleChangeView("content")}>
          Retake the test
        </button>
      </div>
    </div>
  );
};

export default Result;

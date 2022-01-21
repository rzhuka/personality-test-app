import React, { useState } from "react";
import "./index.css";
import { data } from "../../data/index.js";
import { Cart } from "../card/index.js";

export const Container = ({ handleGetResults }) => {
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState({});
  const progressValue = ((index + 1) / data.length).toFixed(2) * 100;
  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  };
  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const handleCheck = (id, points) => {
    let temp = { ...checked, [index]: { id: id, points: points } };
    setChecked(temp);
  };

  return (
    <div className="container-body ">
      <div className="col-8 content">
        <div className="header">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progressValue}%` }}
              aria-valuenow={`${progressValue}%`}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {`${progressValue}%`}
            </div>
          </div>
        </div>
        <div className="body">
          <Cart
            handleCheck={handleCheck}
            data={data[index]}
            selectedValues={
              checked[index] != undefined ? checked[index].id : undefined
            }
          />
        </div>
        <div className="footer">
          <div
            className="button-container"
            style={{ visibility: index > 0 ? "visible" : "hidden" }}
          >
            <button onClick={() => handlePrevious()}>Previous</button>
          </div>

          <div className="button-container">
            {index < data.length - 1 ? (
              <button onClick={() => handleNext()}>Next</button>
            ) : (
              <button onClick={() => handleGetResults(checked)}>Finish</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

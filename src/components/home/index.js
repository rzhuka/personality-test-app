import React from "react";
import contentImg from "../../assets/img1.jpeg";
import "./index.css";

export const Home = ({ handleChangeView }) => {
  return (
    <div className="body-container">
      <div className="description-container">
        <div className="tittle">
          Test: Are you an introvert or an extrovert?
        </div>
        <div className="body">
          So do you consider yourself more of an introvert or an extrovert? Take
          this test, put together with input from psychoanalyst Sandrine Dury,
          and find out
        </div>
      </div>
      <div className="img-container">
        <img src={contentImg} alt="personality introvert or extrovert" />
      </div>
      <div className="button-container">
        <button onClick={() => handleChangeView("content")}>
          Start Now <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

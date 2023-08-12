import React from "react";
import { Send } from "@material-ui/icons";
import "../Assets/CSS/NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">Newsletter</h1>
      <div className="newsletter-desc">Everything you need to know </div>
      <div className="newsletter-input-container">
        <input className="newsletter-input" type="email" name="" id="" />
        <button className="newsletter-button" type="submit">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

import React, { useContext } from "react";
import {  DarkModeContext } from "../context/DarkModeContext";

export default function InputsMetric({ height, onSetHeight, weight, onSetWeight }) {
  const { darkMode } = useContext(DarkModeContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <div className="input-section">

      <form onSubmit={handleSubmit} className="input-container">
        <label className="input-label" style={{color: darkMode ? '#ffff' : ''}}>
          Height
          <input
            value={height}
            onChange={(e) => onSetHeight(e.target.value)}
            placeholder="0"
            className={darkMode ? `dark-input` : ``}
          />
        </label>
        <label className="input-label" style={{color: darkMode ? '#ffff' : ''}}>
          Weight
          <input
            value={weight}
            onChange={(e) => onSetWeight(e.target.value)}
            placeholder="0"
            className={darkMode ? `dark-input` : ``}
          />
        </label>
      </form>
    </div>
  );
}

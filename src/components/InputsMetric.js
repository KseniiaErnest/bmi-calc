import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function InputsMetric({
  height,
  onSetHeight,
  weight,
  onSetWeight,
}) {
  const { darkMode } = useContext(DarkModeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="input-section">
      <form onSubmit={handleSubmit} className="input-container">
        <label
          className="input-label"
          style={{ color: darkMode ? "#ffff" : "" }}
        >
          Height
          <div className="input-with-unit">
            <input
              value={height}
              onChange={(e) => onSetHeight(e.target.value)}
              placeholder="0"
              className={darkMode ? `dark-input` : ``}
            />
            <div className="unit" style={{ color: darkMode ? "#e9ebed" : "" }}>cm</div>
          </div>
        </label>
        <label
          className="input-label"
          style={{ color: darkMode ? "#ffff" : "" }}
        >
          Weight
          <div className="input-with-unit">
            <input
              value={weight}
              onChange={(e) => onSetWeight(e.target.value)}
              placeholder="0"
              className={darkMode ? `dark-input` : ``}
            />
            <div className="unit" style={{ color: darkMode ? "#e9ebed" : "" }}>
              kg
            </div>
          </div>
        </label>
      </form>
    </div>
  );
}

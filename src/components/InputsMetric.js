import React from "react";

export default function InputsMetric({ height, onSetHeight, weight, onSetWeight }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <div className="input-section">

      <form onSubmit={handleSubmit} className="input-container">
        <label className="input-label">
          Height
          <input
            value={height}
            onChange={(e) => onSetHeight(e.target.value)}
            placeholder="0"
          />
        </label>
        <label className="input-label">
          Weight
          <input
            value={weight}
            onChange={(e) => onSetWeight(e.target.value)}
            placeholder="0"
          />
        </label>
      </form>
    </div>
  );
}

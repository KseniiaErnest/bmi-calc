import React from "react";

export default function Inputs({ height, onSetHeight, weight, onSetWeight }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    onSetHeight(height);
    onSetWeight(weight);
  };
  return (
    <div className="input-section">
      <div className="input-container">
        <label>
          <input className="check" type="checkbox" />
          Metric
        </label>

        <label>
          <input className="check" type="checkbox" />
          Imperial
        </label>
      </div>

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

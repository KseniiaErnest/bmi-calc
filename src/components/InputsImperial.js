import React from "react";

export default function InputsImperial({ feet, setFeet, inches, setInches, stones, setStones, pounds, setPounds }) {
 
 const handleSubmitImperial = (e) => {
  e.preventDefault();

 }
 
  return (
    <div>
      <div className="input-section">
        <form className="input-container imperial" onSubmit={handleSubmitImperial}>
          <div className="imperial-box">
            <label className="input-label">
              Height
              <input placeholder="0" value={feet} onChange={(e) => setFeet(e.target.value)} />
            </label>
            <label className="input-label">
              <input  placeholder="0" value={inches} onChange={(e) => setInches(e.target.value)} />
            </label>
          </div>

          <div className="imperial-box">
            <label className="input-label">
              Weight
              <input placeholder="0" value={stones} onChange={(e) => setStones(e.target.value)} />
            </label>
            <label className="input-label">
              <input placeholder="0" value={pounds} onChange={(e) => setPounds(e.target.value)} />
              </label>
          </div>
        </form>
      </div>
    </div>
  );
}

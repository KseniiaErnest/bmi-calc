import React, { useContext } from "react";
import {  DarkModeContext } from "../context/DarkModeContext";

export default function InputsImperial({ feet, setFeet, inches, setInches, stones, setStones, pounds, setPounds }) {
  const { darkMode } = useContext(DarkModeContext);
 const handleSubmitImperial = (e) => {
  e.preventDefault();

 }
 
  return (
    <div>
      <div className="input-section">
        <form className="input-container imperial" onSubmit={handleSubmitImperial}>
          <div className="imperial-box">
          <label className="input-label" style={{color: darkMode ? '#ffff' : ''}}>
              Height
              <div className="input-with-unit">
              <input className={darkMode ? `dark-input` : ``} placeholder="0" value={feet} onChange={(e) => setFeet(e.target.value)} />
              <div className="unit" style={{ color: darkMode ? "#e9ebed" : "" }}>ft</div>
           </div>
            </label>
            <label className="input-label">
            <div className="input-with-unit">
              <input className={darkMode ? `dark-input` : ``}  placeholder="0" value={inches} onChange={(e) => setInches(e.target.value)} />
              <div className="unit" style={{ color: darkMode ? "#e9ebed" : "" }}>in</div>
              </div>
            </label>
          </div>

          <div className="imperial-box">
          <label className="input-label" style={{color: darkMode ? '#ffff' : ''}}>
              Weight
              <div className="input-with-unit">
              <input className={darkMode ? `dark-input` : ``} placeholder="0" value={stones} onChange={(e) => setStones(e.target.value)} />
              <div className="unit" style={{ color: darkMode ? "#e9ebed" : "" }}>st</div>
              </div>
            </label>
            <label className="input-label">
            <div className="input-with-unit">
              <input className={darkMode ? `dark-input` : ``} placeholder="0" value={pounds} onChange={(e) => setPounds(e.target.value)} />
              <div className="unit" style={{ color: darkMode ? "#e9ebed" : "" }}>lbs</div>
              </div>
              </label>
          </div>
        </form>
      </div>
    </div>
  );
}

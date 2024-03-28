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
              <input className={darkMode ? `dark-input` : ``} placeholder="0" value={feet} onChange={(e) => setFeet(e.target.value)} />
            </label>
            <label className="input-label">
              <input className={darkMode ? `dark-input` : ``}  placeholder="0" value={inches} onChange={(e) => setInches(e.target.value)} />
            </label>
          </div>

          <div className="imperial-box">
          <label className="input-label" style={{color: darkMode ? '#ffff' : ''}}>
              Weight
              <input className={darkMode ? `dark-input` : ``} placeholder="0" value={stones} onChange={(e) => setStones(e.target.value)} />
            </label>
            <label className="input-label">
              <input className={darkMode ? `dark-input` : ``} placeholder="0" value={pounds} onChange={(e) => setPounds(e.target.value)} />
              </label>
          </div>
        </form>
      </div>
    </div>
  );
}

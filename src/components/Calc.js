import React, { useState } from 'react'
import InputsMetric from './InputsMetric'
import Result from './Result'
import InputsImperial from './InputsImperial';

export default function Calc() {
const [height, setHeight] = useState('');
const [weight, setWeight] = useState('');
const [feet, setFeet] = useState('');
const [inches, setInches] = useState('');
const [stones, setStones] = useState('');
const [pounds, setPounds] = useState('');
const [isMetric, setIsMetric] = useState(true);

// const bmi = () => {
//   if (!height || !weight || !feet || !inches || !stones || !pounds) {
//     return null;
// }

// if (isMetric) {
//   return (parseFloat(weight) / (parseFloat(height / 100) * parseFloat(height / 100))).toFixed(2);
// } else {
//   const heightInInches = (parseFloat(feet) * 12) + parseFloat(inches);
//   const weightInPounds = (parseFloat(stones) * 14) + parseFloat(pounds);
//   return ((weightInPounds / (heightInInches * heightInInches)) * 703).toFixed(2);
// }

// }

const bmi = () => {
  if (isMetric) {
    if (!height || !weight) {
      return null;
    }
    return (parseFloat(weight) / ((parseFloat(height) / 100) * (parseFloat(height) / 100))).toFixed(2);
  } else {
    if (!feet || !inches || !stones || !pounds) {
      return null;
    }
    const heightInInches = (parseFloat(feet) * 12) + parseFloat(inches);
    const weightInPounds = (parseFloat(stones) * 14) + parseFloat(pounds);
    return ((weightInPounds / (heightInInches * heightInInches)) * 703).toFixed(2);
  }
};

const handleToggleSystem = () => {
  setIsMetric(!isMetric);

  setHeight('');
  setWeight('');
}

  return (
    <div className='calc-container'>
      <h2>Enter your details below</h2>
      <div className="input-container">
        <label>
          <input className="check" type="checkbox" checked={isMetric} onChange={handleToggleSystem} />
          Metric
        </label>

        <label>
          <input className="check" type="checkbox" checked={!isMetric} onChange={handleToggleSystem} />
          Imperial
        </label>
      </div>
      {isMetric ? (
        <InputsMetric height={height} onSetHeight={setHeight} weight={weight} onSetWeight={setWeight} />
      ) : (
        <InputsImperial feet={feet} setFeet={setFeet} inches={inches} setInches={setInches} stones={stones} setStones={setStones} pounds={pounds} setPounds={setPounds}   />
      )}
      <Result height={height} weight={weight} bmi={bmi()} />
    </div>
  )
}



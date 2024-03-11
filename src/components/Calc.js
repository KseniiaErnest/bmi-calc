import React, { useState } from 'react'
import Inputs from './Inputs'
import Result from './Result'

export default function Calc() {
const [height, setHeight] = useState('');
const [weight, setWeight] = useState('');

const bmi = () => {
  if (!height || !weight || isNaN(parseFloat(height)) || isNaN(parseFloat(weight))) {
    return null;
}
return (parseFloat(weight) / (parseFloat(height / 100) * parseFloat(height / 100))).toFixed(2);
}





  return (
    <div className='calc-container'>
      <h2>Enter your details below</h2>
      <Inputs height={height} onSetHeight={setHeight} weight={weight} onSetWeight={setWeight} />
      <Result height={height} weight={weight} bmi={bmi()} />
    </div>
  )
}

import React, { useState } from 'react'
import Inputs from './Inputs'
import Result from './Result'

export default function Calc() {
const [height, setHeight] = useState(0);
const [weight, setWeight] = useState(0);





  return (
    <div className='calc-container'>
      <h2>Enter your details below</h2>
      <Inputs height={height} onSetHeight={setHeight} weight={weight} onSetWeight={setWeight} />
      <Result height={height} weight={weight} />
    </div>
  )
}

import React from 'react'
import Inputs from './Inputs'
import Result from './Result'

export default function Calc() {
  return (
    <div className='calc-container'>
      <h2>Enter your details below</h2>
      <Inputs />
      <Result />
    </div>
  )
}

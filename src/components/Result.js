import React from 'react'

export default function Result( {height, weight} ) {
  return (
    <div className='result-container '>

{height && weight ? (
  <div>

  <div>
    <p>Your BMI is...</p>
    <h2>TEST</h2>
  </div>

  <div>
<p>Your BMI suggests you're a healthy weight. Your height and weight are {height}cm and {weight}kg </p>
  </div>

  </div>
) : (
  <div className='welcome'>
<h2>Welcome!</h2>
      <p>Enter your height and weight and you'll see your BMI result here</p>
</div>
)} 


    </div>
  )
}

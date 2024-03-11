import React from "react";

export default function Result({ height, weight, bmi }) {
  const minWeight = () => {
    if (!height) {
      return;
    }

    return (
      18.5 * (parseFloat(height / 100) * parseFloat(height / 100)).toFixed(1)
    );
  };

  const maxWeight = () => {
    if (!height) {
      return;
    }

    return (
      24.9 * (parseFloat(height / 100) * parseFloat(height / 100)).toFixed(1)
    );
  };

  return (
    <div className="result-container ">
      {height && weight ? (
        <div className="bmi-result-box">
          <div className="bmi">
            <p>Your BMI is...</p>
            <h2>{bmi}</h2>
          </div>

          <div className="bmi-comment">
            {bmi >= 18.5 && bmi <= 24.9 ? (
              <p>
                Your BMI suggests you're a healthy weight. Your ideal weight is
                between {minWeight()}kgs - {maxWeight()}kgs.
              </p>
            ) : bmi < 18.5 ? (
              <p>
                Your BMI suggests that you might be underweight. Your ideal
                weight is between {minWeight()}kgs - {maxWeight()}kgs.
              </p>
            ) : bmi >= 25 && bmi <= 29.9 ? (
              <p>
                Your BMI suggests that you might be overweight. Your ideal
                weight is between {minWeight()}kgs - {maxWeight()}kgs.
              </p>
            ) : (
              <p>
                Your BMI suggests that you might be obese. Your ideal weight is
                between {minWeight()}kgs - {maxWeight()}kgs.
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="welcome">
          <h2>Welcome!</h2>
          <p>
            Enter your height and weight and you'll see your BMI result here
          </p>
        </div>
      )}
    </div>
  );
}

import React from "react";

export default function Result({
  heightMetric,
  weightMetric,
  feet,
  inches,
  isMetric,
  bmi,
  heightInInches,
}) {
  console.log(bmi);

  const helperCalcWeight = (bmiThreshold, heightInInches) => {
    const valueInPounds = (
      (bmiThreshold * heightInInches * heightInInches) /
      703
    ).toFixed(1);
    const inStones = Math.floor(valueInPounds / 14);
    const inPounds = (valueInPounds % 14).toFixed(1);
    return `${inStones}st ${inPounds}lbs`;
  };

  const minWeight = () => {
    if (isMetric) {
      if (!heightMetric) {
        return;
      } else {
        return `${
          18.5 *
          (
            parseFloat(heightMetric / 100) * parseFloat(heightMetric / 100)
          ).toFixed(1)
        }kgs`;
      }
    } else {
      if (!feet || !inches) {
        return null;
      } else {
        return helperCalcWeight(18.5, heightInInches);
      }
    }
  };

  const maxWeight = () => {
    if (isMetric) {
      if (!heightMetric) {
        return;
      } else {
        return `${
          24.9 *
          (
            parseFloat(heightMetric / 100) * parseFloat(heightMetric / 100)
          ).toFixed(1)
        }kgs`;
      }
    } else {
      if (!feet || !inches) {
        return null;
      } else {
        return helperCalcWeight(24.9, heightInInches);
      }
    }
  };

  return (
    <div className="result-container ">
      {(heightMetric && weightMetric) || (feet && inches) ? (
        <div className="bmi-result-box">
          <div className="bmi">
            <p>Your BMI is...</p>
            <h2>{bmi}</h2>
          </div>

          <div className="bmi-comment">
            {bmi >= 18.5 && bmi <= 24.9 ? (
              <p>
                Your BMI suggests you're a healthy weight. Your ideal weight is
                between {minWeight()} - {maxWeight()}.
              </p>
            ) : bmi < 18.5 ? (
              <p>
                Your BMI suggests that you might be underweight. Your ideal
                weight is between {minWeight()} - {maxWeight()}.
              </p>
            ) : bmi >= 25 && bmi <= 29.9 ? (
              <p>
                Your BMI suggests that you might be overweight. Your ideal
                weight is between {minWeight()} - {maxWeight()}.
              </p>
            ) : (
              <p>
                Your BMI suggests that you might be obese. Your ideal weight is
                between {minWeight()} - {maxWeight()}.
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

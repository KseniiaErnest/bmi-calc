import React, { useState } from "react";
import InputsMetric from "./InputsMetric";
import Result from "./Result";
import InputsImperial from "./InputsImperial";

export default function Calc({ darkMode }) {
  const [heightMetric, setHeightMetric] = useState("");
  const [weightMetric, setWeightMetric] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [stones, setStones] = useState("");
  const [pounds, setPounds] = useState("");
  const [isMetric, setIsMetric] = useState(true);

  const heightInInches = parseFloat(feet) * 12 + parseFloat(inches);

  const bmi = () => {
    if (isMetric) {
      if (!heightMetric || !weightMetric) {
        return null;
      }
      return (
        parseFloat(weightMetric) /
        ((parseFloat(heightMetric) / 100) * (parseFloat(heightMetric) / 100))
      ).toFixed(2);
    } else {
      if (!feet || !inches || !stones || !pounds) {
        return null;
      }
      const weightInPounds = parseFloat(stones) * 14 + parseFloat(pounds);
      return (
        (weightInPounds / (heightInInches * heightInInches)) *
        703
      ).toFixed(2);
    }
  };

  const handleToggleSystem = () => {
    setIsMetric(!isMetric);

    setHeightMetric("");
    setWeightMetric("");
    setFeet('');
    setInches('');
    setStones('');
    setPounds('');
  };

  return (
    <div
      className={darkMode ? `calc-container dark-mode-calc` : `calc-container`}
    >
      <h2>Enter your details below</h2>
      <div className="checkbox-container">
        <label>
          <input
            className="check"
            type="checkbox"
            checked={isMetric}
            onChange={handleToggleSystem}
          />
          Metric
        </label>

        <label>
          <input
            className="check"
            type="checkbox"
            checked={!isMetric}
            onChange={handleToggleSystem}
          />
          Imperial
        </label>
      </div>
      {isMetric ? (
        <InputsMetric
          heightMetric={heightMetric}
          onSetHeight={setHeightMetric}
          weightMetric={weightMetric}
          onSetWeight={setWeightMetric}
        />
      ) : (
        <InputsImperial
          feet={feet}
          setFeet={setFeet}
          inches={inches}
          setInches={setInches}
          stones={stones}
          setStones={setStones}
          pounds={pounds}
          setPounds={setPounds}
        />
      )}
      <Result
        heightMetric={heightMetric}
        weightMetric={weightMetric}
        feet={feet}
        inches={inches}
        isMetric={isMetric}
        bmi={bmi()}
        heightInInches={heightInInches}
      />
    </div>
  );
}

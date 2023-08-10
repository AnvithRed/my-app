import React, { useState } from "react";
import "./Options.css";
import { useNavigate } from 'react-router-dom';

const AgeOptions = (props) => {
  const [showSelect, setShowSelect] = useState(true);
  const navigate = useNavigate();

  const handleAgeChange = (event) => {
    const age = event.target.value;
    props.actionProvider.handleAgeInput(age);


    setShowSelect(false);

    setTimeout(() => {
      navigate(`/p3/${age}`);
    }, 5000);
  };

  return (
    <div className="options-container">
      {showSelect && (
        <select onChange={handleAgeChange} className="option-button">
          <option value="">Select Age</option>
          {(() => {
            const options = [];
            for (let age = 18; age <= 40; age++) {
              options.push(<option key={age} value={age}>{age}</option>);
            }
            return options;
          })()}
        </select>
      )}
    </div>
  );
};

export default AgeOptions;

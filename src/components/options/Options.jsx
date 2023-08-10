import React, { useState } from "react";
import "./Options.css";

const Options = (props) => {
  const [showButton, setShowButton] = useState(true);

  const handleGotitClick = () => {
    props.actionProvider.handleGotit();
    setShowButton(false);
  };

  return (
    <div className="options-container">
      {showButton && (
        <button onClick={handleGotitClick} className="option-button">
          Got it!
        </button>
      )}
    </div>
  );
};

export default Options;

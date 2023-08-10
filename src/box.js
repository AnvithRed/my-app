import React, { useState } from 'react';

const App = () => {
  const [showButton, setShowButton] = useState(true);

  const handleButtonClick = () => {
    setShowButton(false);
  };

  return (
    <div>
      <p>Do you like me?</p>
      {showButton && <button onClick={handleButtonClick}>YES</button>}
    </div>
  );
};

export default App;

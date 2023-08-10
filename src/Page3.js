
import React, { useEffect, useState } from 'react';
import { Container, BlueBox, FadingConfetti } from './styles';
import Navbar from './components/options/NavBar/Navbar';
import { useSelector } from "react-redux";

const Page3 = () => {
 
 
  
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);
  

  const [showConfetti, setShowConfetti] = useState(false);

  // Function to trigger the confetti effect
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 7000); // Confetti will fade out after 2 seconds
  };

  useEffect(() => {
    // Trigger the confetti effect when the component mounts
    triggerConfetti();
  }, []); // The empty dependency array ensures this effect runs only once

  return (<div style={{background:"#dde9fd"}}>
    <Navbar/>

    <Container>
      <BlueBox>
      <p>Your name {name} aged {age} has been added to student system. You may now exit.</p>
      </BlueBox>
      {showConfetti && <FadingConfetti fadeOutDuration={2000} />}
    </Container></div>
  );
};




export default Page3;

import styled from 'styled-components';
import Confetti from 'react-confetti';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BlueBox = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 30px;
  border-radius: 8px;
  width: 300px; /* Increase the width to make the box wider */

  /* Center the box on the screen */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Define the Confetti styled component
export const FadingConfetti = styled(Confetti)`
  /* Add a CSS transition to gradually fade out the confetti */
  opacity: 1;
  transition: opacity ${(props) => props.fadeOutDuration}ms ease-out;
  will-change: opacity;
  pointer-events: none;

  /* Set opacity to 0 to start the fade out process */
  &[fade-out='true'] {
    opacity: 0;
  }
`;


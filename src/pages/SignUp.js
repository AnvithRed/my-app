// SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; 
import Navbar from '../components/options/NavBar/Navbar';
import Empty from '../empty';


const SignUp = () => {
  return (
    <div  style={{backgroundColor:"#dde9fd"}}>
    <Navbar></Navbar>
      <div className="signup-container">
        
      <div className="signup-card">
        <h2>Enter into Student Info System</h2>
        <Link to="/Chat">
          <button>Enroll Now!</button>
        </Link>
      </div>
     
    </div>
    <Empty></Empty> 
    </div>
  );
};

export default SignUp;

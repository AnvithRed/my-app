// App.js
import React from 'react';
import Page3 from './Page3';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Chat from './chat';
import SignUp from './pages/SignUp';
import Box from './box';
import "./App.css"

const App = () => {
  
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/Chat" element={<Chat />} />
            <Route path="/p3/:value" element={<Page3 />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/1" element={<Box/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;


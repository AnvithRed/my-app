import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './chatbott/config';
import MessageParser from './chatbott/MessageParser';
import ActionProvider from './chatbott/ActionProvider';
import React from "react";
import Navbar from './components/options/NavBar/Navbar';
import './chat.css';
import "./App.css"



const Chat = () => {
  return (
      <div style={{background:"#dde9fd"}}>
        <Navbar />
        <div >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
  );
};

export default Chat;

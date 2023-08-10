import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import AgeOptions from "../components/options/AgeOptions";
import NameInput from "../NameInput";

import Options from "../components/options/Options";
const config = {
  botName: "",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system! `,
     {
        widget: "options",
    }),

  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "ageOptions",
      widgetFunc: (props) => <AgeOptions {...props} />,
    },
    {
        widgetName: "nameInput",
        widgetFunc: (props) => <NameInput {...props} />,
      },
  ],
};

export default config;

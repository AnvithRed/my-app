import { setAge } from "../redux/actions";
import store from "../redux/store";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.createClientMessage = createClientMessage;
    this.setState = setStateFunc;
  }

  handleGotit = () => {
    const userMessage = this.createClientMessage("Got it!");
    const botMessage = this.createChatBotMessage("Enter your Name", {
      widget: "nameInput",
    });

    this.addMessageToState(userMessage);
    this.addMessageToState(botMessage);
  };

  handleNameInput = () => {
    const botMessage = this.createChatBotMessage(`Enter your Age`, {
      widget: "ageOptions",
    });

    this.addMessageToState(botMessage);
  };

  handleAgeInput = (age) => {
    const userMessage = this.createClientMessage(`${age}`);
    this.addMessageToState(userMessage);

    const botMessage = this.createChatBotMessage(
      `Thank you. Bot will exit in 5 seconds.`
    );
    

    this.addMessageToState(botMessage);
    store.dispatch(setAge(age));
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;

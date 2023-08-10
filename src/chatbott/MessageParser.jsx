import { setName } from "../redux/actions";
import store from "../redux/store";

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();
    const alphabetRegex = /[a-z]/i; 

    if (alphabetRegex.test(lowercase)) {
      this.actionProvider.handleNameInput();
    }
    store.dispatch(setName(message));
  }};

export default MessageParser;

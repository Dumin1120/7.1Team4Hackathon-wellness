import axios from "axios";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    sentimentHandler = (number) => {
        if (number > 0) {
            const message1 = this.createChatBotMessage("Great to hear!");
            this.setChatBotMessage(message1);
        } else {
            const message2 = this.createChatBotMessage("You are not feeling well, here is one affirmation to help!", { widget: "affirmation" });
            this.setChatBotMessage(message2);
        }
    }

    adviceHandler = () => {
        axios.get("https://api.adviceslip.com/advice")
            .then(res => {
                const message = this.createChatBotMessage(res.data.slip.advice);
                this.setChatBotMessage(message);
            })
    }

    setChatBotMessage = (message) => {
        this.setState(state => ({ ...state, messages: [...state.messages, message] }));
    }
}

export default ActionProvider;

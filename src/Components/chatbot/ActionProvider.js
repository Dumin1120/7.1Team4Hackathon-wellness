import axios from "axios";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    nameHandler = (userName) => {
        const message = this.createChatBotMessage(`Hi ${userName}!`);
        this.setChatBotMessage(message);
        const message1 = this.createChatBotMessage(`Tell me how do you feel today..`, { delay: 1500 });
        this.setChatBotMessage(message1);
    }

    singleActivityHandler = () => {
        const message = this.createChatBotMessage(`Please select the activity you chose:`, { widget: "typeOfActivities" });
        this.setChatBotMessage(message);
    }

    sentimentHandler = (number) => {
        if (number > 0) {
            const message1 = this.createChatBotMessage("Great to hear!");
            this.setChatBotMessage(message1);
            const message2 = this.createChatBotMessage("Ok, I have some ideas of activities, but first choose the one you like.", { delay: 1200, widget: "typeOfActivities", scrollIntoView: true });
            this.setChatBotMessage(message2);
        } else {
            const message2 = this.createChatBotMessage("You are not feeling well, here is one affirmation to help!", { widget: "affirmation" });
            this.setChatBotMessage(message2);
            const message3 = this.createChatBotMessage("I hope it helped, do you wan to :", { widget: "negativeOptions" });
            this.setChatBotMessage(message3);
        }
    }

    adviceHandler = () => {
        const message = this.createChatBotMessage("Sorry to hear that, let's try with an advice");
        this.setChatBotMessage(message);
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

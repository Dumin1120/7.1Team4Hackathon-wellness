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
            const message3 = this.createChatBotMessage("Was it helpful.?", { widget: "activityOptions", delay: 3500 });
            this.setChatBotMessage(message3);
        } else {
            const message2 = this.createChatBotMessage("You are not feeling well, here is one affirmation to help!", { widget: "affirmation" });
            this.setChatBotMessage(message2);
            const message3 = this.createChatBotMessage("I hope it helped, what do you want to do next?", { delay: 2000, widget: "negativeOptions" });
            this.setChatBotMessage(message3);
        }
    }

    adviceHandler = () => {
        const message = this.createChatBotMessage("Sorry to hear that, let's try with an advice");
        this.setChatBotMessage(message);
        axios.get("https://api.adviceslip.com/advice")
            .then(res => {
                const message = this.createChatBotMessage(res.data.slip.advice, { delay: 1500 });
                this.setChatBotMessage(message);
            })
    }

    moreAdviceHandler = () => {
        const messagesArray = ["No problem, here to help...", "You got it, here's another one", "Sure thing.!!", "Are you kidding! Of Course here you go..."]
        const message = this.createChatBotMessage(messagesArray[Math.floor(Math.random() * messagesArray.length)]);
        this.setChatBotMessage(message);
        axios.get("https://api.adviceslip.com/advice")
            .then(res => {
                const message = this.createChatBotMessage(res.data.slip.advice, { delay: 2000, widget: "negativeOptions" });
                this.setChatBotMessage(message);
            })
    }

    findActivityHandler = () => {
        const messagesArray = ["Keep it moving...", "You are lucky, here are some...", "Activities for you...", "Roger That.!!"]
        const message = this.createChatBotMessage(messagesArray[Math.floor(Math.random() * messagesArray.length)], { delay: 1500, widget: "typeOfActivities", scrollIntoView: true });
        this.setChatBotMessage(message);
        const message1 = this.createChatBotMessage("How it was.?", { widget: "activityOptions", delay: 3500 });
        this.setChatBotMessage(message1);
    }

    missionAcHandler = () => {
        const message = this.createChatBotMessage("Congrats.!!", { widget: "celebration", delay: 500 })
        this.setChatBotMessage(message);
    }

    setChatBotMessage = (message) => {
        this.setState(state => ({ ...state, messages: [...state.messages, message] }));
    }
}

export default ActionProvider;

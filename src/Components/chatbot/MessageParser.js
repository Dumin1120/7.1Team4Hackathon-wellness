import Sentiment from "sentiment";

const sentiment = new Sentiment();

class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const { messages } = this.state;
        console.log(messages);
        const result = sentiment.analyze(message);

        if (messages.length === 2) {
            return this.actionProvider.nameHandler(message);
        }
        if (messages.length === 5) {

            return this.actionProvider.sentimentHandler(result.score);
        }


        const activitiesList = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
        if (activitiesList.includes(message.toLowerCase())) {
            return this.actionProvider.singleActivityHandler();
        }

        return result.score > 0 ? this.actionProvider.sentimentHandler(result.score) : this.actionProvider.adviceHandler();
    }
}

export default MessageParser;

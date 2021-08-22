import Sentiment from "sentiment";

const sentiment = new Sentiment();

class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const { messages } = this.state;
        if (messages.length === 1) {
            const result = sentiment.analyze(message);
            return this.actionProvider.sentimentHandler(result.score);
        }
        // if (messages.length === 3)
        return this.actionProvider.adviceHandler();
    }
}

export default MessageParser;

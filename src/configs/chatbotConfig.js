import { createChatBotMessage } from "react-chatbot-kit";
import BotAvator from "../Components/chatbot/BotAvatar";
import Affirmation from "../Components/chatbot/Affirmation"

const config = {
    initialMessages: [createChatBotMessage(`How are you today?`)],
    botName: "Health Tech",
    customComponents: {
        botAvatar: (props) => <BotAvator {...props} />
    },
    state: {
        affirmation: []
    },
    widgets: [
        {
            widgetName: "affirmation",
            widgetFunc: (props) => <Affirmation {...props} />,
            mapStateToProps: ["affirmation"]
        }
    ]
}

export default config;

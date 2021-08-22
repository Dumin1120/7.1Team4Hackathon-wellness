import { createChatBotMessage } from "react-chatbot-kit";
import BotAvator from "../Components/chatbot/BotAvatar";
import Affirmation from "../Components/chatbot/Affirmation"
import Activities from "../Components/Activities/Activities"
import SingleActivity from "../Components/Activities/SingleActivity"
import NegativeOptions from "../Components/Options/NegativeOptions/NegativeOptions"

const config = {
    initialMessages: [createChatBotMessage(`How are you today?`)],
    botName: "Health Tech",
    customComponents: {
        botAvatar: (props) => <BotAvator {...props} />
    },
    state: {
        affirmation: [],
        singleActivity: ""
    },
    widgets: [
        {
            widgetName: "affirmation",
            widgetFunc: (props) => <Affirmation {...props} />,
            mapStateToProps: ["affirmation"]
        },
        {
            widgetName: "typeOfActivities",
            widgetFunc: (props) => <Activities {...props} />,
            mapStateToProps: ["typeOfActivities"]
        },
        {
            widgetName: "singleActivity",
            widgetFunc: (props) => <SingleActivity {...props} />,
            props: {},
            mapStateToProps: ["singleActivity"]
        },
        {
            widgetName: "negativeOptions",
            widgetFunc: (props) => <NegativeOptions {...props} />,
            mapStateToProps: ["negativeOptions"]
        }
    ]
}

export default config;

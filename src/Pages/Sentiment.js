import React from "react";
import Chatbot, { createChatBotMessage } from "react-chatbot-kit";

import config from "../configs/chatbotConfig";
import MessageParser from "../Components/chatbot/MessageParser";
import ActionProvider from "../Components/chatbot/ActionProvider";

import "./Sentiment.css";

const Sentiment = () => {
    const newConfig = { ...config, initialMessages: [createChatBotMessage(`Welcome to Unlocking Your Mind, find creactive activities without effort!`), createChatBotMessage("What is your name?", { delay: 1500 })] };
    return (
        <div className="sentiment">
            <div className="chatbot">
                <Chatbot
                    config={newConfig}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </div>
        </div>
    );
};

export default Sentiment;

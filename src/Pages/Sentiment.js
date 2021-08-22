import React from "react";
import Chatbot, { createChatBotMessage } from "react-chatbot-kit";

import config from "../configs/chatbotConfig";
import MessageParser from "../Components/chatbot/MessageParser";
import ActionProvider from "../Components/chatbot/ActionProvider";

import "./Sentiment.css";

const Sentiment = ({ user }) => {
    const newConfig = { ...config, initialMessages: [createChatBotMessage(`Welcome to Unlocking Your Mind, make c`),] };
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

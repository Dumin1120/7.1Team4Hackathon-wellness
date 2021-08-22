import React from "react";
import Chatbot, { createChatBotMessage } from "react-chatbot-kit";

import config from "../configs/chatbotConfig";
import MessageParser from "../Components/chatbot/MessageParser";
import ActionProvider from "../Components/chatbot/ActionProvider";

import "./Sentiment.css";

const Sentiment = ({ user }) => {
    const newConfig = { ...config, initialMessages: [createChatBotMessage(`${user}, how are you today?`)] };
    return (
        <div className="sentiment">
            <div className="chatbot">
                <Chatbot
                    config={newConfig}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </div>
            <h3>How do you feel today “User”?</h3>
            <form>
                <input></input>
                <div className="sentiment2">
                    <button>Happy</button>
                    <button>Surprise</button>
                </div>
                <div className="sentiment2">
                    <button>Worried</button>
                    <button>Thoughtful</button>
                </div>
                <div className="sentiment2">
                    <button>amazed</button>
                    <button>sad</button>
                </div>
                <div className="sentiment2">
                    <button>Love</button>
                    <button>Angry</button>
                </div>
                <div className="sentiment2">
                    <button>Scared</button>
                    <button>Tired</button>
                </div>
                <div className="sentiment2">
                    <button>Bored</button>
                    <button>Crazy</button>
                </div>
                <div className="sentiment2">
                    <button>Relieved</button>
                    <button>Hungry</button>
                </div>
                <div className="sentiment2">
                    <button>Thirsty</button>
                    <button>Shy</button>
                </div>
                <button className="sentiment3">Continue</button>
            </form>
        </div>
    );
};

export default Sentiment;

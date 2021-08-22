import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
// import SearchIcon from '@material-ui/icons/Search';
import Chatbot, { createChatBotMessage, actionProvider, setChatBotMessage } from "react-chatbot-kit";


const NegativeOptions = (props) => {

    const showAnimation =() =>{
        props.actionProvider.missionAcHandler();
    }

    return (
        <div className="negOps">
            <Chip avatar={<SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>} label="I Found it!" onClick={()=>showAnimation()} />
            {/* <Chip avatar={<SearchIcon></SearchIcon>} label="Find Activity" onClick={()=>findActivity()} /> */}
        </div>
    );
};

export default NegativeOptions;
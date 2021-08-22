import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import "./NegativeOptions.css";


const NegativeOptions = (props) => {

    const getMoreAdvice =() =>{
        props.actionProvider.moreAdviceHandler();
    }

    const findActivity =() =>{
        props.actionProvider.findActivityHandler();
    }

    return (
        <div className="negOps">
            <Chip avatar={<AddIcon></AddIcon>} label="More Advice" onClick={()=>getMoreAdvice()} />
            <Chip avatar={<SearchIcon></SearchIcon>} label="Find Activity" onClick={()=>findActivity()} />
        </div>
    );
};

export default NegativeOptions;
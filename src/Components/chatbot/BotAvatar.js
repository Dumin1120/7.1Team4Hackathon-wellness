import React from 'react';
import "./BotAvatar.css";
import ChatAgent from './ChatAgent.svg'
import Avatar from '@material-ui/core/Avatar'


export default function BotAvatar() {
    return (
        <Avatar src={ChatAgent}/>
    )
}

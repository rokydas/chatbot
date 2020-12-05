import React from 'react';
import './BotMessage.css';
import bot from '../../images/bot.jpg';

const BotMessage = ({msg}) => {
    return (
        <div className="d-flex justify-content-right" style={{marginBottom: '20px'}}>
            <img className="bot-image" src={bot} alt=""/>
            <span className="bot-message">{msg}</span>
        </div>
    );
};

export default BotMessage;
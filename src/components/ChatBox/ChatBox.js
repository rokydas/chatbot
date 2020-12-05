import React from 'react';
import './ChatBox.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import RefreshIcon from '@material-ui/icons/Refresh';
import CloseIcon from '@material-ui/icons/Close';
import BotMessage from '../BotMessage/BotMessage';
import UserMessage from '../UserMessage/UserMessage';

const ChatBox = () => {

    // const message = ['Hi, how can I help you?']

    return (
        <div className="m-5">
            <div className="chat-box">
                <div className="d-flex justify-content-between">
                    <MoreHorizIcon className="heading-icon" />
                    <div>
                        <RefreshIcon className="heading-icon" style={{ marginRight: '20px' }} />
                        <CloseIcon className="heading-icon" />
                    </div>
                </div>
                <h4 className="text-center p-color">ChatBot</h4>
                <div className="border playground p-4">
                    <BotMessage msg={'Hi, how can I help you?'} />
                    <UserMessage msg={'Who are you?'} />
                    <BotMessage msg={'I am BOT.'} />
                    <UserMessage msg={"That's great."} />
                    <BotMessage msg={'Thank You'} />
                    <UserMessage msg={"What is Royal Bengal Tiger"} />
                    <BotMessage msg={'The Bengal tiger is a tiger from a specific population of the Panthera tigris tigris subspecies that is native to the Indian subcontinent.'} />
                </div>
                <div style={{ width: '340px' }}>
                    <input type="text" className="form-control" placeholder="Your message..." />
                </div>
            </div>

        </div>
    );
};

export default ChatBox;
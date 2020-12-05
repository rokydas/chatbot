import React from 'react';
import './UserMessage.css';
import user from '../../images/user.jpg';

const UserMessage = ({msg}) => {
    return (
        <div className="d-flex justify-content-right" style={{marginBottom: '20px'}}>
            <span className="user-message">{msg}</span>
            <img className="user-image" src={user} alt=""/>
        </div>
    );
};

export default UserMessage;
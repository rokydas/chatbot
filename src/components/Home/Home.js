import React from 'react';
import ChatBox from '../ChatBox/ChatBox';
import Training from '../Training/Training';

const Home = () => {
    return (
        <div style={{width: '90%', margin: '0 auto'}}>
            <div className="row">
                <div className="col-md-6">
                    <Training />
                </div>
                <div className="col-md-6">
                    <ChatBox />
                </div>
            </div>
        </div>
    );
};

export default Home;
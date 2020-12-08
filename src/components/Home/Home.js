import React from 'react';
import ChatBox from '../ChatBox/ChatBox';
import Training from '../Training/Training';

const Home = () => {
    return (
        <div className="border" style={{width: '70%', margin: '0 auto'}}>
            <div className="row">
                <div className="col-md-6 border">
                    <Training />
                </div>
                <div className="col-md-6 border">
                    <ChatBox />
                </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

const Training = () => {
    return (
        <div className="m-5 text-center">
            <h1 className="text-center m-5">Train your BOT</h1>
            <QuestionAnswer />
            <QuestionAnswer />
            <QuestionAnswer />
            <form>
                <input type="text" className="form-control" placeholder="New Question" required/><br />
                <input type="text" className="form-control" placeholder="New Answer" required/><br />
                <button className="btn btn-primary">Add Training</button>
            </form>

        </div>
    );
};

export default Training;
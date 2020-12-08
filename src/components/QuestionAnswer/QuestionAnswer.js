import React from 'react';
import { useHistory } from 'react-router-dom';
import './QuestionAnswer.css';

const QuestionAnswer = ({ qa }) => {

    const history = useHistory();

    const deleteQA = (id) => {
        fetch('http://localhost:5000/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            });
    }

    return (
        <div className="question-answer mb-4">
            <h4>Q: {qa.question}</h4>
            <h4>A: {qa.answer}</h4><br />
            <button className="btn btn-warning">Update</button> &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteQA(qa._id)} className="btn btn-danger">Delete</button><br /><br />
        </div>
    );
};

export default QuestionAnswer;
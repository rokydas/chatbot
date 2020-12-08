import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

const Training = () => {

    const history = useHistory();

    const email = localStorage.getItem('email');
    const [inputQA, setInputQA] = useState({email});

    const [questionAnswer, setQuestionAnswer] = useState([]);
    const selectedQuestionAnswer = questionAnswer.filter(qa => qa.email == email);

    const handleBlur = (e) => {
        const newQA = inputQA;
        newQA[e.target.name] = e.target.value;
        setInputQA(newQA);
    }

    useEffect(() => {
        fetch('http://localhost:5000/qa')
            .then(res => res.json())
            .then(data => setQuestionAnswer(data));
    }, [])

    const addTraining = (e) => {

        fetch('http://localhost:5000/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputQA)
        })
            .then(res => res.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            });
        // e.preventDefault();
    }

    return (
        <div className="m-5 text-center">
            <h1 className="text-center m-5">Train your BOT</h1>
            {
                selectedQuestionAnswer.map(qa => <QuestionAnswer qa={qa} key={qa._id} />)
            }
            <form>
                <input onBlur={handleBlur} name="question" type="text" className="form-control" placeholder="New Question" required /><br />
                <input onBlur={handleBlur} name="answer" type="text" className="form-control" placeholder="New Answer" required /><br />
                <button className="btn btn-primary" onClick={addTraining}>Add Training</button>
            </form>
        </div>
    );
};

export default Training;
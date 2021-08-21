import React, { useState } from 'react';
import getSentiment from "sentiment";

const Sentiment = ({ user }) => {
    const sentiment = new getSentiment();
    const [step, setStep] = useState(1);
    const [sentimentScore, setSentimentScore] = useState(0);
    const [inputs, setInputs] = useState({ firstInput: "", secondInput: "" });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInputs({ ...inputs, [id]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstInput, secondInput } = inputs;
        const result = sentiment.analyze(step === 1 ? firstInput : secondInput);
        console.log(result) //===========remove
        setSentimentScore(result.score);
        setStep(step + 1);
    }

    return (
        <div>
            <h1>{user}, how are you feeling today?</h1>
            {step >= 2 && sentimentScore > 0 &&
                <>
                    <h1>I see that you are feeling great!</h1>
                    <h2>Here are some activities you can do!</h2>
                </>
            }
            {step >= 2 && sentimentScore <= 0 &&
                <>
                    <h1>I see that you are not feeling well.</h1>
                    <h2>Here is a affirmation for you to boost!</h2>
                </>
            }
            <form onSubmit={handleSubmit}>
                <input type="text" id={step === 1 ? "firstInput" : "secondInput"} placeholder="enter your feeling" onChange={handleChange} value={step == 1 ? inputs.firstInput : inputs.secondInput} />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Sentiment;
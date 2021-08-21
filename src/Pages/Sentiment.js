import React from "react";

const Sentiment = () => {
  return (
    <div className="sentiment">
      <h3>How do you feel today “User”?</h3>
      <form>
        <input></input>
        <div className="sentiment2">
          <button>Happy</button>
          <button>Surprise</button>
        </div>
        <div className="sentiment2">
          <button>Worried</button>
          <button>Thoughtful</button>
        </div>
        <div className="sentiment2">
          <button>amazed</button>
          <button>sad</button>
        </div>
        <div className="sentiment2">
          <button>Love</button>
          <button>Angry</button>
        </div>
        <div className="sentiment2">
          <button>Scared</button>
          <button>Tired</button>
        </div>
        <div className="sentiment2">
          <button>Bored</button>
          <button>Crazy</button>
        </div>
        <div className="sentiment2">
          <button>Relieved</button>
          <button>Hungry</button>
        </div>
        <div className="sentiment2">
          <button>Thirsty</button>
          <button>Shy</button>
        </div>
        <button className="sentiment3">Continue</button>
      </form>
    </div>
  );
};

export default Sentiment;

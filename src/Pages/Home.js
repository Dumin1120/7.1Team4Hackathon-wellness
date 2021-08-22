import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import images from "../images/Brain-illustration.jpeg";

import images2 from "../images/Relajación-muscular-progresiva-Jacobson.png";

export default function Home({ storeName }) {
  const [userName, setUserName] = useState();
  const history = useHistory();

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    storeName(userName);
    history.push("/sentiment");
  };

  return (
    <div className="Home">
      <div className="change">
        <h1>Welcome</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" onChange={handleNameChange} />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
      <img src={images2} alt="new" />
      <p>Stop negative self-talk to reduce stress</p>
    </div>
  );
}

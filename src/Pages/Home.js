import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import images from "../images/Brain-illustration.jpeg"



export default function Home({storeName}) {
    const [userName, setUserName] = useState()
    const history = useHistory()

    const handleNameChange = (e) => {
        setUserName(e.target.value)
    }
    const handleSubmit = (e) =>{
        storeName(userName)
        history.push("/sentiment")
    }

    return (
        <div className="Home">
            <h1>Welcome</h1>
            <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" onChange={handleNameChange}/>
            <br></br>
            <button type="submit">Submit</button>
            </form>
            <img src={images} alt="new" />
            <h4>Stop negative self-talk to reduce stress</h4>
        </div>
    )
}

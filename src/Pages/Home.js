import React, {useState} from 'react'
import { useHistory } from "react-router-dom"


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
        <div>
            <h1>HOME</h1>
            <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" onChange={handleNameChange}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

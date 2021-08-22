import React, { useEffect } from 'react';
import axios from "axios";

import "./Affirmation.css";

export default function Affirmation(props) {
    const { setState } = props;

    useEffect(() => {
        axios.get("https://secure-ridge-26657.herokuapp.com/https://www.affirmations.dev/")
            .then(res => setState(state => ({ ...state, affirmation: res.data.affirmation + "!" })))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="msg-affirmation">
            {props.affirmation}
        </div>
    )
}

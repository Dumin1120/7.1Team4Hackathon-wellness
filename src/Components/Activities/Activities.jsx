import React,{ useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import axios from "axios"

import "./Activities.css";

const Activities = () => {

    const [ activities, setActivities] = useState("") 

    const activitiesList = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
    
    const handleType = async (activity)=>{
        console.log(activity)
        const activityToDo = await axios.get(`http://www.boredapi.com/api/activity?type=${activity}`)
        console.log(activityToDo)
        setActivities(activityToDo.data.activity);
    }

    return (
        <div className="activity">
        <section className="activitiesList">
            {activitiesList.map((activity,idx) =>{
                return (
                    <Tooltip title={`Click for more ${activity} ideas`}>
                        <Chip label={activity} key={idx} onClick={()=>handleType(activity)}/>
                    </Tooltip>
                )
            })}
        </section>
        
        <h5>{activities}</h5>
        </div>
       
    );
};

export default Activities;

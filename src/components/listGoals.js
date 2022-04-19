import React from "react";
import './listGoals.css'

function ListGoals(props){
    const goals = props.goals
    const listGoals = goals.map(goal =>
        {
            return <div className="list" key="goal.key">
                <p>{goal.text}</p>

            </div>
        })
    return(
       <div>{listGoals}</div>
    )
}

export default ListGoals;
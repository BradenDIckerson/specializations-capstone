import React from "react";
import "./listGoals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
 

function ListGoals(props) {
  const goals = props.goals;
  const listGoals = goals.map((goal) => {
    return (
      <div className="list" key={goal.key}>
        <p>
            <input type="text" 
            id={goal.key} 
            value ={goal.text}
            onChange ={
                (e) =>{
                    props.setUpdate(e.target.value, goal.key)
                }
            }
            />
        <span>
          <FontAwesomeIcon 
          className="faicons" 
          icon="trash" 
          onClick={ () => props.deleteGoal(goal.key)}/>
        </span>
        </p>
        
      </div>
    );
  });
  return <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listGoals}   
      </FlipMove>
      </div>;
}

export default ListGoals;

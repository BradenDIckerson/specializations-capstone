import React from "react";
// import './App.css'
import ListGoals from "./listGoals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './goals.css'


library.add(faTrash);

class Goal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: [],
      currentGoal: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addGoal = this.addGoal.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentGoal: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addGoal(e) {
    e.preventDefault();
    const newGoal = this.state.currentGoal;
    console.log(newGoal);
    if (newGoal.text !== "") {
      const newGoals = [...this.state.goals, newGoal];
      this.setState({
        goals: newGoals,
        currentGoal: {
          text: "",
          key: "",
        },
      });
    }
  }

  deleteGoal(key){
    const filteredGoals = this.state.goals.filter(goal => goal.key!==key);
    this.setState({
      goals:filteredGoals
    })
  }

  setUpdate(text, key){
    const goals = this.state.goals;
    goals.map(goal =>{
      if(goal.key===key){
        goal.text=text;
      }
    })
    this.setState({
      goals: goals
    })
  }

  render() {
    return (
      <div className="goals-container">
        <header>
          <form id="goals" onSubmit={this.addGoal}>
            <input
              type="text"
              placeholder="Enter Goal"
              value={this.state.currentGoal.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add Goal</button>
          </form>
        </header>
        <ListGoals goals={this.state.goals}
        deleteGoal ={this.deleteGoal}
        setUpdate ={this.setUpdate}
        ></ListGoals>

      </div>
    );
  }
}

export default Goal;

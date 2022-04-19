import React from "react";
// import './App.css'
import ListGoals from "./listGoals";



class Goal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: [],
      currentGoal: {
        text: "",
        key: "",
      }
   }
      this.handleInput = this.handleInput.bind(this);
      this.addGoal = this.addGoal.bind(this);
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
    if(newGoal.text!==""){
      const newGoals=[...this.state.goals, newGoal];
      this.setState({
        goals:newGoals,
        currentGoal:{
          text:'',
          key:''
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
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
      <ListGoals goals = {this.state.goals}></ListGoals>
      </div>
    );
  }
}

export default Goal;
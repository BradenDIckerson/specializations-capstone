const displayGoalsVar = document.querySelector("#display-goals");
const addGoalsVar = document.querySelector("#add-goals");
const editGoalsVar = document.querySelector("#edit-goals");

function createGoalDisplay(data) {
    data.map((item) => {
      const goal = document.createElement("h6");
      goal.textContent = item.goal;
      display.appendChild(goal);
    });
  } 





function displayGoals(display) {
  axios.get("http://localhost:4000/api/goals").then((res) => {
      console.log(res.data)
  })
}

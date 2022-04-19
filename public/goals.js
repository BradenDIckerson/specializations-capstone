
const message = document.querySelector("#message")

const addGoal = (event) => {
    event.preventDefault();
    const inputField = document.querySelector("#input")
    const goal = document.createElement('li');
    const goalTitle = document.createElement('span');
    goalTitle.textContent = inputField.value;
    goalTitle.addEventListener('click', crossOffGoal)

    goal.appendChild (goalTitle);
    const deleteBin = document.createElement('button');
    deleteBin.textContent = 'x';
    
    deleteBin.addEventListener('click', deleteGoal);
    goal.appendChild(deleteBin);
    
    document.querySelector('ul').appendChild(goal);
    inputField.value = "" ;
}; 

document.querySelector('form').addEventListener('submit', addGoal)

const deleteGoal = (event) => {
     event.target.parentNode.remove()
     message.textContent = "Goals don gone. It's been absolutely Yeeted out and good luck findin it again.";
}


const crossOffGoal = (event) => {
    event.target.classList.toggle('checked')

}
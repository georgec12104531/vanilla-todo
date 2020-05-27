// state  
let newTodoInput = '';

// elements
const input = document.querySelector('input.new-todo-input')
const listContainer = document.querySelector('.list-container')

// Events 

// Input change 
input.addEventListener('keyup', setTodoInput)

// Remove todo
listContainer.addEventListener('click', removeTodo)

// Remove todo
function removeTodo(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentNode.remove();
  }
}

// Handle input change, including pressing Enter
function setTodoInput(e) {
  if (e.key === 'Enter') {
    createNewTodo(e.target.value)
  } else {
    newTodoInput = e.target.value;
  }
}

function createNewTodo(input) {
  let row = document.createElement('div');
  row.className = 'row';

  let subRow = document.createElement('div');
  subRow.className = 'sub-row';

  let checkBox = document.createElement('input')
  checkBox.setAttribute("type", "checkbox");

  let todo = document.createElement('div');
  todo.textContent = input;

  subRow.appendChild(checkBox);
  subRow.appendChild(todo);

  let deleteButton = document.createElement('div');
  deleteButton.className = 'delete'
  deleteButton.textContent = 'X';

  row.appendChild(subRow);
  row.appendChild(deleteButton);

  listContainer.appendChild(row);
}

const todoList = [];

function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index){
   // const todoObject = todoList[index];
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}  

function addTodo(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  //console.log(name);
  todoList.push({
    name,
    dueDate
  });

  // document.querySelector('.js-show')
  //   .innerText = todoList;

  inputElement.value = '';
  renderTodoList();
}

function useKeydown(event){
  if(event.key === 'Enter'){
    addTodo();
  }
}
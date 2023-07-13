const todoList = [];

function addTodo(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  //console.log(name);
  todoList.push(name);
  console.log(todoList);

  // document.querySelector('.js-show')
  //   .innerText = todoList;

  inputElement.value = '';
}
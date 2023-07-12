
const x = document.querySelector('.js-btn').classList.contains('js-btn');

console.log(x);

function toggle(className){
  const elementBtn = document.querySelector(className);

  if(!elementBtn.classList.contains('toggled-btn')){
    elementBtn.classList.add('toggled-btn');
  } else{
    elementBtn.classList.remove('toggled-btn')
  }
}
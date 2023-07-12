
const x = document.querySelector('.js-btn').classList.contains('js-btn');

console.log(x);

function toggle(className){
  const elementBtn = document.querySelector(className);
  

  if(!elementBtn.classList.contains('toggled-btn')){
    removeOldToggle();
    elementBtn.classList.add('toggled-btn');
  } else{
    elementBtn.classList.remove('toggled-btn');
    
  }
  // if(elementBtn!==jaki){
  //   elementBtn.classList.remove('toggled-btn');
  // }
  // let jaki = localStorage.getItem(elementBtn);
}

function removeOldToggle(){
  const prevBtn = document.querySelector('.toggled-btn');
  if(prevBtn){
    prevBtn.classList.remove('toggled-btn');
  }
}
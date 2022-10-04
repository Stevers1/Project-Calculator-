
let selector= [];
let opSelector= "";
let displayNumber = document.querySelector('.display');
let nothing ="";
let addCount = 0;
let boolResult = false; //Check to display a new number by btns if it was from a result
let checkForEqual = false;  // check if Equal btn was used

const numbers = document.querySelectorAll('.btn');
const add = document.querySelector('.btn-add');
const sub = document.querySelector('.btn-sub');
const mult = document.querySelector('.btn-mult');
const divide = document.querySelector('.btn-divide');
const equal = document.querySelector('.btn-equal');

numbers.forEach((element, index) => {
  element.addEventListener('click', () => {
    if(displayNumber.innerText == 0){
      displayNumber.innerText = nothing
    }
    if(boolResult===true){
      displayNumber.innerText = nothing;
      boolResult=false;
    }
    displayNumber.innerText += index.toString();

  })
});

function operate(operator,arr){
  
  let result = 0;
  if(operator == "Add"){
    
    for(let i = 0; i<selector.length; i++){

      result = result+ selector[i]

    };

    displayNumber.innerText=result;
    
    console.log(selector);
    if(checkForEqual !==true){ //might lead to some bugs idk
      opSelector = operator
    }else {
      console.log('Se uso el Igual')
      opSelector = ""
    }
  }

  if(operator == "Sub"){
    console.log(selector[1]);

    result = selector[0]-selector[1]


    displayNumber.innerText=result;
    
    console.log(selector);
    if(checkForEqual !==true){ //might lead to some bugs idk
      opSelector = operator
    }else {
      console.log('Se uso el Igual')
      opSelector = ""
    }
  }

  if(operator == "Mult"){
    console.log(selector[1]);

    result = selector[0]*selector[1]


    displayNumber.innerText=result;
    
    console.log(selector);
    if(checkForEqual !==true){ //might lead to some bugs idk
      opSelector = operator
    }else {
      console.log('Se uso el Igual')
      opSelector = ""
    }
  }
  selector.shift()
  selector.shift()
  selector.push(result);
  boolResult = true;
}

add.addEventListener('click',() => {

  selector.push(Number(displayNumber.innerText));
  displayNumber.innerText = 0;
  opSelector="Add";
  addCount++;
  
  if(addCount == 2) {
    operate(opSelector,selector);
    addCount=1;
  }
})

equal.addEventListener('click', () => {
  addCount=0;
  if(typeof displayNumber.innerText != "number"){
    selector.push(Number(displayNumber.innerText));
  }else {
    selector.push(displayNumber.innerText)
  }
  checkForEqual = true;
  operate(opSelector,selector);
  opSelector="";
  selector =[];
  checkForEqual=false
})

sub.addEventListener('click', () =>{

  selector.push(Number(displayNumber.innerText));
  displayNumber.innerText = 0;
  opSelector="Sub";
  addCount++;
  
  if(addCount == 2) {
    operate(opSelector,selector);
    addCount=1;
  }
})

mult.addEventListener('click', () => {

  selector.push(Number(displayNumber.innerText));
  displayNumber.innerText = 0;
  opSelector="Mult";
  addCount++;
  
  if(addCount == 2) {
    operate(opSelector,selector);
    addCount=1;
  }

})
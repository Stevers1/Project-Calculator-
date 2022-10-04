
let selector= [];
let opSelector= "";
let displayNumber = document.querySelector('.display');
let nothing ="";
let addCount = 0;
let boolResult = false; //Check to display a new number by btns if it was from a result
let checkForEqual = false;

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
    if(checkForEqual !==true){
      opSelector = operator
      console.log('Se uso el Igual')
    }else {opSelector = ""}
    

  }
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

console.log(numbers);
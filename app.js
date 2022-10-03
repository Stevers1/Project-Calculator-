
let selector= 0;

let displayNumber = document.querySelector('.display')
console.log(displayNumber);
const numbers = document.querySelectorAll('.btn')

numbers.forEach((element, index) => {
  element.addEventListener('click', () => {
    displayNumber.innerText += index.toString();
    selector += index;
  })
});

console.log(numbers);
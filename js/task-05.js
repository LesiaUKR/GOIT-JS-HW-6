/*Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const inputEl = document.querySelector('#name-input'); //отримуємо нашу кнопку
const titleEl = document.querySelector('#name-output');//отримуємо наш заголовок
// console.log(inputEl);
// console.log(titleEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {

//   console.log(event.currentTarget.value);
    titleEl.textContent = event.currentTarget.value;
    if(inputEl.value === ""){
           return titleEl.textContent = "Anonymous";
        }
}

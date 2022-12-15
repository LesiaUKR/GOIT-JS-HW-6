/*Завдання 10 (виконувати не обов'язково)
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxEl = document.querySelector("#boxes")
console.log(divBoxEl);
const inputEl = document.querySelector("input");
console.dir(inputEl);
const amount = inputEl.value;
console.log(amount);
const createBtn = document.querySelector(".create");
console.log(createBtn);
const destroyBtn = document.querySelector(".destroy");
console.log(destroyBtn);

createBtn.addEventListener('click', createBoxes)

let markup = '';
let size = "10px";

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1){
    markup += `<div 
    class = "js-item"
    width = 30px + ${size}
    height = 30px + ${size}
    backgroundColor = getRandomHexColor()>
    ${i}</div>`
  }}

console.log(markup);
divBoxEl.insertAdjacentHTML("afterbegin", markup);

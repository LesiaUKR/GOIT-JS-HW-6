/*Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/


const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);
const valueEl = document.querySelector('#value')
console.log(valueEl);


// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');
let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
})

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
})

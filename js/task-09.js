/*Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const switchColorBtn = document.querySelector(".change-color");
console.log(switchColorBtn);
const body = document.getElementsByTagName('body')[0];
console.dir(body);
const colorCodeSpan = document.querySelector(".color");
console.log(colorCodeSpan);


switchColorBtn.addEventListener('click', () => {
  let color = getRandomHexColor()
  body.style.backgroundColor = color;
  colorCodeSpan.textContent = color;
  console.log(color);
})
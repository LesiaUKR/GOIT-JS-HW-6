/*HTML містить порожній список ul#ingredients.

<ul id="ingredients"></ul>

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <> за одну операцію у список ul#ingredients.
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/*Перший спосіб*/
// const markup = ingredients.map((item) => `<li class="item">${item}</li>`).join('')
// console.log(markup);

// const navEl = document.querySelector('ul#ingredients');
// console.dir(navEl);

// navEl.insertAdjacentHTML("afterbegin", markup);

/*Другий спосіб*/

const navEl = document.querySelector('ul#ingredients');
console.dir(navEl);

const markup = ingredients.map((item) => {
  let li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  console.log(li);
  return li;
})

navEl.append(...markup);
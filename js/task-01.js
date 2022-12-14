/*
Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/
// const countItems = document.getElementsByTagName("li.item li");
// console.log(countItems);

const navCategoriesElLquanity = document.querySelectorAll('li.item').length;
console.log('Number of categories:', navCategoriesElLquanity);

const navCategoriesEl = document.querySelectorAll('li.item ul');
// console.log('Number of categories:', navCategoriesEl);

navCategoriesEl.forEach(function (item) {
    console.log('Elements:', item.childElementCount);
})


// const navCategoriesChildren = navCategoriesEl.Children;
// console.log(navCategoriesChildren);

const categoriesTitle = document.querySelectorAll('h2');
// console.log(categoriesTitle);

categoriesTitle.forEach(function (item) {
    console.log('Category:', item.textContent);
})


// const animalsTitleEl = document.querySelector('h2').textContent;
// console.log('Category:', animalsTitleEl);

// const animalsLinksEl = document.querySelectorAll('li.item');
// console.log('Elements:', animalsLinksEl);

// const productsTitleEl = document.querySelector('h2').textContent;
// console.log('Category:', productsTitleEl);

// const productsLinksEl = document.querySelectorAll('.js-item__products').length;
// console.log('Elements:', productsLinksEl);

// const technologiesTitleEl = document.querySelector('h2').textContent;
// console.log('Category:', technologiesTitleEl);

// const technologiesLinksEl = document.querySelectorAll('.js-item__technologies').length;
// console.log('Elements:', technologiesLinksEl);
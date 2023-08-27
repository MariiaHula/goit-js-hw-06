// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsSelector = document.querySelector('#ingredients');
let ingredientsNodes = [];
ingredients.map(element => {
  const ingingredientItem = document.createElement('li');
  ingingredientItem.textContent = element;
  ingingredientItem.classList.add('item');
  ingredientsNodes.push(ingingredientItem);
});
ingredientsSelector.append(...ingredientsNodes);

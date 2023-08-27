// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.


const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', () => {
    
    if (textInput.dataset.length === textInput.value.length.toString()) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
});

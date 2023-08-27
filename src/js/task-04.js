// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValueSpan = document.querySelector('#value')
const counter = document.querySelector("#counter");
const addListenerBtn = document.querySelector('button[data-action="increment"]');
const removeListenerBtn = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
const handleClickIncrement = () => { 
    counterValue += 1;
    counterValueSpan.textContent = counterValue;
    }
const handleClickDecrement = () => { 
    counterValue -= 1;
    counterValueSpan.textContent = counterValue;
    }
addListenerBtn.addEventListener('click', handleClickIncrement);
removeListenerBtn.addEventListener('click', handleClickDecrement);





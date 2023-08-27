// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsBoxes = document.querySelector('#controls');
const controlsBoxesChildren = controlsBoxes.children;
const input = controlsBoxes.children[0];
const buttonCreate = controlsBoxes.children[1];
const buttonDestroy = controlsBoxes.children[2];
const divBoxElem = document.querySelector('#boxes');


const handleClickCreate = () => { 
   createBoxes(input.value);
    }
const handleClickDestroy = () => { 
  destroyBoxes();
}
    
buttonCreate.addEventListener('click', handleClickCreate);
buttonDestroy.addEventListener('click', handleClickDestroy);


function createBoxes(amount) {
  const boxesArr = [];
  const startSize = 30;
  for (let i = 0; i < amount; i++) {
    const size = startSize + i * 10 + 'px';
    const box = document.createElement('div'); 
    box.style.width = size; 
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
  } 
   divBoxElem.append(...boxesArr);
  }
  

function destroyBoxes() {
      divBoxElem.innerHTML = '';
  }

 




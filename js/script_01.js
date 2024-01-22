
let root = document.querySelector(':root');
let button = document.querySelector('#themeToggle');

console.log(button);


// меняем класс по клику на кнопке и текст в кнопке
button.addEventListener('click', (event) => {
   event.preventDefault();
   // root.classList.toggle('dark');
   // if (themeToggle.textContent === 'Перейти на темную схему') {
   //    themeToggle.textContent = 'Перейти на светлую схему';
   // } else {
   //    themeToggle.textContent = 'Перейти на темную схему';
   // }
   root.classList.toggle('dark');
   if (root.classList.contains('dark')) {
      button.textContent = "Перейти на светлую схему"
   }
   else {
      button.textContent = "Перейти на темную схему"
   }
})


console.log('rrururu');
// const canvas = document.getElementById('canvas');
// ссылка на контекст для рисования в канвасе
// const context = canvas.getContext('2d');

// зададим ширину и высоту канваса равной ширине и высоте window
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const FONT_SIZE = 26;
// context.font = `bold ${FONT_SIZE}px monospace`;

// let y = 0;

// function animate() {
//    context.fillStyle = 'black';
//    context.fillRect(0, 0, canvas.width, canvas.height);

//    context.fillStyle = 'green';
//    context.fillText('M', 100, y);
//    y += FONT_SIZE;

//    setTimeout(() => requestAnimationFrame(animate), 100);
// }

// animate();


let min = 0;
let max = 10;
let trg = Math.floor(min + Math.random()*(max + 1 - min));
console.log(trg);

const a = [[0, 1, 2, 3], [2, 3, 0, 1, 55], [3, 1, 2, 0]];
console.log(a);
const b = [];
for(i = 0; i < a.length; i++) {
   for(j = 0; j < a[i].length; j++) {
      b.push(a[i][j]);
   }
}
console.log(b);
// setInterval(animate, 50);
// let c = prompt("введите с")

// ======================================

let select = document.querySelector('#select-1');
let radio = document.querySelectorAll('input[name="r1"]');

select.onchange = function() {
   console.log(select.value);
   console.log(select.options[select.selectedIndex].innerHTML);
};

console.log(radio);
// =================================
// const timeA = setTimeout(function gt() {
//    console.log('прошлo ' + myCount() + ' секунд');
//    setTimeout(gt, 1000);
// }, 1000);


function count() {
   let cnt = 0;
   return function () {
      cnt += 1;
      return cnt;
   }
}

let myCount = count();
// ==================================

// function toInitials(name) {
//    const a = name.split(' ');

//    return a[0][0].toUpperCase() + '.' + a[1][0].toUpperCase() + '.';
// }

// console.log(toInitials('fill good'));
// ================================
arr = [1, 2, 3, 4, 5];
arrFin = [];
const multTwo = (x) => x * 2;

const a8 = arr.forEach(element => {
   let tmp = multTwo(element);
   arrFin.push(tmp);
   return tmp;
});

console.log(arrFin);
console.log(a8);

const a9 = arr.map((elem) => {
   return multTwo(elem);
});

console.log(a9);

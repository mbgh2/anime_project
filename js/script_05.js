let display = document.querySelectorAll('.inner-block');
let square = document.createElement('div');
square.classList.add('square')

let a = [
   [1, 2, 3, 4, 5],
   [6, 7, 8, 9, 10],
   [11, 12, 13, 14, 15]
]

function sum(...args) {
   let res = 0;
   for (let arg of args) {
      res += arg;
   }
   return res;
}

console.log(sum(1, 2, 3));
console.log(1, 1, 1, 1, 1);

let out = [];
let str = 'abdulla';
for (let arg of str) {
   out.push(arg);
}
console.log(out);
console.log(str[1]);
console.log(str.indexOf('l'));
console.log('===========');

let m = [3, 7, 21];

let p = [];
for (let i = 0; i < m.length; i++) {
   p[i] = m[i] * 2;
   console.log(p[i] + ' ');
}
console.log(p);

display[1].style.background = 'blue';
// display[2].style.background = 'red';



let count = 0;
let tt = setInterval(func1, 800);
// setTimeout(clearInterval(tt), 3000);

function func1() {
   if (display[1].style.background === 'blue') {
      display[1].style.background = 'red'
   } else display[1].style.background = 'blue';
   count++;
   if (count == 7) {
      clearInterval(tt);
   }
}
// =====================================
// const user = {
//    name: 'Pupkin',
//    age: 32,
//    profession: 'webdev',
//    salary: 10000
// }
// let keys = Object.keys(user);
// console.log(keys);
// let values = Object.values(user);
// console.log(values);
// let entries = Object.entries(user);
// console.log(entries);
// ======================================

// парный тег
// let inner = document.querySelectorAll('.inner');

// display[7].innerHTML += 'bay';
// display[7].children[0].innerHTML += ' *** bay';
// console.log(display[7].childNodes);
// ======================================
console.log('===========');

function isUnic(string) {
   console.log(string.length);
   for (let i = 0; i < string.length - 1; i++) {
      let char = string[i];
      for (let k = i + 1; k < string.length; k++) {
         if (char == string[k]) {

            return 'символы повторяются //false';
         }
      }
   }
   return 'все символы уникальны //true';
}
console.log(isUnic('abcrtyu'));
console.log(isUnic('abcrtya'));
// ======================================
console.log('===========');


// let t = 0;
// function f1(n) {
//    if(t > n) {
//       return 'end';
//    }
//    t++;

//    console.log('gva ' + t);
//    f1(n);
// }
// f1(10);
// ======================================
// let dout ='';
// let i = 0;
// function f3() {
//    dout += i + ' ';
//    i++;
//    if(i > 10) {
//       console.log(dout);
//       return;
//    }
//    f3();
// }
// f3();
// ======================================
// function randomInt(min, max) {
//    return Math.floor(min + Math.random()* (max - min + 1));
// }
// let cash = 0;
// let i = 0;
// function nabor() {
//    let dob = randomInt(0, 50);
//    console.log('добавили ' + dob);
//    cash += dob;
//    i++;
//    if(cash > 100) {
//       console.log(i + ' times');
//       return;
//    }
//    nabor();
// }
// nabor();

// console.log(Math.floor(Math.random()*10));
// ======================================
// inner[2].innerHTML = 'gghhh';

let position = 0;
// document.querySelector('.animation-block').addEventListener('click', function() {
//    position += 5;
//    this.style.left = position + 'px';
// });

// document.querySelector('.animation-block')
function recursionAnimation() {
   position++;
   if (position > 100) return;
   document.querySelector('.animation-block').style.left = position + 'px';
   setTimeout(recursionAnimation, 50);
}
recursionAnimation();

// ======================================
// let vf4 = 0;
// function f4(n) {
//    if(vf4 <= n) {
//       console.log('--' + vf4);
//       vf4++;
//       f4(n);
//    }
//    return;
// }
// f4(12);
// ==================рекурсия====================

var sum = addTo(10);

function addTo(n) {
   if (n == 0)
      return 0;


   return n + addTo(n - 1);
}
console.log('# ' + sum);

// Значение n остается неизменным во время выполнения каждого рекурсивного вызова. при каждом рекурсивном вызове создается новая область видимости и новая локальная переменная n, которая получает значение n - 1.
// ==============================================

let inputOne = document.querySelector('.input-one');
inputOne.value = 'ghghghghg';


inputOne.insertAdjacentHTML('afterbegin', '<div>gh</div>');



let link = document.querySelector('link');
console.log(link.href);

let divRed = document.querySelector('.container-05 .inner .square');
divRed.style.width = '200px';
divRed.insertAdjacentHTML('beforebegin', 'vg');

// =============input=============

document.querySelector('.radio-btn').onclick = function () {
   console.log(document.querySelector('.iinp[checked="checked"]').value);
}

// ==============select==============

document.querySelector('#mySelect').oninput = function () {
   let sel = document.querySelector('#mySelect');
   let options = document.querySelectorAll('#mySelect option');
   console.log(sel);
   console.log(sel.selectedIndex);

   for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
         console.log(options[i]);
         console.log(options[i].value);

      }
   }
}

// =========== События мыши ==========

let blockOne = document.querySelector('.inner .click-one');
blockOne.onclick = function (event) {
   blockOne.style.background = 'green';
   // event.stopPropagation();
   console.log(event);
   // event.preventDefault();
   return false;

};
blockOne.ondblclick = function (event) {
   blockOne.style.background = 'blueviolet';

   // event.stopPropagation();

   event.preventDefault();
   return false;
};


let blockThree = document.querySelector('.click-three');

function hideOut() {
   let i = 0;
   function hide() {
      i++;
      return i;
   }
   return hide;
}
let hhh = hideOut();

blockThree.oncontextmenu = function () {
   let r = hhh();
   console.log('time' + r);
   return false;
}
blockThree.onmousewheel = function () {
   let r = hhh();
   console.log('wheel' + r);
   return false;
}



function hid() {
   let int = document.querySelectorAll('.inner-block');
   console.log(int);
   int.forEach(function(elem) {
      elem.style.display = 'none';
   });
};

document.querySelectorAll('h3')[1].onclick = hid;
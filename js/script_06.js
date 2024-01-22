// с использованием атрибута data
let tabsContent = document.querySelectorAll('.tab-content');
let tabs = document.querySelectorAll('.tab');
hideAtr(0);
tabs.forEach(function (elem) {
   let atr = elem.getAttribute('data');
   elem.onclick = function () {
      hideAtr(atr - 1);
   };
})

function hideAtr(leave) {
   tabsContent.forEach(function (elem) {
      elem.style.display = 'none';
   })
   tabsContent[leave].style.display = 'block';
}
// ========================================
// с использованием index
// hide(0);
// let tabs = document.querySelectorAll('.tab');
// tabs.forEach(function (element, index) {
//    element.onclick = function() {
//       hide(index);
//    }
// })
// function hide(leave) {
//    let tabsContent = document.querySelectorAll('.tab-content');
//    tabsContent.forEach(function (elem) {
//       elem.style.display = 'none';
//    });
//    tabsContent[leave].style.display = 'block';
// }
// ==================================
// красивый код. Вопросы на собеседовании #5 webDev
// const arr =[1,2,3,4,5];
// const plusTwo = x => x + 2;
// let newArr3 = [];
// // result of forEach
// const newArr1 = arr.forEach(elem => {
//    newArr3.push(plusTwo(elem));
// });
// // result of Map()
// const newArr2 = arr.map(elem => {
//    return plusTwo(elem);
// });

// console.log(newArr1);
// console.log(newArr2);
// console.log(newArr3);
// ================MakeWeb.me=================
// бинарный поиск

// const origArr = [3, 9, 14, 25, 31, 64, 83, 109, 354, 579];
// let search = -5;
// function binarySearch(arr, elem) {
//    let left = -1;
//    let right = arr.length;

//    while (right - left > 1) {
//       let mid = Math.floor((left + right)/2);
//       console.log('left ' + left + '; right ' + right + '; mid ' + mid);
//       if(elem === arr[mid]) {
//          console.log('найден элемент ' + elem);
//          return mid;
//       }
//       if(elem > arr[mid]) {
//          left = mid;
//       } else {
//          right = mid;
//       }
//    }
//    console.log('элемент ' + elem + ' не найден');
//    return -1;
// }
// console.log('index ' + binarySearch(origArr, search));

// ================ChatGPT====================

// function binarySearch(arr, target) {
//    let left = 0;
//    let right = arr.length - 1;

//    while (right - left >= 0) {
//      const mid = Math.floor((left + right) / 2);

//      if (arr[mid] === target) {
//        return mid; // Найден элемент, возвращаем его индекс
//      } else if (arr[mid] < target) {
//        left = mid + 1; // Искомый элемент справа от середины
//      } else {
//        right = mid  - 1; // Искомый элемент слева от середины
//      }
//    }

//    return -1; // Элемент не найден
//  }

//  // Пример использования
//  const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
//  const targetElement = 0;

//  const resultIndex = binarySearch(sortedArray, targetElement);
//  if (resultIndex !== -1) {
//    console.log(`Элемент ${targetElement} найден по индексу ${resultIndex}.`);
//  } else {
//    console.log(`Элемент ${targetElement} не найден.`);
//  }

// ====================Mine======================

// const sortedArray = [2, 9, 18, 32, 56, 72, 91];
// let targetElement = 56;

// function searchElem(arr, target) {
//    let left = 0;
//    let right = arr.length - 1;
//    while(left <= right) {
//       let mid = Math.floor((left + right)/2);
//       if(target == arr[mid]) {
//          return mid;
//       } else if(target < arr[mid]) {
//          right = mid - 1;
//       } else {
//          left = mid + 1;
//       }
//    }
//    return -1;
// }

// let res = searchElem(sortedArray, targetElement);
// if(res == -1) {
//    console.log('элемент ' + targetElement + ' не найден');
// } else console.log('найден элемент ' + targetElement + ' с индексом ' + res);

// ===============сортировка выбором================
// const sortedArray = [23, 7, 91, 56, 18, 7, 3, 74, 39];

// function choiceSort(arr) {
//    let tmp;
//    for(let i = 0; i < arr.length - 1; i++) {
//       let min = i;

//       console.log('i= ' + i + ' arr[i]= ' + arr[i]);

//       for(let k = i + 1; k < arr.length; k++) {
//          if(arr[k] < arr[min]) {
//             min = k;
//          }
//       }

//       console.log(arr[min] + ' min= ' + min);
//       // console.log(('меняем ' + arr[i] + ' местами с ' + arr[min]));
//       if(arr[i] > arr[min]) {
//          tmp = arr[i];
//          arr[i] = arr[min];
//          arr[min] = tmp;
  
//       }

//       console.log(arr);
//    }

// }
// choiceSort(sortedArray);

// sortedArray[0] = null;
// console.log(sortedArray);
// =====================================

// console.log( 0 && 20 );
// console.log( 0 || 20);

// // function declaration
// function add(a, b) {
//    return a + b;
// }
// // function expression
// let adexp = function(a, b) {
//    return a + b;
// }
// ===================================
// написать функцию-генератрор массива с заданными параметрами

function arrGenerator(quantity, min, max) {
   let arr = [];
   for(let i = 0; i < quantity; i++) {
      arr.push(min + Math.floor(Math.random()*(max + 1 - min)));
   }
   return arr;
}
console.log(arrGenerator(4,0,1));

// ================ Modal Window =================
let btnShow = document.querySelectorAll('.modal-show');
let btnClose = document.querySelectorAll('.modal-close');
let modalWrap = document.querySelectorAll('.modal-wrap');

btnShow.forEach( (elem, index) => {
   // console.log(elem, index);
   elem.onclick = () => {
      modalWrap[index].classList.remove('hide');
   };
});

btnClose.forEach(function (elem, index) {
   // console.log(elem, index);
   elem.onclick = function () {
      modalWrap[index].classList.add('hide');
   };
});
 // =================================

function degree(num, dgr) {
   let res = 1;
   for(i = 0; i < dgr; i++) {
      res = res * num;
   }
   return res;
}
console.log(degree(2, 16));
// ==================================
console.log(nu);

var nu = 10;




















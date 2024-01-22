function chips(message) {
   let chips = document.createElement('div');
   chips.classList.add('chips');
   chips.innerHTML = message;
   addChips(chips);
   // body.appendChild(chips);
   // setTimeout(function() {
   //    deleteChips(chips);

   // }, 3000);
   chips.onclick = function () {
      deleteChips(chips);

   }
   // console.log(body.querySelectorAll('.chipsField .chips'));
   // console.log(body);
}

function addChips(ch) {
   let chipsField = document.querySelector('.chipsField');
   // let body = document.querySelector('body');

   if (!chipsField) {
      chipsField = document.createElement('div');
      chipsField.classList.add('chipsField');
      console.log('no, создаем и добавляем');
      document.querySelector('body').appendChild(chipsField);
      // chipsField.appendChild(ch);
   }
   // else {
   //    chipsField.appendChild(ch);
   //    console.log('yes, просто добавляем');
   // }
   chipsField.appendChild(ch);

}

function deleteChips(ch) {
   ch.remove();
   count--;
   let allChips = document.querySelectorAll('.chipsField .chips');
   console.log(allChips);
   if(allChips.length == 0) {
      document.querySelector('.chipsField').remove();
   }
}



let count = 1;
document.querySelector('.push').onclick = function () {
   chips('Element of list ' + count);
   count++;
};
// ===========================
document.querySelector('.rect').onclick = function () {
   console.log('there was a click');
};
document.querySelector('body').onclick = function () {
   console.log('there was a click');
   console.log(document.querySelector('.rect').childNodes);
};





















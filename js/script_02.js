console.log(111);
let btn1 = document.querySelector('.btn1');
let wind = swal;
btn1.onclick = function(el) {
   wind({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      content: "input",
      buttons: ["Aww yiss!", "Fyiss!"],

    });
    console.log(this);
    console.log(el);
    console.log(wind.icon);
};
// ===================================




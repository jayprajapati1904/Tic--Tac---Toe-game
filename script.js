let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let massage = document.querySelector(".msg-con");
let msg = document.querySelector(".msg");

let turn0 = true; // player x and player 0) {

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turn0 = true;
  anablebox();
  massage.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was click");
    if (turn0) {
      box.innerText = "o";
      turn0 = false;
    } else {
      box.innerText = "x";
      turn0 = true;
    }
    box.disabled = true;
    winner();
  });
});

const disabeldboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const anablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (val1) => {
  msg.innerText = `the winnner is ${val1}`;
  massage.classList.remove("hide");
  disabeldboxes();
};
const winner = () => {
  for (let pattern of winpattern) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if ((val1 != "") & (val2 != "") & (val3 != "")) {
      if ((val1 === val2) & (val2 === val3)) {
        console.log("winner", val1);
        showwinner(val1);
      }
    }
  }
};

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);

const displayMessage = function (massege) {
  const massegeCatch = document.querySelector(".massege");
  massegeCatch.textContent = massege;
};
const colorChange = function (getColor) {
  const color = document.querySelector("body");
  color.style.backgroundColor = getColor;
};
const showRendom = function (getShow) {
  let hidden = document.querySelector(".show");
  hidden.textContent = getShow;
};
let getScoure = function (s1) {
  const get = document.querySelector(".scoure_count");
  get.textContent = s1;
};
let rendomn = Math.trunc(Math.random() * 20) + 1;
console.log(rendomn);
let scoure = 5;
let heigh = 0;
let geter = document.querySelector(".cheakb");
geter.addEventListener("click", function () {
  const guss = Number(document.querySelector(".inputv").value);
  if (!guss) {
    displayMessage("You did not enter any number");
  } else if (guss === rendomn) {
    displayMessage("You won the game");
    showRendom(guss);
    colorChange("green");
    if (scoure > heigh) {
      heigh = scoure;
      document.querySelector(".high").textContent = heigh;
    }
  } else if (guss !== rendomn) {
    if (scoure > 1) {
      displayMessage(
        guss < rendomn
          ? "You are so smaller than hidden number "
          : "You are so higher than hidden number "
      );
      scoure--;
      getScoure(scoure);
    } else {
      displayMessage("You lose the game ");
      getScoure(0);
    }
  }
});

let againPlay = document.querySelector(".butween_again");
againPlay.addEventListener("click", function () {
  scoure = 5;
  rendomn = Math.trunc(Math.random() * 20) + 1;
  console.log(rendomn);
  document.querySelector(".inputv").value = "";
  displayMessage("Play Again !");
  colorChange("black");
  showRendom("?");
  getScoure(scoure);
});

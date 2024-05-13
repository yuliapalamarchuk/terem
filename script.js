const btn1 = document.querySelector("#btn1");
const fullWidthBlock = document.querySelector(".full-width-block");

btn1.addEventListener("click", () => {
  if (fullWidthBlock.style.display === "block") {
    fullWidthBlock.style.display = "none";
  } else {
    fullWidthBlock.style.display = "block";
  }
});

const blocks = document.querySelectorAll(".three-equal-blocks > div");
const btn2 = document.querySelector("#btn2");
let isMoved = false;

btn2.addEventListener("click", () => {
  if (!isMoved) {
    blocks[0].parentElement.insertBefore(blocks[1], blocks[0]);
  } else {
    blocks[0].parentElement.insertBefore(blocks[1], blocks[2]);
  }

  isMoved = !isMoved;
});

const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];

window.onload = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};
